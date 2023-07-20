"use client";
import { useEffect, useState } from "react";

export default function SquareButton({ type, onClick, color, children }) {
  return (
    <div
      className={`flex w-48 h-48   rounded-lg justify-center items-center bg-${color}`}
      onClick={(e) => {
        e.preventDefault();
        onClick(onClick);
      }}
    >
      <div
        className={`flex w-44 h-44 border-white border-4 rounded-md justify-center items-center  bg-${color}`}
      >
        <button
          className="flex bg-transparent rounded-3xl text-2xl font-semibold text-white"
          type={type}
        >
          {children}
        </button>
      </div>
    </div>
  );
}
