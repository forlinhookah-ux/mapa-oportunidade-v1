import { NextResponse } from 'next/server';
import { supabaseAdmin } from '../../lib/supabaseAdmin';

export async function POST(request: Request) {
  try {
    const respostas = await request.json();

    const id = crypto.randomUUID();

    const { error } = await supabaseAdmin

      .from('mapas')
      .insert({
        id,
        respostas,
        pago: false,
      });

    if (error) {
      console.error('Erro ao salvar no Supabase:', error);

      return NextResponse.json(
        {
          error: 'Não foi possível salvar as respostas.',
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json({
      id,
    });
  } catch (error) {
    console.error('Erro ao salvar respostas:', error);

    return NextResponse.json(
      {
        error: 'Não foi possível salvar as respostas.',
      },
      {
        status: 500,
      }
    );
  }
}