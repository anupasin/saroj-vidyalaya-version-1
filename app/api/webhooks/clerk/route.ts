import { Webhook } from 'svix'
import { headers } from 'next/headers'
import { WebhookEvent } from '@clerk/nextjs/server'
import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseSecretKey = process.env.SUPABASE_SECRET_KEY!
const resend = new Resend(process.env.RESEND_API_KEY!)
const ADMIN_EMAIL = 'birupia@gmail.com'

export async function POST(req: Request) {
    // Get the Svix headers for verification
    const headerPayload = await headers()
    const svix_id = headerPayload.get('svix-id')
    const svix_timestamp = headerPayload.get('svix-timestamp')
    const svix_signature = headerPayload.get('svix-signature')

    if (!svix_id || !svix_timestamp || !svix_signature) {
        return new Response('Error: Missing svix headers', { status: 400 })
    }

    const payload = await req.json()
    const body = JSON.stringify(payload)

    const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET || '')

    let evt: WebhookEvent

    try {
        evt = wh.verify(body, {
            'svix-id': svix_id,
            'svix-timestamp': svix_timestamp,
            'svix-signature': svix_signature,
        }) as WebhookEvent
    } catch (err) {
        console.error('Error verifying webhook:', err)
        return new Response('Error: Verification failed', { status: 400 })
    }

    const supabase = createClient(supabaseUrl, supabaseSecretKey)
    const eventType = evt.type

    if (eventType === 'user.created') {
        const { id, email_addresses, first_name, last_name, image_url } = evt.data

        const email = email_addresses[0]?.email_address
        const name = `${first_name || ''} ${last_name || ''}`.trim() || null
        const joinedAt = new Date().toLocaleString('en-IN', {
            timeZone: 'Asia/Kolkata',
            dateStyle: 'full',
            timeStyle: 'short',
        })

        // 1. Insert user into Supabase
        const { error } = await supabase.from('users').insert({
            clerk_user_id: id,
            email,
            name,
            avatar_url: image_url,
        })

        if (error) {
            console.error('Error creating user in Supabase:', error)
            return new Response('Error: Failed to create user', { status: 500 })
        }

        // 2. Send admin notification email via Resend
        try {
            await resend.emails.send({
                from: 'Saroj Vidyalaya <onboarding@resend.dev>',
                to: ADMIN_EMAIL,
                subject: `🪷 New learner joined — ${name || email}`,
                html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New User Registration</title>
</head>
<body style="margin:0;padding:0;background:#FAF6F0;font-family:Georgia,serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#FAF6F0;padding:40px 0;">
    <tr>
      <td align="center">
        <table width="560" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;border:1px solid rgba(201,168,76,0.3);overflow:hidden;box-shadow:0 4px 24px rgba(139,105,20,0.08);">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#8B6914 0%,#C9A84C 50%,#8B6914 100%);padding:32px 40px;text-align:center;">
              <div style="font-size:32px;margin-bottom:8px;">🪷</div>
              <h1 style="margin:0;color:#ffffff;font-size:22px;font-weight:400;letter-spacing:0.08em;font-family:Georgia,serif;">
                Saroj Vidyalaya
              </h1>
              <p style="margin:6px 0 0;color:rgba(255,255,255,0.75);font-size:12px;letter-spacing:0.2em;text-transform:uppercase;font-family:Arial,sans-serif;">
                New Learner Joined
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:36px 40px;">
              <p style="margin:0 0 24px;color:#5C4A1E;font-size:16px;line-height:1.7;font-style:italic;">
                A new learner has stepped into the garden.
              </p>

              <!-- User details card -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background:#FAF6F0;border-radius:8px;border:1px solid rgba(201,168,76,0.25);margin-bottom:28px;">
                <tr>
                  <td style="padding:24px 28px;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding:8px 0;border-bottom:1px solid rgba(201,168,76,0.15);">
                          <span style="color:#9B8030;font-size:11px;text-transform:uppercase;letter-spacing:0.15em;font-family:Arial,sans-serif;">Name</span><br/>
                          <span style="color:#2C1A00;font-size:16px;font-weight:600;">${name || '—'}</span>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:8px 0;border-bottom:1px solid rgba(201,168,76,0.15);">
                          <span style="color:#9B8030;font-size:11px;text-transform:uppercase;letter-spacing:0.15em;font-family:Arial,sans-serif;">Email</span><br/>
                          <span style="color:#2C1A00;font-size:15px;">${email || '—'}</span>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:8px 0;">
                          <span style="color:#9B8030;font-size:11px;text-transform:uppercase;letter-spacing:0.15em;font-family:Arial,sans-serif;">Joined</span><br/>
                          <span style="color:#2C1A00;font-size:14px;">${joinedAt} IST</span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- CTA -->
              <table cellpadding="0" cellspacing="0" style="margin:0 auto;">
                <tr>
                  <td style="background:linear-gradient(135deg,#8B6914,#C9A84C);border-radius:6px;padding:1px;">
                    <a href="https://sarojvidyalaya.com/admin"
                      style="display:block;background:#ffffff;border-radius:5px;padding:12px 28px;color:#8B6914;font-family:Arial,sans-serif;font-size:13px;font-weight:600;text-decoration:none;letter-spacing:0.08em;text-transform:uppercase;">
                      View in Admin Panel →
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:20px 40px;border-top:1px solid rgba(201,168,76,0.2);text-align:center;">
              <p style="margin:0;color:#B8A070;font-size:12px;font-style:italic;font-family:Georgia,serif;">
                In memory of Saroj Singh — every new learner is a petal of her belief, still unfolding.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
                `.trim(),
            })
        } catch (emailErr) {
            // Email failure should not break the webhook — log and continue
            console.error('Failed to send admin notification email:', emailErr)
        }
    }

    if (eventType === 'user.updated') {
        const { id, email_addresses, first_name, last_name, image_url } = evt.data

        const { error } = await supabase
            .from('users')
            .update({
                email: email_addresses[0]?.email_address,
                name: `${first_name || ''} ${last_name || ''}`.trim() || null,
                avatar_url: image_url,
                updated_at: new Date().toISOString(),
            })
            .eq('clerk_user_id', id)

        if (error) {
            console.error('Error updating user in Supabase:', error)
            return new Response('Error: Failed to update user', { status: 500 })
        }
    }

    if (eventType === 'user.deleted') {
        const { id } = evt.data

        const { error } = await supabase
            .from('users')
            .delete()
            .eq('clerk_user_id', id)

        if (error) {
            console.error('Error deleting user from Supabase:', error)
            return new Response('Error: Failed to delete user', { status: 500 })
        }
    }

    return new Response('Webhook processed successfully', { status: 200 })
}