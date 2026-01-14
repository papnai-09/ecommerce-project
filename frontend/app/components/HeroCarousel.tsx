"use client";

import Slider from "react-slick";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function HeroCarousel() {
  const settings = {
    dots: false,  // NO DOTS
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 4200,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,

    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div
      className="
        w-[93%] max-w-7x1 mx-auto mt-10 relative 
        rounded-xl overflow-hidden
        bg-white border border-gray-200
        shadow-[0_10px_30px_rgba(0,0,0,0.10)]
      "
    >
      <Slider {...settings}>
        {["/ban1.jpg", "/ban2.jpg", "/ban3.jpg"].map((img, i) => (
          <div key={i}>
            <Image
              src={img}
              alt={`banner-${i}`}
              width={1400}
              height={400}
              className="w-full h-[300px] md:h-[360px] object-fill"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

/* NEXT BUTTON — right side of center */
function NextArrow({ onClick }: any) {
  return (
    <button
      onClick={onClick}
      className="
        absolute bottom-4 z-20
        left-1/2 translate-x-[50px]     /* Move slightly right from center */
        w-10 h-10 rounded-full
        bg-white border border-gray-300
        hover:bg-gray-100 shadow-md
        text-gray-700 flex items-center justify-center
        transition-all duration-200
      "
    >
      <ArrowRight size={20} />
    </button>
  );
}

/* PREV BUTTON — left side of center */
function PrevArrow({ onClick }: any) {
  return (
    <button
      onClick={onClick}
      className="
        absolute bottom-4 z-20
        left-1/2 -translate-x-[90px]    /* Move left from center */
        w-10 h-10 rounded-full
        bg-white border border-gray-300
        hover:bg-gray-100 shadow-md
        text-gray-700 flex items-center justify-center
        transition-all duration-200
      "
    >
      <ArrowLeft size={20} />
    </button>
  );
}
