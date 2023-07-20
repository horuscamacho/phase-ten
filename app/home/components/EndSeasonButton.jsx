export default function EndSeasonButton({ onClick }) {
  return (
    <div
      className="flex w-48 h-48 bg-rojo  rounded-lg justify-center items-center"
      onClick={onClick}
    >
      <div className="flex bg-rojo w-44 h-44 border-white border-4 rounded-md justify-center items-center ">
        <button
          className="flex bg-transparent rounded-3xl text-2xl font-semibold text-white"
          type="button"
        >
          Terminar Temporada
        </button>
      </div>
    </div>
  );
}
