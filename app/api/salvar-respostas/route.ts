import { NextResponse } from 'next/server';

const respostas = new Map();

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const id = crypto.randomUUID();

    respostas.set(id, data);

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