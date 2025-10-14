'use server';

/**
 * @fileOverview A personalized greeting AI agent.
 *
 * - personalizedGreeting - A function that generates a personalized greeting message.
 */

import type {
  PersonalizedGreetingInput,
  PersonalizedGreetingOutput,
} from './personalized-greeting-types';

export async function personalizedGreeting(
  input: PersonalizedGreetingInput
): Promise<PersonalizedGreetingOutput> {
  const greetings: { [key: string]: string } = {
    Turkey: 'Merhaba {userName}, hoş geldiniz!',
    Latvia: 'Sveiks {userName}, laipni lūdzam!',
    USA: 'Hello {userName}, welcome!',
    Germany: 'Hallo {userName}, willkommen!',
    France: 'Bonjour {userName}, bienvenue!',
  };

  const greetingTemplate = greetings[input.country] || `Sveiki, {userName}!`;
  const greetingMessage = greetingTemplate.replace('{userName}', input.userName);

  return { greetingMessage };
}
