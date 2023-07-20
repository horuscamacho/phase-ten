export default function NewSeason({ closeModal }) {
  return (
    <>
      <div className="w-full h-full flex flex-col bg-verde">
        <div className="h-12 w-full flex justify-end">
          <span
            className="bg-rojo h-6 w-6 rounded-full text-white font-black m-2 flex justify-center items-center"
            onClick={closeModal}
          >
            X
          </span>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <form className="w-5/6 h-4/6 ">
            <label className="text-2xl text-negro font-bold">Nombre:</label>
            <input className="w-full h-12 border border-negro mt-4" />
            <button className="bg-rojo mt-40 w-full h-12 rounded-md text-white text-lg font-bold">
              Iniciar
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
