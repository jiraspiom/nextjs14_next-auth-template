'use client'
import { signOut } from "next-auth/react"
import { useRouter } from "next/navigation"

export default function ButtonLogout() {
    const router = useRouter()

    async function logout() {
        await signOut({
            redirect: false
        })

        router.replace('/')
    }

    return (
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={logout}>
            Sair
        </button>
    )
}