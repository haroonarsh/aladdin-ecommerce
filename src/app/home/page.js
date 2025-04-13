"use client";

import Hero from '@/components/hero-section/Hero';
import MidSection from '@/components/midSection/MidSection';
import React from 'react'

function page() {
  return (
    <>
          <div>

              {/* // Hero Section */}
            <Hero />

              {/* // midSection */}
            <MidSection />
          </div>
    </>
  )
}

export default page