import footerimg from "../assets/logo-text.png"

export interface FooterProps {
    prop: string
}

export default function Footer({ prop }: FooterProps) {
    
    return (
       <section className=" bg-amber-50">

<div className="flex justify-between container mx-auto mt-50">


<div> <img src={footerimg} alt="devconfig" />

<p className="mt-7">Curated tools, technologies, and resources for developers building
modern software. </p>


<div className="flex gap-4 my-7">


 <button >GitHub</button>
<button > Twitter</button>
<button >LinkedIn</button>



</div>
</div>


<div>
    <h2 className="text-1xl font-bold">Product</h2>
 <ul>
       <li>Home</li>
       <li>Technologies</li>
       <li>Projects</li>
 </ul>
</div>
<div> <h2 className="text-1xl font-bold">COMPANY</h2>
<ul>
    <li>About</li>
    <li>Contuct</li>
    <li>Careers</li>
</ul>

</div>
<div>
    
<h2 className="text-1xl font-bold">LEGAL</h2>
<ul>
    <li>Privacy Policy</li>
    <li>Terms of Service</li>
</ul>
</div>


</div>

<div className="container mx-auto">
 <div className="flex justify-between">
       <p>© 2026 Dev Stack. All rights reserved.</p>

         <ul className="flex justify-between gap-4 my-7 ">
    <li>Privacy</li>
    <li>Terms</li>
</ul>

 </div>



</div>
       </section>
    )
}