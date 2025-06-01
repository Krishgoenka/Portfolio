"use client";
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ExternalLink, Github, ListChecks, Zap } from 'lucide-react';
import React from 'react';

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
  gifUrl?: string; // For mini live animation
  gifHint?: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [showGif, setShowGif] = React.useState(false);

  return (
    <Dialog>
      <Card 
        className="overflow-hidden h-full flex flex-col hover:shadow-2xl transition-all duration-300 certificate-shine animate-slide-in-left"
        style={{ animationDelay: `${index * 150}ms` }}
        onMouseEnter={() => project.gifUrl && setShowGif(true)}
        onMouseLeave={() => project.gifUrl && setShowGif(false)}
      >
        <div className="relative w-full h-56">
          {showGif && project.gifUrl ? (
             <Image 
                src={project.gifUrl} 
                alt={`${project.title} animation`} 
                layout="fill" 
                objectFit="cover" 
                data-ai-hint={project.gifHint || "project animation"}
              />
          ) : (
            <Image 
              src={project.imageUrl} 
              alt={project.title} 
              layout="fill" 
              objectFit="cover" 
              data-ai-hint={project.imageHint || "project technology"}
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
        <CardFooter className="mt-auto">
          <DialogTrigger asChild>
            <Button variant="outline" className="w-full neon-glow-primary">View Details</Button>
          </DialogTrigger>
        </CardFooter>
      </Card>

      <DialogContent className="sm:max-w-[625px] bg-card text-card-foreground border-border shadow-lg rounded-lg">
        <DialogHeader>
          <DialogTitle className="font-headline text-3xl text-primary">{project.title}</DialogTitle>
          <DialogDescription className="text-muted-foreground text-base pt-2">
            {project.shortDescription}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-6 py-4 text-sm">
          {project.longDescription && <p>{project.longDescription}</p>}
          
          {project.gifUrl && (
            <div className="relative w-full h-64 my-4 rounded-md overflow-hidden border border-border">
               <Image 
                  src={project.gifUrl} 
                  alt={`${project.title} animation`} 
                  layout="fill" 
                  objectFit="contain"
                  data-ai-hint={project.gifHint || "project demo"}
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
