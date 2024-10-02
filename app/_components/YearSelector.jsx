const currentYear = new Date().getFullYear();
const fromYear = 2015;
function YearSelector({ carMake, year, setYear }) {
  const listOfYears = Array.from(
    { length: currentYear - fromYear + 1 },
    (_, index) => (index === 0 ? fromYear : fromYear + index)
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
