// src/app/actions/ai-actions.ts
"use server";

import { interactiveAIShowcase, type InteractiveAIShowcaseInput, type InteractiveAIShowcaseOutput } from '@/ai/flows/interactive-ai-showcase';
import { z } from 'zod';

const AIShowcaseSchema = z.object({
  prompt: z.string().min(1, "Prompt cannot be empty.").max(500, "Prompt is too long."),
});

interface AIShowcaseFormState {
  message: string | null;
  fields?: Record<string, string>;
  issues?: string[];
  data?: InteractiveAIShowcaseOutput;
}

export async function handleAIShowcase(
  prevState: AIShowcaseFormState,
  formData: FormData
): Promise<AIShowcaseFormState> {
  const validatedFields = AIShowcaseSchema.safeParse({
    prompt: formData.get('prompt'),
  });

  if (!validatedFields.success) {
    const issues = validatedFields.error.issues.map((issue) => issue.message);
    return {
      message: "Validation failed.",
      fields: { prompt: formData.get('prompt')?.toString() || "" },
      issues,
    };
  }

  const input: InteractiveAIShowcaseInput = {
    prompt: validatedFields.data.prompt,
  };

  try {
    const result = await interactiveAIShowcase(input);
    return {
      message: "Success!",
      data: result,
    };
  } catch (error) {
    console.error("AI Showcase Error:", error);
    return {
      message: "An error occurred while processing your request. Please try again.",
      fields: { prompt: input.prompt },
      issues: ["Server error."],
    };
  }
}
