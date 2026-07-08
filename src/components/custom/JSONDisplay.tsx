function JSONDisplay({ rawJSON }: { rawJSON: unknown }) {
  return (
    <pre className="bg-gray-900 text-gray-100 p-4 rounded text-sm overflow-auto">
      {JSON.stringify(rawJSON, null, 2)}
    </pre>
  );
}

export default JSONDisplay;
