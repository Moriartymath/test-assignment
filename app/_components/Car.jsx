function Car({ carObj }) {
  const { Model_Name: modelName, Model_ID: modelId } = carObj;
  return (
    <li className="py-4 px-8 border-2 border-slate-500 rounded-md bg-white">
      <h1>
        Model Name: <span>{modelName}</span>
      </h1>
      <h1>
        Model ID: <span>{modelId}</span>
      </h1>
    </li>
  );
}

export default Car;
