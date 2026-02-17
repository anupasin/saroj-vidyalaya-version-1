import { auth } from '@clerk/nextjs/server';
import { createSupabaseServerClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import {
    Users,
    BookOpen,
    Heart,
    MessageSquare,
    ShieldCheck,
    ArrowLeft,
    TrendingUp,
} from 'lucide-react';

export default async function AdminPage() {
    const { userId } = await auth();

    if (!userId) {
        redirect('/');
    }

    const supabase = createSupabaseServerClient();

    // Fetch current user and check role
    const { data: currentUser } = await supabase
        .from('users')
        .select('*')
        .eq('clerk_user_id', userId)
        .maybeSingle();

    // Guard: non-admins go back to dashboard
    if (!currentUser || currentUser.role !== 'admin') {
        redirect('/dashboard');
    }

    // --- Aggregate stats ---
    const { count: totalUsers } = await supabase
        .from('users')
        .select('*', { count: 'exact', head: true });

    const { count: totalProgress } = await supabase
        .from('user_progress')
        .select('*', { count: 'exact', head: true });

    const { count: completedLessons } = await supabase
        .from('user_progress')
        .select('*', { count: 'exact', head: true })
        .eq('completed', true);

    const { count: totalLikes } = await supabase
        .from('likes')
        .select('*', { count: 'exact', head: true });

    const { count: totalComments } = await supabase
        .from('comments')
        .select('*', { count: 'exact', head: true });

    // Recent users (last 10)
    const { data: recentUsers } = await supabase
        .from('users')
        .select('id, name, email, role, created_at, avatar_url')
        .order('created_at', { ascending: false })
        .limit(10);

    const completionRate =
        totalProgress && totalProgress > 0
            ? Math.round(((completedLessons ?? 0) / totalProgress) * 100)
            : 0;

    return (
        <div className="min-h-screen bg-brand-beige pt-24 pb-16 px-4">
            <div className="max-w-5xl mx-auto">

                {/* Header */}
                <div className="mb-8 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-brand-gold/20 flex items-center justify-center">
                            <ShieldCheck size={20} className="text-brand-gold" />
                        </div>
                        <div>
                            <p className="text-xs text-brand-gold font-semibold uppercase tracking-widest">
                                Admin Panel
                            </p>
                            <h1 className="font-nunito font-bold text-2xl text-foreground">
                                Saroj Vidyalaya
                            </h1>
                        </div>
                    </div>
                    <Link
                        href="/dashboard"
                        className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <ArrowLeft size={14} />
                        Back to Dashboard
                    </Link>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                    <StatCard
                        icon={<Users size={18} className="text-brand-gold" />}
                        label="Total Learners"
                        value={totalUsers ?? 0}
                    />
                    <StatCard
                        icon={<BookOpen size={18} className="text-brand-gold" />}
                        label="Lessons Visited"
                        value={totalProgress ?? 0}
                    />
                    <StatCard
                        icon={<TrendingUp size={18} className="text-brand-gold" />}
                        label="Completion Rate"
                        value={`${completionRate}%`}
                    />
                    <StatCard
                        icon={<Heart size={18} className="text-brand-gold" />}
                        label="Lessons Loved"
                        value={totalLikes ?? 0}
                    />
                </div>

                {/* Comments stat — full width soft callout */}
                {(totalComments ?? 0) > 0 && (
                    <div className="flex items-center gap-3 bg-white border border-brand-gold/20 rounded-2xl px-5 py-4 mb-8">
                        <MessageSquare size={18} className="text-brand-gold shrink-0" />
                        <p className="text-sm text-foreground">
                            <span className="font-nunito font-bold">{totalComments}</span>
                            {' '}comments have been written across all lessons.
                        </p>
                    </div>
                )}

                {/* Recent Users Table */}
                <section className="bg-white rounded-2xl shadow-sm border border-brand-gold/20 p-6">
                    <div className="flex items-center gap-2 mb-5">
                        <Users size={18} className="text-brand-gold" />
                        <h2 className="font-nunito font-bold text-lg text-foreground">
                            Recent Learners
                        </h2>
                    </div>

                    {recentUsers && recentUsers.length > 0 ? (
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="border-b border-brand-gold/10">
                                        <th className="text-left py-2 px-3 text-xs text-muted-foreground uppercase tracking-wide font-semibold">
                                            Name
                                        </th>
                                        <th className="text-left py-2 px-3 text-xs text-muted-foreground uppercase tracking-wide font-semibold hidden sm:table-cell">
                                            Email
                                        </th>
                                        <th className="text-left py-2 px-3 text-xs text-muted-foreground uppercase tracking-wide font-semibold hidden md:table-cell">
                                            Joined
                                        </th>
                                        <th className="text-left py-2 px-3 text-xs text-muted-foreground uppercase tracking-wide font-semibold">
                                            Role
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-brand-gold/10">
                                    {recentUsers.map((u) => (
                                        <tr key={u.id} className="hover:bg-brand-beige/40 transition-colors">
                                            <td className="py-3 px-3">
                                                <span className="font-nunito font-semibold text-foreground">
                                                    {u.name ?? '—'}
                                                </span>
                                            </td>
                                            <td className="py-3 px-3 text-muted-foreground hidden sm:table-cell">
                                                {u.email ?? '—'}
                                            </td>
                                            <td className="py-3 px-3 text-muted-foreground hidden md:table-cell">
                                                {u.created_at
                                                    ? new Date(u.created_at).toLocaleDateString('en-IN', {
                                                        day: 'numeric',
                                                        month: 'short',
                                                        year: 'numeric',
                                                    })
                                                    : '—'}
                                            </td>
                                            <td className="py-3 px-3">
                                                <span
                                                    className={`text-xs font-semibold px-2 py-0.5 rounded-full ${u.role === 'admin'
                                                        ? 'bg-brand-gold/20 text-brand-gold'
                                                        : 'bg-gray-100 text-gray-500'
                                                        }`}
                                                >
                                                    {u.role ?? 'student'}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <p className="text-sm text-muted-foreground text-center py-6">
                            No learners yet.
                        </p>
                    )}
                </section>

            </div>
        </div>
    );
}

// Small reusable stat card
function StatCard({
    icon,
    label,
    value,
}: {
    icon: React.ReactNode;
    label: string;
    value: number | string;
}) {
    return (
        <div className="bg-white rounded-2xl border border-brand-gold/20 shadow-sm p-5 flex flex-col gap-2">
            <div className="flex items-center gap-2">
                {icon}
                <p className="text-xs text-muted-foreground uppercase tracking-wide font-semibold">
                    {label}
                </p>
            </div>
            <p className="font-nunito font-bold text-2xl text-foreground">{value}</p>
        </div>
    );
}