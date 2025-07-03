"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Monitor, Shield, Zap, CheckCircle, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function DigitalXraysPage() {
  const benefits = [
    {
      title: "90% Less Radiation",
      description: "Digital X-rays use significantly less radiation than traditional film X-rays",
      icon: Shield,
      color: "from-green-400 to-emerald-500",
    },
    {
      title: "Instant Results",
      description: "View images immediately on screen, no waiting for film development",
      icon: Zap,
      color: "from-blue-400 to-cyan-500",
    },
    {
      title: "Enhanced Quality",
      description: "Crystal clear images that can be zoomed and enhanced for better diagnosis",
      icon: Monitor,
      color: "from-purple-400 to-violet-500",
    },
    {
      title: "Environmentally Friendly",
      description: "No chemicals or film processing required, reducing environmental impact",
      icon: CheckCircle,
      color: "from-teal-400 to-teal-500",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-blue-50 to-cyan-50">
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
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center mb-4">
                <Monitor className="text-white" size={32} />
              </div>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-800 mb-6 font-heading">
              Digital{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                X-Rays
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-slate-600 leading-relaxed font-body mb-8">
              Advanced digital radiography technology for safer, faster, and more accurate dental imaging.
              Experience the future of dental diagnostics with 90% less radiation exposure.
            </p>

            <Link href="/technology">
              <Button variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-50">
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                Digital X-Rays?
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 font-body max-w-3xl mx-auto">
              Digital X-rays represent a significant advancement in dental imaging technology,
              offering numerous benefits over traditional film X-rays.
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

      {/* Process Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 mb-6 font-heading">
              The Digital{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                Process
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 font-body max-w-3xl mx-auto">
              Experience a streamlined, comfortable, and efficient X-ray process
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                step: "01",
                title: "Comfortable Positioning",
                description: "Small, comfortable sensors are placed in your mouth with minimal discomfort",
              },
              {
                step: "02",
                title: "Instant Capture",
                description: "Digital sensors capture images instantly with precise positioning",
              },
              {
                step: "03",
                title: "Immediate Review",
                description: "View results immediately on screen for instant diagnosis and discussion",
              },
            ].map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-500">
                  <CardContent className="p-6 sm:p-8">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl mx-auto mb-4 sm:mb-6">
                      {step.step}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-3 font-heading">{step.title}</h3>
                    <p className="text-slate-600 font-body leading-relaxed">{step.description}</p>
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
              Ready to Experience Digital X-Rays?
            </h2>
            <p className="text-lg sm:text-xl font-light mb-8 sm:mb-12 max-w-3xl mx-auto opacity-90 font-body">
              Schedule your appointment today and benefit from the latest in dental imaging technology.
              Safer, faster, and more accurate than ever before.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <Link href="/contact/book-appointment">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400 text-white px-8 sm:px-12 py-4 sm:py-6 rounded-full text-base sm:text-lg font-light border-0 shadow-xl"
                >
                  Book Appointment
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