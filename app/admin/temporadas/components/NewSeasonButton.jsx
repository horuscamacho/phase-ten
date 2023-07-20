export default function NewSeasonButton({ onClick }) {
  return (
    <div
      className="flex w-48 h-48 bg-verde  rounded-lg justify-center items-center"
      onClick={(e) => {
        e.preventDefault();
        onClick({ status: true, type: "new" });
      }}
    >
      <div className="flex bg-verde w-44 h-44 border-white border-4 rounded-md justify-center items-center ">
        <button
          className="flex bg-transparent rounded-3xl text-2xl font-semibold text-white"
          type="button"
        >
          Nueva Temporada
        </button>
      </div>
    </div>
  );
}
