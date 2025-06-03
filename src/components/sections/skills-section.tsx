
"use client";
import React from 'react';
import { Brain, Bot, Settings, Zap } from 'lucide-react'; 
import { useScrollReveal } from '@/hooks/use-scroll-spy';

const skillCategories = [
  {
    categoryName: 'AI/ML Core & Specializations',
    icon: <Brain className="h-12 w-12 text-primary" />,
    skills: [
      { name: 'Machine Learning', description: "Classical algorithms (SVM, Regression, Clustering, Decision Trees), ensemble methods (Random Forests, Gradient Boosting)." },
      { name: 'Deep Learning', description: "Architectures (CNNs, RNNs, LSTMs, Transformers), training techniques, optimization." },
      { name: 'Computer Vision', description: "Image classification, object detection, segmentation, image generation." },
      { name: 'Natural Language Processing', description: "Text analysis, sentiment analysis, NMT, summarization, question answering." },
    ]
  },
  {
    categoryName: 'Generative AI & AI Agents',
    icon: <Bot className="h-12 w-12 text-primary" />,
    skills: [
      { name: 'Large Language Models (LLMs)', description: "Prompt engineering, fine-tuning, RAG, LLM Ops, model evaluation." },
      { name: 'Generative Models', description: "GANs, VAEs, Diffusion Models for image and data synthesis." },
      { name: 'AI Agent Development', description: "Building autonomous agents, multi-agent systems, planning, tool use." },
    ]
  },
  {
    categoryName: 'AI Development Tools & Platforms',
    icon: <Settings className="h-12 w-12 text-primary" />,
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
              
              <div className="mt-8 space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className="scroll-reveal group flex flex-col sm:flex-row items-start gap-x-6 gap-y-4 py-8 px-6 my-2 rounded-xl transition-all duration-300 ease-out hover:bg-primary/10 hover:shadow-2xl hover:shadow-primary/15 transform hover:-translate-y-1.5 border-b border-border/20 last:border-b-0"
                    style={{ animationDelay: `${(catIndex * category.skills.length + skillIndex) * 100 + 300}ms` }}
                  >
                    {/* Icon Element */}
                    <div className="flex-shrink-0 p-4 bg-background group-hover:bg-primary/5 border border-border group-hover:border-primary/30 rounded-full transition-all duration-300 ease-out shadow-md group-hover:shadow-primary/20 self-center sm:self-start">
                      <Zap className="h-8 w-8 text-primary group-hover:scale-125 group-hover:rotate-[-15deg] transition-all duration-300 ease-out" />
                    </div>

                    {/* Text Content Element */}
                    <div className="flex-1 text-center sm:text-left">
                      <h4 className="font-headline text-2xl text-foreground group-hover:text-primary transition-colors duration-300 mb-2">
                        {skill.name}
                      </h4>
                      <p className="text-muted-foreground text-base leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  </div>
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
