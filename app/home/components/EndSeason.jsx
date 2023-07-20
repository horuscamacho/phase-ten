export default function EndSeason({ closeModal }) {
  return (
    <>
      <div className="w-full h-full flex flex-col bg-rojo">
        <div className="h-12 w-full flex justify-end">
          <span
            className="bg-rojo h-6 w-6 rounded-full text-white font-black m-2 flex justify-center items-center"
            onClick={(e) => {
              e.preventDefault();
              closeModal({ status: false, type: undefined });
            }}
          >
            X
          </span>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <form className="w-5/6 h-4/6 flex flex-col">
            <label className="text-2xl text-negro font-bold">Temporada:</label>
            <select className="h-12 text-negro font-black mt-4">
              <option value="season01">Temporada 1</option>
            </select>
          </form>
        </div>
      </div>
    </>
  );
}
