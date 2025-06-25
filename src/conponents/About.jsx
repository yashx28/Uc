import React from 'react';

const About = () => {
  return (
    <div
      className="min-h-screen w-screen bg-cover bg-center relative flex items-center"
      style={{
        backgroundImage: `url('https://img.freepik.com/premium-photo/hairdresser-salon-equipment-concept-premium-hairdressing-shears-accessories-haircut-men-beauty-health-concept_486333-6203.jpg?ga=GA1.1.1210140664.1747758452&semt=ais_hybrid&w=740')`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl px-4 sm:px-8 md:px-12 py-16 mx-auto text-white">
        <div className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold">About Us</h1>
        </div>

        <div className="space-y-6 text-base sm:text-lg leading-relaxed">
          <p>
            Welcome to <span className="text-xl font-bold">Unisex CUTTERS</span>, your go-to unisex hair salon where style meets confidence. Located in the heart of <span className="italic">[City/Area]</span>, we specialize in delivering modern and classic hair care services tailored for everyone — men, women, and children.
          </p>

          <p>
            Our team of professional stylists brings years of experience, creativity, and passion to every haircut, color, or treatment. Whether you're looking for a bold transformation, a simple trim, or a relaxing scalp treatment, we make sure you leave feeling refreshed and confident.
          </p>

          <div>
            <h2 className="text-lg sm:text-xl font-semibold">At Unisex CUTTERS, we believe in:</h2>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li><strong>Quality Service:</strong> Using premium products and advanced techniques.</li>
              <li><strong>Hygiene & Comfort:</strong> A clean, welcoming space where you can relax.</li>
              <li><strong>Inclusivity:</strong> Styles and care for all genders, ages, and hair types.</li>
              <li><strong>Trendy & Timeless Looks:</strong> From current fashion to timeless elegance.</li>
            </ul>
          </div>

          <p>
            Come visit us and discover your best look yet. <strong>Book an appointment today</strong> — because your hair deserves the best care.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
