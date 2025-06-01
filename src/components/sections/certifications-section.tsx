
"use client";
import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';
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

  return (
    <section id="certifications" className="container">
      <div className="text-center mb-12 scroll-reveal">
        <h2 className="font-headline text-4xl font-bold">Certifications & Achievements</h2>
        <p className="text-xl text-muted-foreground mt-2">Recognitions of my skills and efforts.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 scroll-reveal">
        {certificationsData.map((cert, index) => (
          <div 
            key={cert.id} 
            className="scroll-reveal"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow certificate-shine relative group h-full flex flex-col">
              <div className="relative w-full aspect-[16/10]">
                <Image
                  src={cert.imageUrl}
                  alt={cert.title}
                  fill
                  objectFit="cover"
                  className="w-full h-auto object-cover"
                  data-ai-hint={cert.imageHint}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <CardContent className="p-4 bg-card/80 backdrop-blur-sm flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-headline text-lg font-semibold text-foreground">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{cert.issuer} - {cert.date}</p>
                </div>
                {cert.verifyLink && (
                   <a 
                     href={cert.verifyLink} 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="inline-flex items-center text-xs text-primary hover:underline mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 self-start"
                   >
                     Verify <ExternalLink className="ml-1 h-3 w-3" />
                   </a>
                )}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}
