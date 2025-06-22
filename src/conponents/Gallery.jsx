import React from "react";

const Gallery = () => {
  const gallery = [
    "https://img.freepik.com/free-photo/hairdresser-combing-clients-hair_107420-94780.jpg?ga=GA1.1.1210140664.1747758452&semt=ais_hybrid&w=740",
    "https://img.freepik.com/premium-photo/stylish-man-sitting-barbershop_926199-3955627.jpg?ga=GA1.1.1210140664.1747758452&semt=ais_hybrid&w=740",
    "https://img.freepik.com/premium-photo/groom-barber-shop_419896-15924.jpg?ga=GA1.1.1210140664.1747758452&semt=ais_hybrid&w=740",
    "https://img.freepik.com/free-photo/barber-shaves-bearded-man-vintage-atmosphere_1153-7903.jpg?ga=GA1.1.1210140664.1747758452&semt=ais_hybrid&w=740",
    "https://img.freepik.com/premium-photo/professional-barber-working-his-barbershop_118628-124.jpg?ga=GA1.1.1210140664.1747758452&semt=ais_hybrid&w=740",
    "https://img.freepik.com/free-photo/medium-shot-hairstylist-cutting-client-s-hair_23-2148242836.jpg?ga=GA1.1.1210140664.1747758452&semt=ais_hybrid&w=740",
    "https://img.freepik.com/premium-photo/man-portrait-scissors-with-straight-razor-hair-care-hairstyle-grooming-as-barber-studio-male-person-professional-personal-hygiene-beauty-haircut-barbershop-with-tools_590464-449622.jpg?ga=GA1.1.1210140664.1747758452&semt=ais_hybrid&w=740",
    "https://img.freepik.com/free-photo/medium-shot-hairdresser-combing-hair_23-2149141716.jpg?ga=GA1.1.1210140664.1747758452&semt=ais_hybrid&w=740",
    "https://img.freepik.com/free-photo/hair-stylist-drying-his-client-s-hair_23-2148242788.jpg?ga=GA1.1.1210140664.1747758452&semt=ais_hybrid&w=740",
  ];

  return (
    <section
      id="gallery"
      className="min-h-screen w-full px-10 py-20 bg-gradient-to-b from-black to-gray-900 text-white"
    >
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
        Our Salon Gallery
      </h1>

      <div className="space-y-6">
        <div className="flex justify-center gap-6 flex-wrap">
          {gallery.slice(0, 3).map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Gallery ${index + 1}`}
              className="w-full sm:w-[30%] h-60 object-cover rounded-xl shadow-md hover:scale-105 transition"
            />
          ))}
        </div>
        <div className="flex justify-center gap-6 flex-wrap">
          {gallery.slice(3, 6).map((img, index) => (
            <img
              key={index + 3}
              src={img}
              alt={`Gallery ${index + 4}`}
              className="w-full sm:w-[30%] h-60 object-cover rounded-xl shadow-md hover:scale-105 transition"
            />
          ))}
        </div>
        <div className="flex justify-center gap-6 flex-wrap">
          {gallery.slice(6, 9).map((img, index) => (
            <img
              key={index + 6}
              src={img}
              alt={`Gallery ${index + 7}`}
              className="w-full sm:w-[30%] h-60 object-cover rounded-xl shadow-md hover:scale-105 transition"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
