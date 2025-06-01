"use client";
import ProjectCard, { Project } from '@/components/project-card';
import { useScrollReveal } from '@/hooks/use-scroll-spy';

const projectsData: Project[] = [
  {
    id: 'resume-advisor',
    title: 'Resume Advisor (ATS System)',
    shortDescription: 'AI-powered system for skill-gap identification and candidate-job matching.',
    longDescription: 'Developed an AI-driven Applicant Tracking System (ATS) that analyzes resumes against job descriptions. It identifies skill gaps, scores resumes based on relevance, and helps candidates optimize their applications for better job matching. The system uses NLP techniques for parsing and understanding resume content.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'resume analysis interface',
    gifUrl: 'https://placehold.co/600x400.png', // Placeholder GIF
    gifHint: 'resume scoring animation',
    techStack: ['Python', 'Flask', 'NLTK', 'spaCy', 'Scikit-learn', 'React', 'MongoDB'],
    challenges: 'Handling diverse resume formats, accurately extracting skills and experience, and ensuring fairness in the matching algorithm.',
    outcome: 'Successfully created a functional ATS prototype capable of processing resumes and providing actionable feedback. Improved candidate shortlisting efficiency.',
    liveLink: '#', // Placeholder
    repoLink: 'https://github.com/krishgoenka02/Resume-Advisor',
  },
  {
    id: 'isro-hackathon',
    title: 'ISRO Hackathon – Lunar Rover Navigation',
    shortDescription: 'Crater detection and optimal pathfinding using image processing.',
    longDescription: 'Participated in the ISRO National Hackathon, focusing on developing an algorithm for lunar rover navigation. The project involved image processing techniques for crater detection from satellite imagery and A* search algorithm for finding the safest and most optimal path for the rover.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'moon rover path',
    gifUrl: 'https://placehold.co/600x400.png', // Placeholder GIF
    gifHint: 'rover pathfinding map',
    techStack: ['Python', 'OpenCV', 'NumPy', 'Matplotlib', 'A* Algorithm'],
    challenges: 'Low-resolution satellite imagery, real-time processing constraints, and robust crater identification in varied lighting conditions.',
    outcome: 'Developed a functional prototype for crater detection and path planning. Presented the solution to ISRO scientists and received commendation for the innovative approach.',
    repoLink: 'https://github.com/krishgoenka02/ISRO-Hackathon-Lunar-Rover',
  },
  {
    id: 'ai-unite-hackathon',
    title: 'AI Unite Hackathon Finalist',
    shortDescription: 'Scalable AI apps built under pressure in a competitive environment.',
    longDescription: 'Reached the finals of AI Unite Hackathon by developing a scalable AI application within a limited timeframe. The project focused on [Specify the project idea, e.g., an AI-powered customer support chatbot or a predictive maintenance tool]. This experience honed my skills in rapid prototyping and deploying AI solutions.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'hackathon team collaboration',
    gifUrl: 'https://placehold.co/600x400.png', // Placeholder GIF
    gifHint: 'app interface demo',
    techStack: ['Python', 'FastAPI', 'Docker', 'Generative AI (LLMs)', 'Vector Databases'],
    challenges: 'Time constraints, ensuring scalability of the AI model, and integrating various components smoothly under pressure.',
    outcome: 'Successfully built and presented a working AI application, earning a finalist position. Gained valuable experience in high-pressure development and teamwork.',
    // liveLink: '#', // Add if applicable
    // repoLink: '#', // Add if applicable
  },
];

export default function ProjectsSection() {
  useScrollReveal();

  return (
    <section id="projects" className="container">
      <div className="text-center mb-12 scroll-reveal">
        <h2 className="font-headline text-4xl font-bold">My Projects</h2>
        <p className="text-xl text-muted-foreground mt-2">A glimpse into what I've built.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <div key={project.id} className="scroll-reveal">
             <ProjectCard project={project} index={index} />
          </div>
        ))}
      </div>
    </section>
  );
}
