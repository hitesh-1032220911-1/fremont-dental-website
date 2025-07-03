"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowRight, Heart } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function DentalHealthTipsPage() {
  const healthTips = [
    {
      title: "5 Essential Tips for Better Oral Hygiene",
      excerpt: "Discover the daily habits that can transform your oral health and keep your smile bright and healthy.",
      author: "Dr. Sarah Johnson",
      date: "December 15, 2024",
      image: "/placeholder.svg?height=300&width=500",
      href: "/blog/dental-health-tips/5-essential-tips-oral-hygiene",
      readTime: "5 min read",
    },
    {
      title: "Understanding Root Canal Treatment",
      excerpt:
        "Learn about root canal procedures, what to expect, and how modern techniques make treatment comfortable.",
      author: "Dr. Sarah Johnson",
      date: "November 28, 2024",
      image: "/placeholder.svg?height=300&width=500",
      href: "/blog/dental-health-tips/understanding-root-canal-treatment",
      readTime: "6 min read",
    },
    {
      title: "The Importance of Regular Dental Checkups",
      excerpt: "Why preventative care is crucial for maintaining optimal oral health and catching problems early.",
      author: "Dr. Michael Chen",
      date: "November 10, 2024",
      image: "/placeholder.svg?height=300&width=500",
      href: "/blog/dental-health-tips/importance-regular-checkups",
      readTime: "4 min read",
    },
  ]

  return (
    <div className="min-h-screen bg-[#FDFDFD]">
      {/* Hero Section */}
      <section className="relative pt-12 pb-20 overflow-hidden bg-[#EAF6FB]">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                <Heart className="text-white" size={40} />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-[#013A63] mb-6">
              Dental Health{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600">Tips</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#1A1A1A] leading-relaxed">
              Expert advice and practical tips to help you maintain optimal oral health and a beautiful smile.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Health Tips */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {healthTips.map((tip, index) => (
              <motion.div
                key={tip.title}
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
                      src={tip.image || "/placeholder.svg"}
                      alt={tip.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-green-600 text-white">Health Tips</Badge>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                      <div className="flex items-center gap-1">
                        <User size={14} />
                        <span>{tip.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{tip.date}</span>
                      </div>
                      <span>{tip.readTime}</span>
                    </div>

                    <h3 className="text-xl font-bold text-[#013A63] mb-3 group-hover:text-green-600 transition-colors">
                      {tip.title}
                    </h3>
                    <p className="text-[#1A1A1A] leading-relaxed mb-4">{tip.excerpt}</p>

                    <Link href={tip.href}>
                      <Button className="w-full bg-[#2ECC71] hover:bg-[#28B463] text-white hover:shadow-lg transition-all duration-300">
                        Read More
                        <ArrowRight size={16} className="ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
