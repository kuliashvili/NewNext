"use client"; // This is a client component
import { useState } from "react";

function Home() {
  const [show, setShow] = useState(true);

  const manipulate = () => {
    setShow(prevShow => !prevShow)
    
  };

  return (
    <>
      <button onClick={manipulate}>{show ? "Show pic on website" : "hide pic on website"}</button>
      {show  && <img id="pic" alt="pic" src="/nowar.png"></img>}
    </>
  );
}

export default Home;
