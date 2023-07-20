"use client";
import NewSeasonButton from "@/app/home/components/NewSeasonButton";
import EndSeasonButton from "@/app/home/components/EndSeasonButton";
import ModalCreateEdit from "@/app/home/components/ModalCreateEdit";
import { useState } from "react";
import NewSeason from "@/app/home/components/NewSeason";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const modalTrigger = (e) => {
    e.preventDefault();
    setShowModal(!showModal);
  };
  return (
    <>
      <div className="w-screen h-screen bg-amarillo flex flex-col justify-around items-center relative">
        <NewSeasonButton onClick={modalTrigger} />
        <EndSeasonButton onClick={modalTrigger} />
      </div>
      {showModal ? (
        <ModalCreateEdit>
          <NewSeason closeModal={modalTrigger} />
        </ModalCreateEdit>
      ) : null}
    </>
  );
}
