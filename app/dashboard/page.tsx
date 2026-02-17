import { auth } from '@clerk/nextjs/server';
import { createSupabaseServerClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { BookOpen, Heart, User, Calendar, Sparkles, ShieldCheck } from 'lucide-react';

export default async function DashboardPage() {
    const { userId } = await auth();

    if (!userId) {
        redirect('/');
    }

    const supabase = createSupabaseServerClient();

    // Fetch user profile
    const { data: user } = await supabase
        .from('users')
        .select('*')
        .eq('clerk_user_id', userId)
        .maybeSingle();

    // Fetch progress records
    const { data: progress } = await supabase
        .from('user_progress')
        .select('*')
        .eq('user_id', user?.id ?? '')
        .order('last_visited', { ascending: false });

    // Fetch liked lessons
    const { data: likes } = await supabase
        .from('likes')
        .select('*')
        .eq('user_id', user?.id ?? '')
        .order('created_at', { ascending: false });

    const firstName = user?.name?.split(' ')[0] ?? 'Explorer';
    const isAdmin = user?.role === 'admin';

    const memberSince = user?.created_at
        ? new Date(user.created_at).toLocaleDateString('en-IN', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        })
        : null;

    return (
        <div className="min-h-screen bg-brand-beige pt-24 pb-16 px-4">
            <div className="max-w-4xl mx-auto">

                {/* Welcome Header */}
                <div className="mb-10 flex flex-col sm:flex-row items-center sm:items-start gap-6">
                    {user?.avatar_url ? (
                        <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-brand-gold/40 shadow-lg shrink-0">
                            <Image
                                src={user.avatar_url}
                                alt={user.name ?? 'Your avatar'}
                                fill
                                className="object-cover"
                            />
                        </div>
                    ) : (
                        <div className="w-20 h-20 rounded-full bg-brand-gold/20 border-4 border-brand-gold/40 flex items-center justify-center shrink-0">
                            <User size={32} className="text-brand-gold" />
                        </div>
                    )}

                    <div className="text-center sm:text-left">
                        <p className="text-brand-gold font-nunito text-sm font-semibold tracking-wide uppercase mb-1">
                            Welcome back
                        </p>
                        <div className="flex items-center gap-2 justify-center sm:justify-start">
                            <h1 className="text-3xl sm:text-4xl font-nunito font-bold text-foreground">
                                {firstName} 🌸
                            </h1>
                            {/* Admin badge — only visible to admins */}
                            {isAdmin && (
                                <span className="flex items-center gap-1 text-xs font-semibold bg-brand-gold/20 text-brand-gold px-2.5 py-1 rounded-full border border-brand-gold/30">
                                    <ShieldCheck size={12} />
                                    Admin
                                </span>
                            )}
                        </div>
                        <p className="text-muted-foreground mt-1 text-sm font-sans">
                            Every lesson is a small bloom. Keep exploring.
                        </p>
                    </div>
                </div>

                {/* Admin Panel Link — only for admins */}
                {isAdmin && (
                    <Link
                        href="/admin"
                        className="flex items-center justify-between bg-brand-gold/10 hover:bg-brand-gold/20 border border-brand-gold/30 rounded-2xl px-6 py-4 mb-6 transition-colors group"
                    >
                        <div className="flex items-center gap-3">
                            <ShieldCheck size={20} className="text-brand-gold" />
                            <div>
                                <p className="font-nunito font-bold text-foreground text-sm">
                                    Admin Panel
                                </p>
                                <p className="text-xs text-muted-foreground">
                                    View learner stats, recent users, and site activity
                                </p>
                            </div>
                        </div>
                        <span className="text-brand-gold text-lg group-hover:translate-x-0.5 transition-transform">
                            →
                        </span>
                    </Link>
                )}

                {/* Profile Card */}
                <section className="bg-white rounded-2xl shadow-sm border border-brand-gold/20 p-6 mb-6">
                    <div className="flex items-center gap-2 mb-4">
                        <User size={18} className="text-brand-gold" />
                        <h2 className="font-nunito font-bold text-lg text-foreground">Your Profile</h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Name</p>
                            <p className="font-nunito font-semibold text-foreground">
                                {user?.name ?? '—'}
                            </p>
                        </div>
                        <div>
                            <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Email</p>
                            <p className="font-nunito font-semibold text-foreground">
                                {user?.email ?? '—'}
                            </p>
                        </div>
                        {memberSince && (
                            <div className="flex items-center gap-2 sm:col-span-2">
                                <Calendar size={14} className="text-muted-foreground" />
                                <p className="text-sm text-muted-foreground">
                                    Member since {memberSince}
                                </p>
                            </div>
                        )}
                    </div>
                </section>

                {/* Progress Section */}
                <section className="bg-white rounded-2xl shadow-sm border border-brand-gold/20 p-6 mb-6">
                    <div className="flex items-center gap-2 mb-4">
                        <BookOpen size={18} className="text-brand-gold" />
                        <h2 className="font-nunito font-bold text-lg text-foreground">Your Learning Journey</h2>
                    </div>

                    {progress && progress.length > 0 ? (
                        <ul className="divide-y divide-brand-gold/10">
                            {progress.map((item) => (
                                <li key={item.id} className="py-3 flex items-center justify-between">
                                    <div>
                                        <p className="font-nunito font-semibold text-foreground text-sm">
                                            {item.lesson_id}
                                        </p>
                                        <p className="text-xs text-muted-foreground mt-0.5">
                                            Last visited{' '}
                                            {new Date(item.last_visited).toLocaleDateString('en-IN', {
                                                day: 'numeric',
                                                month: 'short',
                                                year: 'numeric',
                                            })}
                                        </p>
                                    </div>
                                    {item.completed && (
                                        <span className="text-xs bg-green-100 text-green-700 font-semibold px-2 py-0.5 rounded-full">
                                            Completed
                                        </span>
                                    )}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <div className="text-center py-8">
                            <Sparkles size={32} className="text-brand-gold/40 mx-auto mb-3" />
                            <p className="font-nunito font-semibold text-foreground mb-1">
                                Your journey hasn't begun yet
                            </p>
                            <p className="text-sm text-muted-foreground mb-4">
                                Each course you visit will appear here as a small treasure found.
                            </p>
                            <Link
                                href="/courses"
                                className="inline-block bg-brand-gold hover:bg-brand-gold/90 text-white font-nunito font-semibold text-sm px-5 py-2 rounded-full transition-colors"
                            >
                                Explore Courses
                            </Link>
                        </div>
                    )}
                </section>

                {/* Liked Lessons Section */}
                <section className="bg-white rounded-2xl shadow-sm border border-brand-gold/20 p-6">
                    <div className="flex items-center gap-2 mb-4">
                        <Heart size={18} className="text-brand-gold" />
                        <h2 className="font-nunito font-bold text-lg text-foreground">Lessons You've Loved</h2>
                    </div>

                    {likes && likes.length > 0 ? (
                        <ul className="divide-y divide-brand-gold/10">
                            {likes.map((like) => (
                                <li key={like.id} className="py-3">
                                    <p className="font-nunito font-semibold text-foreground text-sm">
                                        {like.lesson_id}
                                    </p>
                                    <p className="text-xs text-muted-foreground mt-0.5">
                                        Liked on{' '}
                                        {new Date(like.created_at).toLocaleDateString('en-IN', {
                                            day: 'numeric',
                                            month: 'short',
                                            year: 'numeric',
                                        })}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <div className="text-center py-8">
                            <Heart size={32} className="text-brand-gold/40 mx-auto mb-3" />
                            <p className="font-nunito font-semibold text-foreground mb-1">
                                Nothing saved yet
                            </p>
                            <p className="text-sm text-muted-foreground mb-4">
                                When a lesson moves you, heart it — it'll live here for you to return to.
                            </p>
                            <Link
                                href="/topics"
                                className="inline-block bg-brand-gold hover:bg-brand-gold/90 text-white font-nunito font-semibold text-sm px-5 py-2 rounded-full transition-colors"
                            >
                                Explore Topics
                            </Link>
                        </div>
                    )}
                </section>

            </div>
        </div>
    );
}