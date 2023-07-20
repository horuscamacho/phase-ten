"use client";
import NewSeasonButton from "@/app/admin/temporadas/components/NewSeasonButton";
import EndSeasonButton from "@/app/admin/temporadas/components/EndSeasonButton";
import ModalCreateEdit from "@/app/admin/temporadas/components/ModalCreateEdit";
import { useState } from "react";
import NewSeason from "@/app/admin/temporadas/components/NewSeason";
import EndSeason from "@/app/admin/temporadas/components/EndSeason";

export default function Admin() {
  const [showModal, setShowModal] = useState({
    status: false,
    type: undefined,
  });

  return (
    <>
      <div className="w-screen h-full bg-amarillo flex flex-col justify-around items-center relative">
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
