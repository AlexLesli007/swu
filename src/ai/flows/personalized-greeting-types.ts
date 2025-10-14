/**
 * @fileOverview A personalized greeting AI agent.
 *
 * - PersonalizedGreetingInput - The input type for the personalizedGreeting function.
 * - PersonalizedGreetingOutput - The return type for the personalizedGreeting function.
 */

import { z } from 'zod';

export const PersonalizedGreetingInputSchema = z.object({
  userName: z.string().describe('The name of the user to greet.'),
  country: z.string().describe('The country of the user.'),
});
export type PersonalizedGreetingInput = z.infer<
  typeof PersonalizedGreetingInputSchema
>;

export const PersonalizedGreetingOutputSchema = z.object({
  greetingMessage: z.string().describe('The personalized greeting message.'),
});
export type PersonalizedGreetingOutput = z.infer<
  typeof PersonalizedGreetingOutputSchema
>;
