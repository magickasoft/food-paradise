import { parseCookies, setCookie } from 'nookies'
import React from 'react'

export default function useCookieBoolean(ctx: any = null, name = 'cookies', maxAge = 30 * 24 * 60 * 60) {
  const cookies = parseCookies(ctx)
  const [value, setValue] = React.useState<boolean>(false)
  const [isReady, setIsReady] = React.useState(false)

  React.useEffect(() => {
    setValue(cookies[name] === '1')
    setIsReady(true)
  }, [cookies[name]])

  const onChange = (bool: boolean) => {
    setValue(bool)
    setCookie(ctx, name, bool ? '1' : '0', { path: '/', maxAge })
  }

  return [value, onChange, isReady] as const
}
