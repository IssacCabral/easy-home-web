import { BellRing, CircleDollarSign, HomeIcon } from "lucide-react";
import { DashCard } from "./components/dash-card";

export function Dashboard() {
  return (
    <main className="flex flex-1 flex-col gap-8 rounded-xl border border-solid border-border p-5">
      <header className="flex flex-col gap-1 px-8">
        <h1 className="text-3xl font-semibold text-landing">
          Bem-vindo de volta, Pedro Sevila
        </h1>
        <p className="text-base text-landing">
          Visualize e gerencie seus imóveis
        </p>
      </header>
      <section className="flex gap-6">
        <DashCard
          description="Renda Mensal Em Imóveis Ocupados"
          detail="3,000"
          icon={CircleDollarSign}
        />

        <DashCard description="Imóveis Ocupados" detail="5" icon={HomeIcon} />

        <DashCard
          description="Pedidos De Contato"
          detail="3 Pendentes"
          icon={BellRing}
        />
      </section>
    </main>
  );
}
