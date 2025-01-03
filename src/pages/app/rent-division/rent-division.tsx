import { DivisionControlPanel } from "./components/division-control-panel";

export function RentDivision() {
  return (
    <div className="m-auto flex max-w-[1050px] flex-col items-center gap-3">
      <h1 className="text-2xl font-semibold text-landing">Divisão de Aluguel</h1>
      <DivisionControlPanel />
    </div>
  );
}
