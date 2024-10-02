import Image from "next/image";
import DropdownSelector from "./_components/DropdownSelector";
import Wrapper from "./_components/Wrapper";

export default async function Home() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/GetMakesForVehicleType/car?format=json`
  );

  const data = await res.json();
  console.log(data);
  return (
    <div className=" p-10 flex flex-row justify-center gap-10">
      <Wrapper list={data.Results} />
    </div>
  );
}
