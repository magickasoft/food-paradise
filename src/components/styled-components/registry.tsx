'use client'

import React, { useState } from 'react'
import { useServerInsertedHTML } from 'next/navigation'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'

export interface RegistryProps {
  children: React.ReactNode
}

export default function Registry({ children }: Readonly<RegistryProps>) {
  const [sheet] = useState(() => new ServerStyleSheet())

  useServerInsertedHTML(() => {
    try {
      const styles = sheet.getStyleElement()
      sheet.instance.clearTag()
      return <>{styles}</>
    } catch (error) {
      console.error('Error processing styled-components styles:', error)
      return null
    }
  })

  if (typeof window !== 'undefined') return <>{children}</>

  return <StyleSheetManager sheet={sheet.instance}>{children}</StyleSheetManager>
}
