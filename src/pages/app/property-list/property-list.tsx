import House2Img from "@/assets/landing-houses/house-2.png";
import { PropertyCard } from "@/components/property-card";
import { Map } from "@/components/map";
import { SearchForm } from "./components/search-form";
import { Helmet } from "react-helmet-async";
import { Spinner } from "@/components/ui/spinner";
import { usePropertyList } from "./use-property-list-logic";
import { PropertiesPagination } from "./components/properties-pagination";

export function PropertyList() {
  const {
    form,
    handleFindProperties,
    result,
    checkedLat,
    checkedLon,
    isFetching,
    street,
    foundProperties,
  } = usePropertyList();

  return (
    <>
      <Helmet title="Imóveis" />
      <div className="flex">
        <SearchForm form={form} onFindProperties={handleFindProperties} />
        <div className="flex w-full flex-col gap-3 pl-5 pr-14 pt-6">
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
          {!isFetching && <PropertiesPagination />}
          <div className="mb-3 flex flex-wrap gap-6 px-10">
            {result?.data.map((item) => (
              <PropertyCard
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
