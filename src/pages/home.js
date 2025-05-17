import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const HomePage = () => {

  return (
    <div className="">
      <section className="relative h-screen">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper h-full"
        >
          <SwiperSlide>
            <div
              className="flex items-center justify-center h-full bg-cover bg-center"
              style={{
                backgroundImage: "url('https://via.placeholder.com/1500x800')",
              }}
            >
              <div className="text-center p-6 md:p-12 bg-black bg-opacity-50">
                <h2 className="text-4xl font-bold mb-4">
                  Cybersecurity Solutions for the Future
                </h2>
                <p className="text-lg mb-6">
                  Protect your business with the most advanced technologies in
                  the industry.
                </p>
                <button className="px-6 py-3 bg-green-400 text-white text-lg font-semibold rounded-lg transition duration-300 hover:bg-green-500">
                  Learn More
                </button>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="flex items-center justify-center h-full bg-cover bg-center"
              style={{
                backgroundImage: "url('https://via.placeholder.com/1500x800')",
              }}
            >
              <div className="text-center p-6 md:p-12 bg-black bg-opacity-50">
                <h2 className="text-4xl font-bold mb-4">
                  Always Stay One Step Ahead
                </h2>
                <p className="text-lg mb-6">
                  Our solutions ensure your systems are always secure and
                  protected against emerging threats.
                </p>
                <button className="px-6 py-3 bg-[#00df9a] text-black text-lg font-semibold rounded-lg transition duration-300 hover:bg-[#00df9a]/80">
                  Explore Now
                </button>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="flex items-center justify-center h-full bg-cover bg-center"
              style={{
                backgroundImage: "url('https://via.placeholder.com/1500x800')",
              }}
            >
              <div className="text-center p-6 md:p-12 bg-black bg-opacity-50">
                <h2 className="text-4xl font-bold mb-4">
                  Security in the Cloud
                </h2>
                <p className="text-lg mb-6">
                  Cloud-based security for businesses of all sizes, tailored to
                  your needs.
                </p>
                <button className="px-6 py-3 bg-[#00df9a] text-black text-lg font-semibold rounded-lg transition duration-300 hover:bg-[#00df9a]/80">
                  Get Started
                </button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  );
};

export default HomePage;
