"use client";
import { useState } from "react";
import DropdownSelector from "./DropdownSelector";
import YearSelector from "./YearSelector";

function Wrapper({ list }) {
  const [carMake, setCarMake] = useState("");
  const [year, setYear] = useState("");

  return (
    <div>
      <DropdownSelector list={list} setCarMake={setCarMake} carMake={carMake} />
      <YearSelector setYear={setYear} year={year} carMake={carMake} />
    </div>
  );
}

export default Wrapper;
