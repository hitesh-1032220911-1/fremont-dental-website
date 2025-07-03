import Link from "next/link"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-6">
              <div className="text-2xl font-light text-white font-heading">
                Fremont Village
              </div>
              <div className="text-sm font-thin text-slate-300 tracking-[0.2em] font-body">DENTAL CENTRE</div>
            </div>
            <p className="text-slate-400 font-light leading-relaxed">
              Your trusted dental home in Port Coquitlam since 2010. Dr. Manpreet Grewal and our caring team provide
              exceptional family dental care.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-medium mb-6">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="text-slate-400 hover:text-teal-400 transition-colors font-light">
                  About Dr. Grewal
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-400 hover:text-teal-400 transition-colors font-light">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/new-patients" className="text-slate-400 hover:text-teal-400 transition-colors font-light">
                  New Patients
                </Link>
              </li>
              <li>
                <Link href="/technology" className="text-slate-400 hover:text-teal-400 transition-colors font-light">
                  Technology
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-slate-400 hover:text-teal-400 transition-colors font-light">
                  Dental Health Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-medium mb-6">Popular Services</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/services/cosmetic-dentistry"
                  className="text-slate-400 hover:text-teal-400 transition-colors font-light"
                >
                  Cosmetic Dentistry
                </Link>
              </li>
              <li>
                <Link
                  href="/services/preventative-dentistry"
                  className="text-slate-400 hover:text-teal-400 transition-colors font-light"
                >
                  Preventative Care
                </Link>
              </li>
              <li>
                <Link
                  href="/services/invisalign"
                  className="text-slate-400 hover:text-teal-400 transition-colors font-light"
                >
                  Invisalign
                </Link>
              </li>
              <li>
                <Link
                  href="/contact/book-appointment"
                  className="text-slate-400 hover:text-teal-400 transition-colors font-light"
                >
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-medium mb-6">Contact Info</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center space-x-3">
                <Phone size={16} className="text-teal-400" />
                <span className="text-slate-400 font-light">(604) 941-7700</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={16} className="text-teal-400" />
                <span className="text-slate-400 font-light">info@fremontvillagedentist.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={16} className="text-teal-400 mt-0.5" />
                <span className="text-slate-400 font-light">
                  3292 Westwood Street
                  <br />
                  Port Coquitlam, BC V3B 4S6
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Clock size={16} className="text-teal-400" />
                <span className="text-slate-400 font-light">Mon-Sat: Extended Hours</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm text-slate-500">
          <p>&copy; 2024 Fremont Village Dental Centre. All rights reserved. | Dr. Manpreet Grewal, DDS</p>
        </div>
      </div>
    </footer>
  )
}
