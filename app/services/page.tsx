"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Sparkles, Shield, Heart, Smile, Award, Users, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ServicesPage() {
  const services = [
    {
      title: "Cosmetic Dentistry",
      description:
        "Transform your smile with our comprehensive cosmetic dental treatments. From teeth whitening to veneers, we help you achieve the smile of your dreams.",
      icon: Sparkles,
      color: "from-pink-400 to-rose-500",
      image: "/placeholder.svg?height=300&width=400",
      href: "/services/cosmetic-dentistry",
      features: ["Teeth Whitening", "Porcelain Veneers", "Dental Bonding", "Smile Makeovers"],
    },
    {
      title: "Preventative Dentistry",
      description:
        "Maintain optimal oral health with our preventative care services. Regular cleanings and checkups help prevent dental problems before they start.",
      icon: Shield,
      color: "from-green-400 to-emerald-500",
      image: "/placeholder.svg?height=300&width=400",
      href: "/services/preventative-dentistry",
      features: ["Regular Cleanings", "Dental Exams", "Fluoride Treatments", "Sealants"],
    },
    {
      title: "Restorative Dentistry",
      description:
        "Restore your smile's function and beauty with our comprehensive restorative treatments. We repair and replace damaged or missing teeth.",
      icon: Heart,
      color: "from-blue-400 to-cyan-500",
      image: "/placeholder.svg?height=300&width=400",
      href: "/services/restorative-dentistry",
      features: ["Dental Crowns", "Bridges", "Fillings", "Root Canal Therapy"],
    },
    {
      title: "Invisalign",
      description:
        "Straighten your teeth discreetly with clear aligners that fit your lifestyle. Achieve a perfect smile without traditional metal braces.",
      icon: Smile,
      color: "from-purple-400 to-violet-500",
      image: "/placeholder.svg?height=300&width=400",
      href: "/services/invisalign",
      features: ["Clear Aligners", "Custom Treatment Plans", "Regular Monitoring", "Retainers"],
    },
    {
      title: "Oral Health",
      description:
        "Comprehensive oral health assessments and treatments to keep your mouth healthy and prevent disease.",
      icon: Award,
      color: "from-orange-400 to-amber-500",
      image: "/placeholder.svg?height=300&width=400",
      href: "/services/oral-health",
      features: ["Gum Disease Treatment", "Oral Cancer Screening", "Bad Breath Treatment", "TMJ Therapy"],
    },
    {
      title: "Oral Surgery",
      description:
        "Expert surgical procedures performed with precision and care for optimal results. From extractions to implant placement.",
      icon: Users,
      color: "from-teal-400 to-cyan-500",
      image: "/placeholder.svg?height=300&width=400",
      href: "/services/oral-surgery",
      features: ["Tooth Extractions", "Dental Implants", "Wisdom Teeth Removal", "Bone Grafting"],
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
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#013A63] mb-6 font-heading">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Services
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-[#1A1A1A] leading-relaxed px-4 font-body">
              Comprehensive dental care with personalized treatment plans focused on your individual needs. Whether
              you're looking for preventative care, cosmetic enhancements, or restorative treatments, we're here to help
              you achieve optimal oral health.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
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
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-60`}></div>
                      <div className="absolute top-6 left-6">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <service.icon className="text-white" size={24} />
                        </div>
                      </div>
                      <div className="absolute bottom-6 left-6 right-6">
                        <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-8">
                    <p className="text-[#1A1A1A] leading-relaxed mb-6">{service.description}</p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-[#013A63] mb-3">What's Included:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center text-[#1A1A1A]">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link href={service.href}>
                      <Button
                        className={`w-full bg-gradient-to-r ${service.color} text-white hover:shadow-lg transition-all duration-300 group-hover:scale-105`}
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

      {/* Treatment Process */}
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
              Our Treatment{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Process
              </span>
            </h2>
            <p className="text-xl text-[#1A1A1A] max-w-3xl mx-auto">
              We follow a comprehensive approach to ensure you receive the best possible care
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "We begin with a thorough consultation to understand your needs and concerns.",
              },
              {
                step: "02",
                title: "Examination",
                description: "Comprehensive examination using the latest diagnostic technology.",
              },
              {
                step: "03",
                title: "Treatment Plan",
                description: "Personalized treatment plan tailored to your specific needs and goals.",
              },
              {
                step: "04",
                title: "Follow-up",
                description: "Ongoing care and follow-up to ensure optimal results and oral health.",
              },
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-[#013A63] mb-4">{process.title}</h3>
                <p className="text-[#1A1A1A] leading-relaxed">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#013A63] text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Contact us today to schedule your consultation and take the first step towards optimal oral health.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact/book-appointment">
                <Button
                  size="lg"
                  className="bg-[#00BFA5] hover:bg-[#009688] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Book Appointment
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#013A63] px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 bg-transparent"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
