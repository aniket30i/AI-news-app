"use client"

import { useEffect, useRef, useState } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { OrbitControls, Environment, Text, Float, Sparkles } from "@react-three/drei"
import { Button } from "@/components/ui/landing/button"
import { Newspaper, TrendingUp } from "lucide-react"
import * as THREE from "three"

export function HeroSection() {
  return (
    <section className="relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900/30">
      <Canvas shadows camera={{ position: [0, 0, 15], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <Environment preset="night" />
        <Sparkles count={100} scale={20} size={2} speed={0.5} color={"#facc15"} />
        <NewsScene />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 2.5}
          maxPolarAngle={Math.PI / 2.5}
        />
      </Canvas>

      <div className="absolute top-0 left-0 w-full h-full flex items-center pointer-events-none">
        <div className="container mx-auto px-6">
          <div className="max-w-lg">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-amber-600 bg-clip-text text-transparent">
              Your Personalized News Experience
            </h1>
            <p className="text-zinc-300 text-lg mb-6">
              AI-curated news tailored to your interests, summarized and analyzed for deeper insights.
            </p>
            <div className="flex flex-wrap gap-4 pointer-events-auto">
              <Button className="bg-gradient-to-r from-yellow-400 to-amber-600 hover:from-yellow-500 hover:to-amber-700 text-black">
                <Newspaper className="mr-2 h-4 w-4" />
                Browse Categories
              </Button>
              <Button variant="outline" className="border-zinc-700 hover:border-yellow-500 hover:text-yellow-500">
                <TrendingUp className="mr-2 h-4 w-4" />
                Today's Trends
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function NewsScene() {
  const group = useRef()
  const { viewport } = useThree()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, Math.sin(t / 2) * 0.1, 0.025)
    group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, Math.sin(t) * 0.2, 0.025)
  })

  return (
    <group ref={group}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <NewsCube position={[4, 0, 0]} scale={isMobile ? 1.2 : 2} color="#facc15" />
        <NewsCube position={[-4, 1, -2]} scale={isMobile ? 0.8 : 1.5} color="#eab308" />
        <NewsCube position={[0, -2, -4]} scale={isMobile ? 1 : 1.8} color="#ca8a04" />

        <Text
          position={[0, 3, 0]}
          fontSize={isMobile ? 0.5 : 0.8}
          color="#facc15"
          font="/fonts/Inter-Bold.ttf"
          anchorX="center"
          anchorY="middle"
        >
          AI-POWERED NEWS
        </Text>
      </Float>

      <NewsParticles count={isMobile ? 100 : 200} />
    </group>
  )
}

function NewsCube({ position, scale = 1, color }) {
  const mesh = useRef()

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    mesh.current.rotation.x = Math.sin(t / 4) * 0.3
    mesh.current.rotation.y = Math.sin(t / 2) * 0.2
  })

  return (
    <mesh position={position} ref={mesh} scale={scale}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} emissive={color} emissiveIntensity={0.2} />
    </mesh>
  )
}

function NewsParticles({ count }) {
  const mesh = useRef()
  const [positions, setPositions] = useState([])

  useEffect(() => {
    const pos = []
    for (let i = 0; i < count; i++) {
      pos.push([(Math.random() - 0.5) * 20, (Math.random() - 0.5) * 20, (Math.random() - 0.5) * 20])
    }
    setPositions(pos)
  }, [count])

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    mesh.current.rotation.y = t * 0.05
  })

  return (
    <group ref={mesh}>
      {positions.map((pos, i) => (
        <mesh key={i} position={pos} scale={0.05}>
          <sphereGeometry args={[1, 8, 8]} />
          <meshBasicMaterial color="#facc15" transparent opacity={0.5} />
        </mesh>
      ))}
    </group>
  )
}
