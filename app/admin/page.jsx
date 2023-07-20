"use client";

import SquareButton from "@/app/components/SquareButton";
import { useRouter } from "next/navigation";
import CTAButton from "@/app/components/CTAButton";
export default function AdminPage() {
  const navigate = useRouter();
  const handleOnClick = (route) => {
    return navigate.push(route);
  };
  return (
    <>
      <div className="w-full h-full flex flex-col items-center justify-around">
        <SquareButton
          color="amarillo"
          type="button"
          onClick={() => handleOnClick("/admin/temporadas")}
        >
          Temporadas
        </SquareButton>
        <SquareButton
          color="verde"
          type="button"
          onClick={() => handleOnClick("/partida")}
        >
          Partida
        </SquareButton>
        <SquareButton
          color="azul"
          type="button"
          onClick={() => handleOnClick("/histórico")}
        >
          Histórico
        </SquareButton>
        <div className="w-4/6 h-12">
          <CTAButton type="button" color="rojo">
            Cerrar Sesión
          </CTAButton>
        </div>
      </div>
    </>
  );
}
