"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Calendar, User, Phone, Mail, ArrowRight, ArrowLeft, CheckCircle, Heart, Smile } from "lucide-react"

export default function BookAppointmentPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    isNewPatient: false,
    concerns: "",
    preferredContact: "phone",
  })

  const timeSlots = [
    "8:00 AM",
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
    "6:00 PM",
  ]

  const services = [
    { id: "checkup", name: "General Checkup & Cleaning", duration: "60 min", icon: Heart },
    { id: "cosmetic", name: "Cosmetic Consultation", duration: "45 min", icon: Smile },
    { id: "invisalign", name: "Invisalign Consultation", duration: "30 min", icon: Smile },
    { id: "emergency", name: "Emergency Appointment", duration: "30 min", icon: Heart },
    { id: "restorative", name: "Restorative Treatment", duration: "90 min", icon: Heart },
    { id: "surgery", name: "Oral Surgery Consultation", duration: "45 min", icon: Heart },
  ]

  const steps = [
    { number: 1, title: "Personal Info", description: "Tell us about yourself" },
    { number: 2, title: "Service", description: "What brings you in?" },
    { number: 3, title: "Schedule", description: "Pick your preferred time" },
    { number: 4, title: "Confirm", description: "Review and submit" },
  ]

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  }

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30 pt-24">
      <div className="container mx-auto px-4 py-12">
        <motion.div initial="hidden" animate="visible" variants={containerVariants} className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-light text-slate-800 mb-4">
              Book Your <span className="text-teal-600 font-medium">Appointment</span>
            </h1>
            <p className="text-xl text-slate-600 font-light">
              Let's schedule your visit with Dr. Manpreet Grewal and our caring team
            </p>
          </motion.div>

          {/* Progress Steps */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="flex justify-between items-center max-w-2xl mx-auto">
              {steps.map((step, index) => (
                <div key={step.number} className="flex items-center">
                  <motion.div
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300 ${
                      currentStep >= step.number ? "bg-teal-500 text-white" : "bg-slate-200 text-slate-500"
                    }`}
                    whileHover={{ scale: 1.1 }}
                    animate={{
                      scale: currentStep === step.number ? 1.1 : 1,
                      backgroundColor: currentStep >= step.number ? "#14b8a6" : "#e2e8f0",
                    }}
                  >
                    {currentStep > step.number ? <CheckCircle size={16} /> : step.number}
                  </motion.div>
                  {index < steps.length - 1 && (
                    <div
                      className={`w-16 h-0.5 mx-2 transition-colors duration-300 ${
                        currentStep > step.number ? "bg-teal-500" : "bg-slate-200"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="text-center mt-4">
              <h3 className="text-lg font-medium text-slate-800">{steps[currentStep - 1].title}</h3>
              <p className="text-slate-600 font-light">{steps[currentStep - 1].description}</p>
            </div>
          </motion.div>

          {/* Form Content */}
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
            <div className="p-8">
              <AnimatePresence mode="wait" custom={currentStep}>
                <motion.div
                  key={currentStep}
                  custom={currentStep}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                >
                  {/* Step 1: Personal Information */}
                  {currentStep === 1 && (
                    <div className="space-y-6">
                      <div className="text-center mb-8">
                        <motion.div
                          className="w-20 h-20 mx-auto bg-teal-100 rounded-full flex items-center justify-center mb-4"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          <User className="text-teal-600" size={32} />
                        </motion.div>
                        <h2 className="text-2xl font-light text-slate-800">Tell us about yourself</h2>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                          <Input
                            placeholder="Your first name"
                            value={formData.firstName}
                            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                            className="border-slate-200 focus:border-teal-500 focus:ring-teal-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                          <Input
                            placeholder="Your last name"
                            value={formData.lastName}
                            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                            className="border-slate-200 focus:border-teal-500 focus:ring-teal-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                          <Input
                            type="email"
                            placeholder="your.email@example.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="border-slate-200 focus:border-teal-500 focus:ring-teal-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">Phone</label>
                          <Input
                            type="tel"
                            placeholder="(604) 555-0123"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="border-slate-200 focus:border-teal-500 focus:ring-teal-500"
                          />
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          id="newPatient"
                          checked={formData.isNewPatient}
                          onChange={(e) => setFormData({ ...formData, isNewPatient: e.target.checked })}
                          className="w-4 h-4 text-teal-600 border-slate-300 rounded focus:ring-teal-500"
                        />
                        <label htmlFor="newPatient" className="text-slate-700 font-light">
                          I am a new patient at Fremont Village Dental Centre
                        </label>
                      </div>
                    </div>
                  )}

                  {/* Step 2: Service Selection */}
                  {currentStep === 2 && (
                    <div className="space-y-6">
                      <div className="text-center mb-8">
                        <motion.div
                          className="w-20 h-20 mx-auto bg-teal-100 rounded-full flex items-center justify-center mb-4"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          <Heart className="text-teal-600" size={32} />
                        </motion.div>
                        <h2 className="text-2xl font-light text-slate-800">What brings you in today?</h2>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        {services.map((service) => (
                          <motion.label
                            key={service.id}
                            className="cursor-pointer"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <input
                              type="radio"
                              name="service"
                              value={service.id}
                              checked={formData.service === service.id}
                              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                              className="sr-only"
                            />
                            <div
                              className={`p-6 border-2 rounded-xl transition-all duration-300 ${
                                formData.service === service.id
                                  ? "border-teal-500 bg-teal-50"
                                  : "border-slate-200 hover:border-slate-300"
                              }`}
                            >
                              <div className="flex items-center gap-4">
                                <service.icon
                                  className={`${formData.service === service.id ? "text-teal-600" : "text-slate-400"}`}
                                  size={24}
                                />
                                <div>
                                  <h3 className="font-medium text-slate-800">{service.name}</h3>
                                  <p className="text-sm text-slate-600">{service.duration}</p>
                                </div>
                              </div>
                            </div>
                          </motion.label>
                        ))}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Any specific concerns or questions?
                        </label>
                        <Textarea
                          placeholder="Tell us about any dental concerns, pain, or questions you have..."
                          value={formData.concerns}
                          onChange={(e) => setFormData({ ...formData, concerns: e.target.value })}
                          rows={4}
                          className="border-slate-200 focus:border-teal-500 focus:ring-teal-500"
                        />
                      </div>
                    </div>
                  )}

                  {/* Step 3: Schedule */}
                  {currentStep === 3 && (
                    <div className="space-y-6">
                      <div className="text-center mb-8">
                        <motion.div
                          className="w-20 h-20 mx-auto bg-teal-100 rounded-full flex items-center justify-center mb-4"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          <Calendar className="text-teal-600" size={32} />
                        </motion.div>
                        <h2 className="text-2xl font-light text-slate-800">When would you like to come in?</h2>
                      </div>

                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">Preferred Date</label>
                          <Input
                            type="date"
                            value={formData.date}
                            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                            className="border-slate-200 focus:border-teal-500 focus:ring-teal-500"
                            min={new Date().toISOString().split("T")[0]}
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">Preferred Time</label>
                          <div className="grid grid-cols-2 gap-2 max-h-48 overflow-y-auto">
                            {timeSlots.map((time) => (
                              <motion.label
                                key={time}
                                className="cursor-pointer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                <input
                                  type="radio"
                                  name="time"
                                  value={time}
                                  checked={formData.time === time}
                                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                                  className="sr-only"
                                />
                                <div
                                  className={`p-3 text-center border-2 rounded-lg transition-all duration-300 ${
                                    formData.time === time
                                      ? "border-teal-500 bg-teal-50 text-teal-700"
                                      : "border-slate-200 hover:border-slate-300"
                                  }`}
                                >
                                  {time}
                                </div>
                              </motion.label>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          How would you prefer us to contact you?
                        </label>
                        <div className="flex gap-4">
                          {[
                            { value: "phone", label: "Phone Call", icon: Phone },
                            { value: "email", label: "Email", icon: Mail },
                          ].map((option) => (
                            <motion.label
                              key={option.value}
                              className="cursor-pointer flex-1"
                              whileHover={{ scale: 1.02 }}
                            >
                              <input
                                type="radio"
                                name="contact"
                                value={option.value}
                                checked={formData.preferredContact === option.value}
                                onChange={(e) => setFormData({ ...formData, preferredContact: e.target.value })}
                                className="sr-only"
                              />
                              <div
                                className={`p-4 border-2 rounded-lg text-center transition-all duration-300 ${
                                  formData.preferredContact === option.value
                                    ? "border-teal-500 bg-teal-50"
                                    : "border-slate-200 hover:border-slate-300"
                                }`}
                              >
                                <option.icon
                                  className={`mx-auto mb-2 ${
                                    formData.preferredContact === option.value ? "text-teal-600" : "text-slate-400"
                                  }`}
                                  size={20}
                                />
                                <div className="text-sm font-medium">{option.label}</div>
                              </div>
                            </motion.label>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 4: Confirmation */}
                  {currentStep === 4 && (
                    <div className="space-y-6">
                      <div className="text-center mb-8">
                        <motion.div
                          className="w-20 h-20 mx-auto bg-teal-100 rounded-full flex items-center justify-center mb-4"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          <CheckCircle className="text-teal-600" size={32} />
                        </motion.div>
                        <h2 className="text-2xl font-light text-slate-800">Review your appointment</h2>
                      </div>

                      <div className="bg-slate-50 rounded-xl p-6 space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h3 className="font-medium text-slate-800 mb-2">Patient Information</h3>
                            <p className="text-slate-600">
                              {formData.firstName} {formData.lastName}
                            </p>
                            <p className="text-slate-600">{formData.email}</p>
                            <p className="text-slate-600">{formData.phone}</p>
                            {formData.isNewPatient && <p className="text-teal-600 text-sm font-medium">New Patient</p>}
                          </div>
                          <div>
                            <h3 className="font-medium text-slate-800 mb-2">Appointment Details</h3>
                            <p className="text-slate-600">{services.find((s) => s.id === formData.service)?.name}</p>
                            <p className="text-slate-600">{formData.date}</p>
                            <p className="text-slate-600">{formData.time}</p>
                            <p className="text-slate-600">Contact via {formData.preferredContact}</p>
                          </div>
                        </div>
                        {formData.concerns && (
                          <div>
                            <h3 className="font-medium text-slate-800 mb-2">Your Concerns</h3>
                            <p className="text-slate-600">{formData.concerns}</p>
                          </div>
                        )}
                      </div>

                      <div className="bg-teal-50 rounded-xl p-6 text-center">
                        <h3 className="font-medium text-teal-800 mb-2">What happens next?</h3>
                        <p className="text-teal-700 text-sm">
                          We'll contact you within 2 hours to confirm your appointment. If this is your first visit,
                          we'll also send you our new patient forms to complete.
                        </p>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Navigation Buttons */}
              <div className="flex justify-between items-center mt-8 pt-6 border-t border-slate-200">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outline"
                    onClick={prevStep}
                    disabled={currentStep === 1}
                    className="border-slate-300 text-slate-600 hover:bg-slate-50 disabled:opacity-50 bg-transparent"
                  >
                    <ArrowLeft size={16} className="mr-2" />
                    Back
                  </Button>
                </motion.div>

                <div className="text-center">
                  <p className="text-sm text-slate-500">Step {currentStep} of 4</p>
                </div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  {currentStep === 4 ? (
                    <Button onClick={handleSubmit} className="bg-teal-500 hover:bg-teal-600 text-white border-0">
                      Book Appointment
                      <CheckCircle size={16} className="ml-2" />
                    </Button>
                  ) : (
                    <Button onClick={nextStep} className="bg-teal-500 hover:bg-teal-600 text-white border-0">
                      Continue
                      <ArrowRight size={16} className="ml-2" />
                    </Button>
                  )}
                </motion.div>
              </div>
            </div>
          </Card>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="text-center mt-12">
            <p className="text-slate-600 font-light mb-4">
              Need help booking? Call us directly at{" "}
              <a href="tel:6049417700" className="text-teal-600 font-medium hover:underline">
                (604) 941-7700
              </a>
            </p>
            <p className="text-sm text-slate-500">
              We're here Monday to Saturday with extended hours to accommodate your schedule
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
