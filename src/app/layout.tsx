
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
const twitterHandle = '@YourTwitterHandle'; // IMPORTANT: Replace if you have one
const personName = 'Krish Goenka';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${personName}: AI/ML Innovator & Generative AI Portfolio`,
  description: `Meet ${personName}, an AI/ML Developer and Computer Science student specializing in Generative AI. Explore ${personName}'s portfolio of cutting-edge projects, skills, and experience in machine learning, deep learning, NLP, and AI agent development.`,
  keywords: [personName, `${personName} Portfolio`, 'Portfolio of Krish Goenka', 'AI Portfolio', 'ML Portfolio', 'Generative AI', 'Artificial Intelligence', 'Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision', 'AI Developer', 'CSE AI Student', 'Techno India University', 'AI Innovator', 'Python', 'TensorFlow', 'LangChain'],
  authors: [{ name: personName, url: siteUrl }],
  creator: personName,
  publisher: personName,
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
    title: `${personName}: AI/ML Innovator & Generative AI Portfolio`,
    description: `Official portfolio of ${personName}, showcasing innovative projects and expertise in AI, Machine Learning, and Generative AI. Connect with ${personName}, a CSE student building intelligent solutions.`,
    url: siteUrl,
    siteName: siteName,
    images: [
      {
        url: heroImageUrl,
        width: 1200,
        height: 630,
        alt: `${personName} - AI Portfolio Hero Image`,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${personName}: AI/ML Innovator & Generative AI Portfolio`,
    description: `The official portfolio of ${personName}. Explore ${personName}'s impactful work in AI, Machine Learning, and Generative AI. A passionate CSE student building the future of intelligent systems.`,
    site: twitterHandle,
    creator: twitterHandle,
    images: [heroImageUrl],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": personName,
  "url": siteUrl,
  "jobTitle": "AI/ML Developer & Innovator, Computer Science Student",
  "image": heroImageUrl,
  "sameAs": [ // Add your social media and other relevant profiles here
    "https://www.linkedin.com/in/krish-goenka-", // Example
    "https://github.com/Krishgoenka", // Example
    // Add more links if available (e.g., Twitter, personal blog)
  ],
  "description": `Portfolio of ${personName}, an AI/ML enthusiast specializing in Generative AI, Deep Learning, and Computer Vision.`,
  "knowsAbout": ["Artificial Intelligence", "Machine Learning", "Generative AI", "Deep Learning", "NLP", "Computer Vision", "Python", "TensorFlow"]
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
        <meta name="google-site-verification" content="1b87uVK69rxeLVBV6Cq-6-IKjw_ejsAa-s3TKrqVRpo" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
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
