'use client';

import { useState } from 'react';

const questions = [
  {
    key: 'skills',
    title: 'O que você sabe fazer?',
    hint: 'Pode ser profissão, habilidade ou algo que aprendeu sozinho.',
    type: 'text',
  },
  {
    key: 'interests',
    title: 'O que você gosta ou tem interesse em fazer?',
    hint: 'Tecnologia, academia, carros, jogos, vendas, redes sociais...',
    type: 'text',
  },
  {
    key: 'time',
    title: 'Quanto tempo você consegue dedicar?',
    hint: 'Escolha a opção que mais se aproxima.',
    type: 'options',
    options: [
      'Até 5 horas/semana',
      '5–10 horas/semana',
      '10–20 horas/semana',
      '20–40 horas/semana',
      'Mais de 40 horas/semana',
    ],
  },
  {
    key: 'resources',
    title: 'Quais recursos você já possui?',
    hint: 'Selecione tudo que se aplica.',
    type: 'options',
    options: [
      'Computador',
      'Celular',
      'Carro/moto',
      'Ferramentas/equipamentos',
      'Conhecimento profissional',
      'Audiência nas redes',
      'Contatos/clientes',
      'Espaço físico',
      'Dinheiro para investir',
    ],
  },
  {
    key: 'goal',
    title: 'Quanto você gostaria de ganhar por mês?',
    hint: 'Escolha sua meta inicial.',
    type: 'options',
    options: ['R$500', 'R$1.000', 'R$3.000', 'R$5.000', 'R$10.000+'],
  },
];

export default function Questionario() {
  const [step, setStep] = useState(0);

  const [answers, setAnswers] = useState<
    Record<string, string | string[]>
  >({});

  const question = questions[step];
  const value = answers[question.key] ?? '';

  const valid = Array.isArray(value)
    ? value.length > 0
    : String(value).trim().length > 2;

  function setText(value: string) {
    setAnswers({
      ...answers,
      [question.key]: value,
    });
  }

  function toggleOption(value: string) {
    const current = Array.isArray(answers[question.key])
      ? (answers[question.key] as string[])
      : [];

    const updated = current.includes(value)
      ? current.filter((item) => item !== value)
      : [...current, value];

    setAnswers({
      ...answers,
      [question.key]: updated,
    });
  }

  async function next() {
    if (!valid) return;

    if (step < questions.length - 1) {
      setStep(step + 1);
      return;
    }

   const response = await fetch('/api/salvar-respostas', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(answers),
});

if (!response.ok) {
  alert('Não foi possível salvar suas respostas. Tente novamente.');
  return;
}

const data = await response.json();

sessionStorage.setItem(
  'mapa_answers',
  JSON.stringify(answers)
);

sessionStorage.setItem(
  'mapa_id',
  data.id
);

window.location.href =
  'https://pay.cakto.com.br/gz6wagz_1173401';
 }

  return (
    <main className="wrap">
      <nav className="nav">
        <div className="brand">
          ALFOR<span>TECH</span>
        </div>

        <div className="pill">
          {step + 1}/5
        </div>
      </nav>

      <div className="formbox">
        <div className="progress">
          <i
            style={{
              width: String((step + 1) * 20) + '%',
            }}
          />
        </div>

        <div className="q">
          PERGUNTA {step + 1}
        </div>

        <h1>{question.title}</h1>

        <p className="muted">
          {question.hint}
        </p>

        {question.type === 'text' ? (
          <textarea
            className="input"
            rows={6}
            value={String(value)}
            onChange={(e) => setText(e.target.value)}
            placeholder="Escreva sua resposta..."
          />
        ) : (
          <div className="options">
            {question.options?.map((option) => (
              <button
                type="button"
                key={option}
                className={`option ${
                  Array.isArray(value) &&
                  value.includes(option)
                    ? 'active'
                    : ''
                }`}
                onClick={() => toggleOption(option)}
              >
                {option}
              </button>
            ))}
          </div>
        )}

        <div className="actions">
          {step > 0 ? (
            <button
              className="btn ghost"
              onClick={() => setStep(step - 1)}
            >
              ← Voltar
            </button>
          ) : (
            <span />
          )}

          <button
            className="btn primary"
            disabled={!valid}
            onClick={next}
          >
            {step === 4
              ? 'GERAR MEU MAPA'
              : 'Continuar →'}
          </button>
        </div>
      </div>
    </main>
  );
}