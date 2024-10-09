import HeroImg from "@/assets/hero-image.jpg";

import { Plus } from "lucide-react";

export function Hero() {
  return (
    <div
      className="grid grid-cols-2"
      style={{ height: "calc(100vh - 5.5rem)" }}
    >
      <div className="flex flex-col justify-center gap-10 pl-20 pr-14">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-ring">
            Encontre O Seu Futuro
          </h1>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-landing">
            Acomodação Ideal
          </h1>
        </div>

        <p className="text-2xl leading-relaxed text-muted">
          Quer encontrar uma casa? Estamos prontos para ajudá-lo a encontrar
          aquela que se adapta a você.
        </p>

        <div className="flex max-w-[90%] justify-between">
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center text-4xl font-semibold text-foreground">
              <span>4235</span>
              <Plus className="text-primary" strokeWidth={3} />
            </div>
            <span className="text-xl text-muted">Imóveis</span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center text-4xl font-semibold text-foreground">
              <span>90</span>
              <Plus className="text-primary" strokeWidth={3} />
            </div>
            <div className="flex flex-col text-xl text-muted">
              <span>Locações/</span> <span>Semestre</span>
            </div>
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center text-4xl font-semibold text-foreground">
              <span>400</span>
              <Plus className="text-primary" strokeWidth={3} />
            </div>
            <span className="text-xl text-muted">Estudantes</span>
          </div>
        </div>
      </div>
      <img
        src={HeroImg}
        className="w-full rounded-br-xl rounded-tl-xl rounded-tr-xl object-cover"
        style={{ height: "calc(100vh - 5.5rem)" }}
        alt="Hero"
      />
    </div>
  );
}
