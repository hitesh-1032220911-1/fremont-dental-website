"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Car, Bus, Navigation, Mail } from "lucide-react"
import Link from "next/link"

export default function LocationPage() {
  const hours = [
    { day: "Monday", time: "8:00 AM - 8:00 PM" },
    { day: "Tuesday", time: "8:00 AM - 8:00 PM" },
    { day: "Wednesday", time: "8:00 AM - 8:00 PM" },
    { day: "Thursday", time: "8:00 AM - 8:00 PM" },
    { day: "Friday", time: "8:00 AM - 6:00 PM" },
    { day: "Saturday", time: "9:00 AM - 4:00 PM" },
    { day: "Sunday", time: "Closed" },
  ]

  return (
    <div className="min-h-screen bg-[#FDFDFD]">
      {/* Hero Section */}
      <section className="relative pt-12 pb-20 bg-gradient-to-br from-[#EAF6FB] to-[#DFF5F2]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-[#00BFA5] to-[#013A63] rounded-full flex items-center justify-center">
                <MapPin className="text-white" size={40} />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-[#013A63] mb-6">
              Visit Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00BFA5] to-[#013A63]">
                Fremont Village Location
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-[#1A1A1A] leading-relaxed">
              Conveniently located at 3292 Westwood Street in Port Coquitlam with free parking and easy access from
              Highway 1.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Map and Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden shadow-xl bg-[#F8F8F8]">
                <div className="aspect-square bg-gradient-to-br from-[#EAF6FB] to-[#DFF5F2] flex items-center justify-center">
                  <div className="text-center">
                    <MapPin size={60} className="mx-auto mb-4 text-[#00BFA5]" />
                    <h3 className="text-2xl font-bold text-[#013A63] mb-2">Find Us in Fremont Village</h3>
                    <p className="text-[#1A1A1A]">
                      3292 Westwood Street
                      <br />
                      Port Coquitlam, BC V3B 4S6
                    </p>
                    <Button className="mt-4 bg-[#00BFA5] hover:bg-[#009688] text-white">
                      <Navigation size={16} className="mr-2" />
                      Get Directions
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <Card className="p-8 bg-[#F8F8F8] shadow-lg">
                <h3 className="text-2xl font-bold text-[#013A63] mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#EAF6FB] rounded-full flex items-center justify-center">
                      <MapPin className="text-[#00BFA5]" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#013A63]">Address</h4>
                      <p className="text-[#1A1A1A]">
                        3292 Westwood Street
                        <br />
                        Port Coquitlam, BC V3B 4S6
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#DFF5F2] rounded-full flex items-center justify-center">
                      <Phone className="text-[#00BFA5]" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#013A63]">Phone</h4>
                      <p className="text-[#1A1A1A]">(604) 941-7700</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#EAF6FB] rounded-full flex items-center justify-center">
                      <Mail className="text-[#00BFA5]" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#013A63]">Email</h4>
                      <p className="text-[#1A1A1A]">info@fremontvillagedentist.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#DFF5F2] rounded-full flex items-center justify-center">
                      <Car className="text-[#00BFA5]" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#013A63]">Parking</h4>
                      <p className="text-[#1A1A1A]">Free parking available on-site</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-[#F8F8F8] shadow-lg">
                <h3 className="text-2xl font-bold text-[#013A63] mb-6">Office Hours</h3>
                <div className="space-y-3">
                  {hours.map((hour) => (
                    <div key={hour.day} className="flex justify-between items-center py-2 border-b border-[#E0E0E0]">
                      <span className="font-medium text-[#013A63]">{hour.day}</span>
                      <span className={`text-[#1A1A1A] ${hour.day === "Sunday" ? "text-red-500" : ""}`}>
                        {hour.time}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-gradient-to-r from-[#EAF6FB] to-[#DFF5F2] rounded-lg">
                  <p className="text-[#013A63] font-semibold text-center">
                    Same-day appointments available for urgent dental needs
                  </p>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Directions */}
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
              Getting{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00BFA5] to-[#013A63]">Here</span>
            </h2>
            <p className="text-xl text-[#1A1A1A] max-w-3xl mx-auto">Easy access from anywhere in the Tri-Cities area</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 text-center bg-[#F8F8F8] shadow-lg hover:shadow-xl transition-all duration-300">
                <Car size={40} className="mx-auto mb-4 text-[#00BFA5]" />
                <h3 className="text-xl font-bold text-[#013A63] mb-4">By Car</h3>
                <p className="text-[#1A1A1A] leading-relaxed mb-4">
                  Easy access from Highway 1 (Lougheed Highway). Take the Westwood Street exit and we're right in
                  Fremont Village. Free parking available.
                </p>
                <Button className="bg-[#00BFA5] hover:bg-[#009688] text-white">
                  <Navigation size={16} className="mr-2" />
                  Get Directions
                </Button>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 text-center bg-[#F8F8F8] shadow-lg hover:shadow-xl transition-all duration-300">
                <Bus size={40} className="mx-auto mb-4 text-[#2ECC71]" />
                <h3 className="text-xl font-bold text-[#013A63] mb-4">Public Transit</h3>
                <p className="text-[#1A1A1A] leading-relaxed mb-4">
                  Multiple TransLink bus routes serve the Fremont Village area. Check TransLink for current schedules
                  and routes.
                </p>
                <Button className="bg-[#2ECC71] hover:bg-[#28B463] text-white">
                  <Bus size={16} className="mr-2" />
                  Transit Info
                </Button>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 text-center bg-[#F8F8F8] shadow-lg hover:shadow-xl transition-all duration-300">
                <MapPin size={40} className="mx-auto mb-4 text-[#013A63]" />
                <h3 className="text-xl font-bold text-[#013A63] mb-4">Fremont Village</h3>
                <p className="text-[#1A1A1A] leading-relaxed mb-4">
                  Located in the heart of Fremont Village with shopping, dining, and services all within walking
                  distance.
                </p>
                <Button className="bg-[#013A63] hover:bg-[#012A4A] text-white">
                  <MapPin size={16} className="mr-2" />
                  Explore Area
                </Button>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#013A63] text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Visit?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Schedule your appointment today and experience the convenience of our Fremont Village location. New
              patients welcome!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact/book-appointment">
                <Button
                  size="lg"
                  className="bg-[#00BFA5] text-white hover:bg-[#009688] px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Book Appointment
                </Button>
              </Link>
              <Link href="tel:6049417700">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#013A63] px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 bg-transparent"
                >
                  Call (604) 941-7700
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
