
"use client";
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Brain, Bot, Code, Settings, Zap } from 'lucide-react'; 
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

        <div className="space-y-16"> {/* Increased space between categories */}
          {skillCategories.map((category, catIndex) => (
            <div 
              key={category.categoryName} 
              className="scroll-reveal" 
              style={{ animationDelay: `${catIndex * 150}ms` }}
            >
              <div className="flex items-center mb-8">
                {React.cloneElement(category.icon, { className: "h-12 w-12 text-primary mr-4 bounce-in-icon" })}
                <h3 className="font-headline text-3xl lg:text-4xl text-accent">{category.categoryName}</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-8">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className="scroll-reveal group bg-card/60 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-primary/20 transition-all duration-300 transform hover:-translate-y-1.5 border border-border/30 hover:border-primary/50"
                    style={{ animationDelay: `${(catIndex * 2 + skillIndex) * 100 + 150}ms` }} 
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 mt-0.5 p-2.5 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                        <Zap className="h-6 w-6 text-primary transform transition-transform duration-300 group-hover:scale-110" />
                      </div>
                      <div>
                        <h4 className="font-headline text-xl text-foreground group-hover:text-primary transition-colors duration-300 mb-1.5">{skill.name}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{skill.description}</p>
                      </div>
                    </div>
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
