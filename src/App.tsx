import Dataa from "./Component/Dataa"
import Header from "./Component/Header"
import Navber from "./Component/Navber"
import type { dataType } from "./Component/Type/type"
import { Suspense } from "react"

const techFecth =  async (): Promise < dataType>  => {
  const res = await fetch("../public/data.json")
  const data = await res.json()
  console.log(data)
  return data
  
}


function App() {
 const dataPromise = techFecth()

  return (
    <>


<Navber></Navber>
<Header></Header>
<Suspense fallback ={<p>Loding....</p>}>
  <Dataa dataPromise={dataPromise}></Dataa>
</Suspense>
    </>
  )
}

export default App
