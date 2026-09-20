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
        <div>
{
    dataS.map((card: dataType) => <DataCard key ={card.id} card={card}></DataCard>
    )
}
        </div>
    )
}