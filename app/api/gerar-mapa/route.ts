import { NextResponse } from 'next/server';
import OpenAI from 'openai';
import { supabaseAdmin } from '../../lib/supabaseAdmin';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const mapaId = body.mapa_id;

    if (!mapaId) {
      return NextResponse.json(
        {
          error: 'Mapa não identificado.',
        },
        {
          status: 400,
        }
      );
    }

    // Busca o mapa no Supabase
    const { data: mapa, error: mapaError } = await supabaseAdmin
      .from('mapas')
      .select('id, respostas, pago')
      .eq('id', mapaId)
      .single();

    if (mapaError || !mapa) {
      return NextResponse.json(
        {
          error: 'Mapa não encontrado.',
        },
        {
          status: 404,
        }
      );
    }

    // Bloqueia geração antes do pagamento
    if (!mapa.pago) {
      return NextResponse.json(
        {
          error: 'Pagamento ainda não confirmado.',
        },
        {
          status: 403,
        }
      );
    }

    const answers = mapa.respostas;

    const prompt = `
Você é o estrategista de negócios da ALFORTECH.

Sua missão é transformar o perfil do usuário em oportunidades de renda
REAIS, VENDÁVEIS e EXECUTÁVEIS.

O objetivo principal NÃO é impressionar o usuário com ideias grandes.

O objetivo é fazer o usuário olhar para o resultado e pensar:

"EU CONSIGO COMEÇAR ISSO."

A oportunidade precisa parecer algo que uma pessoa real conseguiria
oferecer para um cliente real nos próximos dias.

========================
PERFIL DO USUÁRIO
========================

HABILIDADES:
${answers.skills}

INTERESSES:
${answers.interests}

TEMPO DISPONÍVEL:
${answers.time}

RECURSOS DISPONÍVEIS:
${answers.resources}

META FINANCEIRA:
${answers.goal}

========================
PRINCÍPIO CENTRAL
========================

PRIORIZE VENDABILIDADE SOBRE POTENCIAL.

Uma oportunidade só é boa se existir uma pessoa ou empresa que
provavelmente pagaria por ela.

Não crie oportunidades apenas porque parecem lucrativas.

Não transforme uma habilidade genérica em uma profissão genérica.

ERRADO:
"Trabalhar com IA."

ERRADO:
"Prestar serviços de marketing digital."

ERRADO:
"Criar conteúdo."

CERTO:
"Editar 8 Reels por mês para academias locais por R$1.000/mês."

CERTO:
"Criar 12 artes para Instagram de restaurantes locais por R$600/mês."

CERTO:
"Montar vídeos curtos para imobiliárias usando vídeos enviados pelos
corretores por R$800/mês."

A oportunidade precisa responder claramente:

O QUE vender?
PARA QUEM vender?
QUANTO cobrar?
COMO entregar?
COMO conseguir o primeiro cliente?

========================
CRITÉRIOS DE VENDABILIDADE
========================

Antes de criar cada oportunidade, faça mentalmente estas perguntas:

1. Existe um cliente real para essa solução?
2. Esse cliente possui um problema que vale dinheiro?
3. O usuário consegue entregar a solução?
4. O usuário possui os recursos necessários?
5. O usuário possui habilidade suficiente para começar?
6. A oferta pode ser explicada em uma frase?
7. Existe uma forma realista de encontrar clientes?
8. É possível tentar conseguir a primeira venda em até 7 dias?

Se várias respostas forem "não", NÃO escolha essa oportunidade.

Prefira oportunidades simples, específicas e fáceis de explicar.

========================
COMEÇAR COM O QUE JÁ EXISTE
========================

Priorize o uso das habilidades e recursos que o usuário já possui.

NÃO exija cursos, equipamentos caros, equipe ou ferramentas caras
para que a oportunidade possa começar.

Se o usuário possui apenas celular, priorize ofertas que possam ser
executadas pelo celular.

Se possui poucas horas por semana, priorize ofertas de ticket maior,
entregas enxutas ou produtos digitais.

Não recomende uma operação que dependa de uma estrutura que o usuário
ainda não possui.

========================
OFERTA ESPECÍFICA
========================

Cada oportunidade deve ser uma OFERTA concreta.

Uma oferta concreta possui:

- serviço ou produto específico
- público específico
- preço específico
- entrega específica

Evite:

"consultoria"

"marketing"

"IA"

"social media"

"edição de vídeos"

Use:

"Pacote de 6 Reels editados para academias locais"

"Pacote de 12 artes + 4 carrosséis para restaurantes"

"Pacote de 10 vídeos curtos para corretores"

Quanto mais específica a oferta, melhor.

========================
VALIDAÇÃO DA OPORTUNIDADE
========================

As oportunidades devem ser pensadas como algo que o usuário poderia
TESTAR imediatamente.

O usuário deve conseguir:

1. criar uma pequena demonstração;
2. encontrar potenciais clientes;
3. apresentar a oferta;
4. fazer uma proposta;
5. tentar fechar a primeira venda.

Não considere uma oportunidade validada apenas porque existe demanda
teórica.

A oportunidade deve possuir um caminho prático até o cliente.

========================
META FINANCEIRA
========================

A meta financeira é um OBJETIVO.

Ela NÃO deve obrigar você a criar uma oportunidade artificialmente
grande ou inviável.

Se o usuário deseja R$10.000/mês, não diga simplesmente:

"10 clientes × R$1.000 = R$10.000."

Verifique primeiro se o usuário possui capacidade para atender esses
10 clientes.

Se possui 5 horas por semana e cada cliente exige 4 horas por mês:

5 horas/semana ≈ 20 horas/mês.

Capacidade aproximada:

20 ÷ 4 = 5 clientes.

Portanto:

5 clientes × R$1.000 = R$5.000/mês.

Nesse caso, NÃO finja que a oportunidade permite R$10.000/mês
imediatamente.

Explique:

"Com a capacidade atual, a operação comporta aproximadamente 5 clientes.
Para chegar a R$10.000/mês seria necessário aumentar o preço, reduzir o
tempo de entrega, aumentar as horas disponíveis ou terceirizar parte da
operação."

A matemática deve ser HONESTA.

========================
CÁLCULOS FINANCEIROS
========================

Todos os cálculos precisam ser coerentes.

PREÇO:

Quanto um cliente paga pela oferta.

FATURAMENTO:

Quantidade de clientes ou vendas REALISTICAMENTE suportável × preço.

CUSTO:

Considere somente custos necessários para executar a oportunidade.

Não invente custos.

Se o usuário pode executar praticamente sem custo:

"R$0 a R$100/mês"

pode ser uma estimativa válida.

LUCRO:

Faturamento estimado - custos estimados.

CLIENTES PARA META:

Calcule:

meta ÷ preço.

Depois compare com a capacidade real.

Exemplo:

Meta: R$10.000
Preço: R$1.000
Necessidade: 10 clientes.

Se a capacidade for 5 clientes:

"10 clientes seriam necessários para R$10.000/mês, mas a capacidade atual
é de aproximadamente 5 clientes."

Nunca esconda essa diferença.

========================
CAPACIDADE
========================

Respeite rigorosamente o tempo informado.

Calcule aproximadamente:

horas disponíveis por mês
÷
horas necessárias por cliente/produto.

Não prometa uma capacidade maior que a disponibilidade do usuário.

Se o cálculo não for exato, faça uma estimativa conservadora.

É melhor subestimar a capacidade do que prometer algo impossível.

========================
ADERÊNCIA
========================

Calcule "aderencia" de 0 a 100.

Use:

habilidades: 25%
interesses: 15%
recursos: 15%
tempo disponível: 20%
meta financeira: 15%
facilidade para começar: 10%

A nota representa COMPATIBILIDADE REAL.

Não use 0 como padrão.

Não dê nota alta apenas porque a oportunidade possui alto potencial
financeiro.

Uma oportunidade pode ter grande potencial e ainda possuir aderência
baixa.

========================
VELOCIDADE
========================

Use exatamente:

"Rápida"
"Média"
"Lenta"

Rápida:
possível tentar primeira venda em poucos dias.

Média:
precisa de alguma preparação antes da primeira venda.

Lenta:
precisa de construção, audiência, produto ou validação mais longa.

========================
DIFICULDADE
========================

Use exatamente:

"Baixa"
"Média"
"Alta"

Considere:

complexidade técnica
tempo de aprendizado
dificuldade de entrega
dificuldade de aquisição de clientes
investimento necessário.

========================
TRÊS OPORTUNIDADES
========================

Crie EXATAMENTE 3 oportunidades.

Elas devem ter estratégias diferentes.

Sempre que possível:

OPORTUNIDADE 1:
mais fácil e rápida para conseguir a primeira venda.

OPORTUNIDADE 2:
maior ticket ou melhor potencial de receita.

OPORTUNIDADE 3:
mais escalável, como produto digital ou modelo recorrente.

Mas NÃO force essas categorias se elas não fizerem sentido para o perfil.

A prioridade continua sendo vendabilidade.

========================
RECOMENDAÇÃO
========================

Escolha UMA das três oportunidades.

A recomendação deve ser a que possui melhor equilíbrio entre:

- vendabilidade
- compatibilidade
- recursos disponíveis
- tempo disponível
- velocidade para primeira venda
- dificuldade
- investimento
- potencial de receita

NÃO escolha automaticamente a que possui maior faturamento.

A melhor oportunidade é aquela que o usuário possui maior chance de
COMEÇAR E VENDER.

Explique claramente o motivo.

========================
PRIMEIRO MOVIMENTO
========================

O campo "primeiro_movimento" deve ser uma ação extremamente prática.

Exemplo:

"Crie 3 Reels demonstrativos para uma academia local e envie para 10
academias oferecendo o pacote de 6 Reels/mês."

Não escreva:

"Comece a divulgar seu serviço."

Seja específico.

========================
PLANO DE 7 DIAS
========================

Crie exatamente 7 ações.

Cada dia deve ter UMA ação principal.

O plano deve levar o usuário da ideia até a tentativa de primeira venda.

DIA 1:
definir nicho + oferta.

DIA 2:
criar demonstração.

DIA 3:
montar apresentação/proposta.

DIA 4:
encontrar potenciais clientes.

DIA 5:
iniciar prospecção.

DIA 6:
fazer follow-up.

DIA 7:
tentar fechar a primeira venda.

Adapte tudo à oportunidade recomendada.

========================
CAMPOS OBRIGATÓRIOS
========================

NENHUM campo pode ficar vazio.

Nunca escreva:

"Não informado"
"Não sei"
"Depende"
"Não aplicável"

Faça uma estimativa razoável quando necessário.

========================
FORMATO DA RESPOSTA
========================

Responda SOMENTE com JSON válido.

NÃO use Markdown.

NÃO use blocos de código.

NÃO escreva explicações fora do JSON.

A estrutura deve ser EXATAMENTE:

{
  "aderencia": 0,
  "recomendacao": {
    "titulo": "",
    "por_que": "",
    "primeiro_movimento": ""
  },
  "oportunidades": [
    {
      "titulo": "",
      "descricao": "",
      "modelo_receita": "",
      "preco": "",
      "faturamento_estimado": "",
      "custo_estimado": "",
      "lucro_estimado": "",
      "clientes_para_meta": "",
      "capacidade_semanal": "",
      "horas_necessarias": "",
      "compatibilidade_meta": "",
      "velocidade": "",
      "dificuldade": "",
      "o_que_vender": "",
      "cliente_ideal": "",
      "investimento": "",
      "como_conseguir_clientes": "",
      "potencial": "",
      "por_que_combina": ""
    },
    {
      "titulo": "",
      "descricao": "",
      "modelo_receita": "",
      "preco": "",
      "faturamento_estimado": "",
      "custo_estimado": "",
      "lucro_estimado": "",
      "clientes_para_meta": "",
      "capacidade_semanal": "",
      "horas_necessarias": "",
      "compatibilidade_meta": "",
      "velocidade": "",
      "dificuldade": "",
      "o_que_vender": "",
      "cliente_ideal": "",
      "investimento": "",
      "como_conseguir_clientes": "",
      "potencial": "",
      "por_que_combina": ""
    },
    {
      "titulo": "",
      "descricao": "",
      "modelo_receita": "",
      "preco": "",
      "faturamento_estimado": "",
      "custo_estimado": "",
      "lucro_estimado": "",
      "clientes_para_meta": "",
      "capacidade_semanal": "",
      "horas_necessarias": "",
      "compatibilidade_meta": "",
      "velocidade": "",
      "dificuldade": "",
      "o_que_vender": "",
      "cliente_ideal": "",
      "investimento": "",
      "como_conseguir_clientes": "",
      "potencial": "",
      "por_que_combina": ""
    }
  ],
  "plano_7_dias": [
    "",
    "",
    "",
    "",
    "",
    "",
    ""
  ]
}
`;

    const response = await openai.responses.create({
      model: 'gpt-5-mini',
      input: prompt,
      text: {
        format: {
          type: 'json_schema',
          name: 'mapa_oportunidade',
          strict: true,
          schema: {
            type: 'object',
            additionalProperties: false,
            properties: {
              aderencia: {
                type: 'number',
              },
              recomendacao: {
                type: 'object',
                additionalProperties: false,
                properties: {
                  titulo: { type: 'string' },
                  por_que: { type: 'string' },
                  primeiro_movimento: { type: 'string' },
                },
                required: [
                  'titulo',
                  'por_que',
                  'primeiro_movimento',
                ],
              },
              oportunidades: {
                type: 'array',
                minItems: 3,
                maxItems: 3,
                items: {
                  type: 'object',
                  additionalProperties: false,
                  properties: {
                    titulo: { type: 'string' },
                    descricao: { type: 'string' },
                    modelo_receita: { type: 'string' },
                    preco: { type: 'string' },
                    faturamento_estimado: { type: 'string' },
                    custo_estimado: { type: 'string' },
                    lucro_estimado: { type: 'string' },
                    clientes_para_meta: { type: 'string' },
                    capacidade_semanal: { type: 'string' },
                    horas_necessarias: { type: 'string' },
                    compatibilidade_meta: { type: 'string' },
                    velocidade: {
                      type: 'string',
                      enum: ['Rápida', 'Média', 'Lenta'],
                    },
                    dificuldade: {
                      type: 'string',
                      enum: ['Baixa', 'Média', 'Alta'],
                    },
                    o_que_vender: { type: 'string' },
                    cliente_ideal: { type: 'string' },
                    investimento: { type: 'string' },
                    como_conseguir_clientes: { type: 'string' },
                    potencial: { type: 'string' },
                    por_que_combina: { type: 'string' },
                  },
                  required: [
                    'titulo',
                    'descricao',
                    'modelo_receita',
                    'preco',
                    'faturamento_estimado',
                    'custo_estimado',
                    'lucro_estimado',
                    'clientes_para_meta',
                    'capacidade_semanal',
                    'horas_necessarias',
                    'compatibilidade_meta',
                    'velocidade',
                    'dificuldade',
                    'o_que_vender',
                    'cliente_ideal',
                    'investimento',
                    'como_conseguir_clientes',
                    'potencial',
                    'por_que_combina',
                  ],
                },
              },
              plano_7_dias: {
                type: 'array',
                minItems: 7,
                maxItems: 7,
                items: {
                  type: 'string',
                },
              },
            },
            required: [
              'aderencia',
              'recomendacao',
              'oportunidades',
              'plano_7_dias',
            ],
          },
        },
      },
    });

    const text = response.output_text;
    const resultado = JSON.parse(text);

    function corrigirMojibakeRecursivo(valor: any): any {
      if (typeof valor === 'string') {
        if (!/[ÃÂâ]/.test(valor)) {
          return valor;
        }

        try {
          const corrigido = Buffer.from(valor, 'latin1').toString('utf8');

          const antes = (valor.match(/[ÃÂâ]/g) || []).length;
          const depois = (corrigido.match(/[ÃÂâ]/g) || []).length;

          if (depois < antes) {
            return corrigido;
          }
        } catch {
          return valor;
        }

        return valor;
      }

      if (Array.isArray(valor)) {
        return valor.map(corrigirMojibakeRecursivo);
      }

      if (valor !== null && typeof valor === 'object') {
        return Object.fromEntries(
          Object.entries(valor).map(([chave, valor]) => [
            chave,
            corrigirMojibakeRecursivo(valor),
          ])
        );
      }

      return valor;
    }

    const resultadoCorrigido =
      corrigirMojibakeRecursivo(resultado);

    const { error: resultadoError } = await supabaseAdmin
      .from('mapas')
      .update({
        resultado: resultadoCorrigido,
      })
      .eq('id', mapaId);

    if (resultadoError) {
      console.error('Erro ao salvar resultado:', resultadoError);

      return NextResponse.json(
        {
          error: 'Mapa gerado, mas não foi possível salvar o resultado.',
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json(resultadoCorrigido);
  } catch (error) {
    console.error('Erro ao gerar mapa:', error);

    return NextResponse.json(
      {
        error: 'Não foi possível gerar o mapa.',
      },
      {
        status: 500,
      }
    );
  }
}