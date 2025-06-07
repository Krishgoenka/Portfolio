
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Github, Code, X } from 'lucide-react'; // Changed Twitter to X

export default function AppFooter() {
  return (
    <footer id="connect" className="border-t border-border/60 bg-muted/30 py-16 backdrop-blur-sm">
      <div className="container text-center relative overflow-hidden">
         {/* Subtle background pattern */}
        <div className="absolute inset-0 -z-10 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="footerPattern" patternUnits="userSpaceOnUse" width="50" height="50" patternTransform="scale(1) rotate(45)">
                <path d="M25 0 V50 M0 25 H50" stroke="hsl(var(--primary))" strokeWidth="0.5" shapeRendering="crispEdges"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#footerPattern)" />
          </svg>
        </div>

        <h2 className="font-headline text-4xl font-bold text-foreground mb-6">Let’s Connect</h2>
        <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
          I’m passionate about leveraging AI to build innovative solutions. Let’s collaborate and create something impactful.
        </p>
        <div className="flex justify-center items-center space-x-6 mb-10">
          <Button asChild variant="outline" size="icon" className="rounded-full border-2 border-primary text-primary hover:bg-primary/10 neon-glow-primary">
            <a href="mailto:goenkakrish02@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email Krish Goenka">
              <Mail className="h-7 w-7" />
            </a>
          </Button>
          <Button asChild variant="outline" size="icon" className="rounded-full border-2 border-primary text-primary hover:bg-primary/10 neon-glow-primary">
            <a href="https://www.linkedin.com/in/krish-goenka-" target="_blank" rel="noopener noreferrer" aria-label="Krish Goenka's LinkedIn Profile">
              <Linkedin className="h-7 w-7" />
            </a>
          </Button>
          <Button asChild variant="outline" size="icon" className="rounded-full border-2 border-primary text-primary hover:bg-primary/10 neon-glow-primary">
             <a href="https://github.com/Krishgoenka" target="_blank" rel="noopener noreferrer" aria-label="Krish Goenka's Github Profile">
              <Github className="h-7 w-7" />
            </a>
          </Button>
          <Button asChild variant="outline" size="icon" className="rounded-full border-2 border-primary text-primary hover:bg-primary/10 neon-glow-primary">
            <a href="https://x.com/KrishgoenkaOG" target="_blank" rel="noopener noreferrer" aria-label="Krish Goenka's X (Twitter) Profile">
              <X className="h-7 w-7" /> {/* Changed from Twitter to X */}
            </a>
          </Button>
        </div>
        <div className="text-sm text-muted-foreground">
          <div className="flex items-center justify-center gap-1 mb-2">
            <Code className="h-4 w-4 text-primary" />
            <span>Designed & Developed by Krish Goenka</span>
          </div>
          &copy; {new Date().getFullYear()}. All rights reserved.
          <p className="mt-1">Built with Next.js, Tailwind CSS, and a touch of AI magic.</p>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-1/2 -z-10 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none"></div>
      </div>
    </footer>
  );
}
