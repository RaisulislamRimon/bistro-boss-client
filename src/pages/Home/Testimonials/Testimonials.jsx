import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";

export const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setReviews(data);
      })
      .catch((error) => console.log(error));
  }, []);
  console.log(reviews);
  return (
    <section className="my-20">
      <SectionTitle
        subHeading={"What Our Clients Say"}
        heading={"Testimonials"}
      />
      <div>
        {reviews.length}
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {/* <SwiperSlide>Slide 1</SwiperSlide> */}
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div>
                <p>Review details{reviews?.details}</p>
                <p className="text-yellow-600">Rating:{reviews?.rating}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
