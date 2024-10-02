function Car({ carObj }) {
  const { Model_Name, Make_Name, Make_ID } = carObj;
  return (
    <li className="py-4 px-8 border-2 border-black rounded-md">
      <h1>{Make_Name}</h1>
      <h2>{Model_Name}</h2>
    </li>
  );
}

export default Car;
