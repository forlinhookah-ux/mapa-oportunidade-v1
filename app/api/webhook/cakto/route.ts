import { NextResponse } from 'next/server';
import { supabaseAdmin } from '../../../lib/supabaseAdmin';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    console.log('=================================');
    console.log('WEBHOOK CAKTO RECEBIDO');
    console.log('BODY CAKTO:');
    console.log(JSON.stringify(body, null, 2));
    console.log('=================================');

    const webhookSecret = process.env.CAKTO_WEBHOOK_SECRET;

    if (!webhookSecret) {
      console.error('CAKTO_WEBHOOK_SECRET não configurado');

      return NextResponse.json(
        {
          received: false,
          error: 'Webhook não configurado.',
        },
        {
          status: 500,
        }
      );
    }

    if (body.secret !== webhookSecret) {
      console.error('Secret do webhook inválido');

      return NextResponse.json(
        {
          received: false,
          error: 'Secret inválido.',
        },
        {
          status: 401,
        }
      );
    }

    if (body.event !== 'purchase_approved') {
      console.log('Evento ignorado:', body.event);

      return NextResponse.json({
        received: true,
        ignored: true,
      });
    }

    const mapaId = body.data?.sck;

    console.log('MAPA ID RECEBIDO:', mapaId);

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

    console.log('MAPA MARCADO COMO PAGO:', mapaId);

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