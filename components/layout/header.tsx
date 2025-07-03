"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Menu, X, ChevronDown } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { AnimatePresence } from "framer-motion"

const navigationItems = [
  { name: "Home", href: "/" },
  {
    name: "About",
    href: "/about",
    submenu: [
      { name: "Our Story", href: "/about/our-story" },
      { name: "Meet Dr. Grewal", href: "/about/our-team" },
      { name: "Our Mission", href: "/about/our-mission" },
    ],
  },
  {
    name: "Services",
    href: "/services",
    submenu: [
      { name: "Cosmetic Dentistry", href: "/services/cosmetic-dentistry" },
      { name: "Preventative Care", href: "/services/preventative-dentistry" },
      { name: "Invisalign", href: "/services/invisalign" },
    ],
  },
  { name: "New Patients", href: "/new-patients" },
  { name: "Technology", href: "/technology" },
  { name: "Blog", href: "/blog" },
  { name: "Location", href: "/location" },
  { name: "Contact", href: "/contact" },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50 border-b border-slate-100"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-xl sm:text-2xl font-light text-slate-800 font-heading">
                Fremont Village
              </div>
              <div className="text-xs sm:text-sm font-thin text-slate-600 tracking-[0.2em] font-body">DENTAL CENTRE</div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`text-slate-700 hover:text-teal-600 font-light transition-colors duration-300 flex items-center ${
                    pathname === item.href ? "text-teal-600" : ""
                  }`}
                >
                  {item.name}
                  {item.submenu && (
                    <motion.div
                      animate={{ rotate: activeDropdown === item.name ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown size={16} className="ml-1" />
                    </motion.div>
                  )}
                </Link>

                {/* Dropdown Menu */}
                {item.submenu && activeDropdown === item.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-slate-100 py-2 overflow-hidden"
                  >
                    {item.submenu.map((subItem, index) => (
                      <motion.div
                        key={subItem.name}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          href={subItem.href}
                          className={`block px-4 py-3 text-slate-600 hover:text-teal-600 hover:bg-slate-50 transition-colors duration-200 ${
                            pathname === subItem.href ? "text-teal-600 bg-teal-50" : ""
                          }`}
                        >
                          {subItem.name}
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link href="/contact/book-appointment">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-full font-light transition-all duration-300 shadow-sm hover:shadow-md"
              >
                Book Appointment
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-slate-50 text-slate-700"
            whileTap={{ scale: 0.95 }}
          >
            <motion.div animate={{ rotate: isMenuOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden mt-4 pb-4 border-t border-slate-100 overflow-hidden"
            >
              {navigationItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    className={`block py-3 text-slate-700 hover:text-teal-600 font-light transition-colors duration-300 ${
                      pathname === item.href ? "text-teal-600" : ""
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="ml-4 space-y-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className={`block py-2 text-sm text-slate-600 hover:text-teal-600 transition-colors duration-300 ${
                            pathname === subItem.href ? "text-teal-600" : ""
                          }`}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-4 pt-4 border-t border-slate-100"
              >
                <Link href="/contact/book-appointment">
                  <button
                    className="w-full bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-full font-light transition-all duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Book Appointment
                  </button>
                </Link>
              </motion.div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
