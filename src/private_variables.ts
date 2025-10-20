export const MAIL_HOST = (() => {
  const host = process.env.NEXT_PUBLIC_MAIL_HOST
  if (!host) throw new Error('MAIL_HOST environment variable is required')
  return host
})()

export const MAIL_PORT = (() => {
  const port = process.env.NEXT_PUBLIC_MAIL_PORT
  const parsed = port ? parseInt(port, 10) : 587 // Default to 587 if not specified
  if (!parsed || parsed < 1 || parsed > 65535) {
    throw new Error('MAIL_PORT must be a valid port number (1-65535)' + (port ? `, received: ${port}` : ''))
  }
  return parsed
})()

export const MAIL_USER = (() => {
  const user = process.env.NEXT_PUBLIC_MAIL_USER
  if (!user) throw new Error('MAIL_USER environment variable is required')
  return user
})()

export const MAIL_PASS = (() => {
  const pass = process.env.NEXT_PUBLIC_MAIL_PASS
  if (!pass) throw new Error('MAIL_PASS environment variable is required')
  return pass
})()
