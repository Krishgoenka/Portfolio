
"use client";
import Link from 'next/link';
import { DarkModeToggle } from '@/components/dark-mode-toggle';
import { Button } from '@/components/ui/button';
import { Code, Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import React from 'react';

const NAV_ITEMS = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#connect', label: 'Connect' },
];

export default function AppHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const NavLinks = ({isMobile}: {isMobile?: boolean}) => (
    <>
      {NAV_ITEMS.map((item) => (
        <Button
          key={item.label}
          variant="link"
          asChild
          className={`text-foreground hover:text-primary transition-colors duration-300 ${isMobile ? 'w-full justify-start text-lg py-3' : 'text-sm'}`}
          onClick={() => isMobile && setIsMobileMenuOpen(false)}
        >
          <Link href={item.href}>{item.label}</Link>
        </Button>
      ))}
    </>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-lg supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between"> {/* Increased height slightly */}
        <Link href="/" className="flex items-center gap-2 group">
          <Code className="h-7 w-7 text-primary group-hover:text-accent transition-colors duration-300" /> {/* Slightly larger icon */}
          <span className="font-headline text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">Krish Goenka</span>
        </Link>
        
        <nav className="hidden items-center space-x-1 md:flex"> {/* Reduced space for tighter look */}
          <NavLinks />
        </nav>

        <div className="flex items-center gap-2">
          <DarkModeToggle />
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs p-6 bg-background/95 border-l border-border/60">
              <div className="flex flex-col space-y-4">
                <NavLinks isMobile />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
