import Image from "next/image"

export default function Component() {
  return (
    <div className="relative w-full h-96 flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image src="/background-texture.png" alt="Background texture" fill className="object-cover" priority />

      {/* Logo Content */}
      <div className="relative z-10 text-center">
        {/* Fremont Village Script Text */}
        <div className="mb-4">
          <h1
            className="text-6xl md:text-7xl lg:text-8xl font-bold text-slate-700"
            style={{
              fontFamily: "Brush Script MT, cursive",
              fontWeight: "normal",
              letterSpacing: "0.02em",
              transform: "rotate(-2deg)",
            }}
          >
            Fremont Village
          </h1>
        </div>

        {/* DENTAL Block Letters */}
        <div className="relative">
          <h2
            className="text-7xl md:text-8xl lg:text-9xl font-black tracking-wider text-transparent"
            style={{
              WebkitTextStroke: "3px #334155",
              textStroke: "3px #334155",
              letterSpacing: "0.1em",
              fontFamily: "Arial, sans-serif",
            }}
          >
            DENTAL
          </h2>
        </div>
      </div>
    </div>
  )
}
