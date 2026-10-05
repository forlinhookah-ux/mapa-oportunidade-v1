import { NextResponse } from 'next/server';
import { supabaseAdmin } from '../../../lib/supabaseAdmin';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    console.log('Webhook Cakto recebido:', body);

    if (body.event !== 'purchase_approved') {
      return NextResponse.json({
        received: true,
        ignored: true,
      });
    }

    const mapaId = body.data?.sck;

    if (!mapaId) {
      console.error('Webhook sem mapa_id no sck');

      return NextResponse.json(
        {
          received: false,
          error: 'Mapa não identificado.',
        },
        {
          status: 400,
        }
      );
    }

    const { error } = await supabaseAdmin
      .from('mapas')
      .update({
        pago: true,
        pago_em: new Date().toISOString(),
      })
      .eq('id', mapaId);

    if (error) {
      console.error('Erro ao atualizar pagamento:', error);

      return NextResponse.json(
        {
          received: false,
          error: 'Não foi possível atualizar o pagamento.',
        },
        {
          status: 500,
        }
      );
    }

    console.log('Mapa marcado como pago:', mapaId);

    return NextResponse.json({
      received: true,
      pago: true,
      mapa_id: mapaId,
    });
  } catch (error) {
    console.error('Erro no webhook da Cakto:', error);

    return NextResponse.json(
      {
        received: false,
      },
      {
        status: 400,
      }
    );
  }
}