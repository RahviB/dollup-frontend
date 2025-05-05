'use client'

import { useState, useEffect } from 'react'
import HomeDashboard from '../components/HomeDashboard'
import MobileHomePage from '../components/MobileHomePage'

export default function Page() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return isMobile ? <MobileHomePage /> : <HomeDashboard />
}
