'use client';

import { useEffect, useRef, useState } from 'react';

const quotes = [
    {
        // India — Rabindranath Tagore
        text: "The highest education is that which does not merely give us information but makes our life in harmony with all existence.",
        author: "Rabindranath Tagore",
        role: "Poet & Nobel Laureate · India",
        direction: "left",
        accent: "#C9A84C",
        svg: (
            <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                {/* Lotus — fitting for Tagore and for Saroj */}
                <path d="M60 95 C60 95 25 72 25 48 C25 32 41 22 60 22 C79 22 95 32 95 48 C95 72 60 95 60 95Z" stroke="#C9A84C" strokeWidth="1.5" fill="none" opacity="0.35" />
                <path d="M60 88 C60 88 38 68 38 50 C38 39 48 31 60 31 C72 31 82 39 82 50 C82 68 60 88 60 88Z" stroke="#C9A84C" strokeWidth="1" fill="none" opacity="0.55" />
                <path d="M60 80 C60 80 48 64 48 52 C48 44 53 38 60 38 C67 38 72 44 72 52 C72 64 60 80 60 80Z" stroke="#C9A84C" strokeWidth="1.5" fill="none" opacity="0.7" />
                <ellipse cx="60" cy="100" rx="22" ry="5" stroke="#C9A84C" strokeWidth="0.8" opacity="0.25" />
                <circle cx="60" cy="52" r="5" fill="#C9A84C" opacity="0.6" />
                <path d="M60 88 L60 100" stroke="#C9A84C" strokeWidth="1.5" opacity="0.35" />
            </svg>
        ),
    },
    {
        // China — Confucius
        text: "Learning without thought is labor lost; thought without learning is perilous.",
        author: "Confucius",
        role: "Philosopher · China",
        direction: "right",
        accent: "#8B6914",
        svg: (
            <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                {/* Enso-inspired circle with broken gap — Zen brush stroke */}
                <path d="M60 18 C85 18 102 36 102 60 C102 84 84 102 60 102 C36 102 18 84 18 60 C18 42 28 27 44 20" stroke="#8B6914" strokeWidth="2.5" fill="none" opacity="0.55" strokeLinecap="round" />
                <circle cx="60" cy="60" r="12" stroke="#8B6914" strokeWidth="1.2" fill="none" opacity="0.45" />
                <circle cx="60" cy="60" r="4" fill="#8B6914" opacity="0.65" />
                {/* Yin yang divider hint */}
                <path d="M60 48 C66 48 72 54 72 60 C72 66 66 72 60 72" stroke="#8B6914" strokeWidth="1" fill="none" opacity="0.3" />
                <path d="M60 48 C54 48 48 54 48 60 C48 66 54 72 60 72" stroke="#8B6914" strokeWidth="1" fill="none" opacity="0.3" />
            </svg>
        ),
    },
    {
        // Africa — Ubuntu philosophy (Zulu / Nguni proverb)
        text: "A child who is not embraced by the village will burn it down to feel its warmth.",
        author: "African Proverb",
        role: "Ubuntu Wisdom · West Africa",
        direction: "left",
        accent: "#C9A84C",
        svg: (
            <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                {/* Concentric rings — community, togetherness */}
                <circle cx="60" cy="60" r="48" stroke="#C9A84C" strokeWidth="1" opacity="0.2" />
                <circle cx="60" cy="60" r="36" stroke="#C9A84C" strokeWidth="1.2" opacity="0.35" />
                <circle cx="60" cy="60" r="22" stroke="#C9A84C" strokeWidth="1.5" opacity="0.5" />
                <circle cx="60" cy="60" r="8" stroke="#C9A84C" strokeWidth="1.8" opacity="0.65" />
                <circle cx="60" cy="60" r="3" fill="#C9A84C" opacity="0.8" />
                {/* Small dots around — people */}
                <circle cx="60" cy="12" r="2.5" fill="#C9A84C" opacity="0.4" />
                <circle cx="60" cy="108" r="2.5" fill="#C9A84C" opacity="0.4" />
                <circle cx="12" cy="60" r="2.5" fill="#C9A84C" opacity="0.4" />
                <circle cx="108" cy="60" r="2.5" fill="#C9A84C" opacity="0.4" />
                <circle cx="26" cy="26" r="2" fill="#C9A84C" opacity="0.3" />
                <circle cx="94" cy="26" r="2" fill="#C9A84C" opacity="0.3" />
                <circle cx="26" cy="94" r="2" fill="#C9A84C" opacity="0.3" />
                <circle cx="94" cy="94" r="2" fill="#C9A84C" opacity="0.3" />
            </svg>
        ),
    },
    {
        // Arab world — Ibn Khaldun
        text: "The past resembles the future more than one drop of water resembles another.",
        author: "Ibn Khaldun",
        role: "Historian & Philosopher · Tunisia",
        direction: "right",
        accent: "#8B6914",
        svg: (
            <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                {/* Geometric Islamic star pattern — 8-point */}
                <path d="M60 18 L66 42 L90 36 L74 54 L96 66 L72 68 L78 92 L60 76 L42 92 L48 68 L24 66 L46 54 L30 36 L54 42 Z" stroke="#8B6914" strokeWidth="1.5" fill="none" opacity="0.45" />
                <path d="M60 32 L64 48 L78 44 L68 56 L82 62 L68 64 L72 80 L60 70 L48 80 L52 64 L38 62 L52 56 L42 44 L56 48 Z" stroke="#8B6914" strokeWidth="1" fill="none" opacity="0.3" />
                <circle cx="60" cy="60" r="7" stroke="#8B6914" strokeWidth="1.5" fill="none" opacity="0.6" />
                <circle cx="60" cy="60" r="3" fill="#8B6914" opacity="0.7" />
            </svg>
        ),
    },
    {
        // Japan — Matsumoto Toshiko / Japanese proverb
        text: "Fall seven times, stand up eight.",
        author: "Japanese Proverb",
        role: "古諺 · Japan",
        direction: "left",
        accent: "#C9A84C",
        svg: (
            <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                {/* Bamboo stalks — resilience */}
                <line x1="42" y1="100" x2="42" y2="15" stroke="#C9A84C" strokeWidth="2" opacity="0.5" strokeLinecap="round" />
                <line x1="60" y1="100" x2="60" y2="20" stroke="#C9A84C" strokeWidth="2.5" opacity="0.6" strokeLinecap="round" />
                <line x1="78" y1="100" x2="78" y2="12" stroke="#C9A84C" strokeWidth="2" opacity="0.5" strokeLinecap="round" />
                {/* Nodes */}
                <line x1="38" y1="70" x2="46" y2="70" stroke="#C9A84C" strokeWidth="1.5" opacity="0.5" />
                <line x1="38" y1="45" x2="46" y2="45" stroke="#C9A84C" strokeWidth="1.5" opacity="0.5" />
                <line x1="56" y1="75" x2="64" y2="75" stroke="#C9A84C" strokeWidth="1.5" opacity="0.55" />
                <line x1="56" y1="50" x2="64" y2="50" stroke="#C9A84C" strokeWidth="1.5" opacity="0.55" />
                <line x1="74" y1="68" x2="82" y2="68" stroke="#C9A84C" strokeWidth="1.5" opacity="0.5" />
                <line x1="74" y1="42" x2="82" y2="42" stroke="#C9A84C" strokeWidth="1.5" opacity="0.5" />
                {/* Small leaf hints */}
                <path d="M60 50 C60 50 72 44 76 36" stroke="#C9A84C" strokeWidth="1" fill="none" opacity="0.4" strokeLinecap="round" />
                <path d="M42 45 C42 45 30 40 27 30" stroke="#C9A84C" strokeWidth="1" fill="none" opacity="0.35" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        // Latin America — Paulo Freire
        text: "Education either functions as an instrument to bring about conformity, or it becomes the practice of freedom.",
        author: "Paulo Freire",
        role: "Educator & Philosopher · Brazil",
        direction: "right",
        accent: "#8B6914",
        svg: (
            <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                {/* Open book with a rising bird/wing — freedom */}
                <path d="M20 70 L60 60 L100 70 L100 95 L60 85 L20 95 Z" stroke="#8B6914" strokeWidth="1.5" fill="none" opacity="0.4" />
                <line x1="60" y1="60" x2="60" y2="85" stroke="#8B6914" strokeWidth="2" opacity="0.55" />
                {/* Wing rising from book spine */}
                <path d="M60 58 C50 45 30 38 20 25" stroke="#8B6914" strokeWidth="1.8" fill="none" opacity="0.5" strokeLinecap="round" />
                <path d="M60 58 C70 45 90 38 100 25" stroke="#8B6914" strokeWidth="1.8" fill="none" opacity="0.5" strokeLinecap="round" />
                <path d="M60 58 C55 48 46 44 38 38" stroke="#8B6914" strokeWidth="1" fill="none" opacity="0.3" strokeLinecap="round" />
                <path d="M60 58 C65 48 74 44 82 38" stroke="#8B6914" strokeWidth="1" fill="none" opacity="0.3" strokeLinecap="round" />
                <circle cx="60" cy="58" r="3.5" fill="#8B6914" opacity="0.65" />
            </svg>
        ),
    },
    {
        // India again — APJ Abdul Kalam
        text: "Excellence is a continuous process and not an accident.",
        author: "APJ Abdul Kalam",
        role: "Scientist & President · India",
        direction: "left",
        accent: "#C9A84C",
        svg: (
            <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                {/* Rocket / trajectory — Kalam the rocket scientist */}
                <path d="M60 100 L60 25" stroke="#C9A84C" strokeWidth="1" strokeDasharray="3 5" opacity="0.3" />
                <path d="M60 25 C60 25 50 40 48 58 L60 95 L72 58 C70 40 60 25 60 25Z" stroke="#C9A84C" strokeWidth="1.5" fill="none" opacity="0.5" />
                <path d="M48 58 C44 62 40 70 42 78 L60 95" stroke="#C9A84C" strokeWidth="1" fill="none" opacity="0.35" />
                <path d="M72 58 C76 62 80 70 78 78 L60 95" stroke="#C9A84C" strokeWidth="1" fill="none" opacity="0.35" />
                <circle cx="60" cy="38" r="6" stroke="#C9A84C" strokeWidth="1.5" fill="none" opacity="0.65" />
                <circle cx="60" cy="38" r="2.5" fill="#C9A84C" opacity="0.7" />
                {/* Stars */}
                <circle cx="30" cy="30" r="1.5" fill="#C9A84C" opacity="0.4" />
                <circle cx="90" cy="22" r="1.5" fill="#C9A84C" opacity="0.4" />
                <circle cx="20" cy="55" r="1" fill="#C9A84C" opacity="0.3" />
                <circle cx="100" cy="45" r="1" fill="#C9A84C" opacity="0.3" />
            </svg>
        ),
    },
];

function QuoteCard({ quote, index }: { quote: typeof quotes[0]; index: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.25 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    const isLeft = quote.direction === 'left';

    return (
        <div
            ref={ref}
            className={`
        quote-card flex flex-col md:flex-row items-center gap-8 md:gap-16 py-16 md:py-24
        transition-all duration-1000 ease-out
        ${visible ? 'opacity-100 translate-x-0' : isLeft ? 'opacity-0 -translate-x-16' : 'opacity-0 translate-x-16'}
      `}
            style={{ transitionDelay: `${index * 80}ms` }}
        >
            {/* SVG — alternates sides */}
            <div className={`
        shrink-0 w-32 h-32 md:w-44 md:h-44 
        ${isLeft ? 'md:order-1' : 'md:order-2'}
        transition-all duration-1200 ease-out
        ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}
      `} style={{ transitionDelay: `${index * 80 + 200}ms` }}>
                {quote.svg}
            </div>

            {/* Text */}
            <div className={`
        flex-1 text-center md:text-left
        ${isLeft ? 'md:order-2' : 'md:order-1 md:text-right'}
      `}>
                <div
                    className="text-5xl md:text-6xl font-serif leading-none mb-4 select-none"
                    style={{ color: quote.accent, opacity: 0.4 }}
                >
                    "
                </div>
                <p className="font-serif text-xl md:text-2xl lg:text-3xl leading-relaxed text-stone-800 mb-6 italic tracking-wide">
                    {quote.text}
                </p>
                <div className={`flex flex-col items-center ${isLeft ? 'md:items-start' : 'md:items-end'}`}>
                    <div className="w-10 h-px mb-3" style={{ backgroundColor: quote.accent }} />
                    <p className="font-nunito font-bold text-stone-700 text-sm tracking-widest uppercase">
                        {quote.author}
                    </p>
                    <p className="font-nunito text-xs tracking-wider mt-0.5" style={{ color: quote.accent }}>
                        {quote.role}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default function QuotesSection() {
    return (
        <section className="relative overflow-hidden bg-stone-50 py-12">
            {/* Subtle background texture */}
            <div
                className="absolute inset-0 opacity-30 pointer-events-none"
                style={{
                    backgroundImage: `radial-gradient(circle at 20% 20%, #C9A84C18 0%, transparent 50%),
                            radial-gradient(circle at 80% 80%, #8B691418 0%, transparent 50%)`,
                }}
            />

            {/* Section label */}
            <div className="container mx-auto px-6 max-w-5xl">
                <div className="flex items-center gap-4 mb-4">
                    <div className="h-px flex-1 bg-brand-gold/20" />
                    <p className="font-nunito text-xs tracking-widest uppercase text-brand-gold/60 font-semibold">
                        Wisdom on Learning
                    </p>
                    <div className="h-px flex-1 bg-brand-gold/20" />
                </div>

                {/* Quote cards */}
                <div className="divide-y divide-stone-200/60">
                    {quotes.map((quote, i) => (
                        <QuoteCard key={i} quote={quote} index={i} />
                    ))}
                </div>

                {/* Closing ornament */}
                <div className="flex justify-center pt-8 pb-4">
                    <svg width="60" height="30" viewBox="0 0 60 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 15 Q15 5 30 15 Q45 25 55 15" stroke="#C9A84C" strokeWidth="1.5" fill="none" opacity="0.5" />
                        <circle cx="30" cy="15" r="3" fill="#C9A84C" opacity="0.4" />
                    </svg>
                </div>
            </div>
        </section>
    );
}