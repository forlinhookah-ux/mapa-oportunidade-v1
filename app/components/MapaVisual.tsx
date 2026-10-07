'use client';

import { useState } from 'react';

type Oportunidade = {
  titulo: string;
  descricao: string;
  modelo_receita: string;
  preco: string;

  faturamento_estimado: string;
  custo_estimado: string;
  lucro_estimado: string;
  clientes_para_meta: string;
  capacidade_semanal: string;
  horas_necessarias: string;
  compatibilidade_meta: string;

  velocidade: 'Rápida' | 'Média' | 'Lenta';
  dificuldade: 'Baixa' | 'Média' | 'Alta';

  o_que_vender: string;
  cliente_ideal: string;
  investimento: string;
  como_conseguir_clientes: string;
  potencial: string;
  por_que_combina: string;
};

type ResultadoMapa = {
  aderencia: number;

  recomendacao: {
    titulo: string;
    por_que: string;
    primeiro_movimento?: string;
  };

  oportunidades: Oportunidade[];

  plano_7_dias: string[];
};

type Answers = {
  skills: string;
  interests: string;
  time: string | string[];
  resources: string | string[];
  goal: string | string[];
};

type MapaVisualProps = {
  resultado: ResultadoMapa;
  answers: Answers | null;
  mapaId?: string;
};

export default function MapaVisual({
  resultado,
  answers,
  mapaId,
}: MapaVisualProps) {
  const [linkCopiado, setLinkCopiado] = useState(false);
  const [pdfBaixando, setPdfBaixando] = useState(false);

  const [oportunidadeAberta, setOportunidadeAberta] =
    useState<number | null>(0);

  const [planoAberto, setPlanoAberto] = useState(false);

  function salvarMeuMapa() {
    if (!mapaId) return;

    const link = `${window.location.origin}/mapa/${mapaId}`;

    navigator.clipboard.writeText(link);

    setLinkCopiado(true);

    setTimeout(() => {
      setLinkCopiado(false);
    }, 2500);
  }

  async function baixarPDF() {
    const elemento = document.querySelector('.page') as HTMLElement | null;

    if (!elemento) return;

    setPdfBaixando(true);
    elemento.classList.add('pdf-mode');

    try {
      const html2pdf = (await import('html2pdf.js')).default;

      const opcoes = {
        margin: 0,
        filename: 'meu-mapa-da-oportunidade.pdf',
        image: {
          type: 'jpeg' as const,
          quality: 0.98,
        },
        html2canvas: {
          scale: 2,
          useCORS: true,
          backgroundColor: '#05070d',
        },
        jsPDF: {
          unit: 'mm' as const,
          format: 'a4' as const,
          orientation: 'portrait' as const,
        },
      };

      await html2pdf()
        .set(opcoes)
        .from(elemento)
        .save();
    } catch (error) {
      console.error('Erro ao gerar PDF:', error);
    } finally {
      elemento.classList.remove('pdf-mode');
      setPdfBaixando(false);
    }
  }

  function texto(valor: string | string[] | undefined) {
    if (Array.isArray(valor)) {
      return valor.join(', ');
    }

    return valor || 'Não informado';
  }

  const aderencia = Math.max(
    0,
    Math.min(100, Number(resultado.aderencia) || 0)
  );

  const grausAderencia = aderencia * 3.6;

  return (
    <main className="page">
      <div className="container">
        <header className="header">
          <div className="brand">
            ALFOR<span>TECH</span>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              flexWrap: 'wrap',
              justifyContent: 'flex-end',
            }}
          >
            <div className="badge">MAPA PERSONALIZADO</div>

            {mapaId && (
              <>
                <button
                  type="button"
                  onClick={salvarMeuMapa}
                  style={{
                    border: '1px solid rgba(56, 189, 248, 0.35)',
                    background: 'rgba(56, 189, 248, 0.08)',
                    color: '#38bdf8',
                    padding: '10px 14px',
                    borderRadius: '10px',
                    fontWeight: 800,
                    fontSize: '12px',
                    cursor: 'pointer',
                    letterSpacing: '0.04em',
                  }}
                >
                  {linkCopiado
                    ? '✓ LINK COPIADO'
                    : '🔗 SALVAR MEU MAPA'}
                </button>

                <button
                  type="button"
                  onClick={baixarPDF}
                  disabled={pdfBaixando}
                  style={{
                    border: '1px solid rgba(129, 140, 248, 0.4)',
                    background: 'rgba(129, 140, 248, 0.1)',
                    color: '#a5b4fc',
                    padding: '10px 14px',
                    borderRadius: '10px',
                    fontWeight: 800,
                    fontSize: '12px',
                    cursor: pdfBaixando ? 'wait' : 'pointer',
                    letterSpacing: '0.04em',
                    opacity: pdfBaixando ? 0.7 : 1,
                  }}
                >
                  {pdfBaixando
                    ? '⏳ GERANDO PDF...'
                    : '📄 BAIXAR PDF'}
                </button>
              </>
            )}
          </div>
        </header>

        <section className="hero">
          <p className="eyebrow">
            MAPA DA OPORTUNIDADE • RESULTADO
          </p>

          <h1>
            Seu mapa está <span>pronto.</span>
          </h1>

          <p className="heroText">
            A inteligência artificial analisou seu perfil
            e construiu uma rota de oportunidades baseada
            no que você sabe, no que possui e onde quer
            chegar.
          </p>
        </section>

        <section className="scoreCard">
          <div>
            <p className="label">ADERÊNCIA AO SEU PERFIL</p>

            <h2>{aderencia}%</h2>

            <p className="scoreText">
              Sua aderência foi calculada considerando
              habilidades, interesses, recursos, tempo e
              viabilidade financeira.
            </p>
          </div>

          <div
            className="scoreCircle"
            style={{
              background: `conic-gradient(
                #38bdf8 0deg,
                #818cf8 ${grausAderencia}deg,
                rgba(255, 255, 255, 0.06) ${grausAderencia}deg
              )`,
            }}
          >
            <div>
              <strong>{aderencia}</strong>
              <span>%</span>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="sectionTitle">
            <span>01</span>

            <div>
              <p className="eyebrow">SEU PERFIL</p>

              <h2>
                O mapa foi construído a partir de você.
              </h2>
            </div>
          </div>

          <div className="profileGrid">
            <div className="profileCard">
              <span>🧠</span>

              <small>HABILIDADES</small>

              <strong>
                {answers?.skills || 'Não informado'}
              </strong>
            </div>

            <div className="profileCard">
              <span>🎯</span>

              <small>INTERESSES</small>

              <strong>
                {answers?.interests || 'Não informado'}
              </strong>
            </div>

            <div className="profileCard">
              <span>⏱️</span>

              <small>TEMPO DISPONÍVEL</small>

              <strong>{texto(answers?.time)}</strong>
            </div>

            <div className="profileCard">
              <span>🛠️</span>

              <small>RECURSOS</small>

              <strong>{texto(answers?.resources)}</strong>
            </div>

            <div className="profileCard highlight">
              <span>💰</span>

              <small>META MENSAL</small>

              <strong>{texto(answers?.goal)}</strong>
            </div>
          </div>
        </section>

        <section className="recommendation">
          <div className="recommendationTop">
            <div className="trophy">🏆</div>

            <div>
              <p className="eyebrow">
                RECOMENDAÇÃO PRINCIPAL
              </p>

              <h2>
                {resultado.recomendacao.titulo}
              </h2>
            </div>
          </div>

          <div className="recommendationContent">
            <div className="reason">
              <h3>
                Por que essa é a melhor para você?
              </h3>

              <p>
                {resultado.recomendacao.por_que ||
                  'A IA identificou esta oportunidade como a mais compatível com seu perfil.'}
              </p>
            </div>

            <div className="firstStep">
              <span>🚀</span>

              <div>
                <small>SEU PRIMEIRO MOVIMENTO</small>

                <strong>
                  {resultado.recomendacao
                    .primeiro_movimento ||
                    'Comece validando a oferta com potenciais clientes.'}
                </strong>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="sectionTitle">
            <span>02</span>

            <div>
              <p className="eyebrow">OPORTUNIDADES</p>

              <h2>
                Três caminhos encontrados pela IA.
              </h2>
            </div>
          </div>

          <div className="opportunities">
            {resultado.oportunidades?.map(
              (oportunidade, index) => {
                const aberta =
                  oportunidadeAberta === index;

                return (
                  <article
                    className={`opportunity ${
                      index === 0 ? 'recommended' : ''
                    }`}
                    key={index}
                  >
                    <button
                      type="button"
                      className="opportunityHeader"
                      onClick={() =>
                        setOportunidadeAberta(
                          aberta ? null : index
                        )
                      }
                    >
                      <div className="number">
                        {index === 0
                          ? '🏆'
                          : index === 1
                            ? '🥈'
                            : '🥉'}
                      </div>

                      <div className="opportunityMain">
                        <small>
                          OPORTUNIDADE {index + 1}
                        </small>

                        <h3>
                          {oportunidade.titulo}
                        </h3>

                        <p>
                          {oportunidade.descricao}
                        </p>

                        <div className="quickStats">
                          <span>
                            💰{' '}
                            {oportunidade.preco ||
                              'Não informado'}
                          </span>

                          <span>
                            ⚡{' '}
                            {oportunidade.velocidade ||
                              'Não informado'}
                          </span>

                          <span>
                            📊{' '}
                            {oportunidade.dificuldade ||
                              'Não informado'}
                          </span>
                        </div>
                      </div>

                      <div className="arrow">
                        {aberta ? '−' : '+'}
                      </div>
                    </button>

                    {aberta && (
                      <div className="opportunityDetails">
                        <div className="detail full financialHeader">
                          <div>
                            <small>
                              ANÁLISE FINANCEIRA
                            </small>

                            <h4>
                              Essa oportunidade consegue
                              chegar na sua meta?
                            </h4>
                          </div>

                          <span className="financialIcon">
                            📊
                          </span>
                        </div>

                        <div className="financialGrid">
                          <div className="financialCard">
                            <span>💵</span>

                            <small>
                              FATURAMENTO ESTIMADO
                            </small>

                            <strong>
                              {oportunidade
                                .faturamento_estimado ||
                                'Não informado'}
                            </strong>
                          </div>

                          <div className="financialCard">
                            <span>💸</span>

                            <small>CUSTO ESTIMADO</small>

                            <strong>
                              {oportunidade
                                .custo_estimado ||
                                'Não informado'}
                            </strong>
                          </div>

                          <div className="financialCard profit">
                            <span>📈</span>

                            <small>LUCRO ESTIMADO</small>

                            <strong>
                              {oportunidade
                                .lucro_estimado ||
                                'Não informado'}
                            </strong>
                          </div>

                          <div className="financialCard">
                            <span>🎯</span>

                            <small>
                              PARA ATINGIR SUA META
                            </small>

                            <strong>
                              {oportunidade
                                .clientes_para_meta ||
                                'Não informado'}
                            </strong>
                          </div>
                        </div>

                        <div className="capacityBox">
                          <div className="capacityTitle">
                            <span>⚙️</span>

                            <div>
                              <small>
                                CAPACIDADE E EXECUÇÃO
                              </small>

                              <h4>
                                A conta precisa caber na
                                sua rotina.
                              </h4>
                            </div>
                          </div>

                          <div className="capacityGrid">
                            <div>
                              <small>
                                CAPACIDADE SEMANAL
                              </small>

                              <p>
                                {oportunidade
                                  .capacidade_semanal ||
                                  'Não informado'}
                              </p>
                            </div>

                            <div>
                              <small>
                                HORAS NECESSÁRIAS
                              </small>

                              <p>
                                {oportunidade
                                  .horas_necessarias ||
                                  'Não informado'}
                              </p>
                            </div>

                            <div className="compatibility">
                              <small>
                                COMPATIBILIDADE COM SUA META
                              </small>

                              <p>
                                {oportunidade
                                  .compatibilidade_meta ||
                                  'Não informado'}
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="detail">
                          <small>O QUE VENDER</small>

                          <p>
                            {oportunidade.o_que_vender ||
                              'Não informado'}
                          </p>
                        </div>

                        <div className="detail">
                          <small>CLIENTE IDEAL</small>

                          <p>
                            {oportunidade.cliente_ideal ||
                              'Não informado'}
                          </p>
                        </div>

                        <div className="detail">
                          <small>MODELO DE RECEITA</small>

                          <p>
                            {oportunidade.modelo_receita ||
                              'Não informado'}
                          </p>
                        </div>

                        <div className="detail">
                          <small>INVESTIMENTO INICIAL</small>

                          <p>
                            {oportunidade.investimento ||
                              'Não informado'}
                          </p>
                        </div>

                        <div className="detail full">
                          <small>
                            COMO CONSEGUIR CLIENTES
                          </small>

                          <p>
                            {oportunidade
                              .como_conseguir_clientes ||
                              'Não informado'}
                          </p>
                        </div>

                        <div className="detail">
                          <small>POTENCIAL</small>

                          <p>
                            {oportunidade.potencial ||
                              'Não informado'}
                          </p>
                        </div>

                        <div className="detail">
                          <small>
                            POR QUE COMBINA COM VOCÊ
                          </small>

                          <p>
                            {oportunidade.por_que_combina ||
                              'Não informado'}
                          </p>
                        </div>
                      </div>
                    )}
                  </article>
                );
              }
            )}
          </div>
        </section>

        <section className="plan">
          <div className="planHeader">
            <div>
              <p className="eyebrow">
                03 • EXECUÇÃO
              </p>

              <h2>Seu próximo passo é ação.</h2>

              <p>
                Você não precisa descobrir tudo hoje.
                Precisa executar o primeiro movimento.
              </p>
            </div>

            <button
              type="button"
              className="planButton"
              onClick={() =>
                setPlanoAberto(!planoAberto)
              }
            >
              {planoAberto
                ? 'FECHAR PLANO'
                : 'ABRIR PLANO'}
            </button>
          </div>

          {planoAberto && (
            <div className="days">
              {resultado.plano_7_dias?.map(
                (dia, index) => (
                  <div
                    className="day"
                    key={index}
                  >
                    <div className="dayNumber">
                      {index + 1}
                    </div>

                    <div>
                      <small>
                        DIA {index + 1}
                      </small>

                      <p>{dia}</p>
                    </div>
                  </div>
                )
              )}
            </div>
          )}
        </section>

        <section className="finalCta">
          <p className="eyebrow">
            AGORA É COM VOCÊ
          </p>

          <h2>
            O mapa mostra possibilidades.
          </h2>

          <h3>
            A execução transforma uma delas em realidade.
          </h3>

          <div className="finalAction">
            <span>🚀</span>

            <p>
              Comece pela oportunidade recomendada e
              execute o primeiro movimento ainda hoje.
            </p>
          </div>
        </section>

        <footer>
          <div className="brand">
            ALFOR<span>TECH</span>
          </div>

          <p>
            Inteligência artificial aplicada a
            oportunidades reais.
          </p>
        </footer>
      </div>

      <style jsx>{`
        * {
          box-sizing: border-box;
        }

        .page {
          min-height: 100vh;
          background:
            radial-gradient(
              circle at 50% -10%,
              rgba(37, 99, 235, 0.2),
              transparent 35%
            ),
            radial-gradient(
              circle at 90% 40%,
              rgba(124, 58, 237, 0.08),
              transparent 30%
            ),
            #05070d;
          color: #f8fafc;
          font-family: Arial, Helvetica, sans-serif;
          padding: 0 20px;
        }

        .container {
          width: 100%;
          max-width: 1050px;
          margin: 0 auto;
        }

        .header {
          min-height: 80px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }

        .brand {
          font-size: 20px;
          font-weight: 900;
          letter-spacing: -0.04em;
        }

        .brand span {
          color: #38bdf8;
        }

        .badge {
          border: 1px solid rgba(56, 189, 248, 0.2);
          background: rgba(56, 189, 248, 0.06);
          color: #7dd3fc;
          padding: 8px 12px;
          border-radius: 999px;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.1em;
        }

        .hero {
          text-align: center;
          padding: 85px 0 60px;
        }

        .eyebrow {
          color: #38bdf8;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 0.16em;
          margin: 0 0 14px;
        }

        .hero h1 {
          font-size: clamp(48px, 8vw, 88px);
          line-height: 0.95;
          letter-spacing: -0.065em;
          margin: 0;
        }

        .hero h1 span {
          display: inline;
          background: linear-gradient(
            90deg,
            #38bdf8,
            #818cf8
          );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .pdf-mode .hero h1 span {
          background: none !important;
          -webkit-background-clip: initial !important;
          background-clip: initial !important;
          color: #38bdf8 !important;
        }

        .heroText {
          max-width: 680px;
          margin: 30px auto 0;
          color: #94a3b8;
          font-size: 17px;
          line-height: 1.75;
        }

        .scoreCard {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
          padding: 35px;
          border: 1px solid rgba(56, 189, 248, 0.2);
          border-radius: 24px;
          background:
            linear-gradient(
              135deg,
              rgba(37, 99, 235, 0.15),
              rgba(15, 23, 42, 0.7)
            );
          box-shadow: 0 20px 70px rgba(0, 0, 0, 0.3);
        }

        .label {
          color: #7dd3fc;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 0.15em;
          margin: 0 0 8px;
        }

        .scoreCard h2 {
          font-size: 58px;
          margin: 0;
          letter-spacing: -0.05em;
        }

        .scoreText {
          color: #94a3b8;
          margin: 6px 0 0;
          max-width: 560px;
          line-height: 1.6;
        }

        .scoreCircle {
          width: 105px;
          height: 105px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .scoreCircle > div {
          width: 85px;
          height: 85px;
          background: #080b13;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .scoreCircle strong {
          font-size: 25px;
        }

        .scoreCircle span {
          font-size: 12px;
          color: #94a3b8;
          margin-left: 2px;
        }

        .section {
          padding: 90px 0 0;
        }

        .sectionTitle {
          display: flex;
          gap: 18px;
          align-items: flex-start;
          margin-bottom: 30px;
        }

        .sectionTitle > span {
          color: #38bdf8;
          font-size: 12px;
          font-weight: 900;
          padding-top: 5px;
        }

        .sectionTitle h2 {
          margin: 0;
          font-size: clamp(28px, 5vw, 44px);
          letter-spacing: -0.04em;
        }

        .sectionTitle .eyebrow {
          margin-bottom: 8px;
        }

        .profileGrid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
        }

        .profileCard {
          min-height: 150px;
          padding: 24px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 18px;
          background: rgba(15, 23, 42, 0.55);
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .profileCard span {
          font-size: 24px;
        }

        .profileCard small {
          color: #64748b;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 0.12em;
        }

        .profileCard strong {
          color: #e2e8f0;
          line-height: 1.5;
          font-size: 15px;
        }

        .profileCard.highlight {
          grid-column: span 2;
          border-color: rgba(56, 189, 248, 0.2);
          background: rgba(14, 116, 144, 0.1);
        }

        .recommendation {
          margin-top: 90px;
          padding: 40px;
          border: 1px solid rgba(56, 189, 248, 0.25);
          border-radius: 28px;
          background:
            radial-gradient(
              circle at top right,
              rgba(56, 189, 248, 0.12),
              transparent 35%
            ),
            rgba(15, 23, 42, 0.8);
          box-shadow: 0 25px 80px rgba(0, 0, 0, 0.3);
        }

        .recommendationTop {
          display: flex;
          gap: 20px;
          align-items: flex-start;
        }

        .trophy {
          font-size: 38px;
        }

        .recommendation h2 {
          font-size: clamp(28px, 5vw, 46px);
          letter-spacing: -0.04em;
          margin: 0;
          line-height: 1.1;
        }

        .recommendationContent {
          margin-top: 35px;
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 20px;
        }

        .reason,
        .firstStep {
          border-radius: 18px;
          padding: 25px;
          background: rgba(2, 6, 23, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.06);
        }

        .reason h3 {
          margin: 0 0 10px;
          font-size: 17px;
        }

        .reason p {
          color: #94a3b8;
          line-height: 1.7;
          margin: 0;
        }

        .firstStep {
          display: flex;
          gap: 14px;
        }

        .firstStep > span {
          font-size: 25px;
        }

        .firstStep small {
          display: block;
          color: #38bdf8;
          font-weight: 900;
          font-size: 10px;
          letter-spacing: 0.1em;
          margin-bottom: 8px;
        }

        .firstStep strong {
          display: block;
          line-height: 1.5;
          color: #e2e8f0;
        }

        .opportunities {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .opportunity {
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          background: rgba(15, 23, 42, 0.5);
          overflow: hidden;
          transition: 0.2s ease;
        }

        .opportunity.recommended {
          border-color: rgba(56, 189, 248, 0.25);
        }

        .opportunityHeader {
          width: 100%;
          border: 0;
          background: transparent;
          color: inherit;
          padding: 25px;
          display: grid;
          grid-template-columns: 55px 1fr 30px;
          gap: 18px;
          text-align: left;
          cursor: pointer;
        }

        .number {
          font-size: 27px;
        }

        .opportunityMain small {
          color: #64748b;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 0.12em;
        }

        .opportunityMain h3 {
          font-size: 23px;
          margin: 7px 0 8px;
        }

        .opportunityMain p {
          color: #94a3b8;
          line-height: 1.65;
          margin: 0;
        }

        .quickStats {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 17px;
        }

        .quickStats span {
          padding: 7px 10px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.04);
          color: #cbd5e1;
          font-size: 11px;
        }

        .arrow {
          color: #38bdf8;
          font-size: 24px;
          text-align: center;
        }

        .opportunityDetails {
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          padding: 25px;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 15px;
        }

        .detail {
          padding: 18px;
          border-radius: 14px;
          background: rgba(2, 6, 23, 0.35);
        }

        .detail.full {
          grid-column: span 2;
        }

        .detail small,
        .financialCard small,
        .capacityBox small {
          color: #38bdf8;
          font-size: 9px;
          font-weight: 900;
          letter-spacing: 0.12em;
        }

        .detail p {
          color: #cbd5e1;
          line-height: 1.6;
          margin: 7px 0 0;
          font-size: 14px;
        }

        .financialHeader {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          background:
            linear-gradient(
              135deg,
              rgba(37, 99, 235, 0.13),
              rgba(2, 6, 23, 0.35)
            );
          border: 1px solid rgba(56, 189, 248, 0.12);
        }

        .financialHeader h4 {
          margin: 7px 0 0;
          font-size: 18px;
          color: #e2e8f0;
        }

        .financialIcon {
          font-size: 28px;
        }

        .financialGrid {
          grid-column: span 2;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
        }

        .financialCard {
          padding: 20px;
          border-radius: 16px;
          background: rgba(15, 23, 42, 0.75);
          border: 1px solid rgba(255, 255, 255, 0.06);
          display: flex;
          flex-direction: column;
          gap: 9px;
        }

        .financialCard > span {
          font-size: 22px;
        }

        .financialCard strong {
          color: #f8fafc;
          line-height: 1.45;
          font-size: 15px;
        }

        .financialCard.profit {
          border-color: rgba(34, 197, 94, 0.25);
          background: rgba(22, 101, 52, 0.08);
        }

        .financialCard.profit small {
          color: #4ade80;
        }

        .capacityBox {
          grid-column: span 2;
          padding: 22px;
          border-radius: 18px;
          border: 1px solid rgba(129, 140, 248, 0.16);
          background:
            linear-gradient(
              135deg,
              rgba(79, 70, 229, 0.09),
              rgba(15, 23, 42, 0.55)
            );
        }

        .capacityTitle {
          display: flex;
          gap: 13px;
          align-items: flex-start;
        }

        .capacityTitle > span {
          font-size: 24px;
        }

        .capacityTitle h4 {
          margin: 6px 0 0;
          color: #e2e8f0;
          font-size: 17px;
        }

        .capacityGrid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          margin-top: 20px;
        }

        .capacityGrid > div {
          padding: 16px;
          border-radius: 13px;
          background: rgba(2, 6, 23, 0.45);
        }

        .capacityGrid p {
          margin: 8px 0 0;
          color: #cbd5e1;
          font-size: 14px;
          line-height: 1.5;
        }

        .capacityGrid .compatibility {
          border: 1px solid rgba(56, 189, 248, 0.18);
          background: rgba(56, 189, 248, 0.06);
        }

        .capacityGrid .compatibility p {
          color: #7dd3fc;
          font-weight: 700;
        }

        .plan {
          margin-top: 90px;
          padding: 35px;
          border: 1px solid rgba(129, 140, 248, 0.2);
          border-radius: 25px;
          background: rgba(30, 27, 75, 0.25);
        }

        .planHeader {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
        }

        .plan h2 {
          font-size: 36px;
          margin: 0;
        }

        .planHeader p:not(.eyebrow) {
          color: #94a3b8;
          margin-bottom: 0;
        }

        .planButton {
          border: 0;
          border-radius: 12px;
          background: #2563eb;
          color: white;
          font-weight: 900;
          font-size: 11px;
          padding: 14px 18px;
          cursor: pointer;
          white-space: nowrap;
        }

        .days {
          margin-top: 30px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .day {
          display: flex;
          align-items: flex-start;
          gap: 18px;
          padding: 18px;
          border-radius: 15px;
          background: rgba(2, 6, 23, 0.45);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .dayNumber {
          min-width: 35px;
          height: 35px;
          border-radius: 50%;
          background: rgba(56, 189, 248, 0.1);
          color: #38bdf8;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 900;
        }

        .day small {
          color: #64748b;
          font-size: 9px;
          font-weight: 900;
          letter-spacing: 0.12em;
        }

        .day p {
          color: #cbd5e1;
          line-height: 1.6;
          margin: 5px 0 0;
        }

        .finalCta {
          margin: 90px 0 60px;
          padding: 60px 30px;
          text-align: center;
          border-radius: 28px;
          background:
            radial-gradient(
              circle at center,
              rgba(37, 99, 235, 0.2),
              transparent 55%
            ),
            rgba(15, 23, 42, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.07);
        }

        .finalCta h2 {
          font-size: clamp(30px, 5vw, 48px);
          margin: 0;
          letter-spacing: -0.04em;
        }

        .finalCta h3 {
          color: #38bdf8;
          font-size: clamp(20px, 4vw, 30px);
          margin: 10px 0 30px;
        }

        .finalAction {
          max-width: 650px;
          margin: auto;
          padding: 18px 22px;
          display: flex;
          gap: 12px;
          align-items: center;
          text-align: left;
          border-radius: 15px;
          background: rgba(56, 189, 248, 0.06);
          border: 1px solid rgba(56, 189, 248, 0.12);
        }

        .finalAction span {
          font-size: 22px;
        }

        .finalAction p {
          color: #cbd5e1;
          line-height: 1.5;
          margin: 0;
        }

        footer {
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          padding: 30px 0 50px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
        }

        footer p {
          color: #475569;
          font-size: 12px;
          margin: 0;
        }

        @media (max-width: 850px) {
          .financialGrid {
            grid-template-columns: repeat(2, 1fr);
          }

          .capacityGrid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 700px) {
          .page {
            padding: 0 14px;
          }

          .header {
            min-height: 70px;
            align-items: flex-start;
            padding: 15px 0;
          }

          .header > div:last-child {
            max-width: 70%;
          }

          .badge {
            display: none;
          }

          .hero {
            padding: 60px 0 40px;
          }

          .hero h1 {
            font-size: 52px;
          }

          .scoreCard {
            padding: 25px;
          }

          .scoreCircle {
            width: 80px;
            height: 80px;
          }

          .scoreCircle > div {
            width: 64px;
            height: 64px;
          }

          .scoreCircle strong {
            font-size: 19px;
          }

          .profileGrid {
            grid-template-columns: 1fr;
          }

          .profileCard.highlight {
            grid-column: span 1;
          }

          .recommendation {
            padding: 25px;
            margin-top: 60px;
          }

          .recommendationContent {
            grid-template-columns: 1fr;
          }

          .opportunityHeader {
            grid-template-columns: 35px 1fr 20px;
            padding: 20px;
            gap: 10px;
          }

          .opportunityMain h3 {
            font-size: 19px;
          }

          .opportunityDetails {
            grid-template-columns: 1fr;
            padding: 15px;
          }

          .detail.full,
          .financialGrid,
          .capacityBox {
            grid-column: span 1;
          }

          .financialGrid {
            grid-template-columns: 1fr;
          }

          .financialHeader {
            align-items: flex-start;
          }

          .plan {
            margin-top: 60px;
            padding: 25px;
          }

          .planHeader {
            flex-direction: column;
            align-items: flex-start;
          }

          .planButton {
            width: 100%;
          }

          footer {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </main>
  );
}