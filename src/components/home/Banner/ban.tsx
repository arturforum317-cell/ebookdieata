export default function BannersPage() {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* ===== PRODUTO PRINCIPAL ===== */}
      <div className="min-h-screen flex items-center justify-center px-4">
        <section
          className="bg-white shadow-xl rounded-2xl p-6 md:p-10 border-l-8 border-green-500
          flex flex-col md:flex-row items-center gap-8 md:gap-12 max-w-5xl w-full"
        >
          {/* IMAGEM + CTA */}
          <div className="flex flex-col items-center md:min-w-[300px]">
            <img
              src="/mock-ebook.png"
              className="w-60 h-60 md:w-72 md:h-72 object-cover rounded-2xl shadow-lg"
              alt="Protocolo simples de emagrecimento"
            />

            <a
              href="https://pay.kiwify.com.br/QLEhOkL"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 w-full"
            >
              <button className="w-full px-10 py-4 bg-green-600 text-white rounded-xl font-bold hover:bg-green-700 transition text-lg">
                Quero Começar Agora por R$ 20
              </button>
            </a>
          </div>

          {/* TEXTO */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
              Protocolo Natural de Emagrecimento
            </h2>

            <p className="text-gray-700 mt-4 text-base md:text-lg">
              Um método simples para <strong>reduzir inchaço</strong> e iniciar o
              processo de emagrecimento em casa, sem academia e sem dietas extremas.
            </p>

            <ul className="mt-4 space-y-2 text-gray-700">
              <li>✔ Estratégia de Jejum Intermitente</li>
              <li>✔ Guia de Chá Termogênico</li>
              <li>✔ Exercícios em Casa <strong>(BÔNUS)</strong></li>
            </ul>
          </div>
        </section>
      </div>

      {/* ===== GARANTIA ===== */}
      <div className="px-4 pb-16">
        <section className="max-w-5xl mx-auto text-center bg-gray-900 text-white py-10 rounded-2xl shadow-lg">
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
