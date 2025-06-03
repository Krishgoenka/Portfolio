
"use client";
import ProjectCard, { Project } from '@/components/project-card';
import { useScrollReveal } from '@/hooks/use-scroll-spy';

const projectsData: Project[] = [
  {
    id: 'resume-advisor',
    title: 'Resume Advisor (ATS System)',
    shortDescription: 'AI-powered system for skill-gap identification and candidate-job matching.',
    longDescription: `Resume Advisor is a cutting-edge platform developed to address the frustrations faced by job seekers due to the lack of feedback on their resumes. This innovative tool provides personalized insights into resume weaknesses, suggests skill improvements, and identifies crucial keywords for optimization, significantly enhancing job seekers' chances of success in the competitive job market.

Key Features:
• Role Selection: Users select their role as either an Applicant or HR professional.
• Resume & JD Analysis (Applicant): Applicants upload resumes (PDF) and target job descriptions to receive personalized feedback, identify missing points, and get suggestions for improvement.
• Job Description Analysis (HR & Applicant): HR professionals and applicants can upload job descriptions to receive a summary of resumes and a percentage match, identifying crucial points for the position.
• Personalized Feedback: The platform analyzes resumes against job descriptions, identifies weaknesses, and suggests enhancements.
• ATS Optimization: Helps optimize resumes for Applicant Tracking Systems (ATS) by identifying and incorporating relevant keywords.

This tool empowers users to refine their resumes effectively and helps HR professionals streamline their recruitment process.`,
    imageUrl: 'https://drive.google.com/uc?export=view&id=1SVN_oDaA2uUBGTha4VonAvIxpjPdxMDQ',
    imageHint: 'resume ATS',
    gifUrl: 'https://placehold.co/600x400.png',
    gifHint: 'scoring animation',
    techStack: ['Python', 'Flask', 'NLTK', 'spaCy', 'Scikit-learn', 'React', 'MongoDB', 'Streamlit'],
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

