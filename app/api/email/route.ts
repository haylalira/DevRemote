import { NextResponse } from 'next/server'
import { Resend } from 'resend';


const resend = new Resend("re_iWsbJaJC_HdqPG7wDEAUwPbtmmdSpfAqQ");

export async function POST(request: Request) {
  const body = await request.json()
  console.log("tõ vindo",body)
  try {
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['haylalira1231@gmail.com'],
      subject: 'collabs',
    html: `<div> Olá eu me chamo:
            <strong>${body.name}</strong> </br>
            <strong>${body.email}</strong> </br>
            <p>${body.message} </p>
          
     </div>`,
    });

    console.log(data);
  } catch (error) {
    console.error(error);
  }

  return NextResponse.json({data: "tô vindo"})
}