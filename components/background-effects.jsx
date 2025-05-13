"use client"

import { useEffect, useRef } from "react"

export function BackgroundEffects() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    let animationFrameId

    // Set canvas dimensions
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    handleResize()

    // Create gradient orbs
    const orbs = []
    const orbCount = 6

    for (let i = 0; i < orbCount; i++) {
      orbs.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 300 + 100,
        xSpeed: (Math.random() - 0.5) * 0.2,
        ySpeed: (Math.random() - 0.5) * 0.2,
        hue: Math.random() * 60 + 40, // Yellow range
        opacity: Math.random() * 0.1 + 0.05,
      })
    }

    const render = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw each orb
      orbs.forEach((orb) => {
        // Move orb
        orb.x += orb.xSpeed
        orb.y += orb.ySpeed

        // Bounce off edges
        if (orb.x < -orb.radius || orb.x > canvas.width + orb.radius) orb.xSpeed *= -1
        if (orb.y < -orb.radius || orb.y > canvas.height + orb.radius) orb.ySpeed *= -1

        // Create gradient
        const gradient = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.radius)
        gradient.addColorStop(0, `hsla(${orb.hue}, 100%, 60%, ${orb.opacity})`)
        gradient.addColorStop(0.5, `hsla(${orb.hue - 10}, 100%, 50%, ${orb.opacity * 0.5})`)
        gradient.addColorStop(1, "hsla(0, 0%, 0%, 0)")

        // Draw orb
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2)
        ctx.fill()
      })

      // Add noise texture overlay
      ctx.globalCompositeOperation = "overlay"
      ctx.fillStyle = "rgba(10, 10, 10, 0.1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.globalCompositeOperation = "source-over"

      animationFrameId = window.requestAnimationFrame(render)
    }

    render()

    return () => {
      window.cancelAnimationFrame(animationFrameId)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 opacity-60"
      style={{ mixBlendMode: "screen" }}
    />
  )
}
