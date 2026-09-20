import Dataa from "./Component/Dataa"
import Header from "./Component/Header"
import Navber from "./Component/Navber"
import type { dataType } from "./Component/Type/type"
import { Suspense, useState } from "react"
import YourStack from "./Component/YourStack"


const techFecth =  async (): Promise < dataType[]>  => {
  const res = await fetch("../public/data.json")
  const data = await res.json()
  console.log(data)
  return data
  
}


function App() {
  const [selected , setSelected]=  useState <dataType[]>([])
//  const dataPromise = techFecth()
 const [dataPromise] = useState(() => techFecth())


  return (
    <>


<Navber nav="Technology"></Navber>
<Header header="Technology"></Header>


<div className="grid grid-cols-4 gap-4 container mx-auto">

<div className=" col-span-3">
  <Suspense fallback ={<p>Loding....</p>}>
  <Dataa dataPromise={dataPromise} selected={selected}setSelected={setSelected}></Dataa>
</Suspense>
</div>

<div className="col-span-1">
  <YourStack stack={selected}></YourStack>
</div>

</div>


    </>
  )
}

export default App
