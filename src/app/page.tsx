import React from "react";
import Image from "next/image";
import Cards from "./components/cards";


export default function Home() {
  return (
    <div>
      <div className="pt-10">
        <h1 className="uppercase text-xl underline underline-offset-8">Welcome to My Portfolio!</h1>       
      </div>

      <div className="">
        <Cards />
      </div>
    </div>
  );
}
