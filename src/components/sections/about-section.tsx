
"use client";
import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import { useScrollReveal } from '@/hooks/use-scroll-spy';

const milestones = [
  { year: "2022", event: "Started B.Tech in CSE (AI)" },
  { year: "2023", event: "First National Hackathon (ISRO)" },
  { year: "2023", event: "Resume Advisor ATS Launch" },
  { year: "2024", event: "IIT Delhi E-Summit Ambassador" },
  { year: "2024", event: "AI Unite Hackathon Finalist" },
];

export default function AboutSection() {
  useScrollReveal();

  return (
    <section id="about" className="container">
      <div className="text-center mb-12 scroll-reveal">
        <h2 className="font-headline text-4xl font-bold">About Me</h2>
        <p className="text-xl text-muted-foreground mt-2">My journey into the world of AI.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center"> {/* Changed items-start to items-center for better vertical alignment */}
        <div className="scroll-reveal flex flex-col items-center md:items-start justify-center"> {/* Added justify-center */}
          <div 
            className="relative group w-full max-w-xs sm:max-w-sm aspect-[4/5] rounded-xl overflow-hidden 
                       shadow-xl hover:shadow-primary/40 transition-all duration-300 ease-in-out 
                       transform hover:scale-105 mb-8 md:mb-0"
            style={{
              backgroundImage: `
                repeating-linear-gradient(
                  -45deg,
                  hsl(var(--muted)/0.08),
                  hsl(var(--muted)/0.08) 12px,
                  hsl(var(--border)/0.08) 12px,
                  hsl(var(--border)/0.08) 24px
                )
              `
            }}
          >
            <Image 
              src="https://placehold.co/400x500.png" 
              alt="Krish Goenka - Profile Picture" 
              fill
              objectFit="cover"
              data-ai-hint="professional portrait Krish Goenka"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, (max-width: 1024px) 50vw, 400px"
              className="rounded-xl transition-transform duration-300 ease-in-out group-hover:scale-110"
              priority
            />
          </div>
        </div>

        <div className="scroll-reveal space-y-8">
           <div>
              <p className="text-lg mb-4 text-foreground/90">
                From crafting AI-powered solutions to participating in national hackathons like ISRO & AI Unite, I blend curiosity with code to solve real-world problems.
              </p>
              <p className="text-lg italic text-primary">
                My journey in AI began not with a textbook, but with a question: <br/> "How can machines think smarter, not harder?"
              </p>
            </div>
          <Card className="shadow-xl bg-card/70 backdrop-blur-sm"> {/* Added some transparency and blur to card */}
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Key Milestones</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {milestones.map((milestone, index) => (
                  <li key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/80 transition-colors">
                    <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-foreground">{milestone.event}</span>
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
