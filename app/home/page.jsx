"use client";
import NewSeasonButton from "@/app/home/components/NewSeasonButton";
import EndSeasonButton from "@/app/home/components/EndSeasonButton";
import ModalCreateEdit from "@/app/home/components/ModalCreateEdit";
import { useState } from "react";
import NewSeason from "@/app/home/components/NewSeason";
import EndSeason from "@/app/home/components/EndSeason";

export default function Home() {
  const [showModal, setShowModal] = useState({
    status: false,
    type: undefined,
  });

  return (
    <>
      <div className="w-screen h-screen bg-amarillo flex flex-col justify-around items-center relative">
        <NewSeasonButton onClick={setShowModal} />
        <EndSeasonButton onClick={setShowModal} />
      </div>
      {showModal.status ? (
        <ModalCreateEdit>
          {showModal.type === "new" ? (
            <NewSeason closeModal={setShowModal} />
          ) : (
            <EndSeason closeModal={setShowModal} />
          )}
        </ModalCreateEdit>
      ) : null}
    </>
  );
}
