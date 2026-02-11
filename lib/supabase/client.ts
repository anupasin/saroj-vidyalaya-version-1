import { createClient } from '@supabase/supabase-js'
import { auth } from '@clerk/nextjs/server'

/**
 * Creates a Supabase client with Clerk authentication
 * This is for SERVER COMPONENTS only
 */
export async function createSupabaseServerClient() {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!

    // Get the Clerk session token
    const { getToken } = await auth()
    const token = await getToken({ template: 'supabase' })

    // Create Supabase client with Clerk token
    const supabase = createClient(supabaseUrl, supabaseKey, {
        global: {
            headers: {
                Authorization: token ? `Bearer ${token}` : '',
            },
        },
    })

    return supabase
}

/**
 * Creates a Supabase client for CLIENT COMPONENTS
 * Use this in 'use client' components
 */
export function createSupabaseClient() {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!

    return createClient(supabaseUrl, supabaseKey)
}