import { Helmet } from "react-helmet-async";
import { Details } from "./components/details";
import { Location } from "./components/location";
import { usePropertyDetails } from "./use-property-details-logic";

export function PropertyDetails() {
  const { loadingOrError, result } = usePropertyDetails();

  return (
    <div className="mt-6 flex justify-center gap-14">
      <Helmet title="Detalhes" />
      {loadingOrError || (
        <>
          <Details property={result!} />
          <div className="flex w-[477px] flex-col gap-4">
            <Location property={result!} />
            {/* <Comments /> */}
          </div>
        </>
      )}
    </div>
  );
}
