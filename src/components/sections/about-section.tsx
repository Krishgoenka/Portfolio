
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

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="scroll-reveal">
          <Card className="overflow-hidden shadow-xl">
            <div className="relative h-80 w-full"> {/* Increased height for better portrait display */}
              <Image 
                src="https://placehold.co/400x500.png" // Placeholder for user's image, 4:5 ratio
                alt="Krish Goenka - Profile Picture" 
                fill // Replaced layout="fill" with fill={true}
                objectFit="cover"
                data-ai-hint="professional portrait Krish Goenka" // Updated hint for user's image
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-primary-foreground">
                <h3 className="font-headline text-2xl font-semibold">Krish Goenka</h3>
                <p className="text-sm">AI/ML Enthusiast & Innovator</p>
              </div>
            </div>
            <CardContent className="p-6">
              <p className="text-lg mb-4 text-foreground/90">
                From crafting AI-powered solutions to participating in national hackathons like ISRO & AI Unite, I blend curiosity with code to solve real-world problems.
              </p>
              <p className="text-lg italic text-primary">
                My journey in AI began not with a textbook, but with a question: <br/> "How can machines think smarter, not harder?"
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="scroll-reveal">
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Key Milestones</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {milestones.map((milestone, index) => (
                  <li key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted transition-colors">
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
