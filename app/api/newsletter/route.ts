import { NextResponse } from 'next/server'

// Obsługa CORS dla OPTIONS
export async function OPTIONS() {
  return NextResponse.json({}, { status: 200 })
}

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json(
        { error: 'Email jest wymagany' },
        { status: 400 }
      )
    }

    // MailerLite API
    const response = await fetch('https://connect.mailerlite.com/api/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.MAILERLITE_API_KEY}`,        
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        status: 'active',
        groups: ['155563236197926805']
      })
    })

    const data = await response.json()

    if (!response.ok) {
      // Sprawdź czy email już istnieje
      if (data.message?.includes('already exists')) {
        return NextResponse.json(
          { error: 'Ten adres email jest już zapisany na newsletter' },
          { status: 400 }
        )
      }
      
      throw new Error(data.message || 'Błąd podczas zapisu')
    }

    return NextResponse.json(
      { success: true, message: 'Pomyślnie zapisano na newsletter!' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Newsletter API Error:', error)
    return NextResponse.json(
      { error: 'Wystąpił błąd. Spróbuj ponownie później.' },
      { status: 500 }
    )
  }
}