import House2Img from "@/assets/landing-houses/house-2.png";
import { PropertyCard } from "@/components/property-card";
import { Map } from "@/components/map";
import { SearchForm } from "./components/search-form";
import { Helmet } from "react-helmet-async";
import { Spinner } from "@/components/ui/spinner";
import { usePropertyList } from "./use-property-list-logic";
import { Pagination } from "@/components/pagination";
import { perPageLimit } from "@/api/find-properties";
import { FetchingAmenitiesProvider } from "@/contexts/fetching-amenities-context";

export function PropertyList() {
  const {
    form,
    result,
    checkedLat,
    checkedLon,
    isFetching,
    street,
    foundProperties,
    handlePaginate,
    handleFindProperties,
  } = usePropertyList();

  return (
    <>
      <Helmet title="Imóveis" />
      <div className="flex">
        <FetchingAmenitiesProvider>
          <SearchForm form={form} onFindProperties={handleFindProperties} />
        </FetchingAmenitiesProvider>
        <div className="flex w-full flex-col gap-5 pl-5 pr-14 pt-6">
          {isFetching ? (
            <div className="flex h-full w-full items-center justify-center">
              <Spinner />
            </div>
          ) : (
            <Map
              coords={{
                lat: checkedLat,
                lon: checkedLon,
              }}
              foundProperties={foundProperties}
              foundStreet={street}
            />
          )}
          {!isFetching && (
            <Pagination
              onPageChange={handlePaginate}
              pageIndex={result!.meta.page}
              perPage={perPageLimit}
              totalCount={result!.meta.total}
            />
          )}
          <div className="mb-3 flex flex-wrap gap-6 px-10">
            {result?.data.map((item) => (
              <PropertyCard
                id={item.id}
                image={House2Img}
                addressNumber={item.address.addressNumber}
                price={item.price}
                street={item.address.street}
                title={item.title}
                key={item.id}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
