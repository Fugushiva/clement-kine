'use client'
import { createContext, useContext } from 'react'

interface RosaContextType {
  open: () => void
  close: () => void
}

export const RosaContext = createContext<RosaContextType>({
  open: () => {},
  close: () => {},
})

export function useRosa() {
  return useContext(RosaContext)
}
