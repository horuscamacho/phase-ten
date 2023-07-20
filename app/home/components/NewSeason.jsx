export default function NewSeason({ closeModal }) {
  return (
    <>
      <div className="w-full h-full flex flex-col">
        <div className="h-12 w-full flex justify-end">
          <span
            className="bg-rojo h-6 w-6 rounded-full text-white font-black m-2 flex justify-center items-center"
            onClick={closeModal}
          >
            X
          </span>
        </div>
      </div>
    </>
  );
}
