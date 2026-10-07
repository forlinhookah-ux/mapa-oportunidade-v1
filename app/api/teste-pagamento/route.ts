import { NextResponse } from 'next/server';
import { supabaseAdmin } from '../../lib/supabaseAdmin';

export async function POST(request: Request) {
  try {
    if (process.env.NODE_ENV === 'production') {
      return NextResponse.json(
        { error: 'Rota disponível apenas em desenvolvimento.' },
        { status: 403 }
      );
    }

    const body = await request.json();
    const mapaId = body.mapa_id;

    if (!mapaId) {
      return NextResponse.json(
        { error: 'mapa_id não informado.' },
        { status: 400 }
      );
    }

    console.log('=================================');
    console.log('SIMULAÇÃO DE PAGAMENTO');
    console.log('MAPA ID:', mapaId);
    console.log('=================================');

    const { data: mapa, error: buscaError } =
      await supabaseAdmin
        .from('mapas')
        .select('id')
        .eq('id', mapaId)
        .single();

    if (buscaError || !mapa) {
      return NextResponse.json(
        { error: 'Mapa não encontrado.' },
        { status: 404 }
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
      console.error('Erro ao simular pagamento:', error);

      return NextResponse.json(
        { error: 'Não foi possível marcar o mapa como pago.' },
        { status: 500 }
      );
    }

    console.log('MAPA MARCADO COMO PAGO PELO TESTE:', mapaId);

    return NextResponse.json({
      success: true,
      pago: true,
      mapa_id: mapaId,
    });

  } catch (error) {
    console.error('Erro na simulação de pagamento:', error);

    return NextResponse.json(
      { error: 'Erro interno no teste.' },
      { status: 500 }
    );
  }
}