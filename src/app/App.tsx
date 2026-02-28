import { Logo } from './components/Logo';
import { LogoSymbol } from './components/LogoSymbol';
import { ArrowRight, CheckCircle, Youtube, Clock, Users, Settings, Music, Calendar } from 'lucide-react';
import logoImage from 'figma:asset/8953ad8516308174597aa2e0906988cd5e295591.png';
import footerLogoImage from 'figma:asset/e2514aa9132679fba4963166d8be0f228763286d.png';
import heroLogoImage from 'figma:asset/72d9b08afad15dd6d1ecf014c3b58f2eeb402ba9.png';
import headerLogoImage from 'figma:asset/fef39c4927df32eed8a092021a2ea773bc0f8142.png';
import cardIconImage from 'figma:asset/57b4ce9e8b74258366ddd1a38e29d5ccadde40cb.png';

export default function App() {
  const handleCTA = () => {
    window.open('https://wa.me/5513996697250?text=Olá, gostaria de entender como o Yde funciona', '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={headerLogoImage} alt="Yde Logo" className="w-auto" style={{ height: '43.2px' }} />
              <div className="flex flex-col">
                <span 
                  className="text-xl sm:text-2xl"
                  style={{ 
                    fontFamily: 'Playfair Display, serif', 
                    fontWeight: 700,
                    color: '#162C46',
                    letterSpacing: '0.03em',
                    fontSize: '28px',
                    lineHeight: 1.2
                  }}
                >
                  Yde
                </span>
                <span 
                  className="text-xs sm:text-sm"
                  style={{ 
                    fontFamily: 'Montserrat, sans-serif', 
                    fontWeight: 700,
                    color: '#B8963A',
                    letterSpacing: '0.05em'
                  }}
                >
                  Por todo o mundo
                </span>
              </div>
            </div>
            <button
              onClick={handleCTA}
              className="hidden sm:flex items-center gap-2 px-6 py-2 rounded-lg transition-all hover:shadow-lg"
              style={{
                backgroundColor: '#B8963A',
                color: '#FFFFFF',
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 600
              }}
            >
              Falar com nossa equipe
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#162C46' }}>
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <img src={heroLogoImage} alt="Yde Symbol" className="h-24 sm:h-30 w-auto" />
          </div>
          
          <h1 
            className="text-4xl sm:text-5xl lg:text-6xl mb-6 leading-tight"
            style={{ 
              fontFamily: 'Playfair Display, serif', 
              fontWeight: 700,
              color: '#FFFFFF'
            }}
          >
            A missão vai além do templo.
          </h1>
          
          <p 
            className="text-lg sm:text-xl lg:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed"
            style={{ 
              fontFamily: 'Montserrat, sans-serif',
              color: '#FFFFFF',
              opacity: 0.9
            }}
          >
            Sua igreja no YouTube sem precisar operar nada.
          </p>
          
          <p 
            className="text-base sm:text-lg lg:text-xl mb-10 max-w-3xl mx-auto"
            style={{ 
              fontFamily: 'Montserrat, sans-serif',
              color: '#B8963A',
              fontWeight: 600,
              fontStyle: 'italic'
            }}
          >
            O YouTube é hoje o maior púlpito do mundo
          </p>
          
          <button
            onClick={handleCTA}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-lg text-lg transition-all hover:shadow-xl transform hover:scale-105"
            style={{
              backgroundColor: '#B8963A',
              color: '#FFFFFF',
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 600
            }}
          >
            Quero entender como funciona
            <ArrowRight size={20} />
          </button>
        </div>
      </section>

      {/* A Realidade */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl mb-4 text-center"
            style={{ 
              fontFamily: 'Playfair Display, serif', 
              fontWeight: 700,
              color: '#162C46'
            }}
          >
            A Realidade
          </h2>
          
          <p 
            className="text-lg sm:text-xl text-center mb-12 max-w-3xl mx-auto"
            style={{ 
              fontFamily: 'Montserrat, sans-serif',
              color: '#162C46',
              opacity: 0.7
            }}
          >
            Muitas igrejas não estão presentes no YouTube, não por falta de visão, mas por limitações práticas.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border-2 border-gray-200">
              <Users size={48} className="mb-4" style={{ color: '#B8963A' }} />
              <h3 
                className="text-xl mb-3"
                style={{ 
                  fontFamily: 'Playfair Display, serif', 
                  fontWeight: 700,
                  color: '#162C46'
                }}
              >
                Falta de equipe
              </h3>
              <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46', opacity: 0.7 }}>
                Não há pessoas disponíveis para operar canais digitais de forma contínua.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border-2 border-gray-200">
              <Clock size={48} className="mb-4" style={{ color: '#B8963A' }} />
              <h3 
                className="text-xl mb-3"
                style={{ 
                  fontFamily: 'Playfair Display, serif', 
                  fontWeight: 700,
                  color: '#162C46'
                }}
              >
                Falta de tempo
              </h3>
              <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46', opacity: 0.7 }}>
                A liderança está focada no ministério, não em gestão de redes sociais.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border-2 border-gray-200">
              <Settings size={48} className="mb-4" style={{ color: '#B8963A' }} />
              <h3 
                className="text-xl mb-3"
                style={{ 
                  fontFamily: 'Playfair Display, serif', 
                  fontWeight: 700,
                  color: '#162C46'
                }}
              >
                Falta de conhecimento técnico
              </h3>
              <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46', opacity: 0.7 }}>
                A operação digital exige conhecimento que não faz parte da rotina ministerial.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* A Proposta */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl mb-4 text-center"
            style={{ 
              fontFamily: 'Playfair Display, serif', 
              fontWeight: 700,
              color: '#162C46'
            }}
          >
            A Proposta
          </h2>
          
          <p 
            className="text-lg sm:text-xl text-center mb-16 max-w-3xl mx-auto"
            style={{ 
              fontFamily: 'Montserrat, sans-serif',
              color: '#162C46',
              opacity: 0.7
            }}
          >
            Yde disponibiliza a estrutura que sustenta a presença contínua da sua igreja no YouTube.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg">
              <CheckCircle size={28} className="flex-shrink-0 mt-1" style={{ color: '#B8963A' }} />
              <div>
                <h3 
                  className="text-lg mb-2"
                  style={{ 
                    fontFamily: 'Playfair Display, serif', 
                    fontWeight: 700,
                    color: '#162C46'
                  }}
                >
                  Canal estruturado
                </h3>
                <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46', opacity: 0.7, fontSize: '15px' }}>
                  Um canal profissional configurado e pronto para representar sua igreja.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg">
              <CheckCircle size={28} className="flex-shrink-0 mt-1" style={{ color: '#B8963A' }} />
              <div>
                <h3 
                  className="text-lg mb-2"
                  style={{ 
                    fontFamily: 'Playfair Display, serif', 
                    fontWeight: 700,
                    color: '#162C46'
                  }}
                >
                  Presença contínua
                </h3>
                <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46', opacity: 0.7, fontSize: '15px' }}>
                  Conteúdo sendo distribuído regularmente, sem que sua igreja precise operar.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg">
              <CheckCircle size={28} className="flex-shrink-0 mt-1" style={{ color: '#B8963A' }} />
              <div>
                <h3 
                  className="text-lg mb-2"
                  style={{ 
                    fontFamily: 'Playfair Display, serif', 
                    fontWeight: 700,
                    color: '#162C46'
                  }}
                >
                  Conteúdo recorrente
                </h3>
                <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46', opacity: 0.7, fontSize: '15px' }}>
                  A Palavra sendo transmitida de forma consistente e organizada.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg">
              <CheckCircle size={28} className="flex-shrink-0 mt-1" style={{ color: '#B8963A' }} />
              <div>
                <h3 
                  className="text-lg mb-2"
                  style={{ 
                    fontFamily: 'Playfair Display, serif', 
                    fontWeight: 700,
                    color: '#162C46'
                  }}
                >
                  Identidade própria
                </h3>
                <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46', opacity: 0.7, fontSize: '15px' }}>
                  O canal reflete a identidade e missão da sua igreja.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#162C46' }}>
        <div className="max-w-5xl mx-auto">
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl mb-16 text-center"
            style={{ 
              fontFamily: 'Playfair Display, serif', 
              fontWeight: 700,
              color: '#FFFFFF'
            }}
          >
            Como Funciona
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="text-center">
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl"
                style={{ 
                  backgroundColor: '#B8963A',
                  fontFamily: 'Playfair Display, serif',
                  fontWeight: 700,
                  color: '#FFFFFF'
                }}
              >
                1
              </div>
              <h3 
                className="text-xl mb-3"
                style={{ 
                  fontFamily: 'Playfair Display, serif', 
                  fontWeight: 700,
                  color: '#FFFFFF'
                }}
              >
                Criamos o canal
              </h3>
              <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#FFFFFF', opacity: 0.8, fontSize: '15px' }}>
                Estruturamos o canal do zero com identidade profissional.
              </p>
            </div>

            <div className="text-center">
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl"
                style={{ 
                  backgroundColor: '#B8963A',
                  fontFamily: 'Playfair Display, serif',
                  fontWeight: 700,
                  color: '#FFFFFF'
                }}
              >
                2
              </div>
              <h3 
                className="text-xl mb-3"
                style={{ 
                  fontFamily: 'Playfair Display, serif', 
                  fontWeight: 700,
                  color: '#FFFFFF'
                }}
              >
                Personalizamos
              </h3>
              <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#FFFFFF', opacity: 0.8, fontSize: '15px' }}>
                Adaptamos tudo à identidade e missão da sua igreja.
              </p>
            </div>

            <div className="text-center">
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl"
                style={{ 
                  backgroundColor: '#B8963A',
                  fontFamily: 'Playfair Display, serif',
                  fontWeight: 700,
                  color: '#FFFFFF'
                }}
              >
                3
              </div>
              <h3 
                className="text-xl mb-3"
                style={{ 
                  fontFamily: 'Playfair Display, serif', 
                  fontWeight: 700,
                  color: '#FFFFFF'
                }}
              >
                Mantemos ativo
              </h3>
              <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#FFFFFF', opacity: 0.8, fontSize: '15px' }}>
                Cuidamos da presença contínua e organização do conteúdo.
              </p>
            </div>

            <div className="text-center">
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl"
                style={{ 
                  backgroundColor: '#B8963A',
                  fontFamily: 'Playfair Display, serif',
                  fontWeight: 700,
                  color: '#FFFFFF'
                }}
              >
                4
              </div>
              <h3 
                className="text-xl mb-3"
                style={{ 
                  fontFamily: 'Playfair Display, serif', 
                  fontWeight: 700,
                  color: '#FFFFFF'
                }}
              >
                Caminhamos juntos
              </h3>
              <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#FFFFFF', opacity: 0.8, fontSize: '15px' }}>
                Realizamos uma reunião mensal com o pastor para direcionamento e alinhamento do conteúdo.
              </p>
            </div>

            <div className="text-center">
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl"
                style={{ 
                  backgroundColor: '#B8963A',
                  fontFamily: 'Playfair Display, serif',
                  fontWeight: 700,
                  color: '#FFFFFF'
                }}
              >
                5
              </div>
              <h3 
                className="text-xl mb-3"
                style={{ 
                  fontFamily: 'Playfair Display, serif', 
                  fontWeight: 700,
                  color: '#FFFFFF'
                }}
              >
                Sua igreja usa quando quiser
              </h3>
              <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#FFFFFF', opacity: 0.8, fontSize: '15px' }}>
                A igreja publica cultos e mensagens sempre que desejar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 12 LOUVORES EXCLUSIVOS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-[#162C46] to-[#1a3556] p-8 sm:p-12 lg:p-16 rounded-2xl shadow-2xl border-2 border-[#B8963A]">
            {/* Header com ícones */}
            <div className="flex justify-center items-center gap-4 mb-8">
              <Music size={40} style={{ color: '#B8963A' }} />
              <Calendar size={40} style={{ color: '#B8963A' }} />
            </div>

            {/* Número 12 em destaque */}
            <div className="text-center mb-6">
              <span 
                className="inline-block"
                style={{ 
                  fontFamily: 'Playfair Display, serif',
                  fontWeight: 700,
                  fontSize: '120px',
                  lineHeight: 1,
                  color: '#B8963A',
                  textShadow: '0 4px 20px rgba(184, 150, 58, 0.3)'
                }}
              >
                12
              </span>
            </div>

            {/* Título principal */}
            <h2 
              className="text-3xl sm:text-4xl lg:text-5xl mb-6 text-center leading-tight"
              style={{ 
                fontFamily: 'Playfair Display, serif', 
                fontWeight: 700,
                color: '#FFFFFF'
              }}
            >
              Louvores exclusivos por mês
            </h2>

            {/* Subtítulo */}
            <p 
              className="text-xl sm:text-2xl mb-8 text-center max-w-3xl mx-auto"
              style={{ 
                fontFamily: 'Montserrat, sans-serif',
                color: '#FFFFFF',
                opacity: 0.95,
                lineHeight: 1.6
              }}
            >
              Sua igreja terá uma playlist própria, atualizada semanalmente com louvores exclusivos.
            </p>

            {/* Linha divisória decorativa */}
            <div className="flex items-center justify-center my-8">
              <div className="h-px w-16 bg-[#B8963A] opacity-50"></div>
              <Music size={20} className="mx-4" style={{ color: '#B8963A', opacity: 0.7 }} />
              <div className="h-px w-16 bg-[#B8963A] opacity-50"></div>
            </div>

            {/* Descrição */}
            <p 
              className="text-base sm:text-lg text-center mb-10 max-w-2xl mx-auto leading-relaxed"
              style={{ 
                fontFamily: 'Montserrat, sans-serif',
                color: '#FFFFFF',
                opacity: 0.85
              }}
            >
              Conteúdo preparado com identidade visual personalizada, alinhado com a direção pastoral e pensado para manter o canal ativo.
            </p>

            {/* Mensagem de apoio em caixa */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-[#B8963A]/30 max-w-2xl mx-auto">
              <p 
                className="text-center text-base sm:text-lg"
                style={{ 
                  fontFamily: 'Montserrat, sans-serif',
                  color: '#FFFFFF',
                  fontWeight: 500,
                  letterSpacing: '0.02em'
                }}
              >
                Conteúdo novo, constante e alinhado com a direção pastoral.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Presença em Ação */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl mb-4 text-center"
            style={{ 
              fontFamily: 'Playfair Display, serif', 
              fontWeight: 700,
              color: '#162C46'
            }}
          >
            Presença em Ação
          </h2>
          
          <p 
            className="text-lg sm:text-xl text-center mb-12 max-w-3xl mx-auto"
            style={{ 
              fontFamily: 'Montserrat, sans-serif',
              color: '#162C46',
              opacity: 0.7
            }}
          >
            Veja como uma presença contínua se manifesta: conteúdo organizado, acessível e sempre disponível para quem busca.
          </p>

          <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg border-2" style={{ borderColor: '#B8963A' }}>
            <div className="flex items-center gap-3 mb-6">
              <Youtube size={32} style={{ color: '#B8963A' }} />
              <h3 
                className="text-xl sm:text-2xl"
                style={{ 
                  fontFamily: 'Playfair Display, serif', 
                  fontWeight: 700,
                  color: '#162C46'
                }}
              >
                Exemplo de Estrutura Ativa
              </h3>
            </div>

            <div className="aspect-video w-full bg-gray-100 rounded-lg overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/videoseries?list=PLaS1uVTw67A37J3TgcF17YMOpElIZDh2g"
                title="Playlist YouTube"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>

            <p 
              className="mt-6 text-center"
              style={{ 
                fontFamily: 'Montserrat, sans-serif',
                color: '#162C46',
                opacity: 0.7,
                fontSize: '15px'
              }}
            >
              Uma estrutura organizada que mantém a Palavra acessível de forma contínua.
            </p>
          </div>
        </div>
      </section>

      {/* Autonomia */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl mb-6"
            style={{ 
              fontFamily: 'Playfair Display, serif', 
              fontWeight: 700,
              color: '#162C46'
            }}
          >
            Autonomia
          </h2>
          
          <p 
            className="text-lg sm:text-xl leading-relaxed"
            style={{ 
              fontFamily: 'Montserrat, sans-serif',
              color: '#162C46',
              opacity: 0.8
            }}
          >
            Tudo relacionado ao relacionamento com membros, comentários e interações permanece totalmente com a igreja. 
            O Yde atua exclusivamente como estrutura de presença, mantendo o canal ativo e organizado. 
            Sua igreja mantém total controle sobre a comunicação com sua comunidade.
          </p>
        </div>
      </section>

      {/* O QUE O YDDE ENTREGA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl mb-4 text-center"
            style={{ 
              fontFamily: 'Playfair Display, serif', 
              fontWeight: 700,
              color: '#162C46'
            }}
          >
            O que você recebe da Yde
          </h2>
          
          <p 
            className="text-lg sm:text-xl text-center mb-16 max-w-3xl mx-auto"
            style={{ 
              fontFamily: 'Montserrat, sans-serif',
              color: '#162C46',
              opacity: 0.7
            }}
          >
            Uma estrutura pronta para sua igreja ter presença contínua no YouTube.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-sm border-2 border-gray-200 hover:border-[#B8963A] transition-all">
              <div className="w-16 h-16 flex items-center justify-center mb-4">
                <img src={cardIconImage} alt="" className="w-full h-full object-contain" />
              </div>
              <h3 
                className="text-lg mb-3"
                style={{ 
                  fontFamily: 'Playfair Display, serif', 
                  fontWeight: 700,
                  color: '#162C46'
                }}
              >
                Canal pronto e organizado
              </h3>
              <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46', opacity: 0.7, fontSize: '15px' }}>
                Estrutura completa com capa, foto e organização inicial.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border-2 border-gray-200 hover:border-[#B8963A] transition-all">
              <div className="w-16 h-16 flex items-center justify-center mb-4">
                <img src={cardIconImage} alt="" className="w-full h-full object-contain" />
              </div>
              <h3 
                className="text-lg mb-3"
                style={{ 
                  fontFamily: 'Playfair Display, serif', 
                  fontWeight: 700,
                  color: '#162C46'
                }}
              >
                Identidade visual da sua igreja
              </h3>
              <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46', opacity: 0.7, fontSize: '15px' }}>
                Thumb padrão e personalização com a marca da igreja.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border-2 border-gray-200 hover:border-[#B8963A] transition-all">
              <div className="w-16 h-16 flex items-center justify-center mb-4">
                <img src={cardIconImage} alt="" className="w-full h-full object-contain" />
              </div>
              <h3 
                className="text-lg mb-3"
                style={{ 
                  fontFamily: 'Playfair Display, serif', 
                  fontWeight: 700,
                  color: '#162C46'
                }}
              >
                Presença contínua com louvores
              </h3>
              <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46', opacity: 0.7, fontSize: '15px' }}>
                Conteúdo recorrente para manter o canal ativo.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border-2 border-gray-200 hover:border-[#B8963A] transition-all">
              <div className="w-16 h-16 flex items-center justify-center mb-4">
                <img src={cardIconImage} alt="" className="w-full h-full object-contain" />
              </div>
              <h3 
                className="text-lg mb-3"
                style={{ 
                  fontFamily: 'Playfair Display, serif', 
                  fontWeight: 700,
                  color: '#162C46'
                }}
              >
                Testemunhos personalizados
              </h3>
              <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46', opacity: 0.7, fontSize: '15px' }}>
                Histórias reais com identidade da igreja.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border-2 border-gray-200 hover:border-[#B8963A] transition-all">
              <div className="w-16 h-16 flex items-center justify-center mb-4">
                <img src={cardIconImage} alt="" className="w-full h-full object-contain" />
              </div>
              <h3 
                className="text-lg mb-3"
                style={{ 
                  fontFamily: 'Playfair Display, serif', 
                  fontWeight: 700,
                  color: '#162C46'
                }}
              >
                Suporte e padronização
              </h3>
              <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46', opacity: 0.7, fontSize: '15px' }}>
                A igreja não precisa entender YouTube.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border-2 border-gray-200 hover:border-[#B8963A] transition-all">
              <div className="w-16 h-16 flex items-center justify-center mb-4">
                <img src={cardIconImage} alt="" className="w-full h-full object-contain" />
              </div>
              <h3 
                className="text-lg mb-3"
                style={{ 
                  fontFamily: 'Playfair Display, serif', 
                  fontWeight: 700,
                  color: '#162C46'
                }}
              >
                Liberdade para lives e cultos
              </h3>
              <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46', opacity: 0.7, fontSize: '15px' }}>
                A igreja pode transmitir quando desejar.
              </p>
            </div>
          </div>

          <p 
            className="text-2xl sm:text-3xl text-center italic"
            style={{ 
              fontFamily: 'Playfair Display, serif',
              fontWeight: 600,
              color: '#162C46'
            }}
          >
            "Sua igreja não precisa operar. Só precisa ministrar."
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl mb-12 text-center"
            style={{ 
              fontFamily: 'Playfair Display, serif', 
              fontWeight: 700,
              color: '#162C46'
            }}
          >
            Perguntas frequentes
          </h2>

          <div className="space-y-6">
            <details className="bg-gray-50 p-6 rounded-lg border-2 border-gray-200 hover:border-[#B8963A] transition-all group">
              <summary 
                className="cursor-pointer list-none flex items-center justify-between"
                style={{ 
                  fontFamily: 'Playfair Display, serif',
                  fontWeight: 700,
                  fontSize: '18px',
                  color: '#162C46'
                }}
              >
                O canal fica no nome da minha igreja?
                <span className="text-[#B8963A] text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p 
                className="mt-4 leading-relaxed"
                style={{ 
                  fontFamily: 'Montserrat, sans-serif',
                  color: '#162C46',
                  opacity: 0.8,
                  fontSize: '15px'
                }}
              >
                Sim. O canal é criado com o nome da sua igreja e toda a identidade visual é personalizada para refletir sua marca ministerial.
              </p>
            </details>

            <details className="bg-gray-50 p-6 rounded-lg border-2 border-gray-200 hover:border-[#B8963A] transition-all group">
              <summary 
                className="cursor-pointer list-none flex items-center justify-between"
                style={{ 
                  fontFamily: 'Playfair Display, serif',
                  fontWeight: 700,
                  fontSize: '18px',
                  color: '#162C46'
                }}
              >
                Podemos fazer lives?
                <span className="text-[#B8963A] text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p 
                className="mt-4 leading-relaxed"
                style={{ 
                  fontFamily: 'Montserrat, sans-serif',
                  color: '#162C46',
                  opacity: 0.8,
                  fontSize: '15px'
                }}
              >
                Sim, totalmente. A igreja pode transmitir cultos, lives e enviar conteúdo próprio quando desejar. O Yde mantém a presença contínua, mas a igreja tem liberdade total para usar o canal.
              </p>
            </details>

            <details className="bg-gray-50 p-6 rounded-lg border-2 border-gray-200 hover:border-[#B8963A] transition-all group">
              <summary 
                className="cursor-pointer list-none flex items-center justify-between"
                style={{ 
                  fontFamily: 'Playfair Display, serif',
                  fontWeight: 700,
                  fontSize: '18px',
                  color: '#162C46'
                }}
              >
                Precisamos de equipe?
                <span className="text-[#B8963A] text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p 
                className="mt-4 leading-relaxed"
                style={{ 
                  fontFamily: 'Montserrat, sans-serif',
                  color: '#162C46',
                  opacity: 0.8,
                  fontSize: '15px'
                }}
              >
                Não. A estrutura e operação ficam por conta do Yde. A igreja só precisa focar no ministério.
              </p>
            </details>

            <details className="bg-gray-50 p-6 rounded-lg border-2 border-gray-200 hover:border-[#B8963A] transition-all group">
              <summary 
                className="cursor-pointer list-none flex items-center justify-between"
                style={{ 
                  fontFamily: 'Playfair Display, serif',
                  fontWeight: 700,
                  fontSize: '18px',
                  color: '#162C46'
                }}
              >
                Quanto tempo para começar?
                <span className="text-[#B8963A] text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p 
                className="mt-4 leading-relaxed"
                style={{ 
                  fontFamily: 'Montserrat, sans-serif',
                  color: '#162C46',
                  opacity: 0.8,
                  fontSize: '15px'
                }}
              >
                Após o alinhamento inicial, o canal é estruturado e ativado em poucos dias. A presença contínua começa imediatamente após a ativação.
              </p>
            </details>

            <details className="bg-gray-50 p-6 rounded-lg border-2 border-gray-200 hover:border-[#B8963A] transition-all group">
              <summary 
                className="cursor-pointer list-none flex items-center justify-between"
                style={{ 
                  fontFamily: 'Playfair Display, serif',
                  fontWeight: 700,
                  fontSize: '18px',
                  color: '#162C46'
                }}
              >
                Podemos parar quando quiser?
                <span className="text-[#B8963A] text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p 
                className="mt-4 leading-relaxed"
                style={{ 
                  fontFamily: 'Montserrat, sans-serif',
                  color: '#162C46',
                  opacity: 0.8,
                  fontSize: '15px'
                }}
              >
                Sim. Não há fidelidade. A igreja pode pausar ou encerrar o serviço a qualquer momento.
              </p>
            </details>

            <details className="bg-gray-50 p-6 rounded-lg border-2 border-gray-200 hover:border-[#B8963A] transition-all group">
              <summary 
                className="cursor-pointer list-none flex items-center justify-between"
                style={{ 
                  fontFamily: 'Playfair Display, serif',
                  fontWeight: 700,
                  fontSize: '18px',
                  color: '#162C46'
                }}
              >
                Funciona para igrejas pequenas?
                <span className="text-[#B8963A] text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p 
                className="mt-4 leading-relaxed"
                style={{ 
                  fontFamily: 'Montserrat, sans-serif',
                  color: '#162C46',
                  opacity: 0.8,
                  fontSize: '15px'
                }}
              >
                Sim. O Yde foi pensado justamente para igrejas que não têm estrutura grande, mas querem ter presença digital de forma profissional e contínua.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Simplicidade */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#F9FAFB' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl mb-6"
            style={{ 
              fontFamily: 'Playfair Display, serif', 
              fontWeight: 700,
              color: '#162C46'
            }}
          >
            Plano simples
          </h2>
          
          <div className="bg-white p-8 sm:p-12 rounded-lg shadow-lg border-2" style={{ borderColor: '#B8963A' }}>
            <p 
              className="text-base sm:text-lg mb-3"
              style={{ 
                fontFamily: 'Montserrat, sans-serif',
                color: '#162C46',
                opacity: 0.7,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                fontWeight: 700
              }}
            >
              Estrutura + presença contínua
            </p>
            
            <div className="mb-2">
              <span 
                className="text-2xl sm:text-3xl line-through"
                style={{ 
                  fontFamily: 'Montserrat, sans-serif',
                  color: '#162C46',
                  opacity: 0.4
                }}
              >
                R$ 750,00
              </span>
            </div>
            
            <div className="mb-8">
              <span 
                className="text-6xl sm:text-7xl"
                style={{ 
                  fontFamily: 'Playfair Display, serif',
                  fontWeight: 700,
                  color: '#162C46'
                }}
              >
                R$ 550
              </span>
              <span 
                className="text-2xl sm:text-3xl ml-2"
                style={{ 
                  fontFamily: 'Montserrat, sans-serif',
                  color: '#162C46',
                  opacity: 0.6
                }}
              >
                /mês
              </span>
            </div>

            <div className="max-w-md mx-auto mb-8">
              <div className="space-y-4 text-left">
                <div className="flex items-center gap-3">
                  <CheckCircle size={20} style={{ color: '#B8963A' }} />
                  <span style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46', fontSize: '16px' }}>
                    Canal estruturado
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle size={20} style={{ color: '#B8963A' }} />
                  <span style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46', fontSize: '16px' }}>
                    Identidade visual
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle size={20} style={{ color: '#B8963A' }} />
                  <span style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46', fontSize: '16px' }}>
                    Presença recorrente
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle size={20} style={{ color: '#B8963A' }} />
                  <span style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46', fontSize: '16px' }}>
                    Organização do conteúdo
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <p 
                className="text-sm leading-relaxed"
                style={{ 
                  fontFamily: 'Montserrat, sans-serif',
                  color: '#162C46',
                  opacity: 0.7
                }}
              >
                A monetização por anúncios do YouTube sustenta a estrutura do projeto. 
                As iniciativas da igreja permanecem 100% da igreja.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#162C46' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl mb-6 leading-tight"
            style={{ 
              fontFamily: 'Playfair Display, serif', 
              fontWeight: 700,
              color: '#FFFFFF'
            }}
          >
            Sua igreja pode estar presente no digital sem precisar de equipe ou estrutura.
          </h2>
          
          <p 
            className="text-lg sm:text-xl mb-10 max-w-2xl mx-auto"
            style={{ 
              fontFamily: 'Montserrat, sans-serif',
              color: '#FFFFFF',
              opacity: 0.9
            }}
          >
            Converse com nossa equipe e entenda como o Yde pode servir sua igreja.
          </p>

          <button
            onClick={handleCTA}
            className="inline-flex items-center gap-3 px-10 py-5 rounded-lg text-xl transition-all hover:shadow-xl transform hover:scale-105"
            style={{
              backgroundColor: '#B8963A',
              color: '#FFFFFF',
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 600
            }}
          >
            Quero começar
            <ArrowRight size={24} />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <img src={footerLogoImage} alt="Yde Symbol" className="h-16 w-auto" />
          </div>
          
          <p 
            className="text-sm"
            style={{ 
              fontFamily: 'Montserrat, sans-serif',
              color: '#162C46',
              opacity: 0.6,
              fontWeight: 700
            }}
          >
            © 2026 Yde — Por todo o mundo
          </p>
        </div>
      </footer>
    </div>
  );
}