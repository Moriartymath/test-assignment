function Car({ carObj }) {
  const { Model_Name, Make_Name, Make_ID, Model_ID } = carObj;
  return (
    <li className="py-4 px-8 border-2 border-slate-500 rounded-md bg-white">
      <h1>
        Model Name: <span>{Model_Name}</span>
      </h1>
      <h1>
        Model ID: <span>{Model_ID}</span>
      </h1>
    </li>
  );
}

export default Car;
