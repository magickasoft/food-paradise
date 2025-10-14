import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  try {
    const { rating, comment } = await req.json()

    const transporter = nodemailer.createTransport({
      host: 'smtp.mail.ru',
      port: 465,
      secure: true,
      auth: {
        user: '',
        pass: '',
      },
    })

    const toEmail = 'vor.art.96@yandex.ru'

    await transporter.sendMail({
      from: '"Feedback Form" <v.artem.96@mail.ru>',
      to: toEmail,
      subject: 'Новый отзыв с сайта',
      text: `Оценка: ${rating}⭐\nКомментарий:\n${comment}`,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Ошибка при отправке письма:', error)
    return NextResponse.json({ success: false, error: 'Ошибка при отправке' }, { status: 500 })
  }
}
