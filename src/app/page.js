"use client"; // This is a client component
import { useState } from "react";

function Home() {
  const [show, setShow] = useState(true);
  const [count, setCount] = useState(0)

  const manipulate = () => {
    setShow(prevShow => !prevShow)
    
  };


  return (
    <>
      <button onClick={manipulate}>{show ? "Show pic on website" : "hide pic on website"}</button>
      {show  && <img id="pic" alt="pic" src="/nowar.png"></img>}
      <h1>{count}</h1>
      <button onClick={() => { setCount(count + 1)}} >up</button>
      <button onClick={() => { setCount(count - 1)}} >down</button>
      <button onClick={() => { setCount(0)}} >reset</button>
    </>
  );
}

export default Home;
