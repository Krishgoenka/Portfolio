
import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import AppHeader from '@/components/layout/app-header';
import AppFooter from '@/components/layout/app-footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

// SEO Optimized Metadata
const siteUrl = 'https://yourdomain.com'; // IMPORTANT: Replace with your actual domain
const heroImageUrl = 'https://drive.google.com/uc?export=view&id=1NX8A_ItLHb3x3JyvlPTngiAewSoBUsy9';
const siteName = 'Krish Goenka - AI/ML Portfolio';
const twitterHandle = '@YourTwitterHandle'; // Replace if you have one

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Krish Goenka | AI/ML & Generative AI Portfolio',
  description: 'Explore the AI/ML & Generative AI portfolio of Krish Goenka, a passionate Computer Science student specializing in Artificial Intelligence and innovative tech solutions. Discover projects, skills, and experience in machine learning, deep learning, NLP, and AI agent development.',
  keywords: ['Krish Goenka', 'Krish Goenka Portfolio', 'AI Portfolio', 'ML Portfolio', 'Generative AI', 'Artificial Intelligence', 'Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision', 'AI Developer', 'CSE AI Student', 'Techno India University', 'AI Innovator', 'Python', 'TensorFlow', 'LangChain'],
  authors: [{ name: 'Krish Goenka', url: siteUrl }],
  creator: 'Krish Goenka',
  publisher: 'Krish Goenka',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: 'Krish Goenka | AI/ML & Generative AI Portfolio',
    description: 'Discover Krish Goenka\'s innovative projects and expertise in AI, Machine Learning, and Generative AI. A CSE student passionate about building intelligent solutions.',
    url: siteUrl,
    siteName: siteName,
    images: [
      {
        url: heroImageUrl,
        width: 1200,
        height: 630,
        alt: 'Krish Goenka - AI Portfolio Hero Image',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Krish Goenka | AI/ML & Generative AI Portfolio',
    description: 'Explore Krish Goenka\'s work in AI, Machine Learning, and Generative AI. Passionate CSE student building the future of intelligent systems.',
    site: twitterHandle, // Optional: if you have a Twitter handle for the site
    creator: twitterHandle, // Optional: your personal Twitter handle
    images: [heroImageUrl],
  },
  icons: {
    icon: '/favicon.ico', // Standard favicon
    shortcut: '/favicon.ico', // Older browsers
    apple: '/apple-touch-icon.png', // Apple touch icon
    // You can add other sizes or types if needed, e.g.:
    // other: [
    //   { rel: 'icon', type: 'image/png', sizes: '32x32', url: '/favicon-32x32.png' },
    //   { rel: 'icon', type: 'image/png', sizes: '16x16', url: '/favicon-16x16.png' },
    // ],
  },
  manifest: '/site.webmanifest', // Standard PWA manifest file
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Standard Google Font links are preferred for this project */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet" />
        {/* The manifest link is now handled by Next.js metadata object */}
        <meta name="google-site-verification" content="1b87uVK69rxeLVBV6Cq-6-IKjw_ejsAa-s3TKrqVRpo" />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-body antialiased`} suppressHydrationWarning={true}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <AppHeader />
          <main>{children}</main>
          <AppFooter />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
