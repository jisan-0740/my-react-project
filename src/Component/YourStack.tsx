import type { Dispatch, SetStateAction } from "react"
import type { dataType } from "./Type/type"

export interface YourStackProps {
  stack: dataType[]
  setSelelcted: Dispatch<SetStateAction<dataType[]>>
}

export default function YourStack({ stack, setSelelcted }: YourStackProps) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">

      <h2 className="text-3xl font-bold text-slate-900">
        Your Stack
      </h2>

      <p className="mt-2 text-lg text-slate-400">
        {stack.length} Technology Selected
      </p>

      {stack.map((item) => (
        <div
          key={item.id}
          className="border rounded-xl p-3 flex items-center"
        >
          <img
            src={item.image}
            alt={item.name}
            className="w-10 h-10 object-cover rounded-lg"
          />

          <span className="ml-3">
            {item.name}
          </span>

          <button
            className="ml-auto"
            onClick={() =>
              setSelelcted(
                stack.filter((item2) => item2.id !== item.id)
              )
            }
          >
            x
          </button>
        </div>
      ))}

    </div>
  )
}