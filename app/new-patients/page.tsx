"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Users,
  Heart,
  Shield,
  Clock,
  FileText,
  CheckCircle,
  Star,
  Phone,
  Calendar,
  MapPin,
  Award,
  Smile,
  ArrowRight,
  Download,
  CreditCard,
  Gift,
  UserCheck,
  Stethoscope,
  Camera,
  Zap,
  Mail,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function NewPatientsPage() {
  const [selectedInsurance, setSelectedInsurance] = useState("")
  const [selectedConcerns, setSelectedConcerns] = useState<string[]>([])
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    preferredTime: "",
    concerns: "",
  })

  const processRef = useRef(null)
  const benefitsRef = useRef(null)
  const formsRef = useRef(null)

  const processInView = useInView(processRef, { once: true })
  const benefitsInView = useInView(benefitsRef, { once: true })
  const formsInView = useInView(formsRef, { once: true })

  const processSteps = [
    {
      step: "01",
      title: "Schedule Your Visit",
      description: "Book online or call us. We offer same-day appointments for urgent needs.",
      icon: Calendar,
      color: "from-emerald-400 to-teal-500",
      details: [
        "Online booking available 24/7",
        "Same-day emergency appointments",
        "Flexible scheduling options",
        "Evening and Saturday appointments",
      ],
    },
    {
      step: "02",
      title: "Complete Your Forms",
      description: "Fill out your medical history and insurance information before your visit.",
      icon: FileText,
      color: "from-blue-400 to-cyan-500",
      details: ["Digital forms save time", "Secure patient portal", "Insurance verification", "Medical history review"],
    },
    {
      step: "03",
      title: "Welcome & Tour",
      description: "Meet our team and take a tour of our modern, comfortable facility.",
      icon: Users,
      color: "from-purple-400 to-indigo-500",
      details: [
        "Meet Dr. Grewal and team",
        "Tour our modern facility",
        "Discuss your dental goals",
        "Answer any questions",
      ],
    },
    {
      step: "04",
      title: "Comprehensive Exam",
      description: "Thorough examination using our advanced diagnostic technology.",
      icon: Stethoscope,
      color: "from-rose-400 to-pink-500",
      details: [
        "Digital X-rays (90% less radiation)",
        "Oral cancer screening",
        "Gum health assessment",
        "3D imaging if needed",
      ],
    },
    {
      step: "05",
      title: "Personalized Plan",
      description: "Receive a customized treatment plan tailored to your needs and budget.",
      icon: Heart,
      color: "from-amber-400 to-orange-500",
      details: [
        "Customized treatment options",
        "Flexible payment plans",
        "Insurance maximization",
        "Priority scheduling",
      ],
    },
    {
      step: "06",
      title: "Begin Treatment",
      description: "Start your journey to optimal oral health with our gentle, expert care.",
      icon: Smile,
      color: "from-green-400 to-emerald-500",
      details: [
        "Gentle, comfortable treatment",
        "Latest technology and techniques",
        "Ongoing support and care",
        "Regular progress monitoring",
      ],
    },
  ]

  const newPatientBenefits = [
    {
      title: "20% Student Discount",
      description: "Special pricing for students with valid ID",
      icon: Gift,
      color: "from-emerald-500 to-teal-600",
      value: "Save up to $200",
    },
    {
      title: "Comprehensive Exam",
      description: "Complete oral health assessment with digital X-rays",
      icon: Camera,
      color: "from-blue-500 to-cyan-600",
      value: "$350 Value",
    },
    {
      title: "Treatment Plan",
      description: "Personalized roadmap for your optimal oral health",
      icon: FileText,
      color: "from-purple-500 to-indigo-600",
      value: "Complimentary",
    },
    {
      title: "Emergency Priority",
      description: "Same-day appointments for urgent dental needs",
      icon: Zap,
      color: "from-red-500 to-rose-600",
      value: "24/7 Access",
    },
  ]

  const insuranceProviders = [
    "Pacific Blue Cross",
    "Sun Life",
    "Manulife",
    "Great-West Life",
    "Green Shield",
    "Desjardins",
    "Industrial Alliance",
    "SSQ Insurance",
    "Other/Not Listed",
  ]

  const commonConcerns = [
    "Teeth Whitening",
    "Crooked Teeth",
    "Missing Teeth",
    "Tooth Pain",
    "Gum Problems",
    "Bad Breath",
    "Dental Anxiety",
    "Cosmetic Improvements",
    "Preventative Care",
    "Emergency Treatment",
  ]

  const handleConcernToggle = (concern: string) => {
    setSelectedConcerns((prev) => (prev.includes(concern) ? prev.filter((c) => c !== concern) : [...prev, concern]))
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-slate-50 to-teal-50/30">
        <div className="absolute inset-0">
          <Image src="/background-texture.png" alt="Background" fill className="object-cover opacity-5" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="text-center max-w-5xl mx-auto"
          >
            <motion.div variants={itemVariants} className="mb-8">
              <motion.div
                className="inline-block mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Badge className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 sm:px-8 py-3 text-base sm:text-lg font-light rounded-full shadow-lg">
                  <UserCheck className="mr-2 sm:mr-3" size={18} />
                  New Patients Welcome
                </Badge>
              </motion.div>

              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-slate-800 mb-6 leading-tight font-heading"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                Welcome to Your{" "}
                <motion.span
                  className="bg-gradient-to-r from-teal-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent font-medium"
                  animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                  style={{ backgroundSize: "200%" }}
                >
                  Dental Home
                </motion.span>
              </motion.h1>

              <motion.p
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-600 leading-relaxed font-light mb-8 px-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Join the{" "}
                <motion.span className="text-emerald-600 font-medium" whileHover={{ scale: 1.05 }}>
                  5000+ families
                </motion.span>{" "}
                who trust Dr. Manpreet Grewal for exceptional dental care in Port Coquitlam.
              </motion.p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 px-4">
              <Link href="/contact/book-appointment">
                <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} className="group relative">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full blur-lg opacity-30 group-hover:opacity-50"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  />
                  <Button
                    size="lg"
                    className="relative bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-8 sm:px-12 py-4 sm:py-6 rounded-full text-base sm:text-lg font-light shadow-xl border-0"
                  >
                    <Calendar className="mr-2 sm:mr-3" size={18} />
                    Schedule Your First Visit
                    <ArrowRight size={14} className="ml-2 sm:ml-3" />
                  </Button>
                </motion.div>
              </Link>

              <Link href="tel:6049417700">
                <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-teal-300 px-8 sm:px-12 py-4 sm:py-6 rounded-full text-base sm:text-lg font-light bg-white/80 backdrop-blur-sm shadow-lg"
                  >
                    <Phone className="mr-2 sm:mr-3" size={18} />
                    Call (604) 941-7700
                  </Button>
                </motion.div>
              </Link>
            </motion.div>

            {/* Quick Stats */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto px-4">
              {[
                { icon: Users, number: "5000+", label: "Happy Patients", color: "from-emerald-500 to-teal-500" },
                { icon: Award, number: "14+", label: "Years Experience", color: "from-blue-500 to-cyan-500" },
                { icon: Clock, number: "Same Day", label: "Appointments", color: "from-purple-500 to-indigo-500" },
                { icon: Shield, number: "20%", label: "Student Discount", color: "from-rose-500 to-pink-500" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-4 sm:p-6 text-center">
                      <div
                        className={`w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center`}
                      >
                        <stat.icon className="text-white" size={18} />
                      </div>
                      <div className="text-lg sm:text-2xl font-light text-slate-800 mb-1">{stat.number}</div>
                      <div className="text-xs sm:text-sm text-slate-600 font-light">{stat.label}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* New Patient Benefits */}
      <motion.section ref={benefitsRef} className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={benefitsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-slate-800 mb-6">
              New Patient{" "}
              <motion.span
                className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 bg-clip-text text-transparent font-medium"
                animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                style={{ backgroundSize: "200%" }}
              >
                Benefits
              </motion.span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 font-light max-w-3xl mx-auto px-4">
              Special offers and comprehensive care designed to welcome you to our dental family
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {newPatientBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 50 }}
                animate={benefitsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -10 }}
                className="group"
              >
                <Card className="h-full bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  <CardContent className="p-6 sm:p-8 text-center relative">
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                      style={{
                        background: `linear-gradient(135deg, ${benefit.color.split(" ")[1]}, ${benefit.color.split(" ")[3]})`,
                      }}
                    />
                    <motion.div
                      className="mb-4 sm:mb-6 relative z-10"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div
                        className={`w-12 h-12 sm:w-16 sm:h-16 mx-auto bg-gradient-to-br ${benefit.color} rounded-full flex items-center justify-center shadow-lg`}
                      >
                        <benefit.icon className="text-white" size={24} />
                      </div>
                    </motion.div>
                    <Badge className="mb-3 sm:mb-4 bg-slate-100 text-slate-700 px-2 sm:px-3 py-1 text-xs sm:text-sm font-medium">
                      {benefit.value}
                    </Badge>
                    <h3 className="text-lg sm:text-xl font-medium text-slate-800 mb-2 sm:mb-3 relative z-10">{benefit.title}</h3>
                    <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed relative z-10">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Process Steps */}
      <motion.section ref={processRef} className="py-16 sm:py-20 bg-gradient-to-br from-slate-50 to-teal-50/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={processInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-slate-800 mb-6">
              Your First Visit{" "}
              <motion.span
                className="bg-gradient-to-r from-teal-600 via-emerald-600 to-cyan-600 bg-clip-text text-transparent font-medium"
                animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                style={{ backgroundSize: "300%" }}
              >
                Process
              </motion.span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 font-light max-w-3xl mx-auto px-4">
              A step-by-step guide to what you can expect during your first appointment with us
            </p>
          </motion.div>

          <div className="space-y-8 sm:space-y-12">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={processInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`flex flex-col lg:flex-row items-center gap-6 sm:gap-12 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                <div className="flex-1 w-full">
                  <Card className="bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
                    <CardContent className="p-6 sm:p-8">
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-4 sm:mb-6">
                        <motion.div
                          className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center shadow-lg flex-shrink-0`}
                          whileHover={{ scale: 1.1, rotate: 10 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <step.icon className="text-white" size={24} />
                        </motion.div>
                        <div>
                          <div className="text-xs sm:text-sm font-medium text-slate-500 mb-1">Step {step.step}</div>
                          <h3 className="text-xl sm:text-2xl font-medium text-slate-800">{step.title}</h3>
                        </div>
                      </div>
                      <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed mb-4 sm:mb-6">{step.description}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        {step.details.map((detail, detailIndex) => (
                          <motion.div
                            key={detail}
                            className="flex items-center gap-2 sm:gap-3"
                            initial={{ opacity: 0, x: -20 }}
                            animate={processInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                            transition={{ delay: index * 0.1 + detailIndex * 0.05 }}
                          >
                            <CheckCircle size={14} className="text-emerald-500 flex-shrink-0" />
                            <span className="text-sm sm:text-base text-slate-600 font-light">{detail}</span>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <motion.div
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-lg shadow-lg flex-shrink-0"
                  whileHover={{ scale: 1.1 }}
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  {step.step}
                </motion.div>
                <div className="flex-1 hidden lg:block"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Personalized Assessment Form */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-slate-800 mb-6">
              Personalize Your{" "}
              <motion.span
                className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 bg-clip-text text-transparent font-medium"
                animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                style={{ backgroundSize: "200%" }}
              >
                Experience
              </motion.span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 font-light max-w-3xl mx-auto px-4">
              Help us prepare for your visit by sharing some information about your dental needs and preferences
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-6 sm:p-8">
                <div className="space-y-6 sm:space-y-8">
                  {/* Personal Information */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-medium text-slate-800 mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                      <Users className="text-emerald-600" size={20} />
                      Personal Information
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                        <Input
                          placeholder="Your first name"
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          className="border-slate-200 focus:border-emerald-500 focus:ring-emerald-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                        <Input
                          placeholder="Your last name"
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          className="border-slate-200 focus:border-emerald-500 focus:ring-emerald-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                        <Input
                          type="email"
                          placeholder="your.email@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="border-slate-200 focus:border-emerald-500 focus:ring-emerald-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Phone</label>
                        <Input
                          type="tel"
                          placeholder="(604) 555-0123"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="border-slate-200 focus:border-emerald-500 focus:ring-emerald-500"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Insurance Information */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-medium text-slate-800 mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                      <Shield className="text-emerald-600" size={20} />
                      Insurance Information
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                      {insuranceProviders.map((provider) => (
                        <motion.label
                          key={provider}
                          className="cursor-pointer"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <input
                            type="radio"
                            name="insurance"
                            value={provider}
                            checked={selectedInsurance === provider}
                            onChange={(e) => setSelectedInsurance(e.target.value)}
                            className="sr-only"
                          />
                          <div
                            className={`p-3 sm:p-4 border-2 rounded-lg text-center transition-all duration-300 ${
                              selectedInsurance === provider
                                ? "border-emerald-500 bg-emerald-50"
                                : "border-slate-200 hover:border-slate-300"
                            }`}
                          >
                            <div className="text-xs sm:text-sm font-medium text-slate-800">{provider}</div>
                          </div>
                        </motion.label>
                      ))}
                    </div>
                  </div>

                  {/* Dental Concerns */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-medium text-slate-800 mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                      <Heart className="text-emerald-600" size={20} />
                      What brings you in? (Select all that apply)
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                      {commonConcerns.map((concern) => (
                        <motion.label
                          key={concern}
                          className="cursor-pointer"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <input
                            type="checkbox"
                            checked={selectedConcerns.includes(concern)}
                            onChange={() => handleConcernToggle(concern)}
                            className="sr-only"
                          />
                          <div
                            className={`p-3 sm:p-4 border-2 rounded-lg text-center transition-all duration-300 ${
                              selectedConcerns.includes(concern)
                                ? "border-emerald-500 bg-emerald-50"
                                : "border-slate-200 hover:border-slate-300"
                            }`}
                          >
                            <div className="text-xs sm:text-sm font-medium text-slate-800">{concern}</div>
                          </div>
                        </motion.label>
                      ))}
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-medium text-slate-800 mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                      <FileText className="text-emerald-600" size={20} />
                      Additional Information
                    </h3>
                    <div className="space-y-4 sm:space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Tell us more about your dental concerns or goals
                        </label>
                        <Textarea
                          placeholder="Any specific concerns, dental anxiety, or goals you'd like to share..."
                          value={formData.concerns}
                          onChange={(e) => setFormData({ ...formData, concerns: e.target.value })}
                          rows={4}
                          className="border-slate-200 focus:border-emerald-500 focus:ring-emerald-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Preferred appointment time
                        </label>
                        <select
                          value={formData.preferredTime}
                          onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                          className="w-full p-3 border border-slate-200 rounded-lg focus:border-emerald-500 focus:ring-emerald-500"
                        >
                          <option value="">Select preferred time</option>
                          <option value="morning">Morning (8AM - 12PM)</option>
                          <option value="afternoon">Afternoon (12PM - 5PM)</option>
                          <option value="evening">Evening (5PM - 8PM)</option>
                          <option value="saturday">Saturday</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="text-center pt-4 sm:pt-6">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        size="lg"
                        className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-8 sm:px-12 py-3 sm:py-4 rounded-full text-base sm:text-lg font-light shadow-xl border-0"
                      >
                        <Mail className="mr-2 sm:mr-3" size={18} />
                        Submit & Schedule Appointment
                        <ArrowRight size={14} className="ml-2 sm:ml-3" />
                      </Button>
                    </motion.div>
                    <p className="text-xs sm:text-sm text-slate-500 mt-3 sm:mt-4">
                      We'll contact you within 2 hours to confirm your appointment
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Forms & Documents */}
      <motion.section ref={formsRef} className="py-16 sm:py-20 bg-gradient-to-br from-slate-50 to-emerald-50/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={formsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-slate-800 mb-6">
              Patient{" "}
              <motion.span
                className="bg-gradient-to-r from-teal-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent font-medium"
                animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                style={{ backgroundSize: "200%" }}
              >
                Forms
              </motion.span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 font-light max-w-3xl mx-auto px-4">
              Download and complete these forms before your visit to save time during your appointment
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "New Patient Registration",
                description: "Personal information and contact details",
                icon: UserCheck,
                color: "from-emerald-500 to-teal-500",
              },
              {
                title: "Medical History Form",
                description: "Health conditions and medications",
                icon: Stethoscope,
                color: "from-blue-500 to-cyan-500",
              },
              {
                title: "Insurance Information",
                description: "Coverage details and authorization",
                icon: Shield,
                color: "from-purple-500 to-indigo-500",
              },
              {
                title: "Consent Forms",
                description: "Treatment consent and privacy policy",
                icon: FileText,
                color: "from-rose-500 to-pink-500",
              },
              {
                title: "Payment Options",
                description: "Financing and payment plans",
                icon: CreditCard,
                color: "from-amber-500 to-orange-500",
              },
              {
                title: "Emergency Contact",
                description: "Emergency contact information",
                icon: Phone,
                color: "from-green-500 to-emerald-500",
              },
            ].map((form, index) => (
              <motion.div
                key={form.title}
                initial={{ opacity: 0, y: 50 }}
                animate={formsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="group"
              >
                <Card className="h-full bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-500">
                  <CardContent className="p-6 sm:p-8 text-center">
                    <motion.div
                      className={`w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 bg-gradient-to-br ${form.color} rounded-full flex items-center justify-center shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <form.icon className="text-white" size={24} />
                    </motion.div>
                    <h3 className="text-lg sm:text-xl font-medium text-slate-800 mb-2 sm:mb-3">{form.title}</h3>
                    <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed mb-4 sm:mb-6">{form.description}</p>
                    <Button
                      variant="outline"
                      className="border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-emerald-300 w-full bg-transparent"
                    >
                      <Download size={14} className="mr-2" />
                      Download PDF
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-8 sm:mt-12"
            initial={{ opacity: 0 }}
            animate={formsInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Card className="bg-gradient-to-r from-emerald-50 to-teal-50 border-0 shadow-lg max-w-2xl mx-auto">
              <CardContent className="p-6 sm:p-8 text-center">
                <h3 className="text-xl sm:text-2xl font-medium text-slate-800 mb-3 sm:mb-4">Need Help with Forms?</h3>
                <p className="text-sm sm:text-base text-slate-600 font-light mb-4 sm:mb-6">
                  Our friendly staff is here to help you complete any forms or answer questions about your visit.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <Link href="tel:6049417700">
                    <Button className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base">
                      <Phone size={14} className="mr-2" />
                      Call for Help
                    </Button>
                  </Link>
                  <Link href="mailto:info@fremontvillagedentist.com">
                    <Button
                      variant="outline"
                      className="border-emerald-300 text-emerald-700 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-transparent text-sm sm:text-base"
                    >
                      <Mail size={14} className="mr-2" />
                      Email Questions
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* Final CTA */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 to-teal-600/10"
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-6 sm:mb-8">Ready to Join Our Dental Family?</h2>
            <p className="text-lg sm:text-xl font-light mb-8 sm:mb-12 max-w-3xl mx-auto opacity-90 px-4">
              Take the first step towards optimal oral health. Schedule your new patient appointment today and
              experience the Fremont Village difference.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-8 sm:mb-12 px-4">
              <Link href="/contact/book-appointment">
                <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} className="group relative">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full blur-lg opacity-50 group-hover:opacity-70"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  />
                  <Button
                    size="lg"
                    className="relative bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white px-8 sm:px-12 py-4 sm:py-6 rounded-full text-base sm:text-lg font-light border-0 shadow-xl"
                  >
                    <Calendar className="mr-2 sm:mr-3" size={18} />
                    Book Your First Visit
                  </Button>
                </motion.div>
              </Link>

              <Link href="tel:6049417700">
                <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 sm:px-12 py-4 sm:py-6 rounded-full text-base sm:text-lg font-light bg-transparent shadow-xl"
                  >
                    <Phone className="mr-2 sm:mr-3" size={18} />
                    Call (604) 941-7700
                  </Button>
                </motion.div>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-3xl mx-auto opacity-80 px-4">
              <div className="text-center">
                <MapPin size={20} className="mx-auto mb-2 text-emerald-400" />
                <div className="text-sm sm:text-base font-light">
                  3292 Westwood Street
                  <br />
                  Port Coquitlam, BC
                </div>
              </div>
              <div className="text-center">
                <Clock size={20} className="mx-auto mb-2 text-emerald-400" />
                <div className="text-sm sm:text-base font-light">
                  Mon-Sat: Extended Hours
                  <br />
                  Same-Day Appointments
                </div>
              </div>
              <div className="text-center">
                <Star size={20} className="mx-auto mb-2 text-emerald-400" />
                <div className="text-sm sm:text-base font-light">
                  5000+ Happy Patients
                  <br />
                  14+ Years Experience
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 