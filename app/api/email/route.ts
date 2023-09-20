import { NextResponse } from 'next/server'
import { Resend } from 'resend';


const resend = new Resend("re_9urDRvQY_MMmTkBHUHV8CzuzyMAxgRyaA");

export async function POST(request: Request) {
  const body = await request.json()
  console.log("tõ vindo",body)
  try {
    const data = await resend.emails.send({
      from: 'deyvison@easywriter-ai.com',
      to: ['haylalira1231@gmail.com' ,'deyvisonpenha1@gmail.com'],
      subject: 'collabs',
    html: `<div> <h1>Olá eu me chamo:<h1/>
            <strong>${body.name}</strong> </br>
            <p>Estou interessado em seus serviços!<p/>
            <p>${body.message} </p>
            <p>o preço mais acessível para mim seria:<p/>
            <p>${body.price} </p>
            <p>Este é o meu email <p/>
            <strong>${body.email}</strong> </br>
          
     </div>`,
    });
  

    console.log(data);
  } catch (error) {
    console.error(error);
  }

  return NextResponse.json({data: "tô vindo"})
}