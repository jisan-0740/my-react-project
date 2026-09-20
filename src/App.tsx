import Dataa from "./Component/Dataa"
import Header from "./Component/Header"
import Navber from "./Component/Navber"
import type { dataType } from "./Component/Type/type"
import { Suspense } from "react"
import YourStack from "./Component/YourStack"


const techFecth =  async (): Promise < dataType[]>  => {
  const res = await fetch("../public/data.json")
  const data = await res.json()
  console.log(data)
  return data
  
}


function App() {
 const dataPromise = techFecth()

  return (
    <>


<Navber nav="Technology"></Navber>
<Header header="Technology"></Header>


<div className="grid grid-cols-4 gap-4">

<div className=" col-span-3">
  <Suspense fallback ={<p>Loding....</p>}>
  <Dataa dataPromise={dataPromise}></Dataa>
</Suspense>
</div>

<div className="col-span-1">
  <YourStack></YourStack>
</div>

</div>


    </>
  )
}

export default App
