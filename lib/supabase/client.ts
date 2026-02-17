'use client'

import { createClient } from '@supabase/supabase-js'
import { useSession } from '@clerk/nextjs'
import { useMemo } from 'react'

/**
 * Hook: Creates a Supabase client for CLIENT COMPONENTS.
 * Must be used inside a 'use client' component or custom hook — not at module level.
 * Passes the Clerk session token on every request so RLS authenticated
 * policies are satisfied. The accessToken callback is lazy — Supabase calls
 * it right before each request, so token rotation is handled automatically.
 */
export function useSupabaseClient() {
    const { session } = useSession()

    return useMemo(() => createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
        {
            async accessToken() {
                return session?.getToken() ?? null
            },
        }
    ), [session])
}