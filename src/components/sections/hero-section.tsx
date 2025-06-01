"use client";
import React, { useState, useEffect } from 'react';
import TypingAnimation from '@/components/typing-animation';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowDown } from 'lucide-react';

export default function HeroSection() {
  const [taglineVisible, setTaglineVisible] = useState(false);
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const introText = "Hi, I’m Krish Goenka — an AI/ML & Generative AI Enthusiast, Innovator, and Second-Year CSE AI student at Techno India University.";
  
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center text-center overflow-hidden bg-gradient-to-br from-background to-secondary/30">
      <Image 
        src="https://placehold.co/1920x1080.png" 
        alt="AI themed background" 
        layout="fill" 
        objectFit="cover" 
        className="absolute inset-0 -z-10 opacity-20"
        data-ai-hint="neural network data stream"
        priority
      />
      <div className="absolute inset-0 -z-20 bg-background opacity-50"></div>


      <div className="container z-10 px-4">
        <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
          <TypingAnimation text={introText} speed={50} onComplete={() => setTaglineVisible(true)} />
        </h1>
        
        {taglineVisible && (
          <p 
            className="font-headline text-xl sm:text-2xl md:text-3xl text-primary mb-10 float-animation"
            style={{ transform: `translateY(${offsetY * 0.1}px)` }} // Subtle parallax
          >
            Turning Intelligence into Innovation.
          </p>
        )}

        <Button asChild size="lg" className="neon-glow-accent rounded-full shadow-lg">
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
