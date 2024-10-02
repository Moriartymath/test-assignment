"use client";
import { useState } from "react";
import DropdownSelector from "./DropdownSelector";
import YearSelector from "./YearSelector";
import Link from "next/link";

function Wrapper({ list }) {
  const [carMake, setCarMake] = useState("");
  const [year, setYear] = useState("");
  const link = `/result/${
    list.find((vechicle) => vechicle.MakeName === carMake)?.MakeId
  }/${year}`;

  return (
    <div className="flex flex-col gap-10 w-1/2  justify-center items-center ">
      <div className="flex flex-row gap-10 w-full  justify-center">
        <DropdownSelector
          list={list}
          setCarMake={setCarMake}
          carMake={carMake}
        />
        <YearSelector setYear={setYear} year={year} carMake={carMake} />
      </div>
      <button
        className="py-2 px-8 border-2 border-black rounded-md disabled:text-gray-400 disabled:border-gray-400 "
        disabled={carMake === "" || year === ""}
      >
        {carMake && year ? (
          <Link href={link}>
            <h2>Next</h2>
          </Link>
        ) : (
          <h2>Next</h2>
        )}
      </button>
    </div>
  );
}

export default Wrapper;
