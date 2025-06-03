
"use client";
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowDown } from 'lucide-react';

export default function HeroSection() {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    if (typeof window !== 'undefined') {
      setOffsetY(window.pageYOffset);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);
  
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* GIF Background using next/image */}
      <div className="absolute inset-0 w-full h-full -z-10">
        <Image
          src="/hero.gif" 
          alt="Animated AI data plexus background"
          fill
          className="object-cover" 
          unoptimized={true} 
          data-ai-hint="animated plexus network"
        />
      </div>
      
      {/* Text content container */}
      <div className="container relative z-10 px-4 text-left">
        <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground">
          Hello, I'm Krish Goenka
        </h1>
        
        <p 
          className="font-headline text-xl sm:text-2xl md:text-3xl text-primary mb-10 float-animation"
          style={{ transform: `translateY(${offsetY * 0.1}px)` }} 
        >
          AI/ML Enthusiast
        </p>

        <Button asChild size="lg" className="neon-glow-accent rounded-full shadow-lg text-lg px-8 py-6">
          <Link href="#about">
            Discover More <ArrowDown className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
       {/* Scroll down arrow */}
       <div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-primary z-10"
        aria-hidden="true"
      >
        <ArrowDown size={32} />
      </div>
    </section>
  );
}

