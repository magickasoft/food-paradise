import { Suspense } from 'react'
import LocaleRedirect from '@/components/LocaleRedirect'

export default function RootPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LocaleRedirect />
    </Suspense>
  )
}
