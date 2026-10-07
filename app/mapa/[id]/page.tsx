import { notFound } from 'next/navigation';
import MapaVisual from '../../components/MapaVisual';
import { supabaseAdmin } from '../../lib/supabaseAdmin';

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function MapaPage({ params }: Props) {
  const { id } = await params;

  const { data: mapa, error } = await supabaseAdmin
    .from('mapas')
    .select('id, resultado, respostas, pago')
    .eq('id', id)
    .single();

  if (error || !mapa) {
    notFound();
  }

  if (!mapa.pago || !mapa.resultado) {
    return (
      <main
        style={{
          minHeight: '100vh',
          background: '#05070d',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '30px',
          fontFamily: 'Arial, Helvetica, sans-serif',
          textAlign: 'center',
        }}
      >
        <div>
          <p
            style={{
              color: '#38bdf8',
              fontWeight: 900,
              letterSpacing: '0.12em',
            }}
          >
            ALFORTECH
          </p>

          <h1>Seu mapa ainda não está disponível.</h1>

          <p style={{ color: '#94a3b8' }}>
            Verifique se o pagamento foi confirmado e tente novamente.
          </p>
        </div>
      </main>
    );
  }

  return (
    <MapaVisual
      resultado={mapa.resultado}
      answers={mapa.respostas}
      mapaId={mapa.id}
    />
  );
}