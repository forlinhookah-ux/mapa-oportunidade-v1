'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import MapaVisual from '../components/MapaVisual';

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

export default function Resultado() {
    const searchParams = useSearchParams();
  const [resultado, setResultado] =
    useState<ResultadoMapa | null>(null);

  const [mapaId, setMapaId] =
    useState<string | null>(null);

  const [answers, setAnswers] =
    useState<Answers | null>(null);

  const [erro, setErro] = useState('');

  const [carregando, setCarregando] =
    useState(true);

  const [tentativa, setTentativa] =
    useState(0);

  useEffect(() => {
    let cancelado = false;

    async function carregarMapa() {
      try {
        const answersStorage =
          sessionStorage.getItem('mapa_answers');

       const mapaIdUrl = searchParams.get('mapa_id');

const mapaIdSalvo =
  mapaIdUrl ||
  sessionStorage.getItem('mapa_id');

        if (!mapaIdSalvo) {
          setErro('Mapa não encontrado.');
          setCarregando(false);
          return;
        }

        setMapaId(mapaIdSalvo);

        if (answersStorage) {
          try {
            setAnswers(
              JSON.parse(answersStorage)
            );
          } catch (error) {
            console.error(
              'Erro ao ler respostas salvas:',
              error
            );
          }
        }

        const MAX_TENTATIVAS = 10;

        for (
          let i = 0;
          i < MAX_TENTATIVAS;
          i++
        ) {
          if (cancelado) return;

          setTentativa(i + 1);

          try {
            const response = await fetch(
              '/api/gerar-mapa',
              {
                method: 'POST',
                headers: {
                  'Content-Type':
                    'application/json',
                },
                body: JSON.stringify({
                  mapa_id: mapaIdSalvo,
                }),
              }
            );

            const contentType =
              response.headers.get(
                'content-type'
              ) || '';

            let data: any = null;

            if (
              contentType.includes(
                'application/json'
              )
            ) {
              data =
                await response.json();
            } else {
              const textoResposta =
                await response.text();

              console.error(
                'A API retornou conteúdo que não é JSON:',
                textoResposta
              );

              if (!cancelado) {
                setErro(
                  'O servidor retornou uma resposta inválida. Verifique o terminal do projeto.'
                );

                setCarregando(false);
              }

              return;
            }

            // Pagamento ainda não chegou.
            // Espera e tenta novamente.
            if (
              response.status === 403
            ) {
              if (
                i <
                MAX_TENTATIVAS - 1
              ) {
                await new Promise(
                  (resolve) =>
                    setTimeout(
                      resolve,
                      2000
                    )
                );

                continue;
              }

              if (!cancelado) {
                setErro(
                  'O pagamento ainda não foi confirmado. Aguarde alguns instantes e tente novamente.'
                );

                setCarregando(false);
              }

              return;
            }

            if (!response.ok) {
              if (!cancelado) {
                setErro(
                  data?.error ||
                    'Não foi possível gerar seu mapa.'
                );

                setCarregando(false);
              }

              return;
            }

            // Sucesso!
            if (!cancelado) {
              setResultado(data);
              setCarregando(false);
            }

            return;
          } catch (error) {
            console.error(
              'Erro na tentativa de carregar o mapa:',
              error
            );

            // Se ainda houver tentativas,
            // aguarda e tenta novamente.
            if (
              i <
              MAX_TENTATIVAS - 1
            ) {
              await new Promise(
                (resolve) =>
                  setTimeout(
                    resolve,
                    2000
                  )
              );

              continue;
            }

            if (!cancelado) {
              setErro(
                'Ocorreu um erro ao gerar seu mapa.'
              );

              setCarregando(false);
            }

            return;
          }
        }
      } catch (error) {
        console.error(
          'Erro ao carregar mapa:',
          error
        );

        if (!cancelado) {
          setErro(
            'Ocorreu um erro ao gerar seu mapa.'
          );

          setCarregando(false);
        }
      }
    }

    carregarMapa();

    return () => {
      cancelado = true;
    };
  }, []);

  if (carregando) {
    return (
      <main className="page">
        <div className="loading">
          <div className="loader" />

          <p className="eyebrow">
            ALFORTECH • MAPA DA OPORTUNIDADE
          </p>

          <h1>
            Preparando seu mapa...
          </h1>

          <p>
            Seu pagamento está sendo
            confirmado e estamos preparando
            seu mapa personalizado.
          </p>

          <div className="loadingSteps">
            <span>
              ✓ Perfil analisado
            </span>

            <span>
              ✓ Recursos identificados
            </span>

            <span>
              ● Confirmando pagamento
            </span>

            <span>
              ● Gerando oportunidades
            </span>
          </div>

          <p className="attempt">
            Preparando automaticamente...
          </p>
        </div>

        <style jsx>{`
          .page {
            min-height: 100vh;
            background:
              radial-gradient(
                circle at 50% 0%,
                rgba(37, 99, 235, 0.2),
                transparent 35%
              ),
              #05070d;
            color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 40px 20px;
            font-family: Arial, Helvetica, sans-serif;
          }

          .loading {
            width: 100%;
            max-width: 650px;
            text-align: center;
          }

          .loader {
            width: 54px;
            height: 54px;
            border: 4px solid rgba(
              255,
              255,
              255,
              0.12
            );
            border-top-color: #38bdf8;
            border-radius: 50%;
            animation: spin 0.8s linear infinite;
            margin: 0 auto 30px;
          }

          .eyebrow {
            color: #38bdf8;
            font-size: 12px;
            font-weight: 800;
            letter-spacing: 0.18em;
          }

          h1 {
            font-size: clamp(
              30px,
              6vw,
              52px
            );
            margin: 14px 0;
          }

          .loading p:not(.eyebrow) {
            color: #94a3b8;
            line-height: 1.7;
            font-size: 16px;
          }

          .loadingSteps {
            display: flex;
            flex-direction: column;
            gap: 10px;
            margin-top: 30px;
            color: #cbd5e1;
            font-size: 14px;
          }

          .attempt {
            margin-top: 24px;
            font-size: 13px !important;
            color: #64748b !important;
          }

          @keyframes spin {
            to {
              transform: rotate(360deg);
            }
          }
        `}</style>
      </main>
    );
  }

  if (erro || !resultado) {
    return (
      <main className="page">
        <div className="errorBox">
          <div className="errorIcon">
            !
          </div>

          <p className="eyebrow">
            ALFORTECH
          </p>

          <h1>
            Não conseguimos gerar seu mapa.
          </h1>

          <p>
            {erro ||
              'Tente novamente em alguns instantes.'}
          </p>

          <button
            onClick={() =>
              window.location.reload()
            }
            className="retry"
          >
            TENTAR NOVAMENTE
          </button>
        </div>

        <style jsx>{`
          .page {
            min-height: 100vh;
            background: #05070d;
            color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 30px 20px;
            font-family: Arial, Helvetica, sans-serif;
          }

          .errorBox {
            max-width: 600px;
            text-align: center;
          }

          .errorIcon {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            background: rgba(
              239,
              68,
              68,
              0.15
            );
            color: #f87171;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 20px;
            font-size: 30px;
            font-weight: 900;
          }

          .eyebrow {
            color: #38bdf8;
            font-size: 12px;
            font-weight: 800;
            letter-spacing: 0.18em;
          }

          h1 {
            font-size: 34px;
            margin: 12px 0;
          }

          p:not(.eyebrow) {
            color: #94a3b8;
            line-height: 1.7;
          }

          .retry {
            margin-top: 20px;
            border: 0;
            border-radius: 12px;
            padding: 14px 20px;
            background: #2563eb;
            color: white;
            font-weight: 800;
            cursor: pointer;
          }
        `}</style>
      </main>
    );
  }

  return (
    <MapaVisual
      resultado={resultado}
      answers={answers}
      mapaId={mapaId ?? undefined}
    />
  );
}