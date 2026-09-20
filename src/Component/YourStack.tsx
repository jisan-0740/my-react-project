import type { dataType } from "./Type/type";

export interface YourStackProps {
  stack: dataType[];
}

export default function YourStack({ stack }: YourStackProps) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">

      <h2 className="text-3xl font-bold text-slate-900">
        Your Stack
      </h2>

      <p className="mt-2 text-lg text-slate-400">
        {stack.length} Technology Selected
      </p>

      {stack.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}

      <div className="mt-7 min-h-55 rounded-2xl border-2 border-dashed border-slate-200 flex items-center justify-center">
        <p className="text-lg text-slate-400">
          Your stack is empty.
        </p>
      </div>

    </div>
  );
}