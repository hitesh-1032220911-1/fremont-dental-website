import type React from "react"
import type { Metadata } from "next"
import { Poppins, Open_Sans } from "next/font/google"
import "./globals.css"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"

const poppins = Poppins({ 
  subsets: ["latin"], 
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins"
})

const openSans = Open_Sans({ 
  subsets: ["latin"], 
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-open-sans"
})

export const metadata: Metadata = {
  title: "Fremont Village Dental Centre - Port Coquitlam Dentist | Dr. Manpreet Grewal",
  description:
    "Premier dental care in Port Coquitlam since 2010. Dr. Manpreet Grewal offers cosmetic dentistry, Invisalign, preventative care & family dentistry. Book your appointment today!",
  keywords: [
    "dentist Port Coquitlam",
    "Fremont Village Dental",
    "Dr. Manpreet Grewal",
    "cosmetic dentistry Port Coquitlam",
    "Invisalign Port Coquitlam",
    "family dentist",
    "dental clinic Port Coquitlam",
    "teeth whitening",
    "dental implants",
    "emergency dentist",
    "preventative dental care",
    "oral surgery Port Coquitlam",
  ],
  authors: [{ name: "Dr. Manpreet Grewal" }],
  creator: "Fremont Village Dental Centre",
  publisher: "Fremont Village Dental Centre",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://fremontvillagedentist.com",
    siteName: "Fremont Village Dental Centre",
    title: "Fremont Village Dental Centre - Port Coquitlam Dentist | Dr. Manpreet Grewal",
    description:
      "Premier dental care in Port Coquitlam since 2010. Dr. Manpreet Grewal offers cosmetic dentistry, Invisalign, preventative care & family dentistry.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Fremont Village Dental Centre - Port Coquitlam Dentist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fremont Village Dental Centre - Port Coquitlam Dentist",
    description:
      "Premier dental care in Port Coquitlam since 2010. Dr. Manpreet Grewal offers cosmetic dentistry, Invisalign & family dentistry.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://fremontvillagedentist.com",
  },
  verification: {
    google: "your-google-verification-code",
  },
  other: {
    "geo.region": "CA-BC",
    "geo.placename": "Port Coquitlam",
    "geo.position": "49.2827;-122.7931",
    ICBM: "49.2827, -122.7931",
  },
    generator: 'v0.dev'
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: "Fremont Village Dental Centre",
  description:
    "Premier dental care in Port Coquitlam since 2010. Dr. Manpreet Grewal offers cosmetic dentistry, Invisalign, preventative care & family dentistry.",
  url: "https://fremontvillagedentist.com",
  telephone: "+1-604-941-7700",
  email: "info@fremontvillagedentist.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "3292 Westwood Street",
    addressLocality: "Port Coquitlam",
    addressRegion: "BC",
    postalCode: "V3B 4S6",
    addressCountry: "CA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "49.2827",
    longitude: "-122.7931",
  },
  openingHours: ["Mo-Th 08:00-20:00", "Fr 08:00-18:00", "Sa 09:00-16:00"],
  priceRange: "$$",
  image: "https://fremontvillagedentist.com/og-image.png",
  founder: {
    "@type": "Person",
    name: "Dr. Manpreet Grewal",
    jobTitle: "Dentist",
    alumniOf: "University of British Columbia",
  },
  areaServed: ["Port Coquitlam", "Coquitlam", "Burnaby", "New Westminster", "Surrey", "Tri-Cities"],
  medicalSpecialty: [
    "Cosmetic Dentistry",
    "Preventative Dentistry",
    "Restorative Dentistry",
    "Orthodontics",
    "Oral Surgery",
    "Family Dentistry",
  ],
  paymentAccepted: ["Cash", "Credit Card", "Insurance", "Financing"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Dental Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Cosmetic Dentistry",
          description: "Teeth whitening, veneers, and smile makeovers",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Invisalign",
          description: "Clear aligner orthodontic treatment",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Preventative Care",
          description: "Regular cleanings, exams, and preventative treatments",
        },
      },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "150",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      author: {
        "@type": "Person",
        name: "Sarah M.",
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
      },
      reviewBody:
        "Dr. Grewal and her team are amazing! The office is modern and clean, and they made me feel so comfortable during my visit.",
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <link rel="canonical" href="https://fremontvillagedentist.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#14b8a6" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="msapplication-TileColor" content="#14b8a6" />
      </head>
      <body className={`${poppins.variable} ${openSans.variable} font-sans`}>
        <Header />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
