"use client";

import Lottie from "lottie-react";
import React from "react";
import WelcomeAnimation from "../../public/lottie/welcome_animation.json";

const Herosection = () => {
  return (
    <section className="gradient-bg hero-pattern py-10">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          <div className="text-white slide-in  flex justify-center flex-col items-center">
            <h1 className="text-2xl lg:text-4xl font-bold mb-6 leading-tight max-w-2xl">
              Temukan Tukang
              <span className="text-yellow-400"> Profesional </span>
              Terpercaya
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-gray-100">
              Platform terdepan untuk menghubungkan Anda dengan tukang berpengalaman di seluruh Indonesia
            </p>
            <div className="flex flex-col sm:flex-row w-full gap-4">
              <button className="bg-gradient-to-r cursor-pointer from-blue-400 to-purple-500 text-primary px-8 py-3 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105">
                Cari Tukang Sekarang
              </button>
              <button className="border-2 border-white cursor-pointer text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-[#667eea]  transition-all duration-200">
                Daftar Sebagai Tukang
              </button>
            </div>
          </div>
          <div className="flex justify-center ">
            <div className="w-[400px] bounce-in">
              <Lottie animationData={WelcomeAnimation} loop={true} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herosection;
