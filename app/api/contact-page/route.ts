import { NextResponse } from 'next/server'

export async function OPTIONS() {
  return NextResponse.json({}, { status: 200 })
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email, phone, business, name, company, message } = body

    // Walidacja podstawowych pól
    if (!email || !phone || !business) {
      return NextResponse.json(
        { error: 'Email, telefon i rodzaj usługi są wymagane' },
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

    // Wysyłka do n8n webhook - KONTAKT PAGE
    const webhookUrl = process.env.N8N_WEBHOOK_CONTACT_URL || 'https://n8n.agencjasmart.marketing/webhook-test/lead-kontakt'
    
    const payload = {
      email,
      phone,
      business,
      name: name || '',
      company: company || '',
      message: message || '',
      source: 'website_contact_page',
      timestamp: new Date().toISOString()
    }

    console.log('Sending to n8n (contact page):', payload)

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
    console.error('Contact Page API Error:', error)
    return NextResponse.json(
      { error: 'Wystąpił błąd. Spróbuj ponownie później.' },
      { status: 500 }
    )
  }
}