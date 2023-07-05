// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { EffectCoverflow } from "swiper";

const SwiperFun = () => {
  const slideData = [
    {
      id: 0,
      imageUrl: "/images/clock.svg",
      title: "Быстро",
      text: "Наша цель помочь вам продать машину как можно быстрее, оформив все необходимые докуметы в ускоренном порядке, и мы сделаем для этого всё от себя зависящее",
    },
    {
      id: 1,
      imageUrl: "/images/check.svg",
      title: "Просто",
      text: "Мы купим вашу машину при любом условии!  Не важно есть ли на ней техосмотр, нуждается ли она в ремонте или имеет неисправности; Мы приобритём вашу машину без лишних задержек и вопросов.",
    },
    {
      id: 2,
      imageUrl: "/images/euro.svg",
      title: "Прибыльно",
      text: "Разумеется вы хотели бы продать свою машину с максимальной выгодой. Мы способны предложить вам за ваш автомобиль самую высокую цену на рынке.",
    },
  ];
  return (
    <Swiper
      effect={"coverflow"}
      initialSlide="1"
      spaceBetween={0}
      centeredSlides={true}
      slidesPerView={3}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      }}
      modules={[EffectCoverflow]}
      className="advantage__slider"
    >
      {slideData.map((slide) => (
        <>
          <SwiperSlide key={slide.id}>
            <div className="advantage__card ">
              <img className="mx-auto mt-4" src={slide.imageUrl} alt="" />
              <h2 className="font-robo font-bold text-prim text-center">{slide.title}</h2>
              <p className="font-arimo text-prim text-center">{slide.text}</p>
            </div>
          </SwiperSlide>

          <div className="slider__controller">
            <div className="swiper-button-prev slider-arrow">-</div>
            <div className="swiper-button-next slider-arrow">+</div>
          </div>
        </>
      ))}
    </Swiper>
  );
};

export default SwiperFun;
