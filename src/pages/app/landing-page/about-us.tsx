import AboutUsImg from "@/assets/about-us-image.jpg";

export function AboutUs() {
  return (
    <div
      className="grid grid-cols-2"
      style={{ height: "calc(100vh + 0.5rem)" }}
    >
      <div className="flex items-center justify-center pl-20 pr-16 pt-24">
        <img
          className="w-full object-cover"
          src={AboutUsImg}
          alt="About Us"
          style={{ height: "calc(100vh - 10.5rem)" }}
        />
      </div>
      <div className="flex flex-col items-start justify-center gap-10 pr-24">
        <div className="w-full">
          <h1 className="mb-2 text-3xl font-bold leading-tight tracking-tight text-foreground">
            Aqui, Estudantes Encontram O Lar Perfeito
          </h1>
          <h2 className="text-2xl font-semibold text-primary">Sobre Nós</h2>
        </div>
        <div className="flex w-full flex-col gap-5 pr-28">
          <p className="text-foreground">
            A Campus Living é o seu centro de referência para encontrar a casa
            perfeita para estudantes. Nossa plataforma foi desenvolvida para
            atender às necessidades únicas dos estudantes universitários que
            procuram uma moradia conveniente e acessível em Quixadá.
          </p>
          <p className="font-semibold text-foreground">
            Na Campus Living, estamos comprometidos em fornecer a melhor
            experiência de moradia para estudantes universitários. Venha fazer
            parte da nossa comunidade e encontre o seu próximo lar com
            facilidade e confiança.
          </p>
        </div>
      </div>
    </div>
  );
}
