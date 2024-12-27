import { Helmet } from "react-helmet-async";
import { Details } from "./components/details";
import { Location } from "./components/location";
import { usePropertyDetails } from "./use-property-details-logic";

export function PropertyDetails() {
  const { loadingOrError, result, confirmContactRequest, confirmShareRequest, propertyRatingResult } =
    usePropertyDetails();

  console.log({ propertyRatingResult });

  return (
    <div className="mt-6 flex justify-center gap-14">
      <Helmet title="Detalhes" />
      {loadingOrError || (
        <>
          <Details property={result!} rating={propertyRatingResult?.rating ?? 0} />
          <div className="flex w-[477px] flex-col gap-4">
            <Location
              property={result!}
              onConfirmContactRequest={confirmContactRequest}
              onConfirmShareRequest={confirmShareRequest}
            />
            {/* <Comments /> */}
          </div>
        </>
      )}
    </div>
  );
}
