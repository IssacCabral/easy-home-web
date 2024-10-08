import { Hero } from "./hero";

import HeroImg from "@/assets/hero-image.jpg";

export function LandingPage() {
  return (
    <div className="flex flex-col">
      <Hero />
      {/* Lar Perfeito */}
      <div className="grid max-h-screen min-h-screen grid-cols-2">
        <img src={HeroImg} className="w-full object-cover" alt="Lar Perfeito" />

        <div className="flex items-center justify-center border border-solid border-rose-200 p-8">
          <div>
            <h1 className="text-4xl font-bold">O lar perfeito para você</h1>
            <p className="mt-4 text-lg">
              Encontre um ambiente aconchegante e perfeito para chamar de seu.
            </p>
            <button className="mt-6 rounded-lg bg-rose-500 px-6 py-2 text-white">
              Ver Imóveis
            </button>
          </div>
        </div>
      </div>
      {/* Melhores Casas */}
      <div></div>
      {/* Rápido e Intuitivo */}
      <div></div>
    </div>
  );
}
