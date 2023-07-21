"use client";

import Modal from "@/app/admin/temporadas/components/Modal";
import { useState } from "react";
import NewSeason from "@/app/admin/temporadas/components/NewSeason";
import EndSeason from "@/app/admin/temporadas/components/EndSeason";
import SquareButton from "@/app/components/SquareButton";
import MarcadorTemporada from "@/app/admin/temporadas/components/MarcadorTemporada";
import { BiLeftArrow } from "react-icons/bi";
import { useRouter } from "next/navigation";

export default function Admin() {
  const [showModal, setShowModal] = useState({
    status: false,
    type: undefined,
  });

  const navigate = useRouter();
  return (
    <>
      <div className="w-full p-4" onClick={() => navigate.push("/admin")}>
        <BiLeftArrow color="black" className="text-4xl" />
      </div>
      <div className="w-screen h-full bg-amarillo flex flex-col justify-around items-center relative">
        <SquareButton
          onClick={() => setShowModal({ status: true, type: "new" })}
          color="verde"
        >
          Nueva Temporada
        </SquareButton>
        <SquareButton
          onClick={() => setShowModal({ status: true, type: "score" })}
          color="azul"
        >
          Marcador Temporada
        </SquareButton>
        <SquareButton
          onClick={() => setShowModal({ status: true, type: "end" })}
          color="rojo"
        >
          Terminar Temporada
        </SquareButton>
      </div>
      {showModal.status ? (
        <Modal>
          {showModal.type === "new" ? (
            <NewSeason closeModal={setShowModal} />
          ) : showModal.type === "score" ? (
            <MarcadorTemporada closeModal={setShowModal} />
          ) : (
            <EndSeason closeModal={setShowModal} />
          )}
        </Modal>
      ) : null}
    </>
  );
}
