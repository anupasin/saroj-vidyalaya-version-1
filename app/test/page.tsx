import { auth } from '@clerk/nextjs/server';
import { createSupabaseServerClient } from '@/lib/supabase/client';
import { redirect } from 'next/navigation';

export default async function TestPage() {
    const { userId } = await auth();

    if (!userId) {
        redirect('/');
    }

    const supabase = await createSupabaseServerClient();

    // Try to fetch the current user from Supabase
    const { data: user, error: userError } = await supabase
        .from('users')
        .select('*')
        .eq('clerk_user_id', userId)
        .single();

    // Try to count total users
    const { count, error: countError } = await supabase
        .from('users')
        .select('*', { count: 'exact', head: true });

    return (
        <div className="min-h-screen bg-brand-beige p-8">
            <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
                <h1 className="text-3xl font-nunito font-bold text-brand-gold mb-6">
                    🧪 Integration Test
                </h1>

                {/* Clerk Auth Test */}
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded">
                    <h2 className="font-bold text-green-800 mb-2">✅ Clerk Authentication</h2>
                    <p className="text-sm text-gray-700">User ID: {userId}</p>
                </div>

                {/* Supabase User Test */}
                <div className={`mb-6 p-4 border rounded ${userError
                    ? 'bg-red-50 border-red-200'
                    : 'bg-green-50 border-green-200'
                    }`}>
                    <h2 className={`font-bold mb-2 ${userError ? 'text-red-800' : 'text-green-800'
                        }`}>
                        {userError ? '❌' : '✅'} Supabase User Record
                    </h2>
                    {userError ? (
                        <div>
                            <p className="text-sm text-red-700 mb-2">Error: {userError.message}</p>
                            <p className="text-xs text-gray-600">
                                This likely means the webhook hasn't fired yet. Try signing out and signing back in.
                            </p>
                        </div>
                    ) : (
                        <pre className="text-xs bg-white p-2 rounded overflow-auto">
                            {JSON.stringify(user, null, 2)}
                        </pre>
                    )}
                </div>

                {/* Database Connection Test */}
                <div className={`mb-6 p-4 border rounded ${countError
                    ? 'bg-red-50 border-red-200'
                    : 'bg-green-50 border-green-200'
                    }`}>
                    <h2 className={`font-bold mb-2 ${countError ? 'text-red-800' : 'text-green-800'
                        }`}>
                        {countError ? '❌' : '✅'} Database Connection
                    </h2>
                    {countError ? (
                        <p className="text-sm text-red-700">Error: {countError.message}</p>
                    ) : (
                        <p className="text-sm text-gray-700">Total users in database: {count}</p>
                    )}
                </div>

                {/* Instructions */}
                <div className="p-4 bg-blue-50 border border-blue-200 rounded">
                    <h2 className="font-bold text-blue-800 mb-2">📝 Next Steps</h2>
                    <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                        <li>If you see errors, check the console for details</li>
                        <li>If user record is missing, sign out and sign back in to trigger webhook</li>
                        <li>Once all checks pass, we'll build the dashboard</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}