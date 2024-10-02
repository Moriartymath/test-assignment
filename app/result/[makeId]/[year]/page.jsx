export async function generateStaticParams() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/GetMakesForVehicleType/car?format=json`
  );
  const results = (await res.json())?.Results;

  const listOfYears = Array.from(
    { length: 10 },
    (_, index) => 2014 + index + 1
  );
  if (!results) throw new Error("No data to fetch");

  return results.map(({ MakeId }) =>
    listOfYears.map((year) => ({
      makeId: MakeId,
      year: year,
    }))
  );
}
function page({ params }) {
  return <div>{`${params}`}</div>;
}

export default page;
