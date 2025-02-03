"use client"
import sodsData from "@/utils/sodsData";
import { Swiper, SwiperSlide } from "swiper/react";
import DefaultCard from "../card/DefaultCard";
// Import Swiper styles
import "swiper/css";


const LatestSection = () => {
    return (
        <div className="md:max-w-[1400px] mx-auto px-4">
            <p className="text-3xl font-bold text-center py-14 mt-24">The Latest at SOSDS</p>
            <div className="w-full md:w-9/12 mx-auto">
                <Swiper
                    watchSlidesProgress={true}
                    spaceBetween={20}
                    slidesPerView={1.2} // Display 1 full card and part of the second card
                    breakpoints={{
                        640: { slidesPerView: 1.5, spaceBetween: 20 },  // Tablets: 1.5 cards
                        1024: { slidesPerView: 3, spaceBetween: 30 }  // Desktops: 2.5 cards
                    }}
                    className="mySwiper"
                >
                    {sodsData?.map(data => (
                        <SwiperSlide key={data?.id} className="rounded-lg overflow-hidden">
                            <DefaultCard data={data} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>

    )
}

export default LatestSection