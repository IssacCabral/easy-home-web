import { Details } from "./components/details";
import { Location } from "./components/location";
import { usePropertyDetails } from "./use-property-details-logic";

export function PropertyDetails() {
  const { fetchingOrError, result } = usePropertyDetails();

  return (
    <div className="mt-6 flex justify-center gap-14">
      {fetchingOrError || (
        <>
          <Details property={result!} />
          <div className="flex w-[477px] flex-col gap-4">
            <Location />
            {/* <Comments /> */}
          </div>
        </>
      )}
    </div>
  );
}
