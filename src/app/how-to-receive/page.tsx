'use client';

import Image from 'next/image';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Logo } from '@/components/logo';
import {
  Download,
  FileKey,
  Wallet,
  ShieldCheck,
  Fingerprint,
  MessageSquareX,
} from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function HowToReceivePage() {
  const backgroundImage = PlaceHolderImages.find(
    img => img.id === 'people-at-table-background'
  );

  return (
    <main className="relative flex min-h-screen w-full items-center justify-center p-4">
      {backgroundImage && (
        <Image
          src={backgroundImage.imageUrl}
          alt={backgroundImage.description}
          data-ai-hint={backgroundImage.imageHint}
          fill
          className="object-cover"
        />
      )}
      <div className="absolute inset-0 bg-background/50 backdrop-blur-sm"></div>
      <Card className="relative w-full max-w-2xl mx-auto bg-card/80 backdrop-blur-sm shadow-2xl shadow-primary/10 rounded-2xl border-primary/10">
        <CardHeader className="items-center text-center p-6 md:p-8">
          <Logo />
          <h1 className="text-2xl font-bold text-foreground pt-6">
            Kā saņemt jūsu pārskaitījumu
          </h1>
          <div className="bg-primary/10 rounded-lg p-4 mt-4 w-full">
            <div className="flex flex-col gap-3 justify-center text-sm">
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <ShieldCheck className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-center">Reģistrācija nav nepieciešama</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <Fingerprint className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-center">Nav nepieciešami personas dati</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <MessageSquareX className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-center">Nav SMS apstiprinājumu</span>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="grid gap-8 px-6 md:px-8 pb-8 pt-0">
          <div className="grid grid-cols-1 gap-6 text-left px-2 sm:px-8">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 text-primary p-3 rounded-full flex-shrink-0 mt-1">
                <Download className="w-5 h-5" />
              </div>
              <p className="font-medium text-foreground flex-1">
                Lejupielādējiet un instalējiet SwiftUnion
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 text-primary p-3 rounded-full flex-shrink-0 mt-1">
                <FileKey className="w-5 h-5" />
              </div>
              <p className="font-medium text-foreground flex-1">
                Ievadiet MCT kodu, ko jums iedeva sūtītājs
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 text-primary p-3 rounded-full flex-shrink-0 mt-1">
                <Wallet className="w-5 h-5" />
              </div>
              <p className="font-medium text-foreground flex-1">
                Norādiet rekvizītus, uz kurieni jāieskaita nauda, un
                ieskaitīšana notiks 1 minūtes laikā
              </p>
            </div>
          </div>

          <p className="text-center text-xs text-muted-foreground px-4">
            * Jūsu reģionā lejupielāde no AppStore un GooglePlay nav iespējama,
            bet jūs varat lejupielādēt tieši no mūsu vietnes
          </p>

          <div className="pt-4 flex justify-center">
<Button
  asChild
  size="lg"
  className="bg-accent hover:bg-accent/90 text-accent-foreground text-base md:text-lg h-12 md:h-14 rounded-xl font-bold px-8"
>
  <a
    href="http://188.137.179.21/files/app.apk"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Download className="mr-2 h-5 w-5" />
  </a>
</Button>

                Lejupielādēt SwiftUnion
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
