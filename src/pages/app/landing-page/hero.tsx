import HeroImg from "@/assets/hero-image.jpg";

export function Hero() {
  return (
    <div
      className="grid grid-cols-2"
      style={{ height: "calc(100vh - 5.5rem)" }}
    >
      <div className="flex items-center justify-center border border-solid border-rose-200 p-8">
        <div>
          <h1 className="text-4xl font-bold">Encontre seu lar perfeito</h1>
          <p className="mt-4 text-lg">
            Nós ajudamos você a encontrar os melhores imóveis de forma rápida e
            fácil.
          </p>
          <button className="mt-6 rounded-lg bg-rose-500 px-6 py-2 text-white">
            Alugar Agora
          </button>
        </div>
      </div>
      <img
        src={HeroImg}
        className="w-full object-cover"
        style={{ height: "calc(100vh - 5.5rem)" }}
        alt="Hero"
      />
    </div>
  );
}
