import banner from "../assets/banner-stack.png"
export interface HeaderProps {
    header: string
}

export default function Header({ header }: HeaderProps) {
    
    return (
      <header className=" container mx-auto">

<div className="flex justify-between items-center">

<div>
<h1 className="text-5xl font-bold">Build Your Ideal<br />
 <span className="bg-gradient-to-r from-[#FF5722] via-[#D91B7E] to-[#7C3AED] bg-clip-text text-transparent">
    Development Stack
  </span></h1>

<p className="my-5">Explore frontend, backend, database, and tooling options, 
    <br />
compare them side by side, and put together the stack that fits your
next project.</p>

<button className="bg-gradient-to-r from-[#F97316] to-[#EC4899] text-white px-6 py-3 rounded-full font-medium shadow-md my-5">
            Explore Technologies
          </button>

          <button className="border border-gray-300 text-gray-700 px-6 py-2.5 rounded-full font-medium hover:bg-gray-50 ml-4">
            Learn More
          </button>
</div>

<div>
<img src={banner} alt="banner" />
</div>


</div>

      </header>
    )
}