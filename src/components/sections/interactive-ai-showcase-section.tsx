
"use client";
import React, { useRef, useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { handleAIShowcase } from '@/app/actions/ai-actions';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Bot, Loader2, Send, Sparkles } from 'lucide-react';
import { useScrollReveal } from '@/hooks/use-scroll-spy';

const initialState = {
  message: null,
  data: undefined,
  fields: undefined,
  issues: undefined,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full md:w-auto neon-glow-accent">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Send className="mr-2 h-4 w-4" />}
      Get Response
    </Button>
  );
}

export default function InteractiveAIShowcaseSection() {
  useScrollReveal();
  const [state, formAction] = useActionState(handleAIShowcase, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  React.useEffect(() => {
    if (state.message === "Success!") {
      formRef.current?.reset();
    }
  }, [state.message]);

  return (
    <section id="ai-showcase" className="bg-secondary/30">
      <div className="container">
        <div className="text-center mb-12 scroll-reveal">
          <h2 className="font-headline text-4xl font-bold">Interactive AI Showcase</h2>
          <p className="text-xl text-muted-foreground mt-2">
            Try out a mini GPT-based model. Enter a prompt and see its response!
          </p>
        </div>

        <Card className="max-w-2xl mx-auto shadow-xl scroll-reveal">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <Bot className="h-8 w-8 text-primary" />
              <CardTitle className="font-headline text-2xl">AI Prompt Playground</CardTitle>
            </div>
            <CardDescription>
              Interact with a demonstration model. What would you like to ask or tell it?
            </CardDescription>
          </CardHeader>
          <form action={formAction} ref={formRef}>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="prompt" className="text-lg font-medium">Your Prompt</Label>
                <Textarea
                  id="prompt"
                  name="prompt"
                  placeholder="e.g., What is Generative AI?"
                  rows={4}
                  className="mt-2 text-base"
                  defaultValue={state.fields?.prompt}
                  aria-describedby="prompt-error"
                />
                {state.issues && state.issues.map((issue) => (
                  <p key={issue} id="prompt-error" className="text-sm text-destructive mt-1">{issue}</p>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex flex-col items-stretch md:flex-row md:justify-end">
              <SubmitButton />
            </CardFooter>
          </form>

          {state.message && state.message !== "Validation failed." && (
            <div className={`p-4 m-6 rounded-md ${state.message === "Success!" ? 'bg-green-500/10 text-green-700 dark:text-green-300' : 'bg-destructive/10 text-destructive'}`}>
              {state.message}
            </div>
          )}

          {state.data?.response && (
            <div className="p-6 border-t border-border">
              <h3 className="text-lg font-semibold mb-2 flex items-center text-primary">
                <Sparkles className="mr-2 h-5 w-5" /> AI Response:
              </h3>
              <p className="text-foreground/90 whitespace-pre-wrap">{state.data.response}</p>
            </div>
          )}
        </Card>
      </div>
    </section>
  );
}
