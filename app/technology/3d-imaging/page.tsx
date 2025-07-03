"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Camera, Eye, Target, CheckCircle, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ThreeDImagingPage() {
  const benefits = [
    {
      title: "3D Visualization",
      description: "Complete 3D view of your teeth, jaw, and surrounding structures",
      icon: Eye,
      color: "from-purple-400 to-violet-500",
    },
    {
      title: "Precise Planning",
      description: "Accurate treatment planning with detailed anatomical information",
      icon: Target,
      color: "from-blue-400 to-cyan-500",
    },
    {
      title: "Better Outcomes",
      description: "Improved treatment results with comprehensive diagnostic information",
      icon: CheckCircle,
      color: "from-green-400 to-emerald-500",
    },
    {
      title: "Comprehensive View",
      description: "See what traditional X-rays can't reveal for complete diagnosis",
      icon: Camera,
      color: "from-rose-400 to-pink-500",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-purple-50 to-violet-50">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              className="inline-block mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-purple-400 to-violet-500 rounded-full flex items-center justify-center mb-4">
                <Camera className="text-white" size={32} />
              </div>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-800 mb-6 font-heading">
              3D{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-violet-600">
                Imaging
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-slate-600 leading-relaxed font-body mb-8">
              Cone beam CT technology provides detailed 3D images for precise diagnosis and treatment planning.
              See your dental health from every angle with advanced 3D imaging technology.
            </p>

            <Link href="/technology">
              <Button variant="outline" className="border-purple-300 text-purple-700 hover:bg-purple-50">
                <ArrowLeft size={16} className="mr-2" />
                Back to Technology
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 mb-6 font-heading">
              Why Choose{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-violet-600">
                3D Imaging?
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 font-body max-w-3xl mx-auto">
              3D imaging technology revolutionizes dental diagnostics by providing comprehensive
              views that traditional 2D X-rays simply cannot match.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="group"
              >
                <Card className="h-full bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-500">
                  <CardContent className="p-6 sm:p-8 text-center">
                    <motion.div
                      className={`w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 bg-gradient-to-br ${benefit.color} rounded-full flex items-center justify-center shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <benefit.icon className="text-white" size={24} />
                    </motion.div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-3 font-heading">{benefit.title}</h3>
                    <p className="text-sm sm:text-base text-slate-600 font-body leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-slate-50 to-purple-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 mb-6 font-heading">
              3D Imaging{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-violet-600">
                Applications
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 font-body max-w-3xl mx-auto">
              Comprehensive 3D imaging is essential for advanced dental procedures
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Dental Implants",
                description: "Precise planning for implant placement with detailed bone structure analysis",
              },
              {
                title: "Orthodontics",
                description: "Complete jaw and tooth positioning for optimal treatment planning",
              },
              {
                title: "Oral Surgery",
                description: "Detailed anatomical information for complex surgical procedures",
              },
              {
                title: "Root Canal Therapy",
                description: "3D visualization of root canal anatomy for precise treatment",
              },
              {
                title: "TMJ Disorders",
                description: "Comprehensive jaw joint analysis for TMJ diagnosis and treatment",
              },
              {
                title: "Cyst & Tumor Detection",
                description: "Early detection and precise location of oral abnormalities",
              },
            ].map((application, index) => (
              <motion.div
                key={application.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <Card className="h-full bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-500">
                  <CardContent className="p-6 sm:p-8">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-3 font-heading">{application.title}</h3>
                    <p className="text-slate-600 font-body leading-relaxed">{application.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-6 sm:mb-8 font-heading">
              Experience the Power of 3D Imaging
            </h2>
            <p className="text-lg sm:text-xl font-light mb-8 sm:mb-12 max-w-3xl mx-auto opacity-90 font-body">
              Get the most accurate diagnosis and treatment planning with our advanced 3D imaging technology.
              See your dental health like never before.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <Link href="/contact/book-appointment">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-500 to-violet-500 hover:from-purple-400 hover:to-violet-400 text-white px-8 sm:px-12 py-4 sm:py-6 rounded-full text-base sm:text-lg font-light border-0 shadow-xl"
                >
                  Book Consultation
                </Button>
              </Link>

              <Link href="/technology">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 sm:px-12 py-4 sm:py-6 rounded-full text-base sm:text-lg font-light bg-transparent shadow-xl"
                >
                  View All Technology
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 