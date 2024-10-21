import { Comments } from "./components/comments";
import { Details } from "./components/details";
import { Location } from "./components/location";

export function PropertyDetails() {
  // const { id } = useParams();

  // const { data: result, isFetching } = useQuery({
  //   queryKey: ["property-details", id],
  //   queryFn: () => findProperty({ id: id! }),
  // });

  return (
    <div className="mt-6 flex justify-center gap-14">
      <Details />
      <div className="flex flex-col gap-4">
        <Location />
        <Comments />
      </div>
    </div>
  );
}
