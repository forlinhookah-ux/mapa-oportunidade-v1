import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
  try {
    const answers = await request.json();

    const prompt = `
Você é o consultor estratégico da ALFORTECH responsável por criar o
"Mapa da Oportunidade".

Sua missão é analisar profundamente o perfil do usuário e encontrar
formas REALISTAS de transformar o que ele já sabe, gosta e possui em
uma fonte de renda.

IMPORTANTE:

Não entregue ideias genéricas.

Não diga apenas "crie um curso", "faça marketing digital" ou
"trabalhe com IA".

Transforme essas ideias em ofertas concretas que uma pessoa poderia
começar a vender.

Considere sempre:

1. Habilidades atuais
2. Interesses
3. Tempo disponível
4. Recursos disponíveis
5. Meta financeira
6. Facilidade para começar
7. Investimento inicial necessário
8. Dificuldade de execução
9. Facilidade para conseguir os primeiros clientes
10. Possibilidade de gerar receita recorrente
11. Quantos clientes ou vendas seriam necessários para atingir a meta
12. Compatibilidade da oportunidade com o perfil do usuário

PERFIL DO USUÁRIO:

Habilidades:
${answers.skills}

Interesses:
${answers.interests}

Tempo disponível:
${answers.time}

Recursos:
${answers.resources}

Meta mensal:
${answers.goal}

---

CRIE EXATAMENTE 3 OPORTUNIDADES.

As três oportunidades devem ser diferentes entre si.

Priorize oportunidades que possam ser iniciadas com os recursos que o
usuário já possui.

Para cada oportunidade, informe:

- titulo
- descricao
- o_que_vender
- cliente_ideal
- preco_sugerido
- modelo_de_receita
- clientes_para_meta
- investimento_inicial
- dificuldade
- velocidade_para_primeira_venda
- como_conseguir_clientes
- potencial
- por_que_combina

REGRAS IMPORTANTES:

"preco_sugerido" deve ser um preço ou faixa de preço plausível para
o mercado brasileiro.

"clientes_para_meta" deve explicar matematicamente de forma simples
quantos clientes ou vendas seriam necessários para chegar perto da
meta mensal.

Exemplo:

"4 clientes pagando R$2.500/mês = R$10.000/mês."

Não prometa resultados garantidos.

Não trate estimativas como certezas.

"investimento_inicial" deve considerar que o usuário quer começar
gastando o mínimo possível.

"dificuldade" deve ser classificada como:

Baixa
Média
Alta

"velocidade_para_primeira_venda" deve ser algo como:

Rápida
Média
Lenta

A descrição deve explicar claramente COMO a pessoa ganharia dinheiro.

---

DEPOIS DAS 3 OPORTUNIDADES:

Escolha apenas UMA como recomendação principal.

A recomendação deve ser a oportunidade que apresenta o melhor
equilíbrio entre:

- facilidade para começar;
- capacidade atual do usuário;
- velocidade para gerar dinheiro;
- baixo investimento;
- possibilidade de atingir a meta;
- potencial de crescimento.

Crie:

"recomendacao": {
  "titulo": "",
  "motivo": "",
  "primeiro_passo": ""
}

---

PLANO DE 7 DIAS

Crie um plano extremamente prático.

Cada dia deve conter UMA ação principal.

O plano deve levar a pessoa progressivamente de:

IDEIA
→ OFERTA
→ DEMONSTRAÇÃO
→ PROSPECÇÃO
→ PRIMEIROS CONTATOS
→ VENDA
→ EXECUÇÃO

Evite tarefas vagas como:

"estude mais"
"pesquise o mercado"
"melhore suas habilidades"

Prefira ações concretas como:

"Escolha um nicho específico."

"Crie uma oferta de R$X."

"Monte uma demonstração."

"Liste 20 potenciais clientes."

"Envie uma mensagem personalizada para cada um."

---

RESPONDA SOMENTE COM JSON VÁLIDO.

NÃO utilize markdown.

NÃO utilize blocos de código.

NÃO escreva nenhuma explicação fora do JSON.

ESTRUTURA OBRIGATÓRIA:

{
  "oportunidades": [
    {
      "titulo": "",
      "descricao": "",
      "o_que_vender": "",
      "cliente_ideal": "",
      "preco_sugerido": "",
      "modelo_de_receita": "",
      "clientes_para_meta": "",
      "investimento_inicial": "",
      "dificuldade": "",
      "velocidade_para_primeira_venda": "",
      "como_conseguir_clientes": "",
      "potencial": "",
      "por_que_combina": ""
    },
    {
      "titulo": "",
      "descricao": "",
      "o_que_vender": "",
      "cliente_ideal": "",
      "preco_sugerido": "",
      "modelo_de_receita": "",
      "clientes_para_meta": "",
      "investimento_inicial": "",
      "dificuldade": "",
      "velocidade_para_primeira_venda": "",
      "como_conseguir_clientes": "",
      "potencial": "",
      "por_que_combina": ""
    },
    {
      "titulo": "",
      "descricao": "",
      "o_que_vender": "",
      "cliente_ideal": "",
      "preco_sugerido": "",
      "modelo_de_receita": "",
      "clientes_para_meta": "",
      "investimento_inicial": "",
      "dificuldade": "",
      "velocidade_para_primeira_venda": "",
      "como_conseguir_clientes": "",
      "potencial": "",
      "por_que_combina": ""
    }
  ],
  "recomendacao": {
    "titulo": "",
    "motivo": "",
    "primeiro_passo": ""
  },
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
    });

    const text = response.output_text;

    const cleanText = text
      .replace(/```json/g, '')
      .replace(/```/g, '')
      .trim();

    const mapa = JSON.parse(cleanText);

    return NextResponse.json(mapa);
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