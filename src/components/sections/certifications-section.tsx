"use client";
import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Award, ExternalLink } from 'lucide-react';
import { useScrollReveal } from '@/hooks/use-scroll-spy';

interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  imageUrl: string;
  imageHint: string;
  verifyLink?: string;
}

const certificationsData: Certification[] = [
  {
    id: 'gcp-aiml-badge',
    title: 'Google Cloud AI/ML Lab Badges',
    issuer: 'Google Cloud',
    date: 'Ongoing',
    imageUrl: 'https://placehold.co/400x250.png',
    imageHint: 'Google Cloud badge',
    verifyLink: '#',
  },
  {
    id: 'isro-hackathon-cert',
    title: 'ISRO Hackathon Participation Certificate',
    issuer: 'ISRO',
    date: 'Dec 2023',
    imageUrl: 'https://placehold.co/400x250.png',
    imageHint: 'ISRO certificate',
    verifyLink: '#',
  },
  {
    id: 'gen-ai-google',
    title: 'Introduction to Generative AI',
    issuer: 'Google',
    date: 'Jan 2024',
    imageUrl: 'https://placehold.co/400x250.png',
    imageHint: 'Google AI certificate',
    verifyLink: '#',
  },
  {
    id: 'ai-unite-finalist',
    title: 'AI Unite Hackathon Finalist',
    issuer: 'AI Unite Org',
    date: 'Mar 2024',
    imageUrl: 'https://placehold.co/400x250.png',
    imageHint: 'AI hackathon certificate',
    verifyLink: '#',
  },
];

export default function CertificationsSection() {
  useScrollReveal();
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % certificationsData.length);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + certificationsData.length) % certificationsData.length);
  };

  useEffect(() => {
    const timer = setTimeout(nextSlide, 5000); // Auto-scroll every 5 seconds
    return () => clearTimeout(timer);
  }, [currentIndex, nextSlide]);

  return (
    <section id="certifications" className="container">
      <div className="text-center mb-12 scroll-reveal">
        <h2 className="font-headline text-4xl font-bold">Certifications & Achievements</h2>
        <p className="text-xl text-muted-foreground mt-2">Recognitions of my skills and efforts.</p>
      </div>

      <div className="relative scroll-reveal">
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {certificationsData.map((cert) => (
              <div key={cert.id} className="w-full flex-shrink-0 px-2">
                <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow certificate-shine relative group">
                  <Image
                    src={cert.imageUrl}
                    alt={cert.title}
                    width={600}
                    height={375}
                    className="w-full h-auto object-cover aspect-[16/10]"
                    data-ai-hint={cert.imageHint}
                  />
                  <CardContent className="p-4 bg-card/80 backdrop-blur-sm">
                    <h3 className="font-headline text-lg font-semibold text-foreground">{cert.title}</h3>
                    <p className="text-sm text-muted-foreground">{cert.issuer} - {cert.date}</p>
                    {cert.verifyLink && (
                       <a 
                         href={cert.verifyLink} 
                         target="_blank" 
                         rel="noopener noreferrer"
                         className="inline-flex items-center text-xs text-primary hover:underline mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                       >
                         Verify <ExternalLink className="ml-1 h-3 w-3" />
                       </a>
                    )}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {certificationsData.length > 1 && (
          <>
            <Button
              variant="outline"
              size="icon"
              className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 z-10 rounded-full bg-background/50 hover:bg-background/80"
              onClick={prevSlide}
              aria-label="Previous certification"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 z-10 rounded-full bg-background/50 hover:bg-background/80"
              onClick={nextSlide}
              aria-label="Next certification"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </>
        )}
         <div className="flex justify-center mt-6 space-x-2">
          {certificationsData.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${currentIndex === index ? 'bg-primary w-4' : 'bg-muted hover:bg-muted-foreground/50'}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to certification ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
