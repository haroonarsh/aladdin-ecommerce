"use client";

import Image from "next/image"
import Link from "next/link"
import { Mail, Phone, MapPin, Clock, Send, Facebook, Twitter, Instagram, Youtube, ChevronDown } from "lucide-react"
import Header from "@/components/header/Header"

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-red-100/70">
        {/* // Header Section */}
        <Header />
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-cyan-700 py-20 mt-18 text-white">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image src="/team/person2.jpg?height=600&width=1200" alt="Background pattern" fill className="object-cover" />
        </div>
        <div className="container relative z-10 mx-auto max-w-6xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">Contact Us</h1>
            <p className="text-lg md:text-xl">
              We're here to help! Reach out to our team with any questions, feedback, or concerns about our products or
              services.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form Section */}
      <section className="py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid gap-12 md:grid-cols-2">
            {/* Contact Information */}
            <div>
              <h2 className="mb-6 text-3xl font-bold text-cyan-700">Get in Touch</h2>
              <p className="mb-8 text-gray-700">
                We value your feedback and are committed to providing exceptional customer service. Our team is ready to
                assist you with any inquiries you may have.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-cyan-100">
                    <MapPin className="h-5 w-5 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Our Location</h3>
                    <p className="text-gray-600">123 Beauty Lane, Skincare City, SC 12345, United States</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-cyan-100">
                    <Phone className="h-5 w-5 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Phone Number</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-cyan-100">
                    <Mail className="h-5 w-5 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Email Address</h3>
                    <p className="text-gray-600">support@yourskincare.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-cyan-100">
                    <Clock className="h-5 w-5 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                    <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM EST</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="mt-8">
                <h3 className="mb-4 font-semibold text-gray-800">Follow Us</h3>
                <div className="flex gap-4">
                  <Link
                    href="#"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-600 text-white transition-colors hover:bg-teal-700"
                  >
                    <Facebook className="h-5 w-5" />
                  </Link>
                  <Link
                    href="#"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-600 text-white transition-colors hover:bg-teal-700"
                  >
                    <Twitter className="h-5 w-5" />
                  </Link>
                  <Link
                    href="#"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-600 text-white transition-colors hover:bg-teal-700"
                  >
                    <Instagram className="h-5 w-5" />
                  </Link>
                  <Link
                    href="#"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-600 text-white transition-colors hover:bg-teal-700"
                  >
                    <Youtube className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="rounded-lg bg-white p-8 shadow-md">
              <h2 className="mb-6 text-2xl font-bold text-gray-800">Send Us a Message</h2>
              <form className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-700">
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
                      Your Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="mb-1 block text-sm font-medium text-gray-700">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                    placeholder="How can we help you?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-1 block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                    placeholder="Your message here..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center rounded-md bg-cyan-600 px-6 py-3 text-white transition-colors hover:bg-teal-700"
                >
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-8">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="overflow-hidden rounded-lg">
            <div className="relative h-[400px] w-full bg-gray-200">
              <Image src="/placeholder.svg?height=400&width=1200" alt="Map location" fill className="object-cover" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="rounded-lg bg-white p-4 shadow-lg">
                  <MapPin className="h-8 w-8 text-cyan-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-cyan-700">Frequently Asked Questions</h2>

          <div className="space-y-4">
            {[
              {
                question: "How can I track my order?",
                answer:
                  "You can track your order by logging into your account and visiting the 'Order History' section. Alternatively, you can use the tracking number provided in your shipping confirmation email.",
              },
              {
                question: "What is your return policy?",
                answer:
                  "We offer a 30-day return policy for all unused and unopened products. Please contact our customer service team to initiate a return.",
              },
              {
                question: "Do you ship internationally?",
                answer:
                  "Yes, we ship to over 15 countries worldwide. Shipping rates and delivery times vary by location.",
              },
              {
                question: "Are your products cruelty-free?",
                answer:
                  "Yes, all our products are cruelty-free and never tested on animals. We're committed to ethical and sustainable beauty practices.",
              },
            ].map((faq, index) => (
              <div key={index} className="rounded-lg bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                </div>
                <div className="mt-2 text-gray-600">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-700">
              Can't find what you're looking for?{" "}
              <Link href="#" className="font-medium text-cyan-600 hover:underline">
                Check our Help Center
              </Link>{" "}
              or contact us directly.
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-cyan-700 py-16 text-white">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold">Stay Updated</h2>
          <p className="mb-8">
            Subscribe to our newsletter to receive updates on new products, special offers, and skincare tips.
          </p>
          <div className="mx-auto flex max-w-md flex-col gap-2 sm:flex-row">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 rounded-md border-0 px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <button className="rounded-md bg-white px-6 py-3 font-medium text-cyan-700 transition-colors hover:bg-gray-100">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

