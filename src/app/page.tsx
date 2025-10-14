import Image from 'next/image';
import { TransferNotificationCard } from '@/components/transfer-notification-card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

type HomePageSearchParams = {
  searchParams: {
    senderName?: string;
    senderCountry?: 'Turkey' | 'Latvia';
    recipientName?: string;
    recipientCountry?: 'Turkey' | 'Latvia';
    amount?: string;
    currency?: string;
  };
};

export default function Home({ searchParams }: HomePageSearchParams) {
  const backgroundImage = PlaceHolderImages.find(img => img.id === 'people-at-table-background');

  // Use provided country or default to Latvia
  const senderCountry = searchParams.senderCountry || 'Latvia';
  const recipientCountry = searchParams.recipientCountry || 'Latvia';

  return (
    <main className="relative flex min-h-screen w-full items-center justify-center p-4">
      {backgroundImage && (
        <Image
          src={backgroundImage.imageUrl}
          alt={backgroundImage.description}
          data-ai-hint={backgroundImage.imageHint}
          fill
          priority
          className="object-cover"
        />
      )}
      <div className="absolute inset-0 bg-background/50 backdrop-blur-sm" />
      <TransferNotificationCard
        senderName={searchParams.senderName ?? 'Sender Name'}
        senderCountry={senderCountry}
        recipientName={searchParams.recipientName ?? 'Recipient Name'}
        recipientCountry={recipientCountry}
        amount={searchParams.amount ?? '1000'}
        currency={searchParams.currency ?? 'EUR'}
      />
    </main>
  );
}
