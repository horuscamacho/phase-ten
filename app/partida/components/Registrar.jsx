import { BiX } from "react-icons/bi";
import CTAButton from "@/app/components/CTAButton";

export default function Registrar({ closeModal }) {
  return (
    <div className="bg-negro w-full h-full flex flex-col items-center">
      <div className="h-12 w-full flex justify-end">
        <span
          className="bg-rojo h-6 w-6 rounded-full text-white font-black m-2 flex justify-center items-center"
          onClick={closeModal}
        >
          <BiX size={30} />
        </span>
      </div>
      <form className="w-5/6 h-full flex flex-col">
        <label className="text-4xl font-semibold text-white">
          Resultado de la Phase
        </label>
        <input className="mt-12 h-12 rounded" />
        <div className="w-full h-12 mt-44">
          <CTAButton color="verde">Registrar Phase</CTAButton>
        </div>
        <div className="w-full h-12 mt-4" onClick={closeModal}>
          <CTAButton color="rojo">Cancelar</CTAButton>
        </div>
      </form>
    </div>
  );
}
