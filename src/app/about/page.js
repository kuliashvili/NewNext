import Link from "next/Link"
export const metadata = {
    title: "about",
    description: "chemikai"
}

function About(){

    return (
        <>
        <div className="Home" >About page</div>
        <Link href="/" > got ohomePage</Link>
        </>
    )
}

export default About