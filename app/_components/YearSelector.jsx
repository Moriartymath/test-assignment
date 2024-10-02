function YearSelector({ carMake, year, setYear }) {
  const listOfYears = Array.from(
    { length: 10 },
    (_, index) => 2014 + index + 1
  );
  return (
    <div className=" w-1/3 flex flex-col gap-4 justify-center items-center">
      <p>Year</p>
      <select
        value={year}
        className=" h-full w-full text-black text-1xl p-2 border-2 "
        onChange={(e) => setYear(e.currentTarget.value)}
        disabled={carMake === ""}
      >
        <option value="" disabled hidden>
          Choose Year
        </option>
        {listOfYears.map((year) => (
          <option value={`${year}`} key={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  );
}

export default YearSelector;
