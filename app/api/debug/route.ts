import { auth } from '@clerk/nextjs/server'
import { createSupabaseServerClient } from '@/lib/supabase/client'
import { NextResponse } from 'next/server'

export async function GET() {
    const { userId } = await auth()

    if (!userId) {
        return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
    }

    const supabase = createSupabaseServerClient()

    // Test 1: raw query with full error
    const { data: user, error: userError } = await supabase
        .from('users')
        .select('*')
        .eq('clerk_user_id', userId)
        .maybeSingle()

    // Test 2: count all users (no filter)
    const { data: allUsers, error: allError } = await supabase
        .from('users')
        .select('*')

    return NextResponse.json({
        clerkUserId: userId,
        userRecord: user,
        userError: userError,
        allUsers: allUsers,
        allUsersError: allError,
    })
}