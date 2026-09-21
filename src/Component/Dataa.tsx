import { use, useState, type Dispatch, type SetStateAction } from "react"
import type { dataType } from "./Type/type"
import DataCard from "./dataCard"
export interface DataaProps {
dataPromise : Promise <dataType[]>
selected:dataType[]
setSelected:Dispatch<SetStateAction <dataType[]>>
}

export default function Dataa({dataPromise , selected , setSelected}: DataaProps) {

    
    const dataS = use(dataPromise)


  const handelSelected = (card : dataType) => {

const alreadySelected = selected.some(item => {
    return item.id===card.id
})
if(alreadySelected=== true){
    return 
}
    setSelected([...selected , card])
  }
  console.log(selected)
    return (
        <div  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
{
    dataS.map((card: dataType) => <DataCard key ={card.id} card={card} handelSelected = {handelSelected} selected = {selected} 
     ></DataCard>
    )
}
        </div>
    )
}