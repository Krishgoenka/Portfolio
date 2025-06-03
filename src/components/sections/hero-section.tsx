
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
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background to-muted/50">
      <Image 
        src="https://drive.google.com/uc?export=view&id=1jyq2xRuyBw9lBOaLDriNgfPUJBL-1g0W" 
        alt="Futuristic AI background" 
        fill
        objectFit="cover" 
        className="absolute inset-0 -z-10 opacity-100 hero-bg-animated"
        data-ai-hint="abstract circuits" 
        priority
        sizes="100vw"
      />
      {/* Subtle animated gradient or particle effect placeholder */}
      <div className="absolute inset-0 -z-20 animate-pulse bg-[radial-gradient(ellipse_at_center,_hsl(var(--primary)/0.1)_0%,transparent_60%)]"></div>

      <div className="container z-10 px-4 text-left"> 
        <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground">
          Hello, Krish Goenka
        </h1>
        
        <p 
          className="font-headline text-xl sm:text-2xl md:text-3xl text-primary mb-10 float-animation"
          style={{ transform: `translateY(${offsetY * 0.1}px)` }} 
        >
          Turning Intelligence into Innovation.
        </p>

        <Button asChild size="lg" className="neon-glow-accent rounded-full shadow-lg text-lg px-8 py-6">
          <Link href="#about">
            Discover More <ArrowDown className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
       <div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-primary"
        aria-hidden="true"
      >
        <ArrowDown size={32} />
      </div>
    </section>
  );
}
