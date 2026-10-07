'use client';

export default function Home() {
  return (
    <main className="page">
      <div className="ambient ambientBlue" />
      <div className="ambient ambientPurple" />
      <div className="ambient ambientGold" />

      <div className="gridBackground" />

      <div className="wrap">
        <nav className="nav">
          <div className="brand">
            ALFOR<span>TECH</span>
          </div>

          <div className="navRight">
            <div className="pill">
              <span className="pillDot" />
              MAPA DA OPORTUNIDADE
            </div>
          </div>
        </nav>

        {/* HERO */}

        <section className="hero">
          <div className="heroBadge">
            <span>✦</span>
            INTELIGÊNCIA ARTIFICIAL • OPORTUNIDADES REAIS
          </div>

          <h1>
            Você tem mais possibilidades
            <br />
            do que imagina.
            <br />
            <span>Descubra qual pode virar renda.</span>
          </h1>

          <p className="heroText">
            Responda 5 perguntas sobre sua realidade e deixe a
            inteligência artificial encontrar oportunidades de renda
            compatíveis com suas habilidades, tempo, recursos e objetivo.
          </p>

          <div className="heroActions">
            <a href="/questionario" className="mainCta">
              <span>CRIAR MEU MAPA</span>
              <strong>R$19,90</strong>
              <b>→</b>
            </a>

            <div className="sub">
              5 perguntas&nbsp; • &nbsp;resultado personalizado&nbsp; • &nbsp;acesso imediato
            </div>
          </div>

          {/* MOCKUP DO MAPA */}

          <div className="mapPreview">
            <div className="previewGlow" />

            <div className="previewTop">
              <div>
                <div className="previewMini">
                  ✦ SEU MAPA FOI GERADO
                </div>

                <h3>
                  Mapa da
                  <span> Oportunidade</span>
                </h3>
              </div>

              <div className="previewStatus">
                <span />
                PERSONALIZADO
              </div>
            </div>

            <div className="previewGrid">

              <div className="scorePreview">
                <div className="scoreRing">
                  <div>
                    <strong>87</strong>
                    <small>%</small>
                  </div>
                </div>

                <div>
                  <small>ADERÊNCIA AO PERFIL</small>
                  <p>Alta compatibilidade</p>
                </div>
              </div>

              <div className="recommendPreview">
                <div className="recommendIcon">
                  🏆
                </div>

                <div>
                  <small>RECOMENDAÇÃO PRINCIPAL</small>
                  <strong>
                    Sua melhor oportunidade
                  </strong>
                  <p>
                    Uma oportunidade construída a partir
                    das suas características.
                  </p>
                </div>
              </div>

            </div>

            <div className="previewBottom">

              <div className="miniCard">
                <span>💡</span>
                <div>
                  <small>OPORTUNIDADES</small>
                  <strong>03 caminhos</strong>
                </div>
              </div>

              <div className="miniCard goldMini">
                <span>💰</span>
                <div>
                  <small>ANÁLISE FINANCEIRA</small>
                  <strong>Meta + lucro</strong>
                </div>
              </div>

              <div className="miniCard">
                <span>🚀</span>
                <div>
                  <small>EXECUÇÃO</small>
                  <strong>Plano de 7 dias</strong>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* PROBLEMA */}

        <section className="section">
          <div className="sectionIntro">
            <div className="sectionNumber">
              01
            </div>

            <div>
              <div className="eyebrow">
                O PROBLEMA
              </div>

              <h2>
                Talvez você não precise de
                <span> mais uma ideia.</span>
              </h2>

              <p>
                Talvez você precise descobrir qual das
                possibilidades realmente combina com você.
              </p>
            </div>
          </div>

          <div className="problemGrid">

            <div className="glassCard">
              <div className="cardIcon blue">
                🤯
              </div>

              <small>
                EXCESSO DE OPÇÕES
              </small>

              <h3>
                Muitas ideias.
                <br />
                Pouca clareza.
              </h3>

              <p>
                Você vê pessoas ganhando dinheiro de várias formas,
                mas continua sem saber qual caminho deveria seguir.
              </p>
            </div>

            <div className="glassCard">
              <div className="cardIcon purple">
                ⏳
              </div>

              <small>
                REALIDADE
              </small>

              <h3>
                Seu tempo
                <br />
                é limitado.
              </h3>

              <p>
                Uma oportunidade pode parecer ótima no papel,
                mas não funcionar para a sua rotina.
              </p>
            </div>

            <div className="glassCard goldCard">
              <div className="cardIcon gold">
                💰
              </div>

              <small>
                RECURSOS
              </small>

              <h3>
                Você precisa
                <br />
                começar com o que tem.
              </h3>

              <p>
                Nem todo mundo possui capital, equipe ou estrutura.
                E isso precisa entrar na conta.
              </p>
            </div>

          </div>
        </section>

        {/* SOLUÇÃO */}

        <section className="solutionSection">
          <div className="solutionGlow" />

          <div className="sectionIntro">
            <div className="sectionNumber purpleNumber">
              02
            </div>

            <div>
              <div className="eyebrow purpleText">
                A SOLUÇÃO
              </div>

              <h2>
                O mapa começa com
                <span> você.</span>
              </h2>

              <p>
                A inteligência artificial cruza sua realidade
                para encontrar possibilidades que façam sentido.
              </p>
            </div>
          </div>

          <div className="profileFlow">

            <div className="flowCard">
              <div className="flowIcon">🧠</div>
              <strong>Habilidades</strong>
              <span>O que você sabe fazer</span>
            </div>

            <div className="flowLine" />

            <div className="flowCard">
              <div className="flowIcon">🎯</div>
              <strong>Objetivos</strong>
              <span>Onde você quer chegar</span>
            </div>

            <div className="flowLine" />

            <div className="flowCard">
              <div className="flowIcon">🛠️</div>
              <strong>Recursos</strong>
              <span>O que você já possui</span>
            </div>

            <div className="flowLine" />

            <div className="flowCard">
              <div className="flowIcon">⏱️</div>
              <strong>Tempo</strong>
              <span>Quanto pode dedicar</span>
            </div>

          </div>

          <div className="aiEngine">
            <div className="aiOrb">
              <span>✦</span>
            </div>

            <div>
              <small>INTELIGÊNCIA ARTIFICIAL</small>
              <strong>
                Cruzando seu perfil...
              </strong>
            </div>

            <div className="aiSignal">
              <i />
              <i />
              <i />
            </div>
          </div>
        </section>

        {/* ENTREGA */}

        <section className="section">
          <div className="sectionIntro">
            <div className="sectionNumber goldNumber">
              03
            </div>

            <div>
              <div className="eyebrow goldText">
                O QUE VOCÊ RECEBE
              </div>

              <h2>
                Não entregamos apenas ideias.
                <span> Entregamos direção.</span>
              </h2>

              <p>
                Seu mapa transforma suas respostas em possibilidades
                concretas e um próximo passo.
              </p>
            </div>
          </div>

          <div className="deliverGrid">

            <div className="deliverCard large">
              <div className="deliverTop">
                <div className="deliverIcon">
                  💡
                </div>

                <span className="deliverTag">
                  01
                </span>
              </div>

              <h3>
                3 oportunidades
              </h3>

              <p>
                Três caminhos de renda personalizados a partir
                das características do seu perfil.
              </p>

              <div className="fakeLines">
                <span />
                <span />
                <span />
              </div>
            </div>

            <div className="deliverCard large featured">
              <div className="deliverTop">
                <div className="deliverIcon trophy">
                  🏆
                </div>

                <span className="goldTag">
                  PRINCIPAL
                </span>
              </div>

              <h3>
                Uma recomendação
              </h3>

              <p>
                O mapa destaca a oportunidade com maior
                compatibilidade com sua realidade.
              </p>

              <div className="featuredBar">
                <span />
              </div>
            </div>

            <div className="deliverCard">
              <div className="deliverIcon">
                📊
              </div>

              <h3>
                Análise financeira
              </h3>

              <p>
                Preço, custos, lucro estimado e clientes
                necessários para sua meta.
              </p>
            </div>

            <div className="deliverCard">
              <div className="deliverIcon">
                🚀
              </div>

              <h3>
                Plano de 7 dias
              </h3>

              <p>
                Um roteiro para sair da ideia e começar
                a validar a oportunidade.
              </p>
            </div>

          </div>
        </section>

        {/* COMO FUNCIONA */}

        <section className="howSection">
          <div className="sectionIntro centeredIntro">
            <div>
              <div className="eyebrow">
                SIMPLES DE USAR
              </div>

              <h2>
                Seu mapa em
                <span> poucos minutos.</span>
              </h2>

              <p>
                Sem formulários gigantes. Sem complicação.
              </p>
            </div>
          </div>

          <div className="steps">

            <div className="step">
              <div className="stepNumber">
                01
              </div>

              <div className="stepLine" />

              <div>
                <h3>
                  Responda 5 perguntas
                </h3>

                <p>
                  Conte sobre suas habilidades, interesses,
                  tempo, recursos e objetivo.
                </p>
              </div>
            </div>

            <div className="step">
              <div className="stepNumber purpleStep">
                02
              </div>

              <div className="stepLine purpleLine" />

              <div>
                <h3>
                  A IA analisa seu perfil
                </h3>

                <p>
                  Suas respostas são cruzadas para encontrar
                  oportunidades compatíveis com sua realidade.
                </p>
              </div>
            </div>

            <div className="step">
              <div className="stepNumber goldStep">
                03
              </div>

              <div className="stepLine goldLine" />

              <div>
                <h3>
                  Receba seu mapa
                </h3>

                <p>
                  Você recebe oportunidades, recomendação,
                  análise financeira e plano de ação.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* PREÇO */}

        <section className="pricingSection">

          <div className="pricingGlow" />

          <div className="pricingContent">

            <div className="eyebrow goldText">
              COMEÇE AGORA
            </div>

            <h2>
              Descubra suas oportunidades
              <br />
              por apenas <span>R$19,90.</span>
            </h2>

            <p>
              Um diagnóstico personalizado para transformar
              suas características atuais em possibilidades
              concretas de renda.
            </p>

            <div className="priceBox">
              <div className="price">
                <small>R$</small>
                <strong>19,90</strong>
              </div>

              <div className="priceInfo">
                <span>✓ Resultado personalizado</span>
                <span>✓ 3 oportunidades</span>
                <span>✓ Análise financeira</span>
                <span>✓ Plano de 7 dias</span>
              </div>
            </div>

            <a href="/questionario" className="goldCta">
              CRIAR MEU MAPA
              <span>→</span>
            </a>

            <div className="secure">
              🔒 Pagamento seguro&nbsp; • &nbsp;Resultado personalizado&nbsp; • &nbsp;Acesso imediato
            </div>

          </div>
        </section>

        {/* TRANSPARÊNCIA */}

        <section className="trustSection">

          <div className="trustIcon">
            ✓
          </div>

          <div>
            <div className="eyebrow">
              TRANSPARÊNCIA
            </div>

            <h2>
              Sem promessa de dinheiro fácil.
            </h2>

            <p>
              O mapa mostra possibilidades. A execução depende de você.
              Não prometemos renda garantida ou resultados automáticos.
              Nosso objetivo é ajudar você a encontrar caminhos
              compatíveis com sua realidade e transformar um deles
              em ação.
            </p>
          </div>

        </section>

        {/* CTA FINAL */}

        <section className="finalSection">

          <div className="finalOrb">
            ✦
          </div>

          <div className="eyebrow">
            SEU PRÓXIMO PASSO
          </div>

          <h2>
            Pare de procurar
            <br />
            <span>qualquer oportunidade.</span>
          </h2>

          <p>
            Descubra qual pode fazer sentido para você.
          </p>

          <div className="finalStats">
            <span>5 perguntas</span>
            <i>•</i>
            <span>3 oportunidades</span>
            <i>•</i>
            <span>1 recomendação</span>
            <i>•</i>
            <span>7 dias</span>
          </div>

          <a href="/questionario" className="mainCta finalCta">
            <span>CRIAR MEU MAPA</span>
            <strong>R$19,90</strong>
            <b>→</b>
          </a>

          <div className="sub">
            Comece com o que você já tem.
          </div>

        </section>

        <footer className="footer">
          <div>
            <div className="brand">
              ALFOR<span>TECH</span>
            </div>

            <p>
              Inteligência artificial aplicada a oportunidades reais.
            </p>
          </div>

          <div className="footerRight">
            MAPA DA OPORTUNIDADE
            <span>•</span>
            V1
          </div>
        </footer>

      </div>

      <style jsx>{`

        * {
          box-sizing: border-box;
        }

        .page {
          min-height: 100vh;
          position: relative;
          overflow: hidden;
          background:
            radial-gradient(
              circle at 50% -15%,
              rgba(37, 99, 235, 0.18),
              transparent 32%
            ),
            radial-gradient(
              circle at 15% 35%,
              rgba(124, 58, 237, 0.08),
              transparent 28%
            ),
            radial-gradient(
              circle at 85% 65%,
              rgba(234, 179, 8, 0.045),
              transparent 24%
            ),
            #03050a;
          color: #f8fafc;
          font-family: Arial, Helvetica, sans-serif;
        }

        .wrap {
          width: 100%;
          max-width: 1120px;
          margin: 0 auto;
          padding: 0 24px;
          position: relative;
          z-index: 2;
        }

        .ambient {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          pointer-events: none;
          opacity: 0.35;
        }

        .ambientBlue {
          width: 420px;
          height: 420px;
          background: rgba(37, 99, 235, 0.12);
          top: 250px;
          left: -260px;
        }

        .ambientPurple {
          width: 450px;
          height: 450px;
          background: rgba(124, 58, 237, 0.1);
          top: 900px;
          right: -300px;
        }

        .ambientGold {
          width: 350px;
          height: 350px;
          background: rgba(234, 179, 8, 0.055);
          top: 2400px;
          left: -200px;
        }

        .gridBackground {
          position: absolute;
          inset: 0;
          opacity: 0.16;
          pointer-events: none;
          background-image:
            linear-gradient(
              rgba(255,255,255,0.025) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255,255,255,0.025) 1px,
              transparent 1px
            );
          background-size: 60px 60px;
          mask-image: linear-gradient(
            to bottom,
            black,
            transparent 85%
          );
        }

        .nav {
          min-height: 82px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }

        .brand {
          font-size: 21px;
          font-weight: 950;
          letter-spacing: -0.055em;
        }

        .brand span {
          color: #38bdf8;
        }

        .navRight {
          display: flex;
          align-items: center;
        }

        .pill {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 9px 13px;
          border-radius: 999px;
          border: 1px solid rgba(129,140,248,0.2);
          background: rgba(15,23,42,0.5);
          color: #a5b4fc;
          font-size: 9px;
          font-weight: 900;
          letter-spacing: 0.12em;
          backdrop-filter: blur(12px);
        }

        .pillDot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #38bdf8;
          box-shadow: 0 0 12px rgba(56,189,248,0.9);
        }

        .hero {
          position: relative;
          text-align: center;
          padding: 110px 0 80px;
        }

        .heroBadge {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 9px 14px;
          border-radius: 999px;
          border: 1px solid rgba(56,189,248,0.18);
          background:
            linear-gradient(
              90deg,
              rgba(56,189,248,0.08),
              rgba(129,140,248,0.08)
            );
          color: #7dd3fc;
          font-size: 9px;
          font-weight: 900;
          letter-spacing: 0.14em;
          box-shadow: 0 0 35px rgba(56,189,248,0.06);
        }

        .heroBadge span {
          color: #facc15;
          font-size: 13px;
        }

        .hero h1 {
          margin: 28px auto 0;
          max-width: 1000px;
          font-size: clamp(48px, 8vw, 88px);
          line-height: 0.97;
          letter-spacing: -0.07em;
          font-weight: 950;
        }

        .hero h1 span {
          background:
            linear-gradient(
              90deg,
              #38bdf8 0%,
              #818cf8 42%,
              #c084fc 72%,
              #facc15 100%
            );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .heroText {
          max-width: 690px;
          margin: 30px auto 0;
          color: #94a3b8;
          font-size: 16px;
          line-height: 1.8;
        }

        .heroActions {
          margin-top: 32px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 13px;
        }

        .mainCta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          min-width: 250px;
          padding: 16px 22px;
          border-radius: 13px;
          text-decoration: none;
          color: white;
          font-size: 12px;
          font-weight: 950;
          letter-spacing: 0.05em;
          border: 1px solid rgba(56,189,248,0.35);
          background:
            linear-gradient(
              100deg,
              #2563eb,
              #4f46e5,
              #7c3aed
            );
          box-shadow:
            0 0 35px rgba(37,99,235,0.25),
            inset 0 1px 0 rgba(255,255,255,0.18);
          transition: 0.2s ease;
        }

        .mainCta:hover {
          transform: translateY(-2px);
          box-shadow:
            0 0 50px rgba(56,189,248,0.3),
            inset 0 1px 0 rgba(255,255,255,0.2);
        }

        .mainCta strong {
          color: #fde68a;
        }

        .mainCta b {
          font-size: 17px;
        }

        .sub {
          color: #64748b;
          font-size: 10px;
          line-height: 1.5;
        }

        .mapPreview {
          position: relative;
          max-width: 850px;
          margin: 80px auto 0;
          padding: 28px;
          text-align: left;
          border-radius: 26px;
          border: 1px solid rgba(129,140,248,0.18);
          background:
            linear-gradient(
              145deg,
              rgba(15,23,42,0.92),
              rgba(5,8,18,0.9)
            );
          box-shadow:
            0 35px 100px rgba(0,0,0,0.45),
            0 0 80px rgba(37,99,235,0.08);
          backdrop-filter: blur(20px);
          overflow: hidden;
        }

        .previewGlow {
          position: absolute;
          width: 450px;
          height: 180px;
          border-radius: 50%;
          background: rgba(56,189,248,0.1);
          filter: blur(70px);
          top: -130px;
          left: 20%;
          pointer-events: none;
        }

        .previewTop {
          position: relative;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 20px;
        }

        .previewMini {
          color: #38bdf8;
          font-size: 9px;
          font-weight: 900;
          letter-spacing: 0.15em;
        }

        .previewTop h3 {
          margin: 8px 0 0;
          font-size: 27px;
          letter-spacing: -0.04em;
        }

        .previewTop h3 span {
          color: #818cf8;
        }

        .previewStatus {
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 7px 10px;
          border-radius: 999px;
          background: rgba(34,197,94,0.07);
          border: 1px solid rgba(34,197,94,0.15);
          color: #86efac;
          font-size: 8px;
          font-weight: 900;
          letter-spacing: 0.1em;
        }

        .previewStatus span {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #4ade80;
          box-shadow: 0 0 10px #4ade80;
        }

        .previewGrid {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: 14px;
          margin-top: 22px;
        }

        .scorePreview,
        .recommendPreview {
          min-height: 150px;
          padding: 20px;
          border-radius: 17px;
          border: 1px solid rgba(255,255,255,0.06);
          background: rgba(2,6,23,0.5);
        }

        .scorePreview {
          display: flex;
          align-items: center;
          gap: 18px;
        }

        .scoreRing {
          width: 82px;
          height: 82px;
          flex-shrink: 0;
          border-radius: 50%;
          padding: 7px;
          background:
            conic-gradient(
              #38bdf8,
              #818cf8 55%,
              #c084fc 75%,
              rgba(255,255,255,0.05) 0
            );
        }

        .scoreRing > div {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: #080b13;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .scoreRing strong {
          font-size: 22px;
        }

        .scoreRing small {
          color: #94a3b8;
          font-size: 9px;
          margin-left: 2px;
        }

        .scorePreview small,
        .recommendPreview small,
        .miniCard small {
          color: #64748b;
          font-size: 8px;
          font-weight: 900;
          letter-spacing: 0.1em;
        }

        .scorePreview p {
          color: #7dd3fc;
          font-size: 12px;
          font-weight: 800;
          margin: 7px 0 0;
        }

        .recommendPreview {
          display: flex;
          gap: 15px;
          align-items: center;
        }

        .recommendIcon {
          width: 48px;
          height: 48px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 14px;
          background: rgba(234,179,8,0.08);
          border: 1px solid rgba(234,179,8,0.16);
          font-size: 22px;
        }

        .recommendPreview strong {
          display: block;
          margin-top: 7px;
          font-size: 15px;
        }

        .recommendPreview p {
          margin: 6px 0 0;
          color: #64748b;
          font-size: 11px;
          line-height: 1.5;
        }

        .previewBottom {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          margin-top: 12px;
        }

        .miniCard {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 15px;
          border-radius: 14px;
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(255,255,255,0.05);
        }

        .miniCard > span {
          font-size: 19px;
        }

        .miniCard strong {
          display: block;
          margin-top: 5px;
          font-size: 11px;
          color: #cbd5e1;
        }

        .goldMini {
          border-color: rgba(234,179,8,0.1);
        }

        .section {
          padding: 115px 0 0;
        }

        .sectionIntro {
          display: flex;
          gap: 20px;
          align-items: flex-start;
          margin-bottom: 38px;
        }

        .sectionNumber {
          color: #38bdf8;
          font-size: 11px;
          font-weight: 950;
          padding-top: 7px;
          letter-spacing: 0.1em;
        }

        .purpleNumber {
          color: #a78bfa;
        }

        .goldNumber {
          color: #facc15;
        }

        .eyebrow {
          color: #38bdf8;
          font-size: 9px;
          font-weight: 950;
          letter-spacing: 0.17em;
          margin-bottom: 10px;
        }

        .purpleText {
          color: #a78bfa;
        }

        .goldText {
          color: #facc15;
        }

        .sectionIntro h2,
        .centeredIntro h2 {
          margin: 0;
          max-width: 800px;
          font-size: clamp(31px, 5vw, 52px);
          line-height: 1.02;
          letter-spacing: -0.055em;
        }

        .sectionIntro h2 span,
        .centeredIntro h2 span {
          color: #38bdf8;
        }

        .sectionIntro p,
        .centeredIntro p {
          max-width: 670px;
          color: #64748b;
          line-height: 1.7;
          margin: 15px 0 0;
          font-size: 14px;
        }

        .problemGrid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
        }

        .glassCard {
          min-height: 285px;
          padding: 25px;
          border-radius: 20px;
          border: 1px solid rgba(255,255,255,0.07);
          background:
            linear-gradient(
              145deg,
              rgba(15,23,42,0.7),
              rgba(5,8,18,0.65)
            );
          box-shadow: 0 20px 60px rgba(0,0,0,0.2);
          transition: 0.25s ease;
        }

        .glassCard:hover {
          transform: translateY(-4px);
          border-color: rgba(56,189,248,0.18);
        }

        .goldCard:hover {
          border-color: rgba(234,179,8,0.2);
        }

        .cardIcon {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 14px;
          font-size: 22px;
          margin-bottom: 30px;
        }

        .cardIcon.blue {
          background: rgba(56,189,248,0.08);
          border: 1px solid rgba(56,189,248,0.14);
        }

        .cardIcon.purple {
          background: rgba(139,92,246,0.08);
          border: 1px solid rgba(139,92,246,0.14);
        }

        .cardIcon.gold {
          background: rgba(234,179,8,0.08);
          border: 1px solid rgba(234,179,8,0.14);
        }

        .glassCard > small {
          color: #64748b;
          font-size: 8px;
          font-weight: 950;
          letter-spacing: 0.14em;
        }

        .glassCard h3 {
          margin: 10px 0 13px;
          font-size: 21px;
          line-height: 1.1;
          letter-spacing: -0.03em;
        }

        .glassCard p {
          color: #64748b;
          line-height: 1.65;
          font-size: 12px;
          margin: 0;
        }

        .solutionSection {
          position: relative;
          margin-top: 115px;
          padding: 45px;
          border-radius: 30px;
          border: 1px solid rgba(129,140,248,0.15);
          background:
            radial-gradient(
              circle at 80% 20%,
              rgba(124,58,237,0.12),
              transparent 30%
            ),
            rgba(10,12,25,0.72);
          overflow: hidden;
        }

        .solutionGlow {
          position: absolute;
          width: 400px;
          height: 400px;
          border-radius: 50%;
          background: rgba(124,58,237,0.07);
          filter: blur(90px);
          right: -180px;
          top: -180px;
        }

        .profileFlow {
          display: grid;
          grid-template-columns: 1fr auto 1fr auto 1fr auto 1fr;
          align-items: center;
          gap: 10px;
          margin-top: 45px;
        }

        .flowCard {
          padding: 19px;
          min-height: 120px;
          border-radius: 17px;
          border: 1px solid rgba(255,255,255,0.06);
          background: rgba(2,6,23,0.5);
        }

        .flowIcon {
          font-size: 20px;
          margin-bottom: 12px;
        }

        .flowCard strong {
          display: block;
          font-size: 13px;
        }

        .flowCard span {
          display: block;
          color: #64748b;
          font-size: 10px;
          margin-top: 5px;
        }

        .flowLine {
          width: 22px;
          height: 1px;
          background:
            linear-gradient(
              90deg,
              #38bdf8,
              #818cf8
            );
          box-shadow: 0 0 10px rgba(56,189,248,0.35);
        }

        .aiEngine {
          max-width: 570px;
          margin: 25px auto 0;
          padding: 15px 18px;
          display: flex;
          align-items: center;
          gap: 13px;
          border-radius: 15px;
          border: 1px solid rgba(129,140,248,0.16);
          background: rgba(15,23,42,0.7);
        }

        .aiOrb {
          width: 38px;
          height: 38px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          color: white;
          background:
            radial-gradient(
              circle,
              #38bdf8,
              #6366f1 45%,
              #7c3aed
            );
          box-shadow:
            0 0 25px rgba(56,189,248,0.3);
        }

        .aiEngine small {
          display: block;
          color: #64748b;
          font-size: 7px;
          font-weight: 950;
          letter-spacing: 0.12em;
        }

        .aiEngine strong {
          display: block;
          margin-top: 4px;
          font-size: 11px;
        }

        .aiSignal {
          margin-left: auto;
          display: flex;
          gap: 4px;
        }

        .aiSignal i {
          width: 4px;
          height: 14px;
          border-radius: 3px;
          background: #818cf8;
          animation: signal 1s infinite ease-in-out;
        }

        .aiSignal i:nth-child(2) {
          animation-delay: 0.15s;
        }

        .aiSignal i:nth-child(3) {
          animation-delay: 0.3s;
        }

        @keyframes signal {
          0%, 100% {
            transform: scaleY(0.5);
            opacity: 0.4;
          }
          50% {
            transform: scaleY(1);
            opacity: 1;
          }
        }

        .deliverGrid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
        }

        .deliverCard {
          min-height: 220px;
          padding: 25px;
          border-radius: 20px;
          border: 1px solid rgba(255,255,255,0.07);
          background: rgba(15,23,42,0.52);
        }

        .deliverCard.large {
          min-height: 250px;
        }

        .deliverCard.featured {
          border-color: rgba(234,179,8,0.18);
          background:
            radial-gradient(
              circle at 100% 0,
              rgba(234,179,8,0.07),
              transparent 45%
            ),
            rgba(15,23,42,0.6);
        }

        .deliverTop {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .deliverIcon {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 14px;
          background: rgba(56,189,248,0.07);
          border: 1px solid rgba(56,189,248,0.1);
          font-size: 22px;
        }

        .trophy {
          background: rgba(234,179,8,0.08);
          border-color: rgba(234,179,8,0.14);
        }

        .deliverTag,
        .goldTag {
          font-size: 8px;
          font-weight: 950;
          letter-spacing: 0.1em;
          color: #64748b;
        }

        .goldTag {
          color: #facc15;
        }

        .deliverCard h3 {
          margin: 22px 0 9px;
          font-size: 22px;
          letter-spacing: -0.035em;
        }

        .deliverCard p {
          max-width: 480px;
          color: #64748b;
          font-size: 12px;
          line-height: 1.65;
          margin: 0;
        }

        .fakeLines {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-top: 24px;
        }

        .fakeLines span {
          height: 5px;
          border-radius: 5px;
          background: rgba(56,189,248,0.1);
        }

        .fakeLines span:nth-child(1) {
          width: 80%;
        }

        .fakeLines span:nth-child(2) {
          width: 60%;
        }

        .fakeLines span:nth-child(3) {
          width: 70%;
        }

        .featuredBar {
          margin-top: 25px;
          height: 5px;
          border-radius: 5px;
          background: rgba(255,255,255,0.04);
          overflow: hidden;
        }

        .featuredBar span {
          display: block;
          width: 87%;
          height: 100%;
          background:
            linear-gradient(
              90deg,
              #38bdf8,
              #818cf8,
              #facc15
            );
          box-shadow: 0 0 15px rgba(129,140,248,0.3);
        }

        .howSection {
          padding: 115px 0 0;
        }

        .centeredIntro {
          text-align: center;
          justify-content: center;
        }

        .centeredIntro p {
          margin-left: auto;
          margin-right: auto;
        }

        .steps {
          max-width: 850px;
          margin: 45px auto 0;
          display: flex;
          flex-direction: column;
        }

        .step {
          display: grid;
          grid-template-columns: 55px 2px 1fr;
          gap: 20px;
          min-height: 130px;
        }

        .stepNumber {
          width: 45px;
          height: 45px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 13px;
          color: #38bdf8;
          background: rgba(56,189,248,0.07);
          border: 1px solid rgba(56,189,248,0.13);
          font-size: 10px;
          font-weight: 950;
        }

        .purpleStep {
          color: #a78bfa;
          background: rgba(167,139,250,0.07);
          border-color: rgba(167,139,250,0.13);
        }

        .goldStep {
          color: #facc15;
          background: rgba(234,179,8,0.07);
          border-color: rgba(234,179,8,0.13);
        }

        .stepLine {
          width: 1px;
          height: 100%;
          background:
            linear-gradient(
              to bottom,
              rgba(56,189,248,0.25),
              rgba(56,189,248,0.03)
            );
        }

        .purpleLine {
          background:
            linear-gradient(
              to bottom,
              rgba(167,139,250,0.25),
              rgba(167,139,250,0.03)
            );
        }

        .goldLine {
          background:
            linear-gradient(
              to bottom,
              rgba(234,179,8,0.25),
              rgba(234,179,8,0.03)
            );
        }

        .step h3 {
          margin: 3px 0 7px;
          font-size: 19px;
        }

        .step p {
          color: #64748b;
          line-height: 1.65;
          font-size: 12px;
          max-width: 620px;
          margin: 0;
        }

        .pricingSection {
          position: relative;
          margin-top: 100px;
          padding: 70px 25px;
          border-radius: 30px;
          overflow: hidden;
          text-align: center;
          border: 1px solid rgba(234,179,8,0.17);
          background:
            radial-gradient(
              circle at 50% 0,
              rgba(234,179,8,0.09),
              transparent 38%
            ),
            radial-gradient(
              circle at 20% 80%,
              rgba(37,99,235,0.08),
              transparent 30%
            ),
            rgba(10,12,20,0.8);
        }

        .pricingGlow {
          position: absolute;
          width: 350px;
          height: 350px;
          left: 50%;
          top: -250px;
          transform: translateX(-50%);
          border-radius: 50%;
          background: rgba(234,179,8,0.09);
          filter: blur(80px);
        }

        .pricingContent {
          position: relative;
          z-index: 2;
        }

        .pricingSection h2 {
          margin: 0;
          font-size: clamp(34px, 5vw, 55px);
          line-height: 1.03;
          letter-spacing: -0.055em;
        }

        .pricingSection h2 span {
          color: #facc15;
          text-shadow: 0 0 30px rgba(234,179,8,0.18);
        }

        .pricingSection > .pricingContent > p {
          max-width: 620px;
          margin: 18px auto 0;
          color: #64748b;
          line-height: 1.7;
          font-size: 13px;
        }

        .priceBox {
          max-width: 500px;
          margin: 30px auto 20px;
          padding: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 35px;
          border-radius: 18px;
          border: 1px solid rgba(255,255,255,0.06);
          background: rgba(2,6,23,0.5);
          text-align: left;
        }

        .price {
          display: flex;
          align-items: flex-start;
          color: #facc15;
        }

        .price small {
          margin-top: 10px;
          font-size: 12px;
          font-weight: 900;
        }

        .price strong {
          font-size: 70px;
          line-height: 0.8;
          letter-spacing: -0.07em;
        }

        .priceInfo {
          display: flex;
          flex-direction: column;
          gap: 7px;
          color: #cbd5e1;
          font-size: 10px;
        }

        .goldCta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
          min-width: 250px;
          padding: 17px 24px;
          border-radius: 13px;
          text-decoration: none;
          color: #17120a;
          background:
            linear-gradient(
              100deg,
              #f59e0b,
              #facc15,
              #fde68a
            );
          font-size: 12px;
          font-weight: 950;
          letter-spacing: 0.06em;
          box-shadow:
            0 0 35px rgba(234,179,8,0.18),
            inset 0 1px 0 rgba(255,255,255,0.45);
          transition: 0.2s ease;
        }

        .goldCta:hover {
          transform: translateY(-2px);
          box-shadow:
            0 0 50px rgba(234,179,8,0.25),
            inset 0 1px 0 rgba(255,255,255,0.5);
        }

        .goldCta span {
          font-size: 18px;
        }

        .secure {
          margin-top: 13px;
          color: #475569;
          font-size: 9px;
        }

        .trustSection {
          margin-top: 75px;
          padding: 28px;
          display: flex;
          gap: 18px;
          align-items: flex-start;
          border-radius: 19px;
          border: 1px solid rgba(255,255,255,0.05);
          background: rgba(15,23,42,0.35);
        }

        .trustIcon {
          width: 36px;
          height: 36px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          color: #86efac;
          background: rgba(34,197,94,0.08);
          border: 1px solid rgba(34,197,94,0.13);
          font-weight: 900;
        }

        .trustSection h2 {
          margin: 0;
          font-size: 22px;
          letter-spacing: -0.035em;
        }

        .trustSection p {
          max-width: 800px;
          margin: 9px 0 0;
          color: #64748b;
          line-height: 1.7;
          font-size: 12px;
        }

        .finalSection {
          position: relative;
          padding: 135px 0 110px;
          text-align: center;
        }

        .finalOrb {
          width: 60px;
          height: 60px;
          margin: 0 auto 25px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          color: #facc15;
          font-size: 25px;
          background:
            radial-gradient(
              circle,
              rgba(234,179,8,0.15),
              rgba(124,58,237,0.1),
              transparent
            );
          border: 1px solid rgba(234,179,8,0.16);
          box-shadow: 0 0 45px rgba(234,179,8,0.08);
        }

        .finalSection h2 {
          margin: 0;
          font-size: clamp(40px, 7vw, 72px);
          line-height: 0.98;
          letter-spacing: -0.065em;
        }

        .finalSection h2 span {
          background:
            linear-gradient(
              90deg,
              #38bdf8,
              #818cf8,
              #c084fc,
              #facc15
            );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .finalSection > p {
          margin: 20px 0 0;
          color: #64748b;
          font-size: 15px;
        }

        .finalStats {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          gap: 9px;
          margin: 22px 0 28px;
          color: #94a3b8;
          font-size: 10px;
          font-weight: 800;
        }

        .finalStats i {
          color: #facc15;
          font-style: normal;
        }

        .finalCta {
          margin: 0 auto;
        }

        .footer {
          padding: 30px 0 50px;
          border-top: 1px solid rgba(255,255,255,0.06);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        .footer p {
          margin: 7px 0 0;
          color: #475569;
          font-size: 10px;
        }

        .footerRight {
          color: #475569;
          font-size: 8px;
          font-weight: 900;
          letter-spacing: 0.1em;
        }

        .footerRight span {
          color: #facc15;
          margin: 0 5px;
        }

        @media (max-width: 850px) {

          .hero {
            padding-top: 80px;
          }

          .problemGrid {
            grid-template-columns: 1fr;
          }

          .profileFlow {
            grid-template-columns: 1fr 1px 1fr;
          }

          .profileFlow .flowLine:nth-of-type(4) {
            display: none;
          }

          .deliverGrid {
            grid-template-columns: 1fr;
          }

        }

        @media (max-width: 650px) {

          .wrap {
            padding: 0 15px;
          }

          .nav {
            min-height: 70px;
          }

          .pill {
            font-size: 7px;
            padding: 7px 9px;
          }

          .hero {
            padding: 65px 0 50px;
          }

          .heroBadge {
            max-width: 95%;
            text-align: center;
            line-height: 1.4;
          }

          .hero h1 {
            font-size: 48px;
          }

          .heroText {
            font-size: 14px;
          }

          .mapPreview {
            margin-top: 55px;
            padding: 17px;
            border-radius: 20px;
          }

          .previewTop {
            flex-direction: column;
          }

          .previewGrid {
            grid-template-columns: 1fr;
          }

          .previewBottom {
            grid-template-columns: 1fr;
          }

          .scorePreview {
            min-height: 125px;
          }

          .section {
            padding-top: 80px;
          }

          .sectionIntro {
            gap: 12px;
          }

          .sectionNumber {
            font-size: 9px;
          }

          .sectionIntro h2,
          .centeredIntro h2 {
            font-size: 34px;
          }

          .solutionSection {
            margin-top: 80px;
            padding: 25px 17px;
            border-radius: 23px;
          }

          .profileFlow {
            grid-template-columns: 1fr;
            gap: 9px;
          }

          .flowLine {
            display: none;
          }

          .flowCard {
            min-height: auto;
          }

          .aiEngine {
            margin-top: 15px;
          }

          .deliverCard,
          .deliverCard.large {
            min-height: 200px;
          }

          .priceBox {
            flex-direction: column;
            gap: 20px;
            text-align: center;
          }

          .priceInfo {
            align-items: center;
          }

          .pricingSection {
            margin-top: 75px;
            padding: 50px 18px;
            border-radius: 23px;
          }

          .pricingSection h2 {
            font-size: 38px;
          }

          .trustSection {
            padding: 22px;
          }

          .finalSection {
            padding: 100px 0 80px;
          }

          .finalSection h2 {
            font-size: 46px;
          }

          .footer {
            flex-direction: column;
            align-items: flex-start;
          }

        }

      `}</style>
    </main>
  );
}