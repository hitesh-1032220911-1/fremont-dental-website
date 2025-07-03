"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Shield, Users, Award, Star, Smile } from "lucide-react"
import Image from "next/image"

export default function OurMissionPage() {
  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "We treat every patient with kindness, understanding, and genuine concern for their well-being.",
      color: "from-red-400 to-pink-500",
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "We maintain the highest standards of safety and sterilization to protect our patients and team.",
      color: "from-blue-400 to-cyan-500",
    },
    {
      icon: Users,
      title: "Family Approach",
      description: "We welcome patients of all ages and treat everyone like part of our extended family.",
      color: "from-green-400 to-emerald-500",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from clinical care to customer service.",
      color: "from-purple-400 to-violet-500",
    },
    {
      icon: Star,
      title: "Innovation",
      description: "We embrace the latest technology and techniques to provide the best possible care.",
      color: "from-orange-400 to-amber-500",
    },
    {
      icon: Smile,
      title: "Positive Experience",
      description: "We create a welcoming, comfortable environment where patients feel relaxed and cared for.",
      color: "from-teal-400 to-cyan-500",
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
                Mission
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-[#1A1A1A] leading-relaxed">
              To provide exceptional dental care in a warm, welcoming environment where every patient feels valued,
              comfortable, and confident in their smile.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <Card className="bg-[#F8F8F8] border-0 shadow-xl">
              <CardContent className="p-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#013A63] mb-8">Our Mission Statement</h2>
                <p className="text-xl md:text-2xl text-[#1A1A1A] leading-relaxed italic mb-8">
                  "At Fremont Village Dental Centre, we are committed to providing comprehensive, compassionate dental
                  care using the latest technology and techniques. We believe in building lasting relationships with our
                  patients through personalized treatment plans, preventative care education, and a genuine commitment
                  to their oral health and overall well-being."
                </p>
                <div className="text-lg font-semibold text-blue-600">- The Fremont Village Dental Team</div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
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
              Our Core{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Values</span>
            </h2>
            <p className="text-xl text-[#1A1A1A] max-w-3xl mx-auto">
              These fundamental principles guide everything we do and shape the experience we provide for our patients.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group"
              >
                <Card className="h-full bg-[#F8F8F8] shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  <CardContent className="p-8 text-center">
                    <div className="mb-6 relative">
                      <div
                        className={`w-16 h-16 mx-auto bg-gradient-to-br ${value.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      >
                        <value.icon className="text-white" size={32} />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-[#013A63] mb-4 group-hover:text-blue-600 transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-[#1A1A1A] leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-[#013A63] mb-6">
                Our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Vision
                </span>
              </h2>
              <div className="space-y-6 text-lg text-[#1A1A1A] leading-relaxed">
                <p>
                  We envision a community where everyone has access to exceptional dental care and feels confident about
                  their oral health. Our goal is to be the dental practice that families trust for generations.
                </p>
                <p>
                  Through continuous innovation, compassionate care, and a commitment to excellence, we strive to set
                  the standard for dental practices in Port Coquitlam and beyond.
                </p>
                <p>
                  We believe that a healthy smile is the foundation of confidence and well-being, and we're dedicated to
                  helping every patient achieve and maintain their optimal oral health.
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
                <div className="text-center">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-blue-600 mb-2">14+</div>
                      <div className="text-[#1A1A1A]">Years Serving</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-purple-600 mb-2">5000+</div>
                      <div className="text-[#1A1A1A]">Happy Patients</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-green-600 mb-2">100%</div>
                      <div className="text-[#1A1A1A]">Commitment</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
                      <div className="text-[#1A1A1A]">Emergency Care</div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Community Commitment */}
      <section className="py-20 bg-[#2ECC71] text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#013A63]">Our Commitment to the Community</h2>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed text-[#1A1A1A]">
              We're proud to be part of the Port Coquitlam community and are committed to giving back through our
              Student Care Dental Network participation, community health initiatives, and educational programs.
            </p>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3 text-[#013A63]">Student Care Network</h3>
                <p className="text-[#1A1A1A]">20% discount for students to make dental care more accessible</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3 text-[#013A63]">Community Education</h3>
                <p className="text-[#1A1A1A]">Free dental health workshops and school visit programs</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3 text-[#013A63]">Emergency Care</h3>
                <p className="text-[#1A1A1A]">Available for urgent dental needs in our community</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
