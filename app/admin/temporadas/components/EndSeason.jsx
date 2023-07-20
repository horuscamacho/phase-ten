import { BiX } from "react-icons/bi";
import CTAButton from "@/app/components/CTAButton";
export default function EndSeason({ closeModal }) {
  return (
    <>
      <div className="w-full h-full flex flex-col bg-rojo">
        <div className="h-12 w-full flex justify-end">
          <span
            className="bg-negro h-6 w-6 rounded-full text-white font-black m-2 flex justify-center items-center leading-none"
            onClick={(e) => {
              e.preventDefault();
              closeModal({ status: false, type: undefined });
            }}
          >
            <BiX size={30} />
          </span>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <form className="w-5/6 h-4/6 flex flex-col">
            <label className="text-2xl text-negro font-bold">Temporada:</label>
            <select className="h-12 text-negro font-black mt-4">
              <option value="season01">Temporada 1</option>
            </select>
            <div className="w-full h-12 flex justify-center mt-32">
              <CTAButton color="verde">Terminar Temporada</CTAButton>
            </div>
            <div className="w-full h-12 flex justify-center mt-4">
              <CTAButton color="negro" onClick={closeModal}>
                Cancelar
              </CTAButton>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
