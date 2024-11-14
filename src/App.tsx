import React from "react";
import "./styles/global.css";
import { useAds } from "./useCase/useAds";

function App() {
  const { ad } = useAds();

  console.log("[ad ]: ", ad);

  return (
    <div className="w-full">
      <div className="w-full h-52 bg-lime-700 flex">ads</div>
    </div>
  );
}

export default App;
