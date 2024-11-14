import React from "react";
import "./styles/global.css";
import { useAds } from "./useCase/useAds";

function App() {
  const { ad } = useAds();

  console.log("[ad ]: ", ad);

  return (
    <div className="">
      <span>ads</span>
    </div>
  );
}

export default App;
