'use client';

import { useEffect, useState } from 'react';

type Answers = Record<string, string | string[]>;

type Opportunity = {
  titulo: string;
  descricao: string;
  o_que_vender: string;
  cliente_ideal: string;
  preco_sugerido: string;
  modelo_de_receita: string;
  clientes_para_meta: string;
  investimento_inicial: string;
  dificuldade: string;
  velocidade_para_primeira_venda: string;
  como_conseguir_clientes: string;
  potencial: string;
  por_que_combina: string;
};

type Mapa = {
  oportunidades: Opportunity[];
  recomendacao: {
    titulo: string;
    motivo: string;
    primeiro_passo: string;
  };
  plano_7_dias: string[];
};

export default function Resultado() {
  const [answers, setAnswers] = useState<Answers | null>(null);
  const [mapa, setMapa] = useState<Mapa | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [openSection, setOpenSection] = useState<string | null>(null);

  useEffect(() => {
    async function gerarMapa() {
      const saved = sessionStorage.getItem('mapa_answers');

      if (!saved) {
        setError('Nenhuma resposta encontrada.');
        setLoading(false);
        return;
      }

      try {
        const parsedAnswers = JSON.parse(saved);

        setAnswers(parsedAnswers);

        const response = await fetch('/api/gerar-mapa', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(parsedAnswers),
        });

        if (!response.ok) {
          throw new Error('Erro ao gerar o mapa.');
        }

        const data = await response.json();

        if (data.error) {
          throw new Error(data.error);
        }

        setMapa(data);
      } catch (err) {
        console.error(err);

        setError(
          'Não foi possível gerar seu mapa. Tente novamente.'
        );
      } finally {
        setLoading(false);
      }
    }

    gerarMapa();
  }, []);

  function toggleSection(section: string) {
    setOpenSection(
      openSection === section ? null : section
    );
  }

  if (loading) {
    return (
      <main className="wrap">
        <div className="formbox">
          <div className="q">
            ALFORTECH
          </div>

          <h1>
            Analisando seu perfil...
          </h1>

          <p className="muted">
            Nossa inteligência artificial está procurando
            oportunidades compatíveis com suas habilidades,
            interesses, recursos e meta financeira.
          </p>

          <div className="option active">
            🧠 Analisando suas habilidades...
          </div>

          <div className="option active">
            🎯 Cruzando seus interesses...
          </div>

          <div className="option active">
            💰 Calculando possibilidades de renda...
          </div>

          <div className="option active">
            🚀 Montando seu plano de ação...
          </div>
        </div>
      </main>
    );
  }

  if (error || !answers || !mapa) {
    return (
      <main className="wrap">
        <div className="formbox">
          <h1>
            Não conseguimos gerar seu mapa.
          </h1>

          <p className="muted">
            {error}
          </p>

          <a
            className="btn primary"
            href="/questionario"
            style={{
              display: 'inline-block',
              textDecoration: 'none',
              marginTop: '20px',
            }}
          >
            TENTAR NOVAMENTE
          </a>
        </div>
      </main>
    );
  }

  const skills = String(answers.skills || '');
  const interests = String(answers.interests || '');

  const time = Array.isArray(answers.time)
    ? answers.time.join(', ')
    : String(answers.time || '');

  const resources = Array.isArray(answers.resources)
    ? answers.resources.join(', ')
    : String(answers.resources || '');

  const goal = Array.isArray(answers.goal)
    ? answers.goal.join(', ')
    : String(answers.goal || '');

  return (
    <main className="wrap">
      <nav className="nav">
        <div className="brand">
          ALFOR<span>TECH</span>
        </div>

        <div className="pill">
          Seu Mapa
        </div>
      </nav>

      {/* HERO */}

      <section className="hero">
        <div className="eyebrow">
          MAPA DA OPORTUNIDADE
        </div>

        <h1>
          Seu mapa personalizado está pronto.
        </h1>

        <p>
          A inteligência artificial analisou seu perfil
          e encontrou oportunidades compatíveis com
          o que você já possui.
        </p>
      </section>

      {/* PERFIL */}

      <section className="formbox">
        <div className="q">
          SEU PERFIL
        </div>

        <h2>
          O ponto de partida
        </h2>

        <div className="grid">
          <div className="card">
            <div>🧠</div>

            <h3>
              Habilidades
            </h3>

            <p>
              {skills}
            </p>
          </div>

          <div className="card">
            <div>🎯</div>

            <h3>
              Interesses
            </h3>

            <p>
              {interests}
            </p>
          </div>

          <div className="card">
            <div>⏱️</div>

            <h3>
              Tempo disponível
            </h3>

            <p>
              {time}
            </p>
          </div>

          <div className="card">
            <div>🛠️</div>

            <h3>
              Recursos
            </h3>

            <p>
              {resources}
            </p>
          </div>

          <div className="card">
            <div>💰</div>

            <h3>
              Meta mensal
            </h3>

            <p>
              {goal}
            </p>
          </div>
        </div>
      </section>

      {/* OPORTUNIDADES */}

      <section className="formbox">
        <div className="q">
          OPORTUNIDADES
        </div>

        <h2>
          3 caminhos para você explorar
        </h2>

        <p className="muted">
          A IA encontrou estas oportunidades com base
          no seu perfil.
        </p>

        {mapa.oportunidades.map(
          (opportunity, index) => {
            const key = `opportunity-${index}`;
            const isOpen = openSection === key;

            return (
              <div
                key={key}
                className="card"
                onClick={() => toggleSection(key)}
                style={{
                  cursor: 'pointer',
                  marginTop: '18px',
                  border:
                    index === 0
                      ? '1px solid rgba(120, 150, 255, 0.35)'
                      : undefined,
                }}
              >
                {/* CABEÇALHO */}

                <div
                  style={{
                    fontSize: '28px',
                    marginBottom: '8px',
                  }}
                >
                  {index === 0
                    ? '💡'
                    : index === 1
                    ? '🚀'
                    : '🔥'}
                </div>

                <h3>
                  {opportunity.titulo}
                </h3>

                <p>
                  {opportunity.descricao}
                </p>

                {/* RESUMO */}

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns:
                      'repeat(auto-fit, minmax(150px, 1fr))',
                    gap: '10px',
                    marginTop: '18px',
                  }}
                >
                  <div className="option active">
                    <strong>
                      💰 Preço
                    </strong>

                    <p>
                      {opportunity.preco_sugerido}
                    </p>
                  </div>

                  <div className="option active">
                    <strong>
                      🎯 Meta
                    </strong>

                    <p>
                      {opportunity.clientes_para_meta}
                    </p>
                  </div>

                  <div className="option active">
                    <strong>
                      ⚡ Primeira venda
                    </strong>

                    <p>
                      {opportunity.velocidade_para_primeira_venda}
                    </p>
                  </div>

                  <div className="option active">
                    <strong>
                      📊 Dificuldade
                    </strong>

                    <p>
                      {opportunity.dificuldade}
                    </p>
                  </div>
                </div>

                {/* BOTÃO */}

                <div
                  style={{
                    marginTop: '20px',
                  }}
                >
                  <strong>
                    {isOpen
                      ? '▲ Fechar detalhes'
                      : '▼ Ver detalhes completos'}
                  </strong>
                </div>

                {/* DETALHES */}

                {isOpen && (
                  <div
                    style={{
                      marginTop: '20px',
                      textAlign: 'left',
                    }}
                  >
                    <div className="option active">
                      <strong>
                        🛍️ O que vender
                      </strong>

                      <p>
                        {opportunity.o_que_vender}
                      </p>
                    </div>

                    <div className="option active">
                      <strong>
                        👤 Cliente ideal
                      </strong>

                      <p>
                        {opportunity.cliente_ideal}
                      </p>
                    </div>

                    <div className="option active">
                      <strong>
                        💰 Quanto cobrar
                      </strong>

                      <p>
                        {opportunity.preco_sugerido}
                      </p>
                    </div>

                    <div className="option active">
                      <strong>
                        🔄 Modelo de receita
                      </strong>

                      <p>
                        {opportunity.modelo_de_receita}
                      </p>
                    </div>

                    <div className="option active">
                      <strong>
                        🎯 Quantos clientes para sua meta
                      </strong>

                      <p>
                        {opportunity.clientes_para_meta}
                      </p>
                    </div>

                    <div className="option active">
                      <strong>
                        💵 Investimento inicial
                      </strong>

                      <p>
                        {opportunity.investimento_inicial}
                      </p>
                    </div>

                    <div className="option active">
                      <strong>
                        📈 Potencial
                      </strong>

                      <p>
                        {opportunity.potencial}
                      </p>
                    </div>

                    <div className="option active">
                      <strong>
                        📣 Como conseguir clientes
                      </strong>

                      <p>
                        {opportunity.como_conseguir_clientes}
                      </p>
                    </div>

                    <div className="option active">
                      <strong>
                        🧠 Por que combina com você
                      </strong>

                      <p>
                        {opportunity.por_que_combina}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          }
        )}
      </section>

      {/* RECOMENDAÇÃO */}

      <section className="formbox">
        <div className="q">
          RECOMENDAÇÃO DA IA
        </div>

        <h2>
          ⭐ {mapa.recomendacao.titulo}
        </h2>

        <p>
          {mapa.recomendacao.motivo}
        </p>

        <div
          className="option active"
          style={{
            marginTop: '20px',
          }}
        >
          <strong>
            🚀 Primeiro passo
          </strong>

          <p>
            {mapa.recomendacao.primeiro_passo}
          </p>
        </div>
      </section>

      {/* PLANO DE 7 DIAS */}

      <section className="formbox">
        <div className="q">
          PLANO DE AÇÃO
        </div>

        <h2>
          🚀 Seus próximos 7 dias
        </h2>

        <p className="muted">
          Um plano prático para transformar a oportunidade
          em ação.
        </p>

        <div
          className="card"
          onClick={() => toggleSection('plano')}
          style={{
            cursor: 'pointer',
            marginTop: '18px',
          }}
        >
          <h3>
            Plano de 7 dias
          </h3>

          <strong>
            {openSection === 'plano'
              ? '▲ Fechar plano'
              : '▼ Abrir plano'}
          </strong>

          {openSection === 'plano' && (
            <div
              style={{
                marginTop: '20px',
                textAlign: 'left',
              }}
            >
              {mapa.plano_7_dias.map(
                (dia, index) => (
                  <div
                    key={index}
                    className="option active"
                    style={{
                      marginTop: '10px',
                    }}
                  >
                    <strong>
                      DIA {index + 1}
                    </strong>

                    <p>
                      {dia}
                    </p>
                  </div>
                )
              )}
            </div>
          )}
        </div>
      </section>

      {/* FINAL */}

      <section
        className="formbox"
        style={{
          textAlign: 'center',
        }}
      >
        <div className="q">
          AGORA É COM VOCÊ
        </div>

        <h2>
          Uma oportunidade só vira renda quando você começa.
        </h2>

        <p className="muted">
          Use este mapa como ponto de partida e execute
          o primeiro passo ainda hoje.
        </p>
      </section>

      <div className="footer">
        ALFORTECH • Inteligência artificial aplicada a
        oportunidades reais.
      </div>
    </main>
  );
}