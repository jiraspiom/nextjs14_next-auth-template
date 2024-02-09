import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  // const user = users.find((x: { email: string; }) => x.email === email);
  const users = [
    {
      id: '1',
      user: 'ADMIN O1',
      email: 'admin@email.com',
      password: '123123',
      role: 'adm',
      jwt: 'aassddkklsleie',
    },
    {
      id: '2',
      user: 'USER 1',
      email: 'user1@email.com',
      password: '123123',
      role: 'user',
      jwt: 'aassksiwiwwwhwowue',
    },
  ]

  try {
    const { email, password } = await request.json()

    const user = users.find((x) => x.email === email && x.password === password)

    if (user) {
      return NextResponse.json(user)
    }

    return NextResponse.json(null)
  } catch (error) {
    console.error(error)
  }
}
