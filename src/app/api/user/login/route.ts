import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  // const user = users.find((x: { email: string; }) => x.email === email);
  const users = [
    { email: 'admin@email.com', password: '123123' },
    { email: 'user1@email.com', password: '123123' },
  ]

  try {
    console.log('acessou api')
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
