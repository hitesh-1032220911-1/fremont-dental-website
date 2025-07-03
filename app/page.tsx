"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Smile,
  Heart,
  MapPin,
  Clock,
  Phone,
  Calendar,
  Shield,
  Users,
  Sparkles,
  ArrowRight,
  Star,
  Award,
  CheckCircle,
  Zap,
} from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const [activeService, setActiveService] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef(null)
  const statsRef = useRef(null)
  const servicesRef = useRef(null)

  const { scrollYProgress } = useScroll()
  const heroInView = useInView(heroRef, { once: true })
  const statsInView = useInView(statsRef, { once: true })
  const servicesInView = useInView(servicesRef, { once: true })

  // Parallax effects
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -50])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.8])

  const services = [
    {
      title: "Cosmetic Dentistry",
      description: "Transform your smile with professional whitening, veneers, and complete makeovers.",
      icon: Sparkles,
      href: "/services/cosmetic-dentistry",
      color: "from-emerald-400 to-teal-500",
      delay: 0,
    },
    {
      title: "Preventative Care",
      description: "Regular cleanings and exams to keep your smile healthy for life.",
      icon: Shield,
      href: "/services/preventative-dentistry",
      color: "from-blue-400 to-cyan-500",
      delay: 0.1,
    },
    {
      title: "Invisalign",
      description: "Straighten your teeth discreetly with clear aligners.",
      icon: Smile,
      href: "/services/invisalign",
      color: "from-purple-400 to-indigo-500",
      delay: 0.2,
    },
  ]

  const features = [
    {
      icon: MapPin,
      title: "Convenient Location",
      description: "3292 Westwood Street, Port Coquitlam",
      color: "from-rose-400 to-pink-500",
    },
    {
      icon: Clock,
      title: "Extended Hours",
      description: "Monday to Saturday with evening appointments",
      color: "from-amber-400 to-orange-500",
    },
    {
      icon: Heart,
      title: "Family Care",
      description: "Comprehensive care for all ages",
      color: "from-red-400 to-rose-500",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Dr. Manpreet Grewal and skilled professionals",
      color: "from-violet-400 to-purple-500",
    },
  ]

  const stats = [
    { number: "14+", label: "Years Experience", icon: Award },
    { number: "5000+", label: "Happy Patients", icon: Users },
    { number: "100%", label: "Commitment", icon: Heart },
    { number: "24/7", label: "Emergency Care", icon: Zap },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [services.length])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  }

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 6,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-r from-teal-100/20 to-emerald-100/20 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * 0.02,
            y: mousePosition.y * 0.02,
          }}
          style={{
            left: "10%",
            top: "20%",
          }}
        />
        <motion.div
          className="absolute w-80 h-80 bg-gradient-to-r from-blue-100/20 to-cyan-100/20 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * -0.015,
            y: mousePosition.y * -0.015,
          }}
          style={{
            right: "10%",
            bottom: "20%",
          }}
        />
      </div>

      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className="relative pt-32 pb-20 overflow-hidden"
        style={{ y: heroY, opacity: heroOpacity }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 to-teal-50/30"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="text-center max-w-5xl mx-auto"
          >
            <motion.div variants={itemVariants} className="mb-8">
              <motion.div
                className="inline-block mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Badge className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-6 py-2 text-sm font-light rounded-full shadow-lg">
                  <Star className="mr-2" size={14} />
                  Trusted by 5000+ Patients Since 2010
                </Badge>
              </motion.div>

              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-light text-slate-800 mb-6 leading-tight font-heading"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              >
                <motion.span
                  className="inline-block"
                  animate={{
                    textShadow: [
                      "0 0 0px rgba(20, 184, 166, 0)",
                      "0 0 20px rgba(20, 184, 166, 0.3)",
                      "0 0 0px rgba(20, 184, 166, 0)",
                    ],
                  }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                >
                  Fremont Village
                </motion.span>
              </motion.h1>

                          <motion.h2
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-thin text-slate-600 tracking-[0.2em] sm:tracking-[0.3em] mb-8 font-heading"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
                <motion.span
                  className="inline-block bg-gradient-to-r from-slate-600 via-teal-600 to-slate-600 bg-clip-text text-transparent"
                  animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                  style={{ backgroundSize: "200%" }}
                >
                  DENTAL CENTRE
                </motion.span>
              </motion.h2>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-12">
              <motion.p
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-600 leading-relaxed font-light max-w-4xl mx-auto px-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
              >
                Your trusted dental home in{" "}
                <motion.span className="text-teal-600 font-medium relative" whileHover={{ scale: 1.05 }}>
                  Port Coquitlam
                  <motion.div
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-teal-400 to-emerald-400"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                  />
                </motion.span>{" "}
                since 2010.
                <br />
                <motion.span
                  className="text-emerald-600 font-medium"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  Dr. Manpreet Grewal
                </motion.span>{" "}
                and our caring team.
              </motion.p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 px-4"
            >
              <Link href="/contact/book-appointment">
                <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} className="group relative">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-full blur-lg opacity-30 group-hover:opacity-50"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  />
                  <Button
                    size="lg"
                    className="relative bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white px-12 py-6 rounded-full text-lg font-light shadow-xl border-0 overflow-hidden"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />
                    <Calendar className="mr-3" size={20} />
                    Book Appointment
                    <motion.div
                      className="ml-3"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                    >
                      <ArrowRight size={16} />
                    </motion.div>
                  </Button>
                </motion.div>
              </Link>

              <Link href="tel:6049417700">
                <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} className="group">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-teal-300 px-12 py-6 rounded-full text-lg font-light transition-all duration-500 bg-white/80 backdrop-blur-sm shadow-lg"
                  >
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <Phone className="mr-3" size={20} />
                    </motion.div>
                    (604) 941-7700
                  </Button>
                </motion.div>
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3 sm:gap-4 px-4">
              {[
                { icon: CheckCircle, text: "New Patients Welcome", color: "from-emerald-500 to-teal-500" },
                { icon: Clock, text: "Same-Day Appointments", color: "from-blue-500 to-cyan-500" },
                { icon: Shield, text: "20% Student Discount", color: "from-purple-500 to-indigo-500" },
              ].map((badge, index) => (
                <motion.div
                  key={badge.text}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <Badge
                    className={`bg-gradient-to-r ${badge.color} text-white px-6 py-3 text-sm font-light rounded-full shadow-lg`}
                  >
                    <badge.icon className="mr-2" size={16} />
                    {badge.text}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-teal-100 to-emerald-100 rounded-full opacity-60"
          variants={floatingVariants}
          animate="animate"
        />
        <motion.div
          className="absolute bottom-20 right-10 w-16 h-16 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full opacity-60"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 1 }}
        />
        <motion.div
          className="absolute top-1/2 right-20 w-12 h-12 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-full opacity-60"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2 }}
        />
      </motion.section>

      {/* Stats Section */}
      <motion.section ref={statsRef} className="py-16 bg-gradient-to-r from-slate-50 to-teal-50/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate={statsInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center group"
              >
                <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden">
                  <CardContent className="p-8">
                    <motion.div
                      className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-teal-100 to-emerald-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <stat.icon className="text-teal-600" size={28} />
                    </motion.div>
                    <motion.div
                      className="text-4xl font-light text-slate-800 mb-2"
                      initial={{ opacity: 0 }}
                      animate={statsInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ delay: index * 0.1 + 0.5 }}
                    >
                      {stat.number}
                    </motion.div>
                    <div className="text-slate-600 font-light">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-light text-slate-800 mb-6"
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 1 }}
            >
              Why Choose{" "}
              <motion.span
                className="bg-gradient-to-r from-teal-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent font-medium"
                animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                style={{ backgroundSize: "200%" }}
              >
                Fremont Village?
              </motion.span>
            </motion.h2>
            <motion.p
              className="text-xl text-slate-600 font-light max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Experience the difference of personalized dental care in Port Coquitlam's most trusted practice.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <Card className="h-full bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  <CardContent className="p-8 text-center relative">
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                      style={{
                        background: `linear-gradient(135deg, ${feature.color.split(" ")[1]}, ${feature.color.split(" ")[3]})`,
                      }}
                    />
                    <motion.div
                      className="mb-6 relative z-10"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div
                        className={`w-16 h-16 mx-auto bg-gradient-to-br ${feature.color} rounded-full flex items-center justify-center shadow-lg`}
                      >
                        <feature.icon className="text-white" size={28} />
                      </div>
                    </motion.div>
                    <h3 className="text-xl font-medium text-slate-800 mb-3 relative z-10">{feature.title}</h3>
                    <p className="text-slate-600 font-light leading-relaxed relative z-10">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <motion.section ref={servicesRef} className="py-20 bg-gradient-to-br from-slate-50 to-teal-50/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-light text-slate-800 mb-6"
              whileInView={{
                textShadow: [
                  "0 0 0px rgba(20, 184, 166, 0)",
                  "0 0 30px rgba(20, 184, 166, 0.3)",
                  "0 0 0px rgba(20, 184, 166, 0)",
                ],
              }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              Our{" "}
              <motion.span
                className="bg-gradient-to-r from-teal-600 via-emerald-600 to-cyan-600 bg-clip-text text-transparent font-medium"
                animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                style={{ backgroundSize: "300%" }}
              >
                Services
              </motion.span>
            </motion.h2>
            <motion.p
              className="text-xl text-slate-600 font-light max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0 }}
              animate={servicesInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Comprehensive dental care for your entire family
            </motion.p>
            <Link href="/services">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white px-8 py-3 rounded-full font-light shadow-lg border-0">
                  View All Services
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </motion.div>
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={servicesInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
                transition={{ duration: 0.6, delay: service.delay }}
                whileHover={{ scale: 1.03, y: -10 }}
                className="group"
              >
                <Link href={service.href}>
                  <Card className="h-full bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden">
                    <CardContent className="p-8 text-center relative">
                      <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                        style={{
                          background: `linear-gradient(135deg, ${service.color.split(" ")[1]}, ${service.color.split(" ")[3]})`,
                        }}
                      />
                      <motion.div
                        className="mb-6 relative z-10"
                        whileHover={{ scale: 1.3, rotate: 15 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div
                          className={`w-20 h-20 mx-auto bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center shadow-xl`}
                        >
                          <service.icon className="text-white" size={32} />
                        </div>
                      </motion.div>
                      <h3 className="text-2xl font-medium text-slate-800 mb-4 relative z-10">{service.title}</h3>
                      <p className="text-slate-600 font-light leading-relaxed mb-6 relative z-10">
                        {service.description}
                      </p>
                      <motion.div
                        className="inline-flex items-center text-teal-600 font-medium relative z-10"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        Learn More
                        <motion.div
                          className="ml-2"
                          animate={{ x: [0, 3, 0] }}
                          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                        >
                          <ArrowRight size={16} />
                        </motion.div>
                      </motion.div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Dr. Grewal Section */}
      <section className="py-20 bg-gradient-to-r from-slate-50 via-white to-teal-50/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-5xl mx-auto"
          >
            <motion.div
              className="w-32 h-32 mx-auto bg-gradient-to-br from-teal-100 via-emerald-100 to-cyan-100 rounded-full flex items-center justify-center mb-8 shadow-xl"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
              animate={{
                boxShadow: [
                  "0 10px 30px rgba(20, 184, 166, 0.1)",
                  "0 20px 40px rgba(20, 184, 166, 0.2)",
                  "0 10px 30px rgba(20, 184, 166, 0.1)",
                ],
              }}
              style={{ animationDuration: "3s", animationIterationCount: "infinite" }}
            >
              <Users size={48} className="text-teal-600" />
            </motion.div>

            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-light text-slate-800 mb-8"
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 1 }}
            >
              Meet{" "}
              <motion.span
                className="bg-gradient-to-r from-teal-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent font-medium"
                animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                style={{ backgroundSize: "200%" }}
              >
                Dr. Manpreet Grewal
              </motion.span>
            </motion.h2>

            <motion.blockquote
              className="text-xl md:text-2xl lg:text-3xl text-slate-600 font-light leading-relaxed italic mb-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
              viewport={{ once: true }}
            >
              "We believe in providing personalized, gentle dental care in a comfortable environment. Our goal is to
              help you achieve optimal oral health while building lasting relationships."
            </motion.blockquote>

            <motion.div
              className="text-lg font-medium text-teal-600 mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              viewport={{ once: true }}
            >
              - Dr. Manpreet Grewal, DDS
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { number: "14+", label: "Years Experience", color: "from-teal-500 to-emerald-500" },
                { number: "5000+", label: "Happy Patients", color: "from-blue-500 to-cyan-500" },
                { number: "100%", label: "Commitment", color: "from-purple-500 to-indigo-500" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.8, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center group"
                >
                  <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-500">
                    <CardContent className="p-6">
                      <motion.div
                        className={`text-4xl lg:text-5xl font-light bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      >
                        {stat.number}
                      </motion.div>
                      <div className="text-slate-600 font-light">{stat.label}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-teal-600/10 to-emerald-600/10"
          animate={{ opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
        />

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-light mb-8"
              whileInView={{
                textShadow: [
                  "0 0 0px rgba(255, 255, 255, 0)",
                  "0 0 20px rgba(255, 255, 255, 0.3)",
                  "0 0 0px rgba(255, 255, 255, 0)",
                ],
              }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            >
              Ready to Get Started?
            </motion.h2>
            <motion.p
              className="text-xl font-light mb-12 max-w-3xl mx-auto opacity-90"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.9 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
            >
              New patients welcome. Same-day appointments available for urgent needs.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Link href="/contact/book-appointment">
                <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} className="group relative">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-full blur-lg opacity-50 group-hover:opacity-70"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  />
                  <Button
                    size="lg"
                    className="relative bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-white px-12 py-6 rounded-full text-lg font-light border-0 shadow-xl"
                  >
                    <Calendar className="mr-3" size={20} />
                    Book Online
                  </Button>
                </motion.div>
              </Link>

              <Link href="tel:6049417700">
                <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-12 py-6 rounded-full text-lg font-light bg-transparent shadow-xl"
                  >
                    <Phone className="mr-3" size={20} />
                    Call Now
                  </Button>
                </motion.div>
              </Link>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto opacity-80"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.8 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div className="text-center" whileHover={{ scale: 1.05 }}>
                <MapPin size={24} className="mx-auto mb-2 text-teal-400" />
                <div className="font-light">
                  3292 Westwood Street
                  <br />
                  Port Coquitlam, BC
                </div>
              </motion.div>
              <motion.div className="text-center" whileHover={{ scale: 1.05 }}>
                <Clock size={24} className="mx-auto mb-2 text-teal-400" />
                <div className="font-light">
                  Mon-Sat: Extended Hours
                  <br />
                  Evening Appointments
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
