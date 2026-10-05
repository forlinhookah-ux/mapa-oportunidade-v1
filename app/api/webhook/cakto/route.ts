import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    console.log('Webhook Cakto recebido:', data);

    return NextResponse.json({
      received: true,
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