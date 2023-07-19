import Image from "next/image";
import logo from "../public/phase10.png";
import Login from "@/app/components/Login";

export default function Home() {
  return (
    <main className="flex flex-col w-screen h-screen bg-azul p-8">
      <header className="flex justify-center">
        <Image src={logo} alt="phase-10 logo"  className="w-2/3" />
      </header>
        <Login />
    </main>
  )
}
