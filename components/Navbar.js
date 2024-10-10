import Link from "next/link"
// import Image from "next/image"

const Navbar = () => {
    return ( 
     <nav>
        <div className="logo">
          {/* <Image src="/sen1.png" width={128} height={77} /> */}
        <h1>SEN Class List</h1>
        </div>
       <Link href="/">Home</Link> 
       <Link href="/about">About</Link>
       <Link href="/classlist">Class List</Link>
     </nav>
       
     );
}
 
export default Navbar;