import { mockModelContent_TokenContainer } from "../../mockData/ModelData";

function JSONDisplay() {
  return (
    <pre className="bg-gray-900 text-gray-100 p-4 rounded text-sm overflow-auto">
      {JSON.stringify(mockModelContent_TokenContainer, null, 2)}
    </pre>
  );
}

export default JSONDisplay;
