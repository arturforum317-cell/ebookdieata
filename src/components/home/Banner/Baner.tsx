export default function BannersPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center py-20">
      <div className="w-full max-w-5xl px-4 space-y-20">

        {/* ===== CABEÇALHO ===== */}
        <header className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Protocolo Natural para Emagrecimento em Casa
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Um método simples, acessível e direto ao ponto para quem quer começar hoje.
          </p>
        </header>

        {/* ===== PRODUTO ===== */}
        <section
          className="bg-white shadow-xl rounded-2xl p-8 md:p-12 
          flex flex-col md:flex-row items-center gap-12"
        >
          <div className="flex justify-center md:min-w-[320px]">
            <img
              src="/mock-ebook.png"
              className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl shadow-lg"
              alt="Protocolo Natural de Emagrecimento"
            />
          </div>

          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              O que você vai receber
            </h2>

            <ul className="mt-6 space-y-3 text-gray-700 text-base md:text-lg">
              <li>✔ Estratégia simples de jejum intermitente</li>
              <li>✔ Guia prático de chá termogênico</li>
              <li>✔ Exercícios em casa <strong>(bônus)</strong></li>
            </ul>

            <p className="mt-6 text-gray-600">
              Conteúdo direto, sem complicação e com acesso imediato.
            </p>
          </div>
        </section>

        {/* ===== RESULTADOS (ANTES E DEPOIS) ===== */}
        <section className="bg-white shadow-xl rounded-2xl p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">
            Resultados de Pessoas Comuns
          </h2>

          <p className="text-gray-600 text-center mt-3 max-w-2xl mx-auto">
            Resultados relacionados à redução de inchaço e melhora na rotina alimentar.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src="/antes-depois1.png"
                className="w-full rounded-xl shadow-md"
                alt="Resultado 1"
              />
              <p className="mt-2 text-sm text-gray-500">
                7 dias seguindo o protocolo
              </p>
            </div>

            <div className="text-center">
              <img
                src="/PARA.png"
                className="w-full rounded-xl shadow-md"
                alt="Resultado 2"
              />
              <p className="mt-2 text-sm text-gray-500">
                Redução de inchaço corporal
              </p>
            </div>

            <div className="text-center">
              <img
                src="/aaaa.jpg"
                className="w-full rounded-xl shadow-md"
                alt="Resultado 3"
              />
              <p className="mt-2 text-sm text-gray-500">
                Melhora visual progressiva
              </p>
            </div>
          </div>

          <p className="text-xs text-gray-400 text-center mt-6">
            *Resultados variam de pessoa para pessoa.
          </p>
        </section>

        {/* ===== CTA FINAL ===== */}
        <section className="text-center">
          <a
            href="/ban"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <button className="px-12 py-4 bg-green-600 hover:bg-green-700 text-white font-bold text-xl rounded-xl shadow-lg transition">
              Quero Começar Agora por R$ 20
            </button>
          </a>

          <p className="mt-3 text-sm text-gray-500">
            Pagamento seguro · Acesso imediato
          </p>
        </section>

       
           <section className="text-center bg-gray-900 text-white py-10 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold">
            Garantia Incondicional de 7 Dias
          </h3>
          <p className="mt-3 text-gray-300">
            Teste sem risco. Se não gostar, devolvemos 100% do valor.
          </p>
        </section>
      </div>
    </div>
  );
}
