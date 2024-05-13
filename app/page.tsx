import dynamic from 'next/dynamic'
const BuyContainer = dynamic(() => import("@/Components/PageComponent/HomeComponents/BuyContainer"))
const Catagory = dynamic(() => import("@/Components/PageComponent/HomeComponents/Catagory"))
import Hero from '@/Components/PageComponent/HomeComponents/Hero'
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Metadata } from 'next'
const ProductSlider = dynamic(() => import("@/Components/PageComponent/HomeComponents/ProductSlider"))

export async function generateMetadata(): Promise<Metadata> {

  return {
    title: '',
    //@ts-ignore
    authors: '',
    canonical: "",
    description: ``,

    keywords: [""],

    openGraph: {
      locale: "en_US",
      type: "website",
      title: "",
      description: "",
      url: "",
      siteName: "",
      images: "",
    },
    //@ts-ignore
    twitter: {
      title: "",
      description: "",
      site: "",
      images: "",
      card: "",
      creator: "",
    }
  }
}



const page = () => {

  return (
    <div className='overflow-hidden w-full'>
      <Hero />
      <Catagory />
      <ProductSlider />
      <BuyContainer />
    </div>
  )
}

export default page