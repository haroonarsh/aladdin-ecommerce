"use client";

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Heart, Shield, Truck, Users } from "lucide-react"
import Header from "@/components/header/Header"

export default function AboutUs() {

  return (
    <>
        {/* // Header Section */}
    <Header />
        {/* // Main Section */}
    <div className="min-h-screen bg-red-100/70 mt-18">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-cyan-700 py-20 text-white">
      <div className="absolute inset-0 z-0 opacity-20">
          <Image src="/team/person2.jpg?height=600&width=1200" alt="Background pattern" fill className="object-cover" />
        </div>
        <div className="container relative z-10 mx-auto max-w-6xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">About Our Story</h1>
            <p className="text-lg md:text-xl">
              {`We're`} on a mission to make quality skincare products accessible to everyone, helping you look and feel
              your best every day.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-cyan-700">Our Story</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Founded in 2015, our journey began when our founder, Sarah, struggled to find effective skincare
                  products that {`didn't irritate her sensitive skin. After years of frustration, she decided to create
                  her own solution.`}
                </p>
                <p>
                  Working with leading dermatologists and cosmetic chemists, we developed a line of products that
                  combine natural ingredients with scientific innovation. Our formulations are designed to be gentle yet
                  effective, suitable for all skin types.
                </p>
                <p>
                  {`What started as a small operation in Sarah's kitchen has grown into a beloved brand trusted by
                  thousands of customers worldwide. Despite our growth, we remain committed to our founding principles:
                  quality, transparency, and customer satisfaction.`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-cyan-700">Our Values</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg bg-red-50 p-6 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-cyan-100">
                <Heart className="h-8 w-8 text-cyan-600" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-800">Quality First</h3>
              <p className="text-gray-600">
                We never compromise on ingredients or formulations, ensuring every product meets our high standards.
              </p>
            </div>

            <div className="rounded-lg bg-red-50 p-6 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-cyan-100">
                <Shield className="h-8 w-8 text-cyan-600" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-800">Transparency</h3>
              <p className="text-gray-600">
                {`We believe in being honest about what goes into our products and how they're made.`}
              </p>
            </div>

            <div className="rounded-lg bg-red-50 p-6 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-cyan-100">
                <Truck className="h-8 w-8 text-cyan-600" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-800">Sustainability</h3>
              <p className="text-gray-600">
                From ingredients to packaging, we strive to minimize our environmental impact.
              </p>
            </div>

            <div className="rounded-lg bg-red-50 p-6 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-cyan-100">
                <Users className="h-8 w-8 text-cyan-600" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-800">Community</h3>
              <p className="text-gray-600">
                We value the relationships we build with our customers and partners around the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-cyan-700">Meet Our Team</h2>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {[
              { name: "Sarah Johnson", role: "Founder & CEO", image: "/team/person1.jpg?height=400&width=400" },
              {
                name: "Michael Chen",
                role: "Head of Product Development",
                image: "/team/person3.jpg?height=400&width=400",
              },
              { name: "Aisha Patel", role: "Chief Dermatologist", image: "/team/person2.jpg?height=400&width=400" },
              { name: "David Kim", role: "Marketing Director", image: "/team/person3.jpg?height=400&width=400" },
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="mx-auto h-48 w-48 object-center object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-cyan-700 py-16 text-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="text-4xl font-bold md:text-5xl">7+</div>
              <p className="mt-2">Years in Business</p>
            </div>
            <div>
              <div className="text-4xl font-bold md:text-5xl">50k+</div>
              <p className="mt-2">Happy Customers</p>
            </div>
            <div>
              <div className="text-4xl font-bold md:text-5xl">30+</div>
              <p className="mt-2">Product Range</p>
            </div>
            <div>
              <div className="text-4xl font-bold md:text-5xl">15</div>
              <p className="mt-2">Countries Served</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="rounded-lg bg-red-50 p-8 text-center md:p-12">
            <h2 className="mb-4 text-3xl font-bold text-gray-800">Ready to experience the difference?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600">
              Join thousands of satisfied customers who have transformed their skincare routine with our products.
            </p>
            <Link
              href="/products-page"
              className="inline-flex items-center rounded-md bg-cyan-600 px-6 py-3 text-white transition-colors hover:bg-cyan-700"
            >
              Shop Now <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>

        </>
  )
}

