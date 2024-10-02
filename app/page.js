import Wrapper from "./_components/Wrapper";

export default async function Home() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/GetMakesForVehicleType/car?format=json`,
  );
  const data = await res.json();
  if (!data) throw new Error("Opps some error ocured!");

  const list = data?.Results;
  return (
    <div className=" p-10 flex flex-row justify-center gap-10">
      <Wrapper list={list} />
    </div>
  );
}
