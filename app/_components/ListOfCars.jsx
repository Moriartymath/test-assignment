import Car from "./Car";

function ListOfCars({ list }) {
  return (
    <ul className="flex flex-row max-h-96 overflow-auto flex-wrap gap-8 p-2 w-2/3 justify-center ">
      {list.map((car) => {
        return <Car carObj={car} key={car.Model_ID} />;
      })}
    </ul>
  );
}

export default ListOfCars;
