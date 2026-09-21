
import type { dataType } from "./Type/type";
export interface DataCardProps {
  card: dataType; 
  handelSelected: (card:dataType)=> void;
  selected : dataType[];
  
}

export default function DataCard({ card , handelSelected , selected }: DataCardProps) {
    const alreadySelected = selected.some(item => {
        return item.id===card.id
    })

  return (
    <div  className={`bg-white rounded-2xl p-5 shadow-sm flex flex-col justify-between border-2 ${
    alreadySelected ? "border-blue-500" : "border-gray-200"
  }`}>
      <div>
        
        <div className="flex justify-between items-center mb-4">
          <img src={card.image} alt={card.name} className="w-10 h-10 object-cover rounded-xl" />
          <span className="text-xs font-medium px-3 py-1 bg-gray-100 text-gray-700 rounded-full">
            {card.tag}
          </span>
        </div>

        
        <h3 className="font-bold text-lg text-gray-900 mb-1">{card.name}</h3>
        <p className="text-sm text-gray-500 mb-4">{card.description}</p>
      </div>

    
      <div>
        <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
          <span>Rating</span>
          <span className="font-semibold text-gray-800">⭐ {card.rating}</span>
        </div>

       <button
  className="w-full bg-black text-white py-2.5 rounded-xl font-medium text-sm hover:bg-gray-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
  onClick={() => handelSelected(card)}
  disabled={alreadySelected}
>
  Add to Stack
</button>
      </div>
    </div>
  );
}