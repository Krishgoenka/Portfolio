"use client";
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Brain, Layers, Bot, Cpu, Code, Settings, Database, Cloud, BarChartBig } from 'lucide-react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend, Tooltip } from 'recharts';
import { useScrollReveal } from '@/hooks/use-scroll-spy';

const skillsData = [
  { name: 'Machine Learning', icon: <Brain className="h-8 w-8 text-primary" />, proficiency: 90, description: "SVM, Regression, KMeans, Random Forest" },
  { name: 'Deep Learning', icon: <Layers className="h-8 w-8 text-primary" />, proficiency: 85, description: "CNNs, RNNs, ANNs" },
  { name: 'Generative AI', icon: <Bot className="h-8 w-8 text-primary" />, proficiency: 80, description: "Transformers, LLMs, RAG, GANs" },
  { name: 'AI Agents', icon: <Cpu className="h-8 w-8 text-primary" />, proficiency: 75, description: "Autonomous Systems, Multi-Agent Systems" },
  { name: 'Programming', icon: <Code className="h-8 w-8 text-primary" />, proficiency: 95, description: "Python, C, C++, Java, JavaScript, HTML, CSS" },
  { name: 'DevOps & Cloud', icon: <Cloud className="h-8 w-8 text-primary" />, proficiency: 70, description: "Docker, Kubernetes, GCP, AWS, Firebase" },
  { name: 'Databases', icon: <Database className="h-8 w-8 text-primary" />, proficiency: 80, description: "SQL, NoSQL (MongoDB, Firebase Firestore)" },
  { name: 'Frameworks & Tools', icon: <Settings className="h-8 w-8 text-primary" />, proficiency: 85, description: "TensorFlow, PyTorch, Scikit-learn, Langchain, Next.js, React, Node.js, Git" },
];

const radarChartData = skillsData.map(skill => ({
  subject: skill.name.split(" ")[0], // Use first word for brevity
  A: skill.proficiency,
  fullMark: 100,
}));


export default function SkillsSection() {
  useScrollReveal();
  
  const [isClient, setIsClient] = React.useState(false);
  React.useEffect(() => {
    setIsClient(true);
  }, []);


  return (
    <section id="skills" className="bg-secondary/30">
      <div className="container">
        <div className="text-center mb-12 scroll-reveal">
          <h2 className="font-headline text-4xl font-bold">My Toolkit</h2>
          <p className="text-xl text-muted-foreground mt-2">The technologies and skills I work with.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {skillsData.map((skill, index) => (
            <div key={skill.name} className="scroll-reveal" style={{animationDelay: `${index * 100}ms`}}>
              <Card className="h-full hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  {React.cloneElement(skill.icon, { className: "h-10 w-10 text-primary bounce-in-icon" })}
                  <CardTitle className="font-headline text-xl">{skill.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{skill.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="scroll-reveal">
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="font-headline text-2xl flex items-center"><BarChartBig className="mr-2 h-6 w-6 text-primary"/>Skill Proficiency Overview</CardTitle>
              <CardDescription>A visual representation of my comfort level with key skill areas.</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px] w-full">
              {isClient && (
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarChartData}>
                    <defs>
                      <linearGradient id="colorSkill" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0.2}/>
                      </linearGradient>
                    </defs>
                    <PolarGrid stroke="hsl(var(--border))" />
                    <PolarAngleAxis dataKey="subject" tick={{ fill: 'hsl(var(--foreground))', fontSize: 12 }} />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 10 }} />
                    <Radar name="Krish" dataKey="A" stroke="hsl(var(--primary))" fill="url(#colorSkill)" fillOpacity={0.6} />
                    <Legend wrapperStyle={{ color: 'hsl(var(--foreground))' }} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'hsl(var(--background))',
                        borderColor: 'hsl(var(--border))',
                        borderRadius: 'var(--radius)',
                        color: 'hsl(var(--foreground))'
                      }}
                      itemStyle={{ color: 'hsl(var(--foreground))' }}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
