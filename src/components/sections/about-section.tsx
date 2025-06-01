
"use client";
import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Sparkles } from 'lucide-react';
import { useScrollReveal } from '@/hooks/use-scroll-spy';

const milestones = [
  { year: "2022", event: "Embarked on B.Tech in CSE (AI)" },
  { year: "2023", event: "Ventured into National Hackathons (ISRO)" },
  { year: "2023", event: "Launched Resume Advisor ATS" },
  { year: "2024", event: "IIT Delhi E-Summit Campus Ambassador" },
  { year: "2024", event: "AI Unite Hackathon Finalist" },
];

export default function AboutSection() {
  useScrollReveal();

  return (
    <section id="about" className="container">
      <div className="text-center mb-16 scroll-reveal">
        <h2 className="font-headline text-5xl font-bold text-primary flex items-center justify-center">
          <Sparkles className="mr-3 h-10 w-10" />
          About Me
        </h2>
        <p className="text-xl text-muted-foreground mt-4">My evolution in the AI landscape.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="scroll-reveal flex flex-col items-center md:items-start justify-center">
          <div 
            className="relative group w-full max-w-sm sm:max-w-md aspect-[4/5] rounded-lg overflow-hidden 
                       shadow-2xl hover:shadow-primary/50 transition-all duration-500 ease-in-out 
                       transform hover:scale-105"
          >
            {/* Subtle diagonal line pattern background */}
            <div className="absolute inset-0 -z-10 opacity-20" style={{ backgroundImage: 'repeating-linear-gradient(-45deg, hsl(var(--border)), hsl(var(--border)) 1px, transparent 1px, transparent 10px)' }}></div>
            <Image 
              src="https://storage.googleapis.com/builder-prod.appspot.com/unsafe/builderip/builder-assets/v1/user-assets/user_f76e1491413046098027c07f2c500652/projects/project_a891f5f7229a4c69948e686c87016e4d/images/20240726101950_image_0.jpeg" 
              alt="Krish Goenka - Profile Picture" 
              fill
              objectFit="cover"
              data-ai-hint="Krish Goenka profile"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, (max-width: 1024px) 50vw, 400px"
              className="rounded-lg transition-transform duration-500 ease-in-out group-hover:scale-110"
              priority
            />
            {/* Adding a subtle overlay or border effect */}
            <div className="absolute inset-0 rounded-lg border-2 border-primary/30 group-hover:border-primary/70 transition-all duration-500 pointer-events-none"></div>
             {/* Glow effect for hover */}
            <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                 style={{boxShadow: '0 0 25px 5px hsl(var(--primary)/0.7), 0 0 40px 10px hsl(var(--primary)/0.5)'}}>
            </div>
          </div>
        </div>

        <div className="scroll-reveal space-y-8">
           <div>
              <p className="text-lg leading-relaxed mb-4 text-foreground/90">
                Driven by an insatiable curiosity, I transform complex AI concepts into tangible, real-world applications. From pioneering AI-driven systems to excelling in national hackathons like ISRO & AI Unite, my work is a testament to blending innovative thought with precise execution.
              </p>
              <p className="text-xl italic text-primary font-medium">
                "The best way to predict the future is to invent it." <br/> – This philosophy fuels my AI exploration.
              </p>
            </div>
          <Card className="shadow-xl bg-card/80 backdrop-blur-md border border-border/50">
            <CardHeader>
              <CardTitle className="font-headline text-3xl text-accent">Key Milestones</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {milestones.map((milestone, index) => (
                  <li key={index} className="flex items-start space-x-3 p-3 rounded-md hover:bg-muted/50 transition-colors duration-200">
                    <CheckCircle className="h-7 w-7 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-lg text-foreground">{milestone.event}</span>
                      <p className="text-sm text-muted-foreground">{milestone.year}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
