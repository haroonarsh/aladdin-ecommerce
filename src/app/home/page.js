"use client";

import Hero from '@/components/hero-section/Hero';
import MidSection from '@/components/midSection/MidSection';
import React from 'react'

function page({ token }) {
  console.log("Page Token:", token); // Log the token value
  return (
    <>
          <div>

              {/* // Hero Section */}
            <Hero />

              {/* // midSection */}
            <MidSection token={token} />
          </div>
    </>
  )
}

export default page