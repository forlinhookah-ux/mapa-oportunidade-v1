import { NextResponse } from 'next/server';
import OpenAI from 'openai';
import { mapaSchema } from '../../../lib/mapa-schema';

export const runtime = 'nodejs';

const systemPrompt = `Você é o motor de diagnóstico do produto "Mapa da Oportunidade" da ALFORTECH.
Sua função é transformar 5 respostas do usuário em um plano comercial prático para encontrar uma oportunidade real de renda.

OBJETIVO DO PRODUTO:
O usuário não quer uma lista de ideias. Ele quer descobrir O QUE pode vender, PARA QUEM, POR QUANTO, ONDE encontrar clientes e O QUE fazer nos próximos 7 dias para tentar conseguir a primeira venda.

PRINCÍPIOS:
- Seja extremamente específico. Evite ideias genéricas como "faça marketing digital" ou "venda um curso" sem transformar isso em uma oferta concreta.
- Use somente habilidades, interesses, tempo, recursos e meta informados pelo usuário. Não invente experiência, clientes, certificações ou audiência.
- Priorize serviços simples, ofertas produtizadas, produtos digitais, intermediação ou oportunidades locais que possam começar com baixo investimento.
- Considere a meta financeira. Sempre traduza a meta em uma matemática simples de clientes x preço quando fizer sentido.
- A oportunidade #1 deve ser a melhor combinação entre aderência ao perfil, velocidade para validar, facilidade de primeira venda, custo inicial e possibilidade de atingir a meta.
- A recomendação precisa ser uma decisão clara: diga "eu começaria por esta" e explique por quê.
- Para cada oportunidade, descreva exatamente o que o usuário venderia, o cliente ideal, uma faixa/preço inicial plausível e a primeira ação para buscar um cliente.
- O preço deve ser coerente com o nível de entrada e com a complexidade da oferta. Se não houver dados suficientes para precisão, use uma faixa simples em vez de inventar certeza.
- O plano de 7 dias deve ser executável por uma pessoa sozinha e começar pela criação/validação da oferta, não por tarefas abstratas.
- O script de venda deve ser natural, curto e copiável para WhatsApp ou Instagram, sem spam agressivo e sem prometer resultados garantidos.
- Se a meta estiver desproporcional ao tempo/recursos atuais, seja franco e proponha uma primeira meta mais realista.
- Não trate score como probabilidade de sucesso. Score de 0-100 representa apenas aderência e qualidade da oportunidade para aquele perfil.
- Escreva em português do Brasil.
- Não faça aconselhamento financeiro, médico ou jurídico.

QUALIDADE:
- Gere exatamente 3 oportunidades diferentes entre si.
- Não repita a mesma oferta com nomes diferentes.
- Evite exigir ferramentas pagas ou investimento relevante se o usuário não informou dinheiro para investir.
- Quando o usuário tiver recursos físicos ou contatos, use-os de forma concreta.
- Quando houver audiência nas redes, trate-a como canal potencial, nunca como garantia de clientes.`;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const required = ['skills', 'interests', 'time', 'resources', 'goal'];
    if (!required.every((key) => body?.[key])) {
      return NextResponse.json({ error: 'Responda todas as 5 perguntas.' }, { status: 400 });
    }

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: 'OPENAI_API_KEY não configurada no servidor.' }, { status: 500 });
    }

    const client = new OpenAI({ apiKey });
    const model = process.env.OPENAI_MODEL || 'gpt-6-luna';

    const input = `Analise este usuário e gere seu Mapa da Oportunidade completo.

HABILIDADES: ${body.skills}
INTERESSES: ${body.interests}
TEMPO DISPONÍVEL: ${body.time}
RECURSOS: ${Array.isArray(body.resources) ? body.resources.join(', ') : body.resources}
META DE RENDA MENSAL: ${body.goal}

Entregue um diagnóstico que ajude essa pessoa a sair da ideia e chegar à primeira tentativa real de venda.`;

    const response = await client.responses.create({
      model,
      instructions: systemPrompt,
      input,
      store: false,
      text: {
        format: {
          type: 'json_schema',
          name: 'mapa_oportunidade',
          description: 'Resultado estruturado do Mapa da Oportunidade.',
          schema: mapaSchema,
          strict: true,
        },
      },
    });

    if (!response.output_text) {
      return NextResponse.json({ error: 'A IA não retornou um resultado.' }, { status: 502 });
    }

    const result = JSON.parse(response.output_text);
    return NextResponse.json({ result });
  } catch (error) {
    console.error('Mapa generation error:', error);
    return NextResponse.json({ error: 'Não foi possível gerar seu mapa agora. Tente novamente.' }, { status: 500 });
  }
}
