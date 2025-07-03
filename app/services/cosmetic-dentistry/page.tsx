"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sparkles, Star, Clock, Award, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function CosmeticDentistryPage() {
  const treatments = [
    {
      name: "Teeth Whitening",
      description:
        "Professional whitening treatments that can brighten your smile by several shades in just one visit.",
      duration: "1-2 hours",
      results: "Immediate",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "Porcelain Veneers",
      description:
        "Ultra-thin shells that cover the front surface of teeth to create a perfect, natural-looking smile.",
      duration: "2-3 visits",
      results: "Permanent",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "Dental Bonding",
      description: "Tooth-colored resin applied to repair chips, cracks, or gaps for an improved appearance.",
      duration: "30-60 minutes",
      results: "Immediate",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "Smile Makeovers",
      description: "Comprehensive treatment combining multiple procedures to completely transform your smile.",
      duration: "Multiple visits",
      results: "Life-changing",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  const benefits = [
    "Boost your confidence and self-esteem",
    "Create a more youthful appearance",
    "Improve your professional image",
    "Enhance your social interactions",
    "Long-lasting, beautiful results",
    "Customized to your unique features",
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
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full flex items-center justify-center">
                <Sparkles className="text-white" size={40} />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-[#013A63] mb-6">
              Cosmetic{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-600">
                Dentistry
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-[#1A1A1A] leading-relaxed mb-8">
              Transform your smile with our comprehensive cosmetic dental treatments. Our dentists have years of
              experience making smiles brighter, straighter, and healthier.
            </p>
            <Link href="/contact/book-appointment">
              <Button
                size="lg"
                className="bg-[#00BFA5] hover:bg-[#009688] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Schedule Consultation
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Treatments Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#013A63] mb-4">
              Our Cosmetic{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-600">
                Treatments
              </span>
            </h2>
            <p className="text-xl text-[#1A1A1A] max-w-3xl mx-auto">
              Choose from our range of cosmetic dental procedures designed to give you the smile you've always wanted
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {treatments.map((treatment, index) => (
              <motion.div
                key={treatment.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <Card className="h-full bg-[#F8F8F8] shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={treatment.image || "/placeholder.svg"}
                      alt={treatment.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-pink-500/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-2xl font-bold text-white">{treatment.name}</h3>
                    </div>
                  </div>

                  <CardContent className="p-8">
                    <p className="text-[#1A1A1A] leading-relaxed mb-6">{treatment.description}</p>

                    <div className="flex gap-4 mb-6">
                      <div className="flex items-center gap-2">
                        <Clock size={16} className="text-pink-500" />
                        <span className="text-sm text-[#1A1A1A]">{treatment.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Star size={16} className="text-pink-500" />
                        <span className="text-sm text-[#1A1A1A]">{treatment.results}</span>
                      </div>
                    </div>

                    <Button className="w-full bg-gradient-to-r from-pink-500 to-rose-600 text-white hover:shadow-lg transition-all duration-300">
                      Learn More
                      <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-[#DFF5F2]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-[#013A63] mb-6">
                Benefits of{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-600">
                  Cosmetic Dentistry
                </span>
              </h2>
              <p className="text-lg text-[#1A1A1A] mb-8 leading-relaxed">
                Cosmetic dentistry goes beyond just improving the appearance of your teeth. It can have a profound
                impact on your overall quality of life, confidence, and well-being.
              </p>

              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Star size={12} className="text-white" />
                    </div>
                    <span className="text-[#1A1A1A]">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Card className="p-8 bg-gradient-to-br from-pink-100 to-rose-100 border-0 shadow-xl">
                <div className="text-center">
                  <Award size={60} className="mx-auto mb-6 text-pink-600" />
                  <h3 className="text-2xl font-bold text-[#013A63] mb-4">Expert Care</h3>
                  <p className="text-[#1A1A1A] leading-relaxed mb-6">
                    Our experienced cosmetic dentists use the latest techniques and highest quality materials to ensure
                    beautiful, long-lasting results that look completely natural.
                  </p>
                  <Badge className="bg-gradient-to-r from-pink-500 to-rose-600 text-white px-4 py-2">
                    15+ Years Experience
                  </Badge>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#013A63] mb-4">
              Your Smile{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-600">
                Transformation
              </span>
            </h2>
            <p className="text-xl text-[#1A1A1A] max-w-3xl mx-auto">
              Our proven process ensures you get the smile you've always dreamed of
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "We discuss your goals and examine your current smile to create a personalized plan.",
              },
              {
                step: "02",
                title: "Design",
                description: "Using advanced technology, we design your new smile and show you the expected results.",
              },
              {
                step: "03",
                title: "Treatment",
                description: "We perform your cosmetic procedures with precision and care for optimal comfort.",
              },
              {
                step: "04",
                title: "Reveal",
                description: "Enjoy your beautiful new smile and receive care instructions for long-lasting results.",
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
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready for Your Dream Smile?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Schedule your cosmetic dentistry consultation today and take the first step towards the confident,
              beautiful smile you deserve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact/book-appointment">
                <Button
                  size="lg"
                  className="bg-white text-pink-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Book Consultation
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-pink-600 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 bg-transparent"
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
