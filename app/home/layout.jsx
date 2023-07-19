import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Phase Ten - Home",
  description: "Creado para que no haya trampas",
};

export default function RootLayout({ children }) {
  return (
    <>
      <main className="w-screen h-screen bg-amarillo flex flex-col justify-around items-center">
        {children}
      </main>
    </>
  );
}
