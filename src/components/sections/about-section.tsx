
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
      <div className="text-center mb-16 scroll-reveal"> {/* Increased margin bottom */}
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
            // Removed inline backgroundImage style, rely on theme or add simpler pattern if needed
          >
            <Image 
              src="https://placehold.co/400x500.png" 
              alt="Krish Goenka - Profile Picture" 
              fill
              objectFit="cover"
              data-ai-hint="professional portrait Krish Goenka futuristic"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, (max-width: 1024px) 50vw, 400px"
              className="rounded-lg transition-transform duration-500 ease-in-out group-hover:scale-110"
              priority
            />
            {/* Adding a subtle overlay or border effect */}
            <div className="absolute inset-0 rounded-lg border-2 border-primary/30 group-hover:border-primary/70 transition-all duration-500 pointer-events-none"></div>
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
