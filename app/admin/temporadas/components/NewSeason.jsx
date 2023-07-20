import { BiX } from "react-icons/bi";
import CTAButton from "@/app/components/CTAButton";

export default function NewSeason({ closeModal }) {
  return (
    <>
      <div className="w-full h-full flex flex-col bg-verde">
        <div className="h-12 w-full flex justify-end">
          <span
            className="bg-rojo h-6 w-6 rounded-full text-white font-black m-2 flex justify-center items-center"
            onClick={closeModal}
          >
            <BiX size={30} />
          </span>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <form className="w-5/6 h-4/6 ">
            <label className="text-2xl text-negro font-bold">Nombre:</label>
            <input className="w-full h-12 border border-negro mt-4" />
            <div className="w-full h-12 flex justify-center mt-32">
              <CTAButton type="button" color="rojo">
                Iniciar
              </CTAButton>
            </div>
            <div className="w-full h-12 flex justify-center mt-4">
              <CTAButton type="button" color="negro" onClick={closeModal}>
                Cancelar
              </CTAButton>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
