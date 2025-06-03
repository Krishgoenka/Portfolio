
"use client";
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ExternalLink, Github, ListChecks, Zap } from 'lucide-react';
import React from 'react';
import { cn } from '@/lib/utils';

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  longDescription?: string;
  imageUrl: string;
  imageHint?: string;
  techStack: string[];
  challenges?: string;
  outcome?: string;
  liveLink?: string;
  repoLink?: string;
  gifUrl?: string;
  gifHint?: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [showGif, setShowGif] = React.useState(false);
  const cardRef = React.useRef<HTMLDivElement>(null);
  const [transformStyle, setTransformStyle] = React.useState<React.CSSProperties>({});

  React.useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateXRange = 6;
      const rotateYRange = 9;

      const rotateX = ((y - centerY) / centerY) * rotateXRange;
      const rotateY = ((centerX - x) / centerX) * rotateYRange;

      setTransformStyle({
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.04)`,
        transition: 'transform 0.05s linear'
      });
    };

    const handleMouseLeave = () => {
      setTransformStyle({
        transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)',
        transition: 'transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)'
      });
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
      setTransformStyle({
        transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)',
        transition: 'none'
      });
    };
  }, []);


  return (
    <Dialog>
      <Card
        ref={cardRef}
        className={cn(
          "overflow-hidden h-full flex flex-col certificate-shine animate-slide-in-left bg-card/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow duration-300 group"
        )}
        style={{
          ...transformStyle,
          animationDelay: `${index * 150}ms`
        }}
        onMouseEnter={() => project.gifUrl && setShowGif(true)}
        onMouseLeave={() => project.gifUrl && setShowGif(false)}
      >
        <div className="relative w-full h-56">
           <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover absolute inset-0 z-0"
            data-ai-hint={project.imageHint || "project technology"}
            priority={index < 2} // Prioritize loading for first few cards
            key={project.imageUrl}
          />
          {project.gifUrl && (
            <Image
              src={project.gifUrl}
              alt={`${project.title} animation`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={cn(
                "object-cover absolute inset-0 transition-opacity duration-300 ease-in-out",
                showGif ? 'opacity-100 z-10' : 'opacity-0 z-0'
              )}
              data-ai-hint={project.gifHint || "project animation"}
              unoptimized={true} // GIFs are often better unoptimized
              key={project.gifUrl}
            />
          )}
        </div>
        <CardHeader>
          <CardTitle className="font-headline text-2xl">{project.title}</CardTitle>
          <CardDescription>{project.shortDescription}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.techStack.map((tech) => (
              <span key={tech} className="px-2 py-1 text-xs bg-accent text-accent-foreground rounded-full">{tech}</span>
            ))}
          </div>
        </CardContent>
        <CardFooter className="mt-auto flex justify-between items-center gap-2">
          <DialogTrigger asChild>
            <Button variant="outline" className="neon-glow-primary flex-grow">View Details</Button>
          </DialogTrigger>
          {project.repoLink && (
            <Button asChild variant="ghost" size="icon" className="neon-glow-accent !p-2" title="View Code on GitHub">
              <a href={project.repoLink} target="_blank" rel="noopener noreferrer" aria-label="View Project Code on GitHub">
                <Github className="h-5 w-5" />
              </a>
            </Button>
          )}
        </CardFooter>
      </Card>

      <DialogContent className="sm:max-w-[625px] bg-card text-card-foreground border-border shadow-lg rounded-lg">
        <DialogHeader>
          <DialogTitle className="font-headline text-3xl text-primary">{project.title}</DialogTitle>
          <DialogDescription className="text-muted-foreground text-base pt-2">
            {project.shortDescription}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-6 py-4 text-sm max-h-[70vh] overflow-y-auto pr-3">
          {project.longDescription && <p>{project.longDescription}</p>}

          {project.imageUrl && (
            <div className="relative w-full h-64 my-4 rounded-md overflow-hidden border border-border">
               <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  style={{ objectFit: "contain" }}
                  data-ai-hint={project.imageHint || "project details"}
                  sizes="(max-width: 625px) 100vw, 570px"
                />
            </div>
          )}

          <div>
            <h4 className="font-semibold text-foreground mb-2 flex items-center"><ListChecks className="mr-2 h-5 w-5 text-primary" />Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span key={tech} className="px-3 py-1 text-xs bg-secondary text-secondary-foreground rounded-full">{tech}</span>
              ))}
            </div>
          </div>

          {project.challenges && (
            <div>
              <h4 className="font-semibold text-foreground mb-2 flex items-center"><Zap className="mr-2 h-5 w-5 text-primary" />Challenges</h4>
              <p className="text-muted-foreground">{project.challenges}</p>
            </div>
          )}
          {project.outcome && (
            <div>
              <h4 className="font-semibold text-foreground mb-2 flex items-center"><Zap className="mr-2 h-5 w-5 text-primary" />Outcome</h4>
              <p className="text-muted-foreground">{project.outcome}</p>
            </div>
          )}
          <div className="flex space-x-4 mt-4">
            {project.liveLink && (
              <Button asChild variant="default" className="neon-glow-accent">
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                </a>
              </Button>
            )}
            {project.repoLink && (
              <Button asChild variant="outline">
                <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" /> View Code
                </a>
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
