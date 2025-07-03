"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowRight, Search } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function BlogPage() {
  const blogPosts = [
    {
      title: "5 Essential Tips for Better Oral Hygiene",
      excerpt: "Discover the daily habits that can transform your oral health and keep your smile bright and healthy.",
      author: "Dr. Sarah Johnson",
      date: "December 15, 2024",
      category: "Dental Health Tips",
      image: "/placeholder.svg?height=300&width=500",
      href: "/blog/dental-health-tips/5-essential-tips-oral-hygiene",
      readTime: "5 min read",
    },
    {
      title: "The Benefits of Invisalign vs Traditional Braces",
      excerpt:
        "Compare the advantages of clear aligners versus traditional metal braces to make the best choice for your smile.",
      author: "Dr. Michael Chen",
      date: "December 10, 2024",
      category: "Latest News",
      image: "/placeholder.svg?height=300&width=500",
      href: "/blog/latest-news/invisalign-vs-traditional-braces",
      readTime: "7 min read",
    },
    {
      title: "Understanding Root Canal Treatment",
      excerpt:
        "Learn about root canal procedures, what to expect, and how modern techniques make treatment comfortable.",
      author: "Dr. Sarah Johnson",
      date: "November 28, 2024",
      category: "Dental Health Tips",
      image: "/placeholder.svg?height=300&width=500",
      href: "/blog/dental-health-tips/understanding-root-canal-treatment",
      readTime: "6 min read",
    },
  ]

  const categories = ["All Posts", "Dental Health Tips", "Latest News", "Patient Stories"]

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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Blog</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#1A1A1A] leading-relaxed mb-8">
              Stay informed with the latest dental health tips, practice news, and inspiring patient stories from
              Fremont Village Dental Centre.
            </p>

            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-3 rounded-full border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-[#F8F8F8] border-b border-slate-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Button
                  variant={index === 0 ? "default" : "outline"}
                  className={`rounded-full px-6 py-2 ${
                    index === 0
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                      : "border-slate-200 text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  {category}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <Card className="h-full bg-white shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-blue-600 text-white">{post.category}</Badge>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                      <div className="flex items-center gap-1">
                        <User size={14} />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{post.date}</span>
                      </div>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="text-xl font-bold text-[#013A63] mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-[#1A1A1A] leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>

                    <Link href={post.href}>
                      <Button className="w-full bg-[#00BFA5] hover:bg-[#009688] text-white hover:shadow-lg transition-all duration-300">
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

      {/* Newsletter Signup */}
      <section className="py-20 bg-[#013A63] text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Stay Updated</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Subscribe to our newsletter for the latest dental health tips, practice updates, and exclusive offers.
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full text-slate-700 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-full font-semibold">
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
