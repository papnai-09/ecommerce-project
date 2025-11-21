"use client";

import Slider from "react-slick";
import Image from "next/image";

export default function HeroCarousel() {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="w-[90%] mx-auto mt-10 rounded-2xl overflow-hidden shadow-lg">
      <Slider {...settings}>
        <div>
          <Image
            src="/banner1.jpg"
            alt="Banner 1"
            width={1400}
            height={500}
            className="w-full"
          />
        </div>

        <div>
          <Image
            src="/banner2.jpg"
            alt="Banner 2"
            width={1400}
            height={500}
            className="w-full"
          />
        </div>

        <div>
          <Image
            src="/banner3.jpg"
            alt="Banner 3"
            width={1400}
            height={500}
            className="w-full"
          />
        </div>
      </Slider>
    </div>
  );
}
