import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = { title: 'Mapa da Oportunidade | ALFORTECH', description: 'Descubra o que você pode vender com o que já possui.' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
