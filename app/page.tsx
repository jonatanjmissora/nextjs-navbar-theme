export default function Home() {
  return (
    <section className="card">

      <h1 className="text-4xl sm:text-xl 2xl:text-4xl">Home</h1>

      <input type="text" className="input w-full" />
      <input type="text" className="input w-full" />

      <div className="w-full flex gap-4">
        <button className="btn-secondary text-xl sm:text-base 2xl:text-xl flex-1">Cancelar</button>
        <button className="btn-primary text-xl sm:text-base 2xl:text-xl flex-1">Aceptar</button>
      </div>

    </section>
  );
}
