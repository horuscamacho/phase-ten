import { BiX } from "react-icons/bi";
import CTAButton from "@/app/components/CTAButton";

export default function MarcadorTemporada({ closeModal }) {
  return (
    <div className="w-full h-full bg-azul flex flex-col items-center">
      <div className="h-12 w-full flex justify-end" onClick={closeModal}>
        <span className="bg-rojo h-6 w-6 rounded-full text-white font-black m-2 flex justify-center items-center">
          <BiX size={30} />
        </span>
      </div>
      <div className="w-5/6 h-4/6 bg-white flex flex-col items-center justify-center">
        <header className="text-4xl font-black text-center">
          Temporada (nombre)
        </header>
        <div className="w-full h-8 flex justify-between text-2xl font-black mt-16 px-4">
          <p>Silveria</p>
          <span>183</span>
        </div>
        <div className="w-full h-8 flex justify-between text-2xl font-black mt-4 px-4">
          <p>Cochi</p>
          <span>183</span>
        </div>
        <div className="w-full h-8 flex justify-between text-2xl font-black mt-4 px-4">
          <p>Ferts</p>
          <span>183</span>
        </div>
        <div className="w-full h-8 flex justify-between text-2xl font-black mt-4 px-4">
          <p>Chorus</p>
          <span>183</span>
        </div>
      </div>
      <div className="w-5/6 h-12 mt-16">
        <CTAButton color="negro" type="button" onClick={closeModal}>
          Cerrar
        </CTAButton>
      </div>
    </div>
  );
}
