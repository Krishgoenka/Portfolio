
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
    imageHint: 'resume analysis',
    gifUrl: 'https://placehold.co/600x400.png',
    gifHint: 'scoring animation',
    techStack: ['Python', 'Flask', 'NLTK', 'spaCy', 'Scikit-learn', 'React', 'MongoDB'],
    challenges: 'Handling diverse resume formats, accurately extracting skills and experience, and ensuring fairness in the matching algorithm.',
    outcome: 'Successfully created a functional ATS prototype capable of processing resumes and providing actionable feedback. Improved candidate shortlisting efficiency.',
    liveLink: 'https://gdschackathon-u2mbyvry37oho6bgf4gx68.streamlit.app/',
    repoLink: 'https://github.com/Krishgoenka/Resume-Advisor-APP',
  },
  {
    id: 'isro-hackathon',
    title: 'Shashipath (ISRO Hackathon – Lunar Rover Navigation)',
    shortDescription: 'Crater detection and optimal pathfinding using image processing.',
    longDescription: 'Participated in the ISRO National Hackathon, focusing on developing an algorithm for lunar rover navigation. The project involved image processing techniques for crater detection from satellite imagery and A* search algorithm for finding the safest and most optimal path for the rover.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'moon rover',
    gifUrl: 'https://placehold.co/600x400.png',
    gifHint: 'pathfinding map',
    techStack: ['Python', 'OpenCV', 'NumPy', 'Matplotlib', 'A* Algorithm'],
    challenges: 'Low-resolution satellite imagery, real-time processing constraints, and robust crater identification in varied lighting conditions.',
    outcome: 'Developed a functional prototype for crater detection and path planning. Presented the solution to ISRO scientists and received commendation for the innovative approach.',
    repoLink: 'https://github.com/Krishgoenka/Shashipath',
  },
  {
    id: 'ai-unite-hackathon', // ID remains the same for mapping, content changes
    title: 'Brain Tumour Detection using MRI',
    shortDescription: 'AI model to detect and classify brain tumors from MRI scans.',
    longDescription: 'Developed a deep learning model (CNN-based) to analyze MRI images for the presence of brain tumors. The system aims to assist medical professionals by highlighting potential tumorous regions and classifying tumor types, improving diagnostic accuracy and speed.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'MRI brain',
    gifUrl: 'https://placehold.co/600x400.png',
    gifHint: 'detection animation',
    techStack: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'DICOM', 'Flask', 'Scikit-learn'],
    challenges: 'Achieving high accuracy with imbalanced datasets, handling variations in MRI scan quality, and ensuring model interpretability for medical use.',
    outcome: 'The model achieved promising results on test datasets, demonstrating potential for clinical application. Further validation and refinement are ongoing.',
    repoLink: 'https://github.com/Krishgoenka/Brain-Tumor--CNN-model',
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

