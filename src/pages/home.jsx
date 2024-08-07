import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Content from '../components/Content'
import Content2 from '../components/Content2'
import Content3 from '../components/Content3'
import ContentCard from '../components/ContentCard'
import Content4 from '../components/Content4'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className='w-full min-h-screen h-max '>   
        <Navbar />
        <Banner />
        <Content />
        <Content2 />
        <Content3 />
        <ContentCard />
        <Content4 />
        <Footer />
    </div>
  )
}
