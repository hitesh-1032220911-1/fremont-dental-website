"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock, MessageCircle, Calendar, AlertCircle } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#FDFDFD]">
      {/* Hero Section */}
      <section className="relative pt-12 pb-20 bg-[#EAF6FB]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-[#013A63] mb-6">
              Contact{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Us</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#1A1A1A] leading-relaxed">
              Get in touch with our friendly team. We're here to help with all your dental care needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Link href="/contact/book-appointment">
                <Card className="p-8 text-center bg-[#00BFA5] text-white hover:shadow-xl transition-all duration-300 cursor-pointer group hover:scale-105">
                  <Calendar size={40} className="mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold mb-2 text-[#013A63]">Book Appointment</h3>
                  <p>Schedule your visit online</p>
                </Card>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Link href="/contact/emergency">
                <Card className="p-8 text-center bg-[#013A63] text-white hover:shadow-xl transition-all duration-300 cursor-pointer group hover:scale-105">
                  <AlertCircle size={40} className="mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold mb-2 text-[#013A63]">Emergency Care</h3>
                  <p>Urgent dental care</p>
                </Card>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Link href="/contact/insurance">
                <Card className="p-8 text-center bg-[#2ECC71] text-white hover:shadow-xl transition-all duration-300 cursor-pointer group hover:scale-105">
                  <MessageCircle size={40} className="mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold mb-2 text-[#013A63]">Insurance & Payment</h3>
                  <p>Payment options & coverage</p>
                </Card>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 bg-[#F8F8F8] shadow-xl">
                <h2 className="text-3xl font-bold text-[#013A63] mb-6">Send us a Message</h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                      <Input placeholder="Your first name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                      <Input placeholder="Your last name" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                    <Input type="email" placeholder="your.email@example.com" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Phone</label>
                    <Input type="tel" placeholder="(604) 555-0123" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
                    <Input placeholder="How can we help you?" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                    <Textarea placeholder="Tell us more about your needs..." rows={5} />
                  </div>

                  <Button className="w-full bg-[#00BFA5] hover:bg-[#009688] text-white py-3 text-lg font-semibold hover:shadow-lg transition-all duration-300">
                    Send Message
                  </Button>
                </form>
              </Card>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <Card className="p-8 bg-white shadow-lg">
                <h3 className="text-2xl font-bold text-[#013A63] mb-6">Get in Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="text-blue-600" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-700 mb-1">Phone</h4>
                      <p className="text-slate-600">(604) 555-SMILE</p>
                      <p className="text-sm text-slate-500">Mon-Sat: 8AM-8PM</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="text-green-600" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-700 mb-1">Email</h4>
                      <p className="text-slate-600">info@fremontdental.ca</p>
                      <p className="text-sm text-slate-500">We'll respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-purple-600" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-700 mb-1">Address</h4>
                      <p className="text-slate-600">
                        Fremont Village Shopping Centre
                        <br />
                        Port Coquitlam, BC V3B 0N2
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="text-orange-600" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-700 mb-1">Office Hours</h4>
                      <div className="text-slate-600 text-sm space-y-1">
                        <p>Mon-Thu: 8:00 AM - 8:00 PM</p>
                        <p>Fri: 8:00 AM - 6:00 PM</p>
                        <p>Sat: 9:00 AM - 4:00 PM</p>
                        <p>Sun: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 border-0">
                <h3 className="text-xl font-bold text-[#013A63] mb-4">Why Choose Us?</h3>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Evening and Saturday appointments
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Free parking available
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Latest dental technology
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Experienced, caring team
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Student discounts available
                  </li>
                </ul>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
