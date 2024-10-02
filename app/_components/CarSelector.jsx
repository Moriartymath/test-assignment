function DropdownSelector({ list, carMake, setCarMake }) {
  return (
    <div className=" w-1/2 flex flex-col gap-4 justify-center items-center">
      <p>Brand Name</p>
      <select
        value={carMake}
        onChange={(e) => setCarMake(e.currentTarget.value)}
        className=" h-full w-full text-black text-1xl p-2 border-2 "
      >
        <option value="" disabled hidden>
          Choose Car brand
        </option>
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
