
import type { dataType } from "./Type/type";
export interface DataCardProps {
  card: dataType; 
}

export default function DataCard({ card }: DataCardProps) {
  void card;
    
    return (
        
<div>

{card.image}

</div>

    )
}