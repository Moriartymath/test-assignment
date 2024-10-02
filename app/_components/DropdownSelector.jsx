"use client";

function DropdownSelector({ list, carMake, setCarMake }) {
  return (
    <div className=" w-1/3">
      <select
        value={carMake}
        onChange={(e) => setCarMake(e.currentTarget.value)}
        className=" h-full w-full text-black text-1xl p-2 border-2 "
      >
        {list.map((vechicle) => (
          <option value={vechicle.MakeName} key={vechicle.MakeId}>
            {vechicle.MakeName}
          </option>
        ))}
      </select>
    </div>
  );
}

export default DropdownSelector;
