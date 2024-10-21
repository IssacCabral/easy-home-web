import PropertyDetailsImg from "@/assets/property-details.png";
import { PropertyInfoSummary } from "@/components/property-info-summary";
import { DollarSign, MapPin } from "lucide-react";

export function Details() {
  return (
    <section className="flex w-[745px] flex-col gap-3">
      <img src={PropertyDetailsImg} alt="Property Details" className="w-full" />
      <div className="flex gap-6">
        <h1 className="text-3xl font-bold text-landing">
          Room 3 in Casa Monteiro II
        </h1>
        <PropertyInfoSummary />
        <div className="flex items-center">
          <DollarSign size={32} className="text-landing" />
          <span className="text-3xl font-semibold text-landing">450</span>
          <span className="text-xl font-normal">/ mês</span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <MapPin enableBackground={"#6C6B6B"} size={16} />
        <span className="text-sm font-normal text-landing">
          R. Damasceno Monteiro, 1170 Lisboa
        </span>
      </div>
      <div className="rounded-xl border border-solid border-border px-5 py-4">
        <h2 className="mb-3 text-lg font-semibold text-landing">Descrição</h2>
        <p className="text-sm leading-6 text-landing">
          Lorem ipsum dolor sit amet consectetur. Sit dui fermentum vitae in dui
          gravida lectus molestie. Dui a netus interdum enim. Vitae id ornare
          amet curabitur cursus arcu ante sed. Orci ipsum libero sed in eget
          vitae. Nulla fringilla integer viverra aenean massa. Metus consequat
          purus enim tortor malesuada morbi. Eget mattis risus mauris egestas.
          Aenean quis amet habitant tortor facilisis viverra erat viverra velit.
          Velit mattis magna cursus purus vitae mauris senectus maed,
        </p>
      </div>
      <div className="mb-9 rounded-xl border border-solid border-border px-5 py-4">
        <h2 className="mb-3 text-lg font-semibold text-landing">Comodidades</h2>
        <div className="flex gap-2">
          {/* todo: transformar em um componente */}
          <span className="rounded-xl bg-[#F2F4F7] px-3 py-1 text-sm font-medium text-foreground">
            WiFi
          </span>
          <span className="rounded-xl bg-[#F2F4F7] px-3 py-1 text-sm font-medium text-foreground">
            Ar Condicionado
          </span>
        </div>
      </div>
    </section>
  );
}
