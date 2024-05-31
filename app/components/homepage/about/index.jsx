// @flow strict
'use client'
import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import AOS from 'aos';
import React from "react";
import 'aos/dist/aos.css';
import { useEffect ,useState } from "react";


function AboutSection() {
  useEffect(() => {
    AOS.init({
      duration:600
      // Global settings here (see: https://github.com/michalsnik/aos#javascript-options)
    });
  }, []);

  return (
    AOS.refresh(),
    <div id="about" className="my-12 lg:my-16 relative">
      <div data-aos="fade-left" className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-gradient-to-r from-green-500 to-green-600 w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div data-aos="zoom-in-up" className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="order-2 lg:order-1">
          <p className="font-bold mb-5 text-green-500 text-xl ">
           -- Profile Summary --
          </p>
          <p className="text-gray-600 text-sm lg:text-lg">
            {personalData.description}
          </p>
        </div>
        <div className="flex justify-center order-1 lg:order-2">
          <Image
            src={personalData.profile}
            width={350}
            height={300}
            alt="Vikrant"
            className="rounded-lg transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;