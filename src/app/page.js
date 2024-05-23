"use client"; // This is a client component
import { useState } from "react";
import Link from "next/link"
import "../styles/style.css"

function Home() {
  const [show, setShow] = useState(true);
  const [count, setCount] = useState(0)

  const manipulate = () => {
    setShow(prevShow => !prevShow)
    
  };


  return (
    <>
      <button onClick={manipulate}>{show ? "Show pic on website" : "hide pic on website"}</button>
      {show  && <img className="luffy"  id="pic" alt="pic" src="/luffy.jpg"></img>}
      <h1>{count}</h1>
      <button className="button" onClick={() => { setCount(count + 1)}} >up</button>
      <button onClick={() => { setCount(count - 1)}} >down</button>
      <button onClick={() => { setCount(0)}} >reset</button>
      <Link href="/about" >go to about page</Link>
    </>
  );
}

export default Home;
