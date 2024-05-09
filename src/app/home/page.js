import Link from "next/link"
function Home(){

    return (
       <>
        <div className="Home" >Homepage</div>
        <Link href="/about" >go to about</Link>
        
        </>
    )
}

export default Home