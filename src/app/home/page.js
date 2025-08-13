"use client";

import Hero from '@/components/hero-section/Hero';
import MidSection from '@/components/midSection/MidSection';
import React from 'react'
import { useUser } from "@/hooks/useUser";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

function Page({ token }) {
  console.log("Page Token:", token); // Log the token value

  
  const { fetchAdmin } = useUser();
  const router = useRouter();
  
    useEffect(() => {
        fetchAdmin().then((data) => {
          if (data?.user?.Role === "admin") { 
            router.push("/admin/dashboard");
          }
        }).catch((error) => {
          console.error("Error fetching admin data:", error);
          router.push("/login");
        });
    }, [token, fetchAdmin, router]);
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

export default Page;