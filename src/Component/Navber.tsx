import logo from "../assets/logo-text.png"
export interface NavberProps {
    nav: string
}

export default function Navber({ nav }: NavberProps) {
    
    return (
       <nav  className="sticky top-0 z-50">
<div className="flex justify-between items-center container mx-auto  ">

        <div>
            <img src={logo} alt="logo" />
        </div>

        <div>
        <ul className="flex justify-between items-center gap-5">
            <li>Home</li>
            <li>Technologies</li>
            <li>Projects</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        </div>

        <div className="flex justify-between items-center gap-3">
            <button className=" border border-none rounded-full px-2 py-1  font-semibold ">Sing IN</button>
            <button className=" border border-none rounded-full px-2 py-1 bg-[#D91B7E] text-white ">Sign Up</button>
        </div>


</div>
       </nav>
    )
}