'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

/* ─── Ornamental divider ──────────────────────────────────────────── */
function LotusOrnament() {
    return (
        <svg viewBox="0 0 200 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-48 h-8 mx-auto">
            <line x1="0" y1="20" x2="70" y2="20" stroke="#C9A84C" strokeWidth="0.8" opacity="0.4" />
            <path d="M85 20 C85 14 90 10 100 10 C110 10 115 14 115 20 C115 26 110 30 100 30 C90 30 85 26 85 20Z"
                stroke="#C9A84C" strokeWidth="1" fill="none" opacity="0.55" />
            <path d="M92 20 C92 16 95 13 100 13 C105 13 108 16 108 20 C108 24 105 27 100 27 C95 27 92 24 92 20Z"
                stroke="#C9A84C" strokeWidth="1" fill="none" opacity="0.45" />
            <circle cx="100" cy="20" r="3" fill="#C9A84C" opacity="0.5" />
            <line x1="130" y1="20" x2="200" y2="20" stroke="#C9A84C" strokeWidth="0.8" opacity="0.4" />
            <circle cx="70" cy="20" r="2" fill="#C9A84C" opacity="0.35" />
            <circle cx="130" cy="20" r="2" fill="#C9A84C" opacity="0.35" />
        </svg>
    );
}

/* ─── Portrait ornamental frame ──────────────────────────────────── */
function PortraitFrame({ width, height }: { width: number; height: number }) {
    const w = width;
    const h = height;
    const pad = 18;

    return (
        <svg
            viewBox={`${-pad} ${-pad} ${w + pad * 2} ${h + pad * 2}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute pointer-events-none"
            style={{ top: -pad, left: -pad, width: w + pad * 2, height: h + pad * 2 }}
        >
            {/* Outer dashed border */}
            <rect x="-14" y="-14" width={w + 28} height={h + 28} rx="6"
                stroke="#C9A84C" strokeWidth="1" opacity="0.2" strokeDasharray="6 4" />

            {/* ── Corner ornaments ── */}
            {/* Top-left */}
            <path d="M-14 10 L-14 -14 L10 -14" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
            <circle cx="-14" cy="-14" r="3" fill="#C9A84C" opacity="0.55" />
            <path d="M-6 2 C-2 -2 2 -6 6 -6" stroke="#C9A84C" strokeWidth="0.8" opacity="0.35" />

            {/* Top-right */}
            <path d={`M${w + 14} 10 L${w + 14} -14 L${w - 10} -14`} stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
            <circle cx={w + 14} cy="-14" r="3" fill="#C9A84C" opacity="0.55" />
            <path d={`M${w + 6} 2 C${w + 2} -2 ${w - 2} -6 ${w - 6} -6`} stroke="#C9A84C" strokeWidth="0.8" opacity="0.35" />

            {/* Bottom-left */}
            <path d={`M-14 ${h - 10} L-14 ${h + 14} L10 ${h + 14}`} stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
            <circle cx="-14" cy={h + 14} r="3" fill="#C9A84C" opacity="0.55" />
            <path d={`M-6 ${h - 2} C-2 ${h + 2} 2 ${h + 6} 6 ${h + 6}`} stroke="#C9A84C" strokeWidth="0.8" opacity="0.35" />

            {/* Bottom-right */}
            <path d={`M${w + 14} ${h - 10} L${w + 14} ${h + 14} L${w - 10} ${h + 14}`} stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
            <circle cx={w + 14} cy={h + 14} r="3" fill="#C9A84C" opacity="0.55" />
            <path d={`M${w + 6} ${h - 2} C${w + 2} ${h + 2} ${w - 2} ${h + 6} ${w - 6} ${h + 6}`} stroke="#C9A84C" strokeWidth="0.8" opacity="0.35" />

            {/* ── Mid-edge diamond accents ── */}
            <g transform={`translate(${w / 2}, -14)`}>
                <path d="M0 -5 L4 0 L0 5 L-4 0 Z" fill="#C9A84C" opacity="0.55" />
                <path d="M0 -9 L7 0 L0 9 L-7 0 Z" stroke="#C9A84C" strokeWidth="0.7" fill="none" opacity="0.3" />
            </g>
            <g transform={`translate(${w / 2}, ${h + 14})`}>
                <path d="M0 -5 L4 0 L0 5 L-4 0 Z" fill="#C9A84C" opacity="0.55" />
                <path d="M0 -9 L7 0 L0 9 L-7 0 Z" stroke="#C9A84C" strokeWidth="0.7" fill="none" opacity="0.3" />
            </g>
            <g transform={`translate(-14, ${h / 2})`}>
                <path d="M-5 0 L0 4 L5 0 L0 -4 Z" fill="#C9A84C" opacity="0.5" />
            </g>
            <g transform={`translate(${w + 14}, ${h / 2})`}>
                <path d="M-5 0 L0 4 L5 0 L0 -4 Z" fill="#C9A84C" opacity="0.5" />
            </g>

            {/* ── Vine flourishes top & bottom ── */}
            <path
                d={`M24 -7 C50 -15 80 -3 ${w / 2} -9 C${w / 2 + 40} -15 ${w - 50} -3 ${w - 24} -7`}
                stroke="#C9A84C" strokeWidth="0.8" opacity="0.22" fill="none" />
            <path
                d={`M24 ${h + 7} C50 ${h + 15} 80 ${h + 3} ${w / 2} ${h + 9} C${w / 2 + 40} ${h + 15} ${w - 50} ${h + 3} ${w - 24} ${h + 7}`}
                stroke="#C9A84C" strokeWidth="0.8" opacity="0.22" fill="none" />

            {/* ── Quarter-mark rosette dots ── */}
            {([
                [w * 0.25, -14],
                [w * 0.75, -14],
                [w * 0.25, h + 14],
                [w * 0.75, h + 14],
            ] as [number, number][]).map(([cx, cy], i) => (
                <g key={i} transform={`translate(${cx}, ${cy})`}>
                    <circle cx="0" cy="0" r="2.2" fill="#C9A84C" opacity="0.38" />
                    <circle cx="0" cy="-4.5" r="1.2" fill="#C9A84C" opacity="0.2" />
                    <circle cx="0" cy="4.5" r="1.2" fill="#C9A84C" opacity="0.2" />
                    <circle cx="-4.5" cy="0" r="1.2" fill="#C9A84C" opacity="0.2" />
                    <circle cx="4.5" cy="0" r="1.2" fill="#C9A84C" opacity="0.2" />
                </g>
            ))}
        </svg>
    );
}

/* ─── Main Component ─────────────────────────────────────────────── */
export default function TributeSection() {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    const portraitW = 288;  // w-72
    const portraitH = 384;  // h-96

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
            { threshold: 0.15 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&display=swap');
        .font-cormorant { font-family: 'Cormorant Garamond', Georgia, serif; }

        @keyframes goldenPulse {
          0%, 100% { box-shadow: 0 0 24px 4px rgba(201,168,76,0.12), 0 4px 24px rgba(139,105,20,0.1); }
          50%       { box-shadow: 0 0 56px 16px rgba(201,168,76,0.24), 0 8px 40px rgba(139,105,20,0.2); }
        }
        .portrait-glow { animation: goldenPulse 5s ease-in-out infinite; }
      `}</style>

            <section
                ref={ref}
                className="relative py-20 overflow-hidden"
                style={{
                    background: 'linear-gradient(160deg, oklch(0.96 0.03 80) 0%, oklch(0.99 0.01 85) 40%, oklch(0.96 0.04 75) 100%)',
                }}
            >
                {/* Ambient radial glow */}
                <div className="absolute inset-0 pointer-events-none" style={{
                    background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(201,168,76,0.07) 0%, transparent 70%)',
                }} />

                {/* Faint mandala watermark */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <svg viewBox="0 0 600 600" className="w-[600px] h-[600px] opacity-[0.035]" fill="none">
                        <circle cx="300" cy="300" r="280" stroke="#C9A84C" strokeWidth="1" />
                        <circle cx="300" cy="300" r="240" stroke="#C9A84C" strokeWidth="0.5" strokeDasharray="6 6" />
                        <circle cx="300" cy="300" r="200" stroke="#C9A84C" strokeWidth="1" />
                        <circle cx="300" cy="300" r="160" stroke="#C9A84C" strokeWidth="0.5" strokeDasharray="4 4" />
                        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
                            <line key={deg} x1="300" y1="20" x2="300" y2="580"
                                stroke="#C9A84C" strokeWidth="0.5" transform={`rotate(${deg} 300 300)`} />
                        ))}
                    </svg>
                </div>

                <div className="relative container mx-auto px-4 max-w-5xl">

                    {/* ── Heading ── */}
                    <div className={`text-center mb-2 transition-all duration-1000 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <p className="font-cormorant text-sm tracking-[0.35em] uppercase mb-3"
                            style={{ color: '#C9A84C', opacity: 0.7 }}>
                            A Living Memorial
                        </p>
                        <h1 className="font-cormorant text-5xl sm:text-6xl md:text-7xl leading-tight"
                            style={{
                                background: 'linear-gradient(135deg, #8B6914 0%, #C9A84C 40%, #E8C96A 55%, #C9A84C 70%, #8B6914 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                                fontWeight: 300,
                                letterSpacing: '0.04em',
                            }}>
                            In Memory of
                            <br />
                            <span style={{ fontWeight: 600, fontStyle: 'italic' }}>Saroj Singh</span>
                        </h1>
                        <p className="font-cormorant text-lg italic mt-2" style={{ color: '#8B6914', opacity: 0.6 }}>
                            Teacher. Mother. Lotus.
                        </p>
                    </div>

                    {/* Ornament below heading */}
                    <div className={`mt-4 mb-12 transition-all duration-1000 delay-200 ease-out ${visible ? 'opacity-100' : 'opacity-0'}`}>
                        <LotusOrnament />
                    </div>

                    {/* ── Portrait — full size, adorned ── */}
                    <div className="flex justify-center">
                        <div
                            className={`relative transition-all duration-1200 delay-300 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                            style={{ width: portraitW, height: portraitH }}
                        >
                            {/* Ambient halo behind the portrait */}
                            <div className="absolute inset-0 pointer-events-none" style={{
                                margin: '-40px',
                                background: 'radial-gradient(ellipse at center, rgba(201,168,76,0.16) 0%, rgba(201,168,76,0.05) 45%, transparent 70%)',
                                borderRadius: '12px',
                            }} />

                            {/* Portrait image */}
                            <div
                                className="portrait-glow relative w-full h-full overflow-hidden"
                                style={{
                                    borderRadius: '6px',
                                    border: '3px solid rgba(201,168,76,0.6)',
                                }}
                            >
                                <Image
                                    src="/saroj-portrait.jpeg"
                                    alt="Saroj Singh — teacher, mother, soul"
                                    fill
                                    className="object-cover object-top"
                                    priority
                                />
                                {/* Inner vignette — softens the photo into the frame */}
                                <div className="absolute inset-0 pointer-events-none" style={{
                                    boxShadow: 'inset 0 0 50px 10px rgba(201,168,76,0.07)',
                                }} />
                            </div>

                            {/* Ornamental frame SVG — floats over the portrait edges */}
                            <PortraitFrame width={portraitW} height={portraitH} />
                        </div>
                    </div>

                    {/* ── Tribute text ── */}
                    <div className={`mt-16 max-w-3xl mx-auto text-center transition-all duration-1000 delay-500 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                        <p className="font-cormorant text-xl sm:text-2xl leading-relaxed text-stone-700"
                            style={{ fontStyle: 'italic', letterSpacing: '0.01em' }}>
                            There are people whose presence doesn't simply pass through the world — it{' '}
                            <span style={{ color: '#8B6914' }}>illuminates</span> it. Saroj was one of those rare,
                            radiant souls. A teacher in every room she entered, a mother whose love carried the
                            quiet certainty of deep roots, she understood — long before it became a philosophy —
                            that learning is not a transaction but a{' '}
                            <span style={{ color: '#8B6914' }}>transformation</span>.
                        </p>

                        <p className="font-cormorant text-lg sm:text-xl leading-relaxed text-stone-600 mt-6"
                            style={{ fontStyle: 'italic' }}>
                            She believed in children the way one believes in sunrise — unconditionally, and with
                            the quiet joy of someone who has never stopped being surprised by the light. Every
                            lesson here is a petal of that belief, still unfolding.
                        </p>

                        <p className="font-nunito text-sm tracking-wider mt-8" style={{ color: '#C9A84C', opacity: 0.65 }}>
                            <span className="italic font-cormorant text-base">Saroj</span> — the Sanskrit word for lotus.
                            A flower that rises from still water, unhurried and whole.
                        </p>
                    </div>

                    {/* ── Closing ornament ── */}
                    <div className={`mt-10 transition-all duration-1000 delay-700 ease-out ${visible ? 'opacity-100' : 'opacity-0'}`}>
                        <LotusOrnament />
                    </div>

                </div>
            </section>
        </>
    );
}