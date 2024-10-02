function YearSelector({ carMake, year, setYear }) {
  const listOfYears = Array.from(
    { length: 10 },
    (_, index) => 2014 + index + 1
  );
  return (
    <div className=" w-1/3">
      <select
        value={year}
        className=" h-full w-full text-black text-1xl"
        onChange={(e) => setYear(e.currentTarget.value)}
        disabled={carMake === ""}
      >
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
