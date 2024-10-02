import ListOfCars from "@/app/_components/ListOfCars";
import Link from "next/link";

export async function generateStaticParams() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/GetMakesForVehicleType/car?format=json`
  );
  const data = await res.json();

  if (!data) throw new Error("Some error occured while loading data");

  const results = data?.Results;

  if (!results) throw new Error("Opps, cars information not found");

  const listOfYears = Array.from(
    { length: 10 },
    (_, index) => 2014 + index + 1
  );

  return results.map(({ MakeId }) =>
    listOfYears.map((year) => ({
      makeId: MakeId,
      year: year,
    }))
  );
}
async function page({ params }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/GetModelsForMakeIdYear/makeId/${params.makeId}/modelyear/${params.year}?format=json`
  );
  const data = await res.json();
  const list = data?.Results;

  if (!data) throw new Error("Some error occured while loading data");

  const makeName = data?.Results?.[0]?.Make_Name;
  const year = params.year;

  return (
    <div className="flex flex-col justify-center items-center gap-6">
      <div className="flex flex-row gap-4 text-2xl justify-start">
        {list?.length ? (
          <>
            <h1>
              Choosed Brand:{" "}
              <span className=" capitalize">{makeName.toLowerCase()}</span>
            </h1>
            <h1>Choosed Year: {year}</h1>
          </>
        ) : (
          <h1 className="">There is no information</h1>
        )}
      </div>
      {list?.length ? <ListOfCars list={list} /> : null}
      <Link
        href={"/"}
        className="py-2 px-4 border-2 border-slate-400 rounded-md mt-24"
      >
        Choose another brand or year
      </Link>
    </div>
  );
}

export default page;
