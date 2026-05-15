'use client'
import { useState, useCallback } from 'react'
import { RosaContext } from '@/lib/rosa'
import { RosaModal } from '@/components/sections/RosaModal'

export function RosaProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const open = useCallback(() => setIsOpen(true), [])
  const close = useCallback(() => setIsOpen(false), [])

  return (
    <RosaContext.Provider value={{ open, close }}>
      {children}
      <RosaModal isOpen={isOpen} onClose={close} />
    </RosaContext.Provider>
  )
}
