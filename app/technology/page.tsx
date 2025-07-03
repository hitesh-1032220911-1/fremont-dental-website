"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Monitor, Zap, Camera, Cpu, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function TechnologyPage() {
  const technologies = [
    {
      title: "Digital X-Rays",
      description:
        "Advanced digital radiography provides instant, high-quality images with 90% less radiation than traditional X-rays.",
      icon: Monitor,
      color: "from-blue-400 to-cyan-500",
      image: "/placeholder.svg?height=300&width=400",
      href: "/technology/digital-xrays",
      benefits: ["Instant Results", "90% Less Radiation", "Enhanced Image Quality", "Environmentally Friendly"],
    },
    {
      title: "3D Imaging",
      description: "Cone beam CT technology provides detailed 3D images for precise diagnosis and treatment planning.",
      icon: Camera,
      color: "from-purple-400 to-violet-500",
      image: "/placeholder.svg?height=300&width=400",
      href: "/technology/3d-imaging",
      benefits: ["3D Visualization", "Precise Planning", "Better Outcomes", "Comprehensive View"],
    },
    {
      title: "Laser Dentistry",
      description: "Soft tissue laser technology for comfortable, precise treatments with faster healing times.",
      icon: Zap,
      color: "from-red-400 to-pink-500",
      image: "/placeholder.svg?height=300&width=400",
      href: "/technology/laser-dentistry",
      benefits: ["Minimally Invasive", "Faster Healing", "Reduced Discomfort", "Precise Treatment"],
    },
    {
      title: "CAD/CAM Technology",
      description: "Computer-aided design and manufacturing for same-day crowns, veneers, and restorations.",
      icon: Cpu,
      color: "from-green-400 to-emerald-500",
      image: "/placeholder.svg?height=300&width=400",
      href: "/technology/cad-cam",
      benefits: ["Same-Day Restorations", "Perfect Fit", "Natural Appearance", "Time-Saving"],
    },
  ]

  return (
    <div className="min-h-screen bg-[#FDFDFD]">
      {/* Hero Section */}
      <section className="relative pt-12 pb-20 overflow-hidden bg-[#EAF6FB]">
        <div className="absolute inset-0">
          <Image src="/background-texture.png" alt="Background" fill className="object-cover opacity-10" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-[#013A63] mb-6">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Technology
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-[#1A1A1A] leading-relaxed">
              State-of-the-art dental technology for precise diagnosis, comfortable treatment, and exceptional results.
              We invest in the latest innovations to provide you with the best possible care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Technologies Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <Card className="h-full bg-[#F8F8F8] shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  <div className="relative">
                    <div className="aspect-video relative overflow-hidden">
                      <Image
                        src={tech.image || "/placeholder.svg"}
                        alt={tech.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${tech.color} opacity-60`}></div>
                      <div className="absolute top-6 left-6">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <tech.icon className="text-white" size={24} />
                        </div>
                      </div>
                      <div className="absolute bottom-6 left-6 right-6">
                        <h3 className="text-2xl font-bold text-white mb-2">{tech.title}</h3>
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-8">
                    <p className="text-[#1A1A1A] leading-relaxed mb-6">{tech.description}</p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-[#013A63] mb-3">Key Benefits:</h4>
                      <ul className="space-y-2">
                        {tech.benefits.map((benefit) => (
                          <li key={benefit} className="flex items-center text-[#1A1A1A]">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link href={tech.href}>
                      <Button
                        className={`w-full bg-[#00BFA5] hover:bg-[#009688] text-white hover:shadow-lg transition-all duration-300 group-hover:scale-105`}
                      >
                        Learn More
                        <ArrowRight size={16} className="ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Benefits */}
      <section className="py-20 bg-[#DFF5F2]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#013A63] mb-4">
              Why Advanced{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Technology Matters
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "More Accurate Diagnosis",
                description:
                  "Advanced imaging and diagnostic tools help us identify issues early and plan precise treatments.",
              },
              {
                title: "Comfortable Experience",
                description: "Modern technology reduces discomfort, treatment time, and the need for multiple visits.",
              },
              {
                title: "Better Results",
                description: "Precision technology ensures optimal outcomes and longer-lasting dental restorations.",
              },
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <Card className="p-8 bg-[#F8F8F8] shadow-lg hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl font-bold text-[#013A63] mb-4">{benefit.title}</h3>
                  <p className="text-[#1A1A1A] leading-relaxed">{benefit.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
