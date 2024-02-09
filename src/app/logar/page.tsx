'use client'
// import { revalidatePath } from "next/cache";
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { SyntheticEvent, useState } from 'react'

export default function Logar() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const router = useRouter()

  async function handleSubmit(event: SyntheticEvent) {
    event.preventDefault()
    const result = await signIn('credentials', {
      email,
      password,
      redirect: false,
    })

    if (result?.error) {
      console.log(result)
      return
    }

    // replace apaga todo historio de navegacao e vai direto para o /admin
    router.replace('/admin')
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form className="w-[400px] flex flex-col gap-6" onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="email@email.com"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          name="password"
          id="password"
          placeholder="*****"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Entrar
        </button>
      </form>
    </main>
  )
}
