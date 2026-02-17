import { createClient } from '@supabase/supabase-js'
import { auth } from '@clerk/nextjs/server'

/**
 * Creates a Supabase client for SERVER COMPONENTS and API ROUTES only.
 * Uses Clerk's native Third-Party Auth (TPA) integration — the 2025 approach.
 * No JWT template needed, no shared secret, no manual Bearer header.
 * Supabase receives the Clerk session token via the accessToken() callback.
 */
export function createSupabaseServerClient() {
    return createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
        {
            async accessToken() {
                return (await auth()).getToken()
            },
        }
    )
}

/**
 * Creates a Supabase admin client that bypasses RLS entirely.
 * Use ONLY in webhook handlers and server-side admin operations.
 * Never expose this to the browser.
 */
export function createSupabaseAdminClient() {
    return createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.SUPABASE_SECRET_KEY!
    )
}