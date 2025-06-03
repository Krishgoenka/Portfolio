
"use client";
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Brain, Bot, Code, Settings, Zap } from 'lucide-react'; 
import { useScrollReveal } from '@/hooks/use-scroll-spy';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

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
    categoryName: 'AI Development Tools & Platforms',
    icon: <Settings className="h-8 w-8 text-primary" />,
    skills: [
      { name: 'AI/ML Frameworks', description: "TensorFlow, Keras, Scikit-learn, Hugging Face Transformers." },
      { name: 'GenAI Development Tools', description: "LangChain, LlamaIndex, Genkit, Vertex AI, OpenAI API." },
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

        <div className="space-y-16">
          {skillCategories.map((category, catIndex) => (
            <div 
              key={category.categoryName} 
              className="scroll-reveal" 
              style={{ animationDelay: `${catIndex * 150}ms` }}
            >
              <div className="flex items-center justify-center md:justify-start mb-10">
                {React.cloneElement(category.icon, { className: "h-12 w-12 text-primary mr-4 bounce-in-icon" })}
                <h3 className="font-headline text-3xl lg:text-4xl text-accent text-center md:text-left">{category.categoryName}</h3>
              </div>
              
              <div className="mt-8 flex flex-wrap justify-center gap-8 lg:gap-12">
                {category.skills.map((skill, skillIndex) => (
                  <TooltipProvider key={skill.name} delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div
                          className="scroll-reveal group relative flex flex-col items-center justify-center w-32 h-32 sm:w-36 sm:h-36 p-3 rounded-full border-2 border-primary/30 bg-card/60 backdrop-blur-md shadow-md hover:shadow-primary/25 hover:border-primary transition-all duration-300 transform hover:scale-110 cursor-default"
                          style={{ animationDelay: `${(catIndex * category.skills.length + skillIndex) * 80 + 200}ms` }}
                        >
                          <Zap className="h-7 w-7 sm:h-8 sm:h-8 text-primary mb-1.5 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
                          <h4 className="font-headline text-xs text-center sm:text-sm text-foreground group-hover:text-primary transition-colors duration-300 leading-tight px-1">
                            {skill.name}
                          </h4>
                          <div className="absolute inset-0 rounded-full border-2 border-primary/0 group-hover:border-primary/50 scale-90 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out pointer-events-none"></div>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent side="bottom" className="max-w-xs bg-popover text-popover-foreground p-3 rounded-md shadow-lg border-border text-sm">
                        <p className="leading-relaxed">{skill.description}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-20 scroll-reveal">
            <p className="text-lg text-muted-foreground">
                I am a firm believer in lifelong learning and continuously strive to expand my expertise in the ever-evolving field of AI.
            </p>
        </div>
      </div>
    </section>
  );
}
