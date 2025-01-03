import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import usePaginationPosition from "@/hooks/usePaginationPosition";
import HeroSlide from "@/components/molecules/HeroSlide";
import heroData from "@/data/HeroData";
import styles from "@/globalStyles.module.css";

const Hero = () => {
  usePaginationPosition();

  return (
    <div id="hero-section" className={styles.heroContainer}>
      <Swiper
        modules={[Pagination, Autoplay, EffectFade]}
        slidesPerView={1}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
          type: "bullets",
          bulletClass: "swiper-custom-bullet",
          bulletActiveClass: "swiper-custom-bullet-active",
        }}
        autoplay={{ delay: 2000 }}
      >
        {heroData.map((item) => (
          <SwiperSlide key={item.id} className={styles.heroSlide}>
            <HeroSlide item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-pagination" />
    </div>
  );
};

export default Hero;