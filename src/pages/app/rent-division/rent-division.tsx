import { DivisionControlPanel } from "./components/division-control-panel/division-control-panel";
import { UseRentDivision } from "./use-rent-division";

export function RentDivision() {
  const { property, loading, propertyRatingResult } = UseRentDivision();

  return (
    <div className="m-auto flex max-w-[1050px] flex-col items-center gap-3">
      <h1 className="text-xl font-semibold text-landing">Divisão de Aluguel</h1>
      {loading || <DivisionControlPanel property={property!} rating={propertyRatingResult?.rating ?? 0} />}
    </div>
  );
}
