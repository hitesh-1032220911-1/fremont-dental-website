"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Heart, Award, Clock, MapPin, Shield } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Patient-Centered Care",
      description:
        "We put our patients first, focusing on personalized treatment plans and building lasting relationships with every family we serve.",
    },
    {
      icon: Users,
      title: "Family Dental Home",
      description:
        "Dr. Grewal and our team provide comprehensive care for patients of all ages in a warm, welcoming environment.",
    },
    {
      icon: Award,
      title: "Excellence in Dentistry",
      description:
        "Our commitment to continuing education and advanced techniques ensures you receive the highest quality care.",
    },
    {
      icon: Shield,
      title: "Comfort & Safety",
      description:
        "State-of-the-art sterilization protocols and modern technology make your visit safe and comfortable.",
    },
  ]

  return (
    <div className="min-h-screen bg-[#FDFDFD]">
      {/* Hero Section */}
      <section className="relative pt-12 pb-20 overflow-hidden bg-gradient-to-br from-[#EAF6FB] to-[#DFF5F2]">
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
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00BFA5] to-[#013A63]">
                Fremont Village Dental Centre
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-[#1A1A1A] leading-relaxed">
              Your trusted dental home in Port Coquitlam since 2010. Dr. Manpreet Grewal and our caring team are
              dedicated to providing exceptional dental care for your entire family.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-[#013A63] mb-6">Our Story</h2>
              <div className="space-y-6 text-lg text-[#1A1A1A] leading-relaxed">
                <p>
                  <strong className="text-[#00BFA5]">Fremont Village Dental Centre</strong> has been serving the Port
                  Coquitlam community since 2010. Located in the heart of Fremont Village at 3292 Westwood Street, our
                  practice combines modern dental technology with personalized, compassionate care.
                </p>
                <p>
                  <strong className="text-[#013A63]">Dr. Manpreet Grewal</strong> leads our team with a commitment to
                  excellence and a passion for helping patients achieve optimal oral health. We believe that quality
                  dental care should be accessible, comfortable, and tailored to each patient's unique needs.
                </p>
                <p>
                  From routine cleanings and preventative care to cosmetic dentistry and complex restorative treatments,
                  we provide comprehensive dental services for patients of all ages. Our{" "}
                  <strong className="text-[#00BFA5]">family-friendly approach</strong> ensures that everyone feels
                  welcome and comfortable during their visit.
                </p>
              </div>
              <div className="mt-8">
                <Link href="/about/our-story">
                  <Button className="bg-[#00BFA5] hover:bg-[#009688] text-white px-6 py-3 rounded-full">
                    Learn More About Our Journey
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <Card className="p-6 bg-gradient-to-br from-[#00BFA5] to-[#013A63] text-white">
                  <Users size={40} className="mb-4" />
                  <h3 className="text-2xl font-bold mb-2">All Ages</h3>
                  <p>Family dental care from children to seniors</p>
                </Card>
                <Card className="p-6 bg-gradient-to-br from-[#00BFA5] to-[#013A63] text-white">
                  <Clock size={40} className="mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Extended Hours</h3>
                  <p>Monday to Saturday with evening appointments</p>
                </Card>
                <Card className="p-6 bg-gradient-to-br from-[#00BFA5] to-[#013A63] text-white">
                  <MapPin size={40} className="mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Convenient</h3>
                  <p>Fremont Village location with free parking</p>
                </Card>
                <Card className="p-6 bg-gradient-to-br from-[#00BFA5] to-[#013A63] text-white">
                  <Award size={40} className="mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Experienced</h3>
                  <p>14+ years serving Port Coquitlam</p>
                </Card>
              </div>
            </motion.div>
          </div>

          {/* Values Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#013A63] mb-4">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00BFA5] to-[#013A63]">Values</span>
            </h2>
            <p className="text-xl text-[#1A1A1A] max-w-3xl mx-auto">
              At Fremont Village Dental Centre, these core values guide everything we do and shape the exceptional
              experience we provide.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                <Card className="h-full bg-[#F8F8F8] backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  <CardContent className="p-8 text-center">
                    <div className="mb-6 relative">
                      <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[#00BFA5] to-[#013A63] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <value.icon className="text-white" size={32} />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-[#013A63] mb-4 group-hover:text-[#00BFA5] transition-colors duration-300">
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

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-[#DFF5F2] to-[#EAF6FB]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-[#013A63] mb-4">Ready to Experience the Difference?</h2>
            <p className="text-xl text-[#1A1A1A] mb-8">
              Join the thousands of families who trust Fremont Village Dental Centre for their oral health needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact/book-appointment">
                <Button
                  size="lg"
                  className="bg-[#00BFA5] hover:bg-[#009688] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Book Your Appointment
                </Button>
              </Link>
              <Link href="tel:6049417700">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-[#00BFA5] text-[#00BFA5] hover:bg-[#00BFA5] hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 bg-transparent"
                >
                  Call (604) 941-7700
                </Button>
              </Link>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Our Team",
                href: "/about/our-team",
                description: "Meet Dr. Grewal and our dental professionals",
              },
              {
                title: "Our Mission",
                href: "/about/our-mission",
                description: "Discover what drives our commitment to excellence",
              },
              {
                title: "Patient Reviews",
                href: "/about/reviews",
                description: "See what our patients say about their experience",
              },
              { title: "Office Tour", href: "/location", description: "Take a virtual tour of our modern facility" },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={item.href}>
                  <Card className="h-full bg-[#F8F8F8] hover:shadow-lg transition-all duration-300 cursor-pointer group">
                    <CardContent className="p-6 text-center">
                      <h3 className="text-xl font-bold text-[#013A63] mb-2 group-hover:text-[#00BFA5] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-[#1A1A1A]">{item.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
