
"use client";
import ProjectCard, { Project } from '@/components/project-card';
import { useScrollReveal } from '@/hooks/use-scroll-spy';

const projectsData: Project[] = [
  {
    id: 'resume-advisor',
    title: 'Resume Advisor (ATS System)',
    shortDescription: 'AI-powered system for skill-gap identification and candidate-job matching.',
    longDescription: `Resume Advisor is an AI-powered platform designed to help job seekers improve their resumes. It allows users (Applicants or HR) to upload resumes (PDFs) and job descriptions. The system analyzes these documents to provide personalized feedback, identify skill gaps, suggest improvements, and optimize for Applicant Tracking Systems (ATS) by highlighting crucial keywords. The goal is to enhance a candidate's chances in the competitive job market by offering actionable insights.`,
    imageUrl: 'https://drive.google.com/uc?export=view&id=1SVN_oDaA2uUBGTha4VonAvIxpjPdxMDQ',
    imageHint: 'resume ATS',
    gifUrl: 'https://placehold.co/600x400.png',
    gifHint: 'scoring animation',
    techStack: ['Python', 'NLTK', 'Streamlit', 'Gemini API'],
    challenges: 'Handling diverse resume formats, accurately extracting skills and experience, and ensuring fairness in the matching algorithm.',
    outcome: 'Successfully created a functional ATS prototype capable of processing resumes and providing actionable feedback. Improved candidate shortlisting efficiency.',
    liveLink: 'https://gdschackathon-u2mbyvry37oho6bgf4gx68.streamlit.app/',
    repoLink: 'https://github.com/Krishgoenka/Resume-Advisor-APP',
  },
  {
    id: 'isro-hackathon',
    title: 'Shashipath (ISRO Hackathon – Lunar Rover Navigation)',
    shortDescription: 'Crater detection and optimal pathfinding using image processing (Ongoing).',
    longDescription: 'Participated in the ISRO National Hackathon, focusing on developing an algorithm for lunar rover navigation. The project involved image processing techniques for crater detection from satellite imagery and A* search algorithm for finding the safest and most optimal path for the rover.',
    imageUrl: 'https://drive.google.com/uc?export=view&id=1v01yl9YWRs6eQomgBZagwBVhGWZ8yPJW',
    imageHint: 'lunar navigation',
    gifUrl: 'https://placehold.co/600x400.png',
    gifHint: 'pathfinding map',
    techStack: ['Python', 'OpenCV', 'NumPy', 'Matplotlib', 'A* Algorithm'],
    challenges: 'Low-resolution satellite imagery, real-time processing constraints, and robust crater identification in varied lighting conditions.',
    outcome: 'Developed a functional prototype for crater detection and path planning. Presented the solution to ISRO scientists and received commendation for the innovative approach.',
    repoLink: 'https://github.com/Krishgoenka/Shashipath',
  },
  {
    id: 'ai-unite-hackathon',
    title: 'Brain Tumour Detection using MRI',
    shortDescription: 'AI model to detect and classify brain tumors from MRI scans.',
    longDescription: "Developed during the AI Unite Hackathon by team nvAI, this project utilizes Machine Learning, Computer Vision, and Segmentation techniques with a CNN-based model to detect brain tumors from MRI images. The model, which achieved an 89% accuracy on its test dataset, aims to assist medical professionals by highlighting potential tumorous regions and classifying tumor types, thereby improving diagnostic accuracy and speed. The server component is powered by Flask, hosted on a Linode instance, accepting MRI images and returning detailed JSON responses.",
    imageUrl: 'https://drive.google.com/uc?export=view&id=1irxxdl3Ji2fYOiW7PfXXG8BGFluf-sXW',
    imageHint: 'brain MRI',
    gifUrl: 'https://placehold.co/600x400.png',
    gifHint: 'detection animation',
    techStack: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'DICOM', 'Flask', 'Scikit-learn', 'React'],
    challenges: 'Achieving high accuracy with imbalanced datasets, handling variations in MRI scan quality, and ensuring model interpretability for medical use.',
    outcome: 'The model achieved an 89% accuracy on test data, demonstrating potential for clinical application. As part of team nvAI, this project was recognized as a Finalist in the AI Unite Hackathon.',
    repoLink: 'https://github.com/Krishgoenka/Brain-Tumor--CNN-model',
    liveLink: 'https://nv-ai.vercel.app/',
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

