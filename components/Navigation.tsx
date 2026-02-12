'use client';

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-brand-beige border-b border-brand-gold/20 py-4 px-6 fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <div className="h-10 w-10 flex items-center justify-center">
            <Image
              src="/lotus.png"
              alt="Lotus Logo"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
          <h1 className="text-xl md:text-2xl font-nunito font-bold text-brand-gold">
            Saroj Vidyalaya
          </h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-brand-gold transition-colors">
            Home
          </Link>
          <Link href="/courses" className="text-gray-700 dark:text-gray-300 hover:text-brand-gold transition-colors">
            Courses
          </Link>
          <Link href="/topics" className="text-gray-700 dark:text-gray-300 hover:text-brand-gold transition-colors">
            Topics
          </Link>

          {/* Auth buttons - Desktop */}
          <SignedOut>
            <SignInButton mode="modal">
              {/* Added cursor-pointer */}
              <button className="text-gray-700 dark:text-gray-300 hover:text-brand-gold transition-colors cursor-pointer">
                Sign In
              </button>
            </SignInButton>
            <SignUpButton mode="modal">
              {/* Added cursor-pointer to the UI Button */}
              <Button className="bg-brand-gold hover:bg-brand-gold/90 text-white cursor-pointer">
                Sign Up
              </Button>
            </SignUpButton>
          </SignedOut>

          <SignedIn>
            <Link href="/dashboard" className="text-gray-700 dark:text-gray-300 hover:text-brand-gold transition-colors">
              Dashboard
            </Link>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10 cursor-pointer" // Ensures the profile pic also shows the hand
                }
              }}
            />
          </SignedIn>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-brand-beige dark:bg-gray-900 shadow-lg p-4 border-t border-brand-gold/20 z-50">
          <div className="flex flex-col space-y-4">
            <Link
              href="/"
              className="text-gray-700 dark:text-gray-300 py-2 px-4 hover:bg-brand-gold/10 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/courses"
              className="text-gray-700 dark:text-gray-300 py-2 px-4 hover:bg-brand-gold/10 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Courses
            </Link>
            <Link
              href="/topics"
              className="text-gray-700 dark:text-gray-300 py-2 px-4 hover:bg-brand-gold/10 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Topics
            </Link>

            {/* Auth buttons - Mobile */}
            <SignedOut>
              <SignInButton mode="modal">
                <button
                  className="text-gray-700 dark:text-gray-300 py-2 px-4 hover:bg-brand-gold/10 rounded text-left cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign In
                </button>
              </SignInButton>
              <SignUpButton mode="modal">
                <Button
                  className="bg-brand-gold hover:bg-brand-gold/90 text-white w-full cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign Up
                </Button>
              </SignUpButton>
            </SignedOut>

            <SignedIn>
              <Link
                href="/dashboard"
                className="text-gray-700 dark:text-gray-300 py-2 px-4 hover:bg-brand-gold/10 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                Dashboard
              </Link>
              <div className="py-2 px-4">
                <UserButton
                  appearance={{
                    elements: {
                      avatarBox: "w-10 h-10 cursor-pointer"
                    }
                  }}
                />
              </div>
            </SignedIn>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;