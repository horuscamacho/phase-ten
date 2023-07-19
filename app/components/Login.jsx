'use client'
import {useRouter} from "next/navigation";


export default function Login() {
    const route = useRouter();
    const handleSubmit = (e) => {
        e.preventDefault();
        route.push("/home");
    }
    return (
        <form className="h-full w-full bg-white rounded-3xl mt-4 flex flex-col items-center py-5" onSubmit={handleSubmit}>
            <h1 className="text-2xl font-black">Iniciar Sesión</h1>
            <label className="text-xl mt-11 font-semibold">Usuario</label>
            <input type="text" className="border-black border-2 rounded h-10" name="username" />
            <label className="text-xl mt-11 font-semibold">Contraseña</label>
            <input type="text" className="border-black border-2 rounded h-10" name="password" />
            <button className="bg-verde text-white rounded-xl w-1/2 h-10 mt-11" type="submit">Iniciar Sesión</button>
        </form>
    )
}