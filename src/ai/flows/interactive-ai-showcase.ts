// Interactive AI Showcase Flow

'use server';

/**
 * @fileOverview An interactive AI showcase where users can input a prompt and receive a response from a mini GPT-based model.
 *
 * - interactiveAIShowcase - A function that handles the AI showcase process.
 * - InteractiveAIShowcaseInput - The input type for the interactiveAIShowcase function.
 * - InteractiveAIShowcaseOutput - The return type for the interactiveAIShowcase function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const InteractiveAIShowcaseInputSchema = z.object({
  prompt: z.string().describe('The prompt to send to the mini GPT-based model.'),
});
export type InteractiveAIShowcaseInput = z.infer<typeof InteractiveAIShowcaseInputSchema>;

const InteractiveAIShowcaseOutputSchema = z.object({
  response: z.string().describe('The response from the mini GPT-based model.'),
});
export type InteractiveAIShowcaseOutput = z.infer<typeof InteractiveAIShowcaseOutputSchema>;

export async function interactiveAIShowcase(input: InteractiveAIShowcaseInput): Promise<InteractiveAIShowcaseOutput> {
  return interactiveAIShowcaseFlow(input);
}

const prompt = ai.definePrompt({
  name: 'interactiveAIShowcasePrompt',
  input: {schema: InteractiveAIShowcaseInputSchema},
  output: {schema: InteractiveAIShowcaseOutputSchema},
  prompt: `You are a mini GPT-based model. Respond to the following prompt: {{{prompt}}}`,
});

const interactiveAIShowcaseFlow = ai.defineFlow(
  {
    name: 'interactiveAIShowcaseFlow',
    inputSchema: InteractiveAIShowcaseInputSchema,
    outputSchema: InteractiveAIShowcaseOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
