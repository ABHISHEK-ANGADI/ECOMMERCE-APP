import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
        <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={'US'}/>
        </div>
        <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src={assets.about_img}/>
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gary-600'>
            <p>E-commerce "About Us" page should contain your brand story, including why you started the business and who you serve; your mission and values, such as your commitment to sustainability; information about your team or face of the business; and social proof like testimonials, press mentions, or customer reviews to build trust and connection with shoppers. </p>
            <p>information about your team or face of the business; and social proof like testimonials, press mentions, or customer reviews to build trust and connection with shoppers.</p>
            <b className='text-gray-800'>Our Mission</b>
            <p>An e-commerce website's "Our Mission" content should be a concise statement within the About Us page that clearly articulates the company's core purpose, values, and vision, explaining why the business exists beyond just selling products and how it aims to make a positive impact</p>

          </div>

        </div>
        <div className='text-xl py-4 '>
          <Title text1={'WHY'} text2={'CHOOSE US'}/>
        </div>
        <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Quality Assurance:</b>
            <p  className='text-gray-600'>An "ecommerce website about Quality Assurance" refers to a website that either provides services for e-commerce quality assurance or offers information and resources related to the principles and practices of quality assurance in the e-commerce industry</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Convenience:</b>
            <p className='text-gray-600'> A digital platform designed to offer customers unparalleled convenience by providing 24/7 access to a wide array of products and services, allowing them to browse, compare, and purchase items from anywhere, at any time, using various devices</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Exceptional Customer Service:</b>
            <p  className='text-gray-600'>Think again. Of course, being able to find the desired product is super important, which is why anis necessary in order to never let any sales slip through the net. But when people are shopping online, simply making the purchase is not the only thing that counts.</p>
          </div>


        </div>
        <NewsletterBox />
    </div>
  )
}

export default About