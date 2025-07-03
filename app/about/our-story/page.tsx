"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin, Users, Award } from "lucide-react"
import Image from "next/image"

export default function OurStoryPage() {
  const timeline = [
    {
      year: "2010",
      title: "Fremont Village Dental Opens",
      description:
        "Dr. Smith established Fremont Village Dental Centre with a vision to provide comprehensive, compassionate dental care to the Port Coquitlam community.",
    },
    {
      year: "2015",
      title: "Office Expansion",
      description:
        "We expanded our practice to include additional treatment rooms and state-of-the-art equipment to better serve our growing patient family.",
    },
    {
      year: "2018",
      title: "Technology Upgrade",
      description:
        "Invested in the latest dental technology including digital X-rays, 3D imaging, and CAD/CAM systems for enhanced patient care.",
    },
    {
      year: "2020",
      title: "Student Care Partnership",
      description:
        "Became proud participants in the Student Care Dental Network, offering 20% discounts to students in our community.",
    },
    {
      year: "2023",
      title: "Office Renovation",
      description:
        "Completed a comprehensive renovation to create an even more welcoming and comfortable environment for our patients.",
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Story</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#1A1A1A] leading-relaxed">
              From humble beginnings to becoming Port Coquitlam's trusted dental care provider
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-[#013A63] mb-6">A Vision of Excellence</h2>
              <div className="space-y-6 text-lg text-[#1A1A1A] leading-relaxed">
                <p>
                  Fremont Village Dental Centre was founded with a simple yet powerful vision: to create a dental
                  practice where patients feel like family, where cutting-edge technology meets compassionate care, and
                  where every smile tells a story of health and happiness.
                </p>
                <p>
                  Located in the heart of beautiful Port Coquitlam, our practice has grown from a small clinic to a
                  comprehensive dental centre, but our core values have remained unchanged. We believe that quality
                  dental care should be accessible, comfortable, and personalized to each patient's unique needs.
                </p>
                <p>
                  What started as a dream to serve our local community has evolved into a trusted partnership with
                  families across Port Coquitlam and beyond. Every day, we're honored to be part of our patients' health
                  journeys, from their first visit to lifelong care.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Card className="p-8 bg-[#F8F8F8] border-0 shadow-xl">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <Calendar size={40} className="mx-auto mb-4 text-blue-600" />
                    <h3 className="text-3xl font-bold text-[#013A63]">14+</h3>
                    <p className="text-[#1A1A1A]">Years of Service</p>
                  </div>
                  <div>
                    <Users size={40} className="mx-auto mb-4 text-purple-600" />
                    <h3 className="text-3xl font-bold text-[#013A63]">5000+</h3>
                    <p className="text-[#1A1A1A]">Happy Patients</p>
                  </div>
                  <div>
                    <MapPin size={40} className="mx-auto mb-4 text-green-600" />
                    <h3 className="text-3xl font-bold text-[#013A63]">1</h3>
                    <p className="text-[#1A1A1A]">Convenient Location</p>
                  </div>
                  <div>
                    <Award size={40} className="mx-auto mb-4 text-orange-600" />
                    <h3 className="text-3xl font-bold text-[#013A63]">100%</h3>
                    <p className="text-[#1A1A1A]">Commitment to Excellence</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#013A63] mb-4">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Journey
              </span>
            </h2>
            <p className="text-xl text-[#1A1A1A] max-w-3xl mx-auto">
              Milestones that have shaped our practice and strengthened our commitment to exceptional dental care
            </p>
          </motion.div>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex items-center gap-8 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              >
                <div className="flex-1">
                  <Card className="bg-[#F8F8F8] shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                          {item.year.slice(-2)}
                        </div>
                        <h3 className="text-2xl font-bold text-[#013A63]">{item.title}</h3>
                      </div>
                      <p className="text-[#1A1A1A] leading-relaxed">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex-shrink-0"></div>
                <div className="flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-[#DFF5F2]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#013A63] mb-8">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Mission
              </span>
            </h2>
            <Card className="bg-[#F8F8F8] border-0 shadow-xl">
              <CardContent className="p-12">
                <p className="text-xl md:text-2xl text-[#1A1A1A] leading-relaxed italic">
                  "To provide exceptional dental care in a warm, welcoming environment where every patient feels valued,
                  comfortable, and confident in their smile. We are committed to using the latest technology and
                  techniques while maintaining the personal touch that makes Fremont Village Dental Centre feel like
                  home."
                </p>
                <div className="mt-8 text-lg font-semibold text-blue-600">- The Fremont Village Dental Team</div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
