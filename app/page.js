"use client"
import Categories from '@/components/Home/Categories'
import Hero from '@/components/Home/Hero'
import Sponsored from '@/components/Home/Sponsored'
import Footer from '@/components/Layout/Footer'
import Header from '@/components/Layout/Header'
import React from 'react'

const page = () => {
  return (
    <div>
      <Header activeHeading={1}/>
      <Hero />
      <Categories />
      <Sponsored />
      <Footer />
    </div>
  )
}

export default page