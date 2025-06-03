
"use client";
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CalendarDays, Users, Presentation, MapPin } from 'lucide-react';
import { useScrollReveal } from '@/hooks/use-scroll-spy';

interface ExperienceItem {
  role: string;
  organization: string;
  duration: string;
  description: string;
  icon: React.ReactNode;
  location?: string;
}

const experiences: ExperienceItem[] = [
  {
    role: 'Core Lead, AIML Facilitator',
    organization: 'GDG on Campus @ Techno India',
    duration: '2023 - Present',
    description: 'Leading AI/ML initiatives, organizing impactful workshops, and fostering a vibrant community of AI enthusiasts on campus. Facilitated engaging sessions on Generative AI and core Machine Learning fundamentals.',
    icon: <Users className="h-6 w-6 text-primary" />,
    location: 'Kolkata, West Bengal'
  },
  {
    role: 'AI/ML Workshop Head',
    organization: 'Techno Vivarta (Annual Tech Fest)',
    duration: '2023 - Present',
    description: 'Spearheaded the planning and execution of AI/ML workshops for the university\'s annual tech fest. Responsibilities included curriculum development, speaker coordination, and managing logistics for hands-on learning experiences.',
    icon: <Presentation className="h-6 w-6 text-primary" />,
    location: 'Techno India University'
  },
];

export default function ExperienceSection() {
  useScrollReveal();

  return (
    <section id="experience" className="bg-secondary/30">
      <div className="container">
        <div className="text-center mb-12 scroll-reveal">
          <h2 className="font-headline text-4xl font-bold">Experience Timeline</h2>
          <p className="text-xl text-muted-foreground mt-2">My professional journey and contributions.</p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-1 bg-border rounded-full transform -translate-x-1/2"></div>

          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className={`mb-12 md:mb-8 flex md:items-center w-full scroll-reveal ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="hidden md:block md:w-1/2"></div> {/* Spacer for desktop */}
              <div className="md:w-1/2 md:pl-8 relative">
                 {/* Dot on timeline */}
                <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 h-5 w-5 rounded-full bg-primary border-4 border-background shadow-md timeline-dot-animated ${index % 2 === 0 ? '-left-2 transform -translate-x-full' : '-left-2 transform -translate-x-0' }`}></div>

                <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary/10 rounded-full">
                          {React.cloneElement(exp.icon, { className: "h-6 w-6 text-primary" })}
                        </div>
                        <CardTitle className="font-headline text-xl">{exp.role}</CardTitle>
                      </div>
                    </div>
                    <CardDescription className="text-sm text-muted-foreground">
                      {exp.organization}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-xs text-muted-foreground mb-3">
                      <CalendarDays className="h-4 w-4 mr-2" /> {exp.duration}
                      {exp.location && <><MapPin className="h-4 w-4 mr-2 ml-4" /> {exp.location}</>}
                    </div>
                    <p className="text-foreground/90">{exp.description}</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

