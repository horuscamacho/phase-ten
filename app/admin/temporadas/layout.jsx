import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }) {
  return (
    <>
      <main className="w-screen h-screen bg-amarillo flex flex-col justify-around items-center relative">
        {children}
      </main>
    </>
  );
}
