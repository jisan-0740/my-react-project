import { use } from "react"
import type { dataType } from "./Type/type"
import DataCard from "./dataCard"
export interface DataaProps {
dataPromise : Promise <dataType[]>


}

export default function Dataa({dataPromise }: DataaProps) {
    const dataS = use(dataPromise)
    console.log(dataS)
    return (
        <div className=" grid grid-cols-4 gap-5">
{
    dataS.map((card: dataType) => <DataCard key ={card.id} card={card}></DataCard>
    )
}
        </div>
    )
}