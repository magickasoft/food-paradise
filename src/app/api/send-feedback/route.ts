// import { MAIL_HOST, MAIL_PASS, MAIL_PORT, MAIL_USER } from '@/private_variables'
// import { NextResponse } from 'next/server'
// import nodemailer from 'nodemailer'

// export async function POST(req: Request) {
//   try {
//     const { recipe, rating, comment } = await req.json()

//     const transporter = nodemailer.createTransport({
//       ...(MAIL_HOST && { host: MAIL_HOST }),
//       port: MAIL_PORT,
//       secure: true,
//       auth: {
//         user: MAIL_USER,
//         pass: MAIL_PASS,
//       },
//     } as nodemailer.TransportOptions)

//     const toEmail = 'vor.art.96@yandex.ru'

//     await transporter.sendMail({
//       from: '"Feedback Form" <v.artem.96@mail.ru>',
//       to: toEmail,
//       subject: 'Новый отзыв с сайта Food-paradise',
//       text: `Блюдо: ${recipe}\nОценка: ${rating}⭐\nКомментарий: ${comment}`,
//     })

//     return NextResponse.json({ success: true })
//   } catch (error) {
//     console.error('Ошибка при отправке письма:', error)
//     return NextResponse.json({ success: false, error: 'Ошибка при отправке' }, { status: 500 })
//   }
// }
