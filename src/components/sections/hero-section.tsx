
"use client";
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowDown, Github, Mail } from 'lucide-react';
import TypingAnimation from '@/components/typing-animation';

export default function HeroSection() {
  const [offsetY, setOffsetY] = useState(0);
  const [showScrollArrow, setShowScrollArrow] = useState(true);

  const handleScroll = () => {
    if (typeof window !== 'undefined') {
      setOffsetY(window.pageYOffset);
      if (window.pageYOffset > 100) {
        setShowScrollArrow(false);
      } else {
        setShowScrollArrow(true);
      }
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Initialize on mount
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image/GIF Container */}
      <div className="absolute inset-0 w-full h-full -z-10">
        <Image
          src="https://drive.google.com/uc?export=view&id=1NX8A_ItLHb3x3JyvlPTngiAewSoBUsy9"
          alt="Futuristic AI plexus network background"
          fill
          className="object-cover object-center"
          priority
          data-ai-hint="abstract plexus network"
          sizes="(max-width: 768px) 100vw, (min-width: 769px) 100vw"
        />
      </div>

      <div className="container relative z-10 px-4 text-center md:text-left">
        <TypingAnimation
          text="Hello, I'm Krish Goenka"
          speed={70}
          className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 hero-text-shadow-effect"
          style={{ color: 'white !important' as any }}
        />

        <p
          className="font-headline text-xl sm:text-2xl md:text-3xl text-primary mb-10 float-animation hero-text-shadow-effect"
          style={{ transform: `translateY(${offsetY * 0.1}px)` }}
        >
          AI/ML Enthusiast & Innovator
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
          <Button asChild size="lg" className="neon-glow-primary rounded-full shadow-lg text-lg px-8 py-6">
            <a href="https://github.com/Krishgoenka" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" /> GitHub
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="hero-hire-me-button neon-glow-accent rounded-full shadow-lg text-lg px-8 py-6 border-accent text-accent hover:bg-accent/10 hover:text-accent-foreground">
            <a href="mailto:goenkakrish02@gmail.com">
              <Mail className="mr-2 h-5 w-5" /> Hire Me
            </a>
          </Button>
        </div>
      </div>

      {showScrollArrow && (
        <div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-primary z-10 transition-opacity duration-300"
          aria-hidden="true"
        >
          <ArrowDown size={32} />
        </div>
      )}
    </section>
  );
}
