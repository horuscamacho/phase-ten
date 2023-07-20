import CTAButton from "@/app/components/CTAButton";
import { BiX } from "react-icons/bi";
import { useState } from "react";

export default function Contador({ closeModal }) {
  const [inputValue, setInputValue] = useState("0");
  const [count, setCount] = useState(0);
  const handleSum = () => {
    setCount(count + parseInt(inputValue, 10));
    setInputValue("0");
  };
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
      <header className="w-full text-4xl text-white flex justify-center mt-4 font-semibold">
        Contador
      </header>
      <div className="w-full flex justify-center">
        <p className="text-2xl text-white ">Cuenta: {count}</p>
      </div>
      <section className="w-full h-full flex justify-center items-center">
        <form className=" w-5/6 h-5/6 flex flex-col pt-14">
          <label className="text-2xl text-white">
            Ingresa el valor de la carta
          </label>
          <input
            className="mt-12 w-full h-12 rounded"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <div className="w-full h-12 mt-8">
            <CTAButton type="button" color="verde" onClick={handleSum}>
              Contar
            </CTAButton>
          </div>
          <div className="w-full h-12 mt-8">
            <CTAButton type="button" color="azul">
              Terminar de contar
            </CTAButton>
          </div>
        </form>
      </section>
    </div>
  );
}
