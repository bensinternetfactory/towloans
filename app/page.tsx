'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const targetDate = new Date('2024-11-10T23:59:00')

    const calculateTimeLeft = () => {
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)

        setTimeLeft({ days, hours, minutes, seconds })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-blue-500 flex items-center justify-center p-4">
      <Card className="w-full max-w-lg">
        <CardContent className="p-8">
          <h1 className="text-4xl font-bold text-center mb-2">TowLoans.com</h1>
          <p className="text-xl text-center text-muted-foreground mb-8">Coming Soon!</p>
          
          <div className="grid grid-cols-4 gap-4 mb-8">
            {Object.entries(timeLeft).map(([key, value]) => (
              <div key={key} className="text-center">
                <div className="text-4xl font-bold mb-1">{value}</div>
                <div className="text-sm text-muted-foreground capitalize">{key}</div>
              </div>
            ))}
          </div>

          <p className="text-center text-muted-foreground">
            We&apos;re working hard to bring you the best tow truck financing solutions. Stay tuned!
          </p>
        </CardContent>
      </Card>
    </div>
  )
}