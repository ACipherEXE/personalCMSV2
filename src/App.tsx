import { useEffect } from "react";
import { supabase } from "./supabase";

function App() {
  useEffect(() => {
    const test = async () => {
      const { data, error } = await supabase.from("items").select("*");
      console.log("data:", data);
      console.log("error:", error);
    };
    test();
  }, []);
  return (
    <>
      <div className="min-h-screen bg-black">
        This is the main page where we will display everything that could be
        intresting from everything we have put in the project. Think data dog
      </div>
    </>
  );
}

export default App;
