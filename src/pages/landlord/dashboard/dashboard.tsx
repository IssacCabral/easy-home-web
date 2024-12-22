import { BellRing, CircleDollarSign, HomeIcon } from "lucide-react";
import { DashCard } from "./components/dash-card";
import { useDashboard } from "./use-dashboard";
import { useContext } from "react";
import { AuthContext } from "@/contexts/auth-context";
import { formatter } from "@/utils/number-formatter";

export function Dashboard() {
  const { result } = useDashboard();
  const { userSession } = useContext(AuthContext);

  return (
    <main className="flex flex-1 flex-col gap-8 rounded-xl border border-solid border-border p-5">
      <header className="flex flex-col gap-1 px-8">
        <h1 className="text-3xl font-semibold text-landing">Bem-vindo de volta, {userSession?.name}</h1>
        <p className="text-base text-landing">Visualize e gerencie seus imóveis</p>
      </header>
      <section className="flex gap-6">
        <DashCard
          description="Renda Mensal Em Imóveis Ocupados"
          detail={formatter.format(result?.monthlyIncome || 0)}
          icon={CircleDollarSign}
        />
        <DashCard description="Imóveis Ocupados" detail={String(result?.busyProperties)} icon={HomeIcon} />
        <DashCard description="Pedidos De Contato" detail={`${result?.contactRequests} Pendentes`} icon={BellRing} />
      </section>
    </main>
  );
}
