"use client";
import { Inter } from "next/font/google";
import { BiLeftArrow } from "react-icons/bi";
import { useRouter } from "next/navigation";
const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }) {
  const navigate = useRouter();
  return (
    <>
      <main className="w-screen h-screen bg-amarillo flex flex-col justify-around items-center relative">
        <div className="w-full p-4" onClick={() => navigate.push("/admin")}>
          <BiLeftArrow color="black" className="text-4xl" />
        </div>
        {children}
      </main>
    </>
  );
}
