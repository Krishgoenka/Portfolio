
"use client";
import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Sparkles, Cpu } from 'lucide-react'; // Changed UserCircle to Cpu
import { useScrollReveal } from '@/hooks/use-scroll-spy';

const milestones = [
  { year: "2024", event: "Achieved Finalist in AI Unite Hackathon for developing an innovative AI healthcare solution." },
  { year: "2024", event: "Secured a top ranking in a competitive Machine Learning challenge hosted by ML Kolkata." },
];

export default function AboutSection() {
  useScrollReveal();

  return (
    <section id="about" className="container">
      <div className="text-center mb-16 scroll-reveal">
        <h2 className="font-headline text-5xl font-bold text-primary flex items-center justify-center">
          <Cpu className="mr-3 h-12 w-12" /> {/* Changed icon */}
          My Journey
        </h2>
        <p className="text-xl text-muted-foreground mt-4">My evolution in the AI landscape.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        <Card className="scroll-reveal shadow-xl bg-card/80 backdrop-blur-md border border-border/50 overflow-hidden">
          <CardContent className="p-0">
            <div
              className="relative group w-full aspect-[4/5]
                         float-animation"
            >
              <div className="absolute inset-0 -z-10 opacity-30"
                   style={{ backgroundImage: 'repeating-linear-gradient(-45deg, hsl(var(--primary)/0.05), hsl(var(--primary)/0.05) 1px, transparent 1px, transparent 15px)' }}>
              </div>
              <Image
                src="https://drive.google.com/uc?export=view&id=1Zv-HOET7uIhj8lsnnbaJoXt8xTdNs-Ce"
                alt="Krish Goenka - Profile Picture"
                fill
                objectFit="cover"
                data-ai-hint="Krish Goenka profile"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, (max-width: 1024px) 50vw, 400px"
                className="transition-transform duration-500 ease-in-out group-hover:scale-110"
                priority
              />
              <div className="absolute inset-0 border-2 border-primary/30 group-hover:border-primary/70 transition-all duration-500 pointer-events-none"></div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                   style={{boxShadow: '0 0 25px 8px hsl(var(--primary)/0.5), 0 0 50px 15px hsl(var(--primary)/0.25)'}}>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-8 scroll-reveal">
           <Card className="shadow-xl bg-card/80 backdrop-blur-md border border-border/50">
            <CardHeader>
                <CardTitle className="font-headline text-3xl text-foreground">My Story</CardTitle> {/* Changed from My Journey for variety */}
            </CardHeader>
            <CardContent className="space-y-6">
                <p className="text-lg leading-relaxed text-foreground/90">
                  I am Krish Goenka, a Computer Science Engineering student at Techno India University specializing in Artificial Intelligence. My passion lies in transforming complex AI concepts into tangible, real-world applications. I am keenly interested in leveraging AI for startups, driving innovation, and tackling challenging problems by blending creative solutions with precise execution.
                </p>
            </CardContent>
           </Card>

          <Card className="shadow-xl bg-card/80 backdrop-blur-md border border-border/50">
            <CardHeader>
              <CardTitle className="font-headline text-3xl text-foreground flex items-center">
                <Sparkles className="mr-2 h-7 w-7 text-foreground" /> Key Milestones
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {milestones.map((milestone, index) => (
                  <li key={index} className="flex items-start space-x-3 p-3 rounded-md hover:bg-muted/50 transition-colors duration-200">
                    <CheckCircle className="h-7 w-7 text-foreground mt-1 flex-shrink-0" />
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
