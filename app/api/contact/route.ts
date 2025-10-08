import { NextResponse } from 'next/server'

export async function OPTIONS() {
  return NextResponse.json({}, { status: 200 })
}

export async function POST(request: Request) {
  try {
    const { email, phone, business } = await request.json()

    // Walidacja
    if (!email || !phone || !business) {
      return NextResponse.json(
        { error: 'Wszystkie pola są wymagane' },
        { status: 400 }
      )
    }

    // Walidacja email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Nieprawidłowy format email' },
        { status: 400 }
      )
    }

    // Wysyłka do n8n webhook - SMARTCHECK (CTA Section)
    const webhookUrl = process.env.N8N_WEBHOOK_URL || 'https://n8n.agencjasmart.marketing/webhook-test/lead-smartcheck'
    
    const payload = {
      email,
      phone,
      business,
      source: 'website_cta',
      timestamp: new Date().toISOString()
    }

    console.log('Sending to n8n (SmartCheck):', payload)

    const n8nResponse = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    })

    if (!n8nResponse.ok) {
      const errorText = await n8nResponse.text()
      console.error('N8N webhook error:', errorText)
      throw new Error('N8N webhook failed')
    }

    return NextResponse.json(
      { success: true, message: 'Formularz wysłany pomyślnie!' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact API Error:', error)
    return NextResponse.json(
      { error: 'Wystąpił błąd. Spróbuj ponownie później.' },
      { status: 500 }
    )
  }
}