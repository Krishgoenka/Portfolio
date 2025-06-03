
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
    id: 'microsoft-ai-challenge',
    title: 'Microsoft AI Skills Challenge Completion',
    issuer: 'Microsoft Learn',
    date: 'Apr 2024',
    imageUrl: 'https://drive.google.com/uc?export=view&id=1xUlyw2zj0nfZWCIcObZGF53l_-1yfDZH',
    imageHint: 'Microsoft AI challenge',
    verifyLink: '#', 
  },
  {
    id: 'isro-hackathon-cert',
    title: 'Bharatiya Antariksh Hackathon: Space App Challenge 2024',
    issuer: 'ISRO & Hack2Skill',
    date: 'Feb 2024',
    imageUrl: 'https://drive.google.com/uc?export=view&id=1OvvOIIwpglihakNev2XUg0yQ3ybVUJpp',
    imageHint: 'ISRO hackathon certificate',
    verifyLink: 'https://certificate.hack2skill.com/user/isrobahp/2024H2S07ISRO-P00712',
  },
  {
    id: 'gen-ai-google',
    title: 'Introduction to Generative AI',
    issuer: 'Google Cloud Skills Boost',
    date: 'Jan 2024',
    imageUrl: 'https://drive.google.com/uc?export=view&id=1OkHmZm7L2VtY-BAWRs15eIx2mtTV2NW-',
    imageHint: 'Google GenAI certificate',
    verifyLink: 'https://www.cloudskillsboost.google/public_profiles/e467adc1-3427-4761-8a57-642ef8378d37/badges/5505890',
  },
  {
    id: 'ai-unite-finalist',
    title: 'AI Unite Hackathon Finalist',
    issuer: 'AI Unite Org',
    date: 'Mar 2024',
    imageUrl: 'https://drive.google.com/uc?export=view&id=1JWwNfqisjTh3Eb7KFyeNVbUQIW4oHa2N',
    imageHint: 'AI hackathon finalist certificate',
    verifyLink: '#', 
  },
  {
    id: 'kaggle-intermediate-ml',
    title: 'Intermediate Machine Learning',
    issuer: 'Kaggle Learn',
    date: 'Feb 2024',
    imageUrl: 'https://drive.google.com/uc?export=view&id=12tLt5RI_P-DR21bdgK066kXQdF9Jqhiw',
    imageHint: 'Kaggle ML certificate',
    verifyLink: 'https://www.kaggle.com/learn/certification/krishgoenka/intermediate-machine-learning',
  },
  {
    id: 'infosys-ai-intro',
    title: 'Introduction to AI',
    issuer: 'Infosys Springboard',
    date: 'Date N/A', // Placeholder date
    imageUrl: 'https://drive.google.com/uc?export=view&id=11MJI2HNxcdQdMhjYjfE04L70FDk9hqss',
    imageHint: 'Infosys AI certificate',
    verifyLink: '#', // Placeholder link
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
                  style={{ objectFit: 'cover' }}
                  className="w-full h-auto object-cover"
                  data-ai-hint={cert.imageHint}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index < 2} 
                />
              </div>
              <CardContent className="p-4 bg-card/80 backdrop-blur-sm flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-headline text-lg font-semibold text-foreground">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{cert.issuer} - {cert.date}</p>
                </div>
                {cert.verifyLink && cert.verifyLink !== '#' && (
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

