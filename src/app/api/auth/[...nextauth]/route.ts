// import axios from 'axios'
import NextAuth, { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

const nextAuthOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'email', type: 'text' },
        password: { label: 'password', type: 'password' },
      },
      async authorize(credentials) {
        const response = await fetch('http://localhost:3000/api/user/login', {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
          }),
        })

        const user = await response.json()
        console.log(user)
        if (user && response.ok) {
          return user
        }

        return null
      },
    }),
  ],
  secret: 'abcabcde',
  pages: {
    signIn: '/login',
  },
  session: {
    maxAge: 60 * 1, // 1 minuto
  },
}

const handler = NextAuth(nextAuthOptions)

export { handler as GET, handler as POST }
