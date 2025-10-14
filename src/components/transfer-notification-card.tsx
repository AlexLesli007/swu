import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Logo } from '@/components/logo';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { personalizedGreeting } from '@/ai/flows/personalized-greeting';
import { TurkeyFlag, LatviaFlag } from './country-flags';
import type { PersonalizedGreetingOutput } from '@/ai/flows/personalized-greeting-types';

type TransferNotificationCardProps = {
  senderName: string;
  senderCountry: 'Turkey' | 'Latvia';
  recipientName: string;
  recipientCountry: 'Turkey' | 'Latvia';
  amount: string;
  currency: string;
};

export async function TransferNotificationCard({
  senderName,
  senderCountry,
  recipientName,
  recipientCountry,
  amount,
  currency,
}: TransferNotificationCardProps) {
  const greetingResult: PersonalizedGreetingOutput | null =
    await personalizedGreeting({
      userName: recipientName,
      country: recipientCountry,
    }).catch(error => {
      console.error('Failed to generate personalized greeting:', error);
      return null;
    });

  let greetingMessage = 'Jums ir ienācis naudas pārvedums'; // значение по умолчанию

  try {
    // если greetingResult не undefined/null и у него есть greetingMessage — используем его
    if (
      greetingResult &&
      typeof greetingResult.greetingMessage === 'string' &&
      greetingResult.greetingMessage.trim() !== ''
    ) {
      greetingMessage = greetingResult.greetingMessage;
    } else {
      console.warn('Greeting message not found, using default message.');
    }
  } catch (error) {
    console.error('Failed to generate personalized greeting safely:', error);
  }

  const CountryFlag = ({
    country,
    className,
  }: {
    country: 'Turkey' | 'Latvia';
    className?: string;
  }) => {
    if (country === 'Turkey') return <TurkeyFlag className={className} />;
    if (country === 'Latvia') return <LatviaFlag className={className} />;
    return null;
  };

  return (
    <Card className="w-full max-w-lg mx-auto bg-card/80 backdrop-blur-sm shadow-2xl shadow-primary/10 rounded-2xl border-primary/10 z-10">
      <CardHeader className="items-center text-center p-6 md:p-8">
        <Logo />
        <h1 className="text-2xl md:text-3xl font-bold text-foreground pt-6">
          {greetingMessage}
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground pt-2">
          Caur SwiftUnion sistēmu
        </p>
      </CardHeader>
      <CardContent className="grid gap-6 px-6 md:px-8 pt-0">
        <div className="grid grid-cols-1 gap-6 text-sm">
          <div className="space-y-2 rounded-lg bg-muted p-4">
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Sūtītājs:</span>
              <span className="font-bold text-foreground">{senderName}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Sūtītāja valsts:</span>
              <div className="flex items-center gap-2 font-bold text-foreground">
                {senderCountry}
                <CountryFlag country={senderCountry} />
              </div>
            </div>
            <Separator />
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Pārveduma summa:</span>
              <span className="font-bold text-foreground">
                {amount} {currency}
              </span>
            </div>
          </div>
          <div className="space-y-2 rounded-lg bg-muted p-4">
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Saņēmējs:</span>
              <span className="font-bold text-foreground">{recipientName}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Saņēmēja valsts:</span>
              <div className="flex items-center gap-2 font-bold text-foreground">
                {recipientCountry}
                <CountryFlag country={recipientCountry} />
              </div>
            </div>
            <Separator />
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Summa saņemšanai:</span>
              <span className="font-bold text-primary text-lg">
                {amount} {currency}
              </span>
            </div>
          </div>
        </div>
        <p className="text-center text-sm text-muted-foreground font-medium pt-2">
          Pārvedums ir jau ieskaitīts un gatavs saņemšanai.
        </p>
      </CardContent>
      <CardFooter className="p-6 md:p-8 pt-4">
        <Button
          asChild
          className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-base md:text-lg h-12 md:h-14 rounded-xl font-bold"
        >
          <Link href="/how-to-receive">
            Pāriet uz pārveduma saņemšanu
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
