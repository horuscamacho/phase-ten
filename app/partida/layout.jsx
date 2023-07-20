"use client";
import { BiLeftArrow } from "react-icons/bi";
import { useRouter } from "next/navigation";
export default function PartidaLayout({ children }) {
  const navigate = useRouter();
  return (
    <main className="w-screen h-screen bg-verde flex flex-col justify-around items-center relative">
      <div className="w-full p-4">
        <BiLeftArrow
          color="black"
          className="text-4xl"
          onClick={() => navigate.push("/admin")}
        />
      </div>
      {children}
    </main>
  );
}
