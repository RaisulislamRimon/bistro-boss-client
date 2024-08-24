import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

export default function Category () {
  return (
    <section>
      <SectionTitle subHeading={"From 11.00AM to 10.00PM"} heading={"Order Online"} />
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <span className="flex flex-row">
            <img src={slide1} alt={slide1} />
            <span className="text-md font-bold mb-10">
              Slide1
            </span>
          </span>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt={slide2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt={slide3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt={slide4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt={slide5} />
        </SwiperSlide>
      </Swiper>
    </section>
  )
}
