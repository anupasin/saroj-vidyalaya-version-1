'use client';

import { SignInButton, SignUpButton } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

interface AuthGateProps {
    lessonTitle: string;
}

export function AuthGate({ lessonTitle }: AuthGateProps) {
    return (
        <div className="fixed inset-0 z-50 bg-brand-beige/70 backdrop-blur-md flex items-center justify-center p-4">
            <div className="max-w-md w-full mx-auto p-8 bg-white rounded-lg shadow-xl border-2 border-brand-gold/30">
                {/* Lotus icon */}
                <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-brand-gold/10 rounded-full flex items-center justify-center p-3">
                        <Image
                            src="/lotus.png"
                            alt="Lotus"
                            width={48}
                            height={48}
                            className="object-contain"
                        />
                    </div>
                </div>

                {/* Title */}
                <div className="text-center mb-6">
                    <h2 className="text-2xl md:text-3xl font-nunito font-bold text-brand-gold mb-3">
                        Continue Your Learning Journey
                    </h2>
                    <p className="text-gray-700 text-sm md:text-base">
                        Sign in to unlock{' '}
                        <span className="font-semibold text-brand-gold">
                            {lessonTitle}
                        </span>{' '}
                        and explore joyful, accessible learning.
                    </p>
                </div>

                {/* Auth buttons */}
                <div className="space-y-3">
                    <SignUpButton mode="modal">
                        <Button className="w-full bg-brand-gold hover:bg-brand-gold/90 text-white h-12 text-base">
                            Create Free Account
                        </Button>
                    </SignUpButton>

                    <SignInButton mode="modal">
                        <Button
                            variant="outline"
                            className="w-full h-12 text-base border-brand-gold/30 hover:bg-brand-gold/5"
                        >
                            Already have an account? Sign In
                        </Button>
                    </SignInButton>
                </div>

                {/* Tribute footer */}
                <p className="text-xs text-gray-500 text-center mt-6 italic">
                    In loving memory of Saroj Singh
                </p>
            </div>
        </div>
    );
}