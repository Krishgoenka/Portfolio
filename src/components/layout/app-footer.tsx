import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Github } from 'lucide-react'; // Assuming Github might be useful

export default function AppFooter() {
  return (
    <footer id="connect" className="border-t bg-background/80 py-12 backdrop-blur">
      <div className="container text-center">
        <h2 className="font-headline text-3xl font-bold text-foreground mb-6">Let’s Connect</h2>
        <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
          I’m always looking to collaborate, learn, and lead. Let’s build something extraordinary together.
        </p>
        <div className="flex justify-center items-center space-x-4 mb-8">
          <Button asChild variant="outline" className="neon-glow-primary rounded-full p-3">
            <a href="mailto:goenkakrish02@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email Krish Goenka">
              <Mail className="h-6 w-6" />
            </a>
          </Button>
          <Button asChild variant="outline" className="neon-glow-primary rounded-full p-3">
            <a href="https://www.linkedin.com/in/krish-goenka-" target="_blank" rel="noopener noreferrer" aria-label="Krish Goenka's LinkedIn Profile">
              <Linkedin className="h-6 w-6" />
            </a>
          </Button>
          {/* Optional Github link */}
          <Button asChild variant="outline" className="neon-glow-primary rounded-full p-3">
             <a href="https://github.com/krishgoenka02" target="_blank" rel="noopener noreferrer" aria-label="Krish Goenka's Github Profile">
              <Github className="h-6 w-6" />
            </a>
          </Button>
        </div>
        <div className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Krish Goenka. All rights reserved.
          <p className="mt-1">Built with Next.js and Tailwind CSS.</p>
        </div>
         {/* Subtle neural network animation - placeholder for now, can be complex SVG/Canvas */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute -bottom-1/2 -left-1/2 h-[200%] w-[200%] animate-pulse bg-[radial-gradient(circle_at_center,_hsl(var(--primary)/0.1)_0%,_transparent_50%)]"></div>
        </div>
      </div>
    </footer>
  );
}
