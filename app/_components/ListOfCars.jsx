import Car from "./Car";

function ListOfCars({ list }) {
  return (
    <ul className="flex flex-row flex-wrap gap-8 p-2 w-2/3">
      {list.map((car) => {
        return <Car carObj={car} key={car.Model_ID} />;
      })}
    </ul>
  );
}

export default ListOfCars;
