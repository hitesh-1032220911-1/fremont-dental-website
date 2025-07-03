"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award, Heart, Users } from "lucide-react"
import Image from "next/image"

export default function OurTeamPage() {
  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      title: "Lead Dentist & Practice Owner",
      image: "/placeholder.svg?height=400&width=400",
      education: "DDS, University of British Columbia",
      specialties: ["Cosmetic Dentistry", "Restorative Dentistry", "Preventative Care"],
      experience: "15+ years",
      bio: "Dr. Johnson founded Fremont Village Dental with a passion for creating beautiful, healthy smiles. She believes in building lasting relationships with her patients through compassionate, personalized care.",
    },
    {
      name: "Dr. Michael Chen",
      title: "Associate Dentist",
      image: "/placeholder.svg?height=400&width=400",
      education: "DDS, University of Toronto",
      specialties: ["Oral Surgery", "Periodontics", "Implant Dentistry"],
      experience: "12+ years",
      bio: "Dr. Chen brings expertise in oral surgery and implant dentistry to our practice. His gentle approach and attention to detail ensure comfortable treatment experiences for all patients.",
    },
    {
      name: "Lisa Thompson, RDH",
      title: "Senior Dental Hygienist",
      image: "/placeholder.svg?height=400&width=400",
      education: "Diploma in Dental Hygiene, VCC",
      specialties: ["Preventative Care", "Periodontal Therapy", "Patient Education"],
      experience: "10+ years",
      bio: "Lisa is passionate about preventative care and patient education. She works closely with patients to develop personalized oral health routines that keep smiles healthy for life.",
    },
    {
      name: "Jennifer Martinez, CDA",
      title: "Certified Dental Assistant",
      image: "/placeholder.svg?height=400&width=400",
      education: "Certified Dental Assistant Program",
      specialties: ["Patient Care", "Dental Procedures", "Office Management"],
      experience: "8+ years",
      bio: "Jennifer ensures every patient feels comfortable and well-cared for during their visit. Her warm personality and professional expertise make dental appointments a positive experience.",
    },
    {
      name: "Amanda Wilson",
      title: "Practice Manager",
      image: "/placeholder.svg?height=400&width=400",
      education: "Business Administration, SFU",
      specialties: ["Practice Management", "Patient Relations", "Insurance Coordination"],
      experience: "6+ years",
      bio: "Amanda oversees the daily operations of our practice and ensures every patient receives exceptional service from the moment they walk through our doors.",
    },
    {
      name: "David Kim, CDA",
      title: "Dental Assistant",
      image: "/placeholder.svg?height=400&width=400",
      education: "Certified Dental Assistant Program",
      specialties: ["Chairside Assistance", "Sterilization", "Patient Comfort"],
      experience: "4+ years",
      bio: "David's attention to detail and commitment to patient comfort make him an invaluable member of our team. He ensures all procedures run smoothly and efficiently.",
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
              Meet Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Team</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#1A1A1A] leading-relaxed">
              Our team of dental professionals is like a family, providing years of experience in both general and
              cosmetic procedures with care and personal service you can count on.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-12 bg-[#DFF5F2]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { icon: Users, number: "6", label: "Team Members" },
              { icon: GraduationCap, number: "50+", label: "Years Combined Experience" },
              { icon: Award, number: "100%", label: "Certified Professionals" },
              { icon: Heart, number: "5000+", label: "Happy Patients" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#F8F8F8] rounded-lg p-6 shadow-lg"
              >
                <stat.icon size={40} className="mx-auto mb-4 text-blue-600" />
                <h3 className="text-3xl font-bold text-[#013A63] mb-2">{stat.number}</h3>
                <p className="text-[#1A1A1A]">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <Card className="h-full bg-[#F8F8F8] shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <div className="aspect-square relative overflow-hidden">
                        <Image
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent"></div>
                      </div>
                    </div>
                    <CardContent className="md:w-2/3 p-8">
                      <div className="mb-4">
                        <h3 className="text-2xl font-bold text-[#013A63] mb-2 group-hover:text-blue-600 transition-colors">
                          {member.name}
                        </h3>
                        <p className="text-lg text-blue-600 font-semibold mb-4">{member.title}</p>

                        <div className="space-y-3 mb-6">
                          <div className="flex items-center gap-2">
                            <GraduationCap size={16} className="text-slate-500" />
                            <span className="text-sm text-[#1A1A1A]">{member.education}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Award size={16} className="text-slate-500" />
                            <span className="text-sm text-[#1A1A1A]">{member.experience} experience</span>
                          </div>
                        </div>

                        <div className="mb-4">
                          <h4 className="font-semibold text-[#013A63] mb-2">Specialties:</h4>
                          <div className="flex flex-wrap gap-2">
                            {member.specialties.map((specialty) => (
                              <Badge
                                key={specialty}
                                variant="secondary"
                                className="bg-blue-100 text-blue-700 hover:bg-blue-200"
                              >
                                {specialty}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <p className="text-[#1A1A1A] leading-relaxed">{member.bio}</p>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Philosophy */}
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
              Our Team{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Philosophy
              </span>
            </h2>
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-12">
                <div className="space-y-6 text-lg text-[#1A1A1A] leading-relaxed">
                  <p>
                    At Fremont Village Dental Centre, we believe that exceptional dental care comes from a team that
                    works together like a family. Each member of our team brings unique skills, experience, and
                    dedication to ensuring every patient receives the highest quality care.
                  </p>
                  <p>
                    We are committed to continuous learning and staying current with the latest dental techniques and
                    technologies. Our team regularly participates in continuing education to provide you with the most
                    advanced and effective treatments available.
                  </p>
                  <p>
                    Most importantly, we understand that visiting the dentist can be stressful for some patients. That's
                    why every member of our team is dedicated to creating a warm, welcoming environment where you feel
                    comfortable, informed, and cared for throughout your visit.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
