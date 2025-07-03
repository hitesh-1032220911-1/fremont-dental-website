"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Cpu, Clock, CheckCircle, Zap, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function CadCamPage() {
  const benefits = [
    {
      title: "Same-Day Restorations",
      description: "Get your crowns, veneers, and fillings in a single visit",
      icon: Clock,
      color: "from-green-400 to-emerald-500",
    },
    {
      title: "Perfect Fit",
      description: "Computer-designed restorations for optimal fit and function",
      icon: CheckCircle,
      color: "from-blue-400 to-cyan-500",
    },
    {
      title: "Natural Appearance",
      description: "Beautiful, lifelike restorations that match your natural teeth",
      icon: Zap,
      color: "from-purple-400 to-violet-500",
    },
    {
      title: "Time-Saving",
      description: "Eliminate multiple visits and temporary restorations",
      icon: Cpu,
      color: "from-orange-400 to-red-500",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-green-50 to-emerald-50">
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
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mb-4">
                <Cpu className="text-white" size={32} />
              </div>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-800 mb-6 font-heading">
              CAD/CAM{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                Technology
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-slate-600 leading-relaxed font-body mb-8">
              Computer-aided design and manufacturing for same-day crowns, veneers, and restorations.
              Experience the future of dental restorations with precision technology.
            </p>

            <Link href="/technology">
              <Button variant="outline" className="border-green-300 text-green-700 hover:bg-green-50">
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                CAD/CAM?
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 font-body max-w-3xl mx-auto">
              CAD/CAM technology revolutionizes dental restorations by combining
              computer precision with same-day convenience.
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
      <section className="py-16 sm:py-20 bg-gradient-to-br from-slate-50 to-green-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 mb-6 font-heading">
              The CAD/CAM{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                Process
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 font-body max-w-3xl mx-auto">
              From digital scan to final restoration in just one visit
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "01",
                title: "Digital Scan",
                description: "3D digital impression of your tooth using advanced scanning technology",
              },
              {
                step: "02",
                title: "Computer Design",
                description: "Custom restoration designed using sophisticated CAD software",
              },
              {
                step: "03",
                title: "Precision Milling",
                description: "Restoration milled from high-quality ceramic blocks with perfect precision",
              },
              {
                step: "04",
                title: "Same-Day Fit",
                description: "Restoration fitted and adjusted for perfect comfort and function",
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
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl mx-auto mb-4 sm:mb-6">
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

      {/* Restorations Section */}
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
              Available{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                Restorations
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 font-body max-w-3xl mx-auto">
              CAD/CAM technology for a wide range of dental restorations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Crowns",
                description: "Full coverage restorations for damaged or weakened teeth",
              },
              {
                title: "Veneers",
                description: "Thin porcelain shells for cosmetic smile enhancement",
              },
              {
                title: "Inlays & Onlays",
                description: "Conservative restorations for moderate tooth damage",
              },
              {
                title: "Bridges",
                description: "Fixed restorations to replace missing teeth",
              },
              {
                title: "Implant Crowns",
                description: "Custom crowns for dental implant restorations",
              },
              {
                title: "Night Guards",
                description: "Custom-fitted protective devices for teeth grinding",
              },
            ].map((restoration, index) => (
              <motion.div
                key={restoration.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <Card className="h-full bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-500">
                  <CardContent className="p-6 sm:p-8">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-3 font-heading">{restoration.title}</h3>
                    <p className="text-slate-600 font-body leading-relaxed">{restoration.description}</p>
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
              Get Your Restoration in One Visit
            </h2>
            <p className="text-lg sm:text-xl font-light mb-8 sm:mb-12 max-w-3xl mx-auto opacity-90 font-body">
              Experience the convenience of same-day dental restorations with our advanced CAD/CAM technology.
              No more multiple visits or temporary restorations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <Link href="/contact/book-appointment">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-white px-8 sm:px-12 py-4 sm:py-6 rounded-full text-base sm:text-lg font-light border-0 shadow-xl"
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