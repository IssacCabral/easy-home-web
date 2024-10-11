export function HowItWorks() {
  return (
    <footer
      className="flex flex-col items-center justify-center gap-24 pb-12 pl-20 pr-20"
      style={{ height: "100vh" }}
    >
      <h1 className="text-3xl font-bold text-landing">Rápido E Intuitivo!</h1>
      <div className="grid grid-cols-4 gap-10">
        <div className="flex max-w-[290px] flex-col gap-7">
          <span className="text-6xl font-semibold text-landing">1</span>
          <span className="text-2xl font-semibold text-landing">
            Escolha seu lugar
          </span>
          <p className="text-xl text-landing">
            Explore centenas de casas e apartamentos de alta qualidade.
            Encontrar a casa dos seus sonhos não poderia ser mais fácil!
          </p>
        </div>
        <div className="flex max-w-[290px] flex-col gap-7">
          <span className="text-6xl font-semibold text-landing">2</span>
          <span className="text-2xl font-semibold text-landing">
            Compartilhe um lar
          </span>
          <p className="text-xl text-landing">
            Estudantes que desejam dividir aluguel podem facilmente encontrar
            colegas para compartilhar os custos, criando uma experiência mais
            econômica.
          </p>
        </div>
        <div className="flex max-w-[290px] flex-col gap-7">
          <span className="text-6xl font-semibold text-landing">3</span>
          <span className="text-2xl font-semibold text-landing">
            Avaliações e Estrelas
          </span>
          <p className="text-xl text-landing">
            Confira avaliações e comentários de outros estudantes para garantir
            que você está fazendo a melhor escolha. A transparência é a nossa
            prioridade!
          </p>
        </div>
        <div className="flex max-w-[290px] flex-col gap-7">
          <span className="text-6xl font-semibold text-landing">4</span>
          <span className="text-2xl font-semibold text-landing">
            Gerenciamento Prático
          </span>
          <p className="text-xl text-landing">
            Locadores têm acesso a um dashboard prático para gerenciar seus
            imóveis com facilidade.
          </p>
        </div>
      </div>
    </footer>
  );
}
