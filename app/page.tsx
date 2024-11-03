"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    // Set a fixed target date (adjust this to your desired launch date)
    const targetDate = new Date('2024-04-15T00:00:00') // Example: April 15, 2024

    const timer = setInterval(() => {
      const now = new Date()
      const difference = Math.max(targetDate.getTime() - now.getTime(), 0)

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
      const minutes = Math.floor((difference / (1000 * 60)) % 60)
      const seconds = Math.floor((difference / 1000) % 60)

      setTimeLeft({ days, hours, minutes, seconds })

      if (difference <= 0) {
        clearInterval(timer)
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-700">
      <Card className="w-[90%] max-w-[600px] text-center">
        <CardHeader>
          <CardTitle className="text-5xl font-bold mb-2">TowLoans.com</CardTitle>
          <p className="text-2xl text-gray-600">Coming Soon!</p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-4 gap-4 my-8">
            <div className="text-center">
              <div className="text-3xl font-bold">{timeLeft.days}</div>
              <div className="text-sm text-gray-500">Days</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">{timeLeft.hours}</div>
              <div className="text-sm text-gray-500">Hours</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">{timeLeft.minutes}</div>
              <div className="text-sm text-gray-500">Minutes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">{timeLeft.seconds}</div>
              <div className="text-sm text-gray-500">Seconds</div>
            </div>
          </div>
          <p className="text-gray-600 mt-4">
            We&apos;re working hard to bring you the best tow truck financing solutions.
            Stay tuned!
          </p>
        </CardContent>
      </Card>
    </main>
  )
}
