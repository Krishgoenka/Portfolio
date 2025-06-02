
"use client";
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Brain, Layers, Bot, Cpu, Code, Settings, Database, Cloud, Briefcase, Palette } from 'lucide-react';
import { useScrollReveal } from '@/hooks/use-scroll-spy';

const skillCategories = [
  {
    categoryName: 'AI/ML Core & Specializations',
    icon: <Brain className="h-8 w-8 text-primary" />,
    skills: [
      { name: 'Machine Learning', description: "Classical algorithms (SVM, Regression, Clustering, Decision Trees), ensemble methods (Random Forests, Gradient Boosting)." },
      { name: 'Deep Learning', description: "Architectures (CNNs, RNNs, LSTMs, Transformers), training techniques, optimization." },
      { name: 'Computer Vision', description: "Image classification, object detection, segmentation, image generation." },
      { name: 'Natural Language Processing', description: "Text analysis, sentiment analysis, NMT, summarization, question answering." },
    ]
  },
  {
    categoryName: 'Generative AI & AI Agents',
    icon: <Bot className="h-8 w-8 text-primary" />,
    skills: [
      { name: 'Large Language Models (LLMs)', description: "Prompt engineering, fine-tuning, RAG, LLM Ops, model evaluation." },
      { name: 'Generative Models', description: "GANs, VAEs, Diffusion Models for image and data synthesis." },
      { name: 'AI Agent Development', description: "Building autonomous agents, multi-agent systems, planning, tool use." },
    ]
  },
  {
    categoryName: 'Software & Data Engineering',
    icon: <Code className="h-8 w-8 text-primary" />,
    skills: [
      { name: 'Programming Languages', description: "Python (Advanced), TypeScript/JavaScript, C/C++, Java." },
      { name: 'Data Engineering', description: "ETL pipelines, data warehousing, Big Data tools (Spark, Hadoop - basic understanding)." },
      { name: 'Databases', description: "SQL (PostgreSQL, MySQL), NoSQL (MongoDB, Firebase Firestore), Vector Databases (Pinecone, Milvus)." },
    ]
  },
  {
    categoryName: 'Tools, Platforms & DevOps',
    icon: <Settings className="h-8 w-8 text-primary" />,
    skills: [
      { name: 'AI/ML Frameworks', description: "TensorFlow, PyTorch, Keras, Scikit-learn, Hugging Face Transformers." },
      { name: 'GenAI Development Tools', description: "LangChain, LlamaIndex, Genkit, Vertex AI, OpenAI API." },
      { name: 'Web Development', description: "Next.js, React, Node.js, FastAPI, Flask." },
      { name: 'DevOps & MLOps', description: "Git, Docker, Kubernetes (basic), CI/CD (GitHub Actions), Cloud Platforms (GCP, Firebase, basic AWS/Azure)." },
    ]
  }
];

export default function SkillsSection() {
  useScrollReveal();
  
  return (
    <section id="skills" className="bg-secondary/30">
      <div className="container">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="font-headline text-4xl font-bold">My Toolkit</h2>
          <p className="text-xl text-muted-foreground mt-2">The technologies and skills I leverage to build intelligent solutions.</p>
        </div>

        <div className="space-y-12">
          {skillCategories.map((category, catIndex) => (
            <div key={category.categoryName} className="scroll-reveal" style={{animationDelay: `${catIndex * 150}ms`}}>
              <div className="flex items-center mb-6">
                {React.cloneElement(category.icon, { className: "h-10 w-10 text-primary mr-4 bounce-in-icon" })}
                <h3 className="font-headline text-3xl text-accent">{category.categoryName}</h3>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="scroll-reveal" style={{animationDelay: `${(catIndex * category.skills.length + skillIndex) * 50}ms`}}>
                    <Card className="h-full hover:shadow-xl transition-shadow duration-300 bg-card/70 backdrop-blur-sm">
                      <CardHeader className="pb-3">
                        <CardTitle className="font-headline text-xl text-foreground">{skill.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">{skill.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-16 scroll-reveal">
            <p className="text-lg text-muted-foreground">
                I am a firm believer in lifelong learning and continuously strive to expand my expertise in the ever-evolving field of AI.
            </p>
        </div>
      </div>
    </section>
  );
}
