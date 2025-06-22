import React from 'react'

const About = () => {
  return (
   
          <div
        className="min-h-screen items-center justify-start flex w-screen bg-cover bg-center relative"
        style={{
            backgroundImage: `url('https://img.freepik.com/premium-photo/hairdresser-salon-equipment-concept-premium-hairdressing-shears-accessories-haircut-men-beauty-health-concept_486333-6203.jpg?ga=GA1.1.1210140664.1747758452&semt=ais_hybrid&w=740')`, // replace with your image
        }} >
        
      <div className='w-[75%]'>
      <div className='flex flex-col p-10 items-center justify-center'>
        <h1 className='text-white font-bold text-7xl'> About US</h1>
        </div>
        <div className=''>
      <div className='p-10 flex items-center ' >
     <h1 className='text-white text-2xl'>Welcome to</h1><p className='text-3xl ml-2 text-white font-bold '> Unisex CUTTERS,</p> </div>
     <div className='ml-10 text-white'>
     <h1>your go-to unisex hair salon where style meets confidence. Located in the heart of [City/Area], we specialize in delivering modern and classic hair care services tailored for everyone — men, women, and children.<br></br>

Our team of professional stylists brings years of experience, creativity, and passion to every haircut, color, or treatment. Whether you're looking for a bold transformation, a simple trim, or a relaxing scalp treatment, we make sure you leave feeling refreshed and confident.<br></br>
</h1></div>
<div  className='ml-10 text-white'><h1>
At Unisex CUTTERS, we believe in:<br></br>

Quality Service: Using premium products and advanced techniques.<br></br>

Hygiene & Comfort: A clean, welcoming space where you can relax.<br></br>

Inclusivity: Styles and care for all genders, ages, and hair types.<br></br>

Trendy & Timeless Looks: From current fashion to timeless elegance.<br></br>

Come visit us and discover your best look yet. Book an appointment today — because your hair deserves the best care.<br></br>

     </h1>
</div>
</div>
</div>

    </div>
  )
}

export default About
