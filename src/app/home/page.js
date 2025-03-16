"use client";

import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import Hero from '@/components/hero-section/Hero';
import MidSection from '@/components/midSection/MidSection';
import React from 'react'

function page() {
  return (
    <>
        <div>
              {/* // Header */}
            <Header />

              {/* // Hero Section */}
            <Hero />

              {/* // midSection */}
            <MidSection />

              {/* // Footer */}
            <Footer />
        </div>
    </>
  )
}

export default page