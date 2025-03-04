import Link from "next/link";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center bg-[var(--card-background)] w-[25rem] gap-12 border border-black p-12 rounded-lg shadow">

      <h1 className="text-4xl">Home</h1>

      <input type="text" className="input w-full" />
      <input type="text" className="input w-full" />

      <div className="w-full flex gap-4">
        <button className="btn-secondary text-xl flex-1">Cancelar</button>
        <button className="btn-primary text-xl flex-1">Aceptar</button>
      </div>
      
    </section>
  );
}
