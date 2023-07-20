"use client";
import CTAButton from "@/app/components/CTAButton";
import { useState } from "react";
import Modal from "@/app/admin/temporadas/components/Modal";
import Contador from "@/app/partida/components/Contador";
import Registrar from "@/app/partida/components/Registrar";

export default function PartidaPage() {
  const [showModal, setShowModal] = useState({
    status: false,
    type: undefined,
  });
  return (
    <>
      <div className="h-full w-full flex flex-col items-center">
        <header className="w-full h-12 text-5xl font-black flex justify-center items-center">
          Phase 1
        </header>
        <p className="w-full h-8 text-lg flex justify-center items-center font-black">
          Jornada 1
        </p>
        <section className="w-5/6 border-2 border-negro bg-white mt-4 rounded">
          <h2 className="w-full h-12 flex justify-center items-center text-2xl font-black">
            Score
          </h2>
          <div className="w-full flex justify-between px-4 my-2 text-lg font-black">
            <p>Silveria</p>
            <span>251</span>
          </div>
          <div className="w-full flex justify-between px-4 my-2 text-lg font-black">
            <p>Cochi</p>
            <span>251</span>
          </div>
          <div className="w-full flex justify-between px-4 my-2 text-lg font-black">
            <p>Ferts</p>
            <span>251</span>
          </div>
          <div className="w-full flex justify-between px-4 my-2 text-lg font-black">
            <p>Chorus</p>
            <span>251</span>
          </div>
        </section>
        <section className="w-full h-full flex flex-col justify-center items-center">
          <div
            className="w-4/6 h-12 my-2"
            onClick={() => setShowModal({ status: true, type: "count" })}
          >
            <CTAButton type="button" color="negro">
              Contador
            </CTAButton>
          </div>
          <div
            className="w-4/6 h-12 my-2"
            onClick={() => setShowModal({ status: true, type: "regis" })}
          >
            <CTAButton type="button" color="negro">
              Registrar Phase
            </CTAButton>
          </div>
        </section>
      </div>
      {showModal.status ? (
        <Modal>
          {showModal.type === "count" ? (
            <Contador closeModal={setShowModal} />
          ) : (
            <Registrar closeModal={setShowModal} />
          )}
        </Modal>
      ) : null}
    </>
  );
}
