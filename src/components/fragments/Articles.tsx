"use client";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import Link from "next/link";

const Articles = () => {
  return (
    <article className="mt-10 lg:px-20">
      <div className="container w-full h-full mx-auto lg:grid grid-cols-2 py-10">
        {/* Section kiri dengan gambar besar */}
        <Link href={"/"} className="hidden lg:block relative w-full h-full rounded-lg group">
          <Image
          className="rounded-lg group-hover:brightness-50 transition-all duration-300 ease-in-out"
            fill
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center" }}
            src="/img/wisata/jip-bromo.webp"
            alt="Aktivitas Seru di Bromo"
          />
          <p className="absolute bottom-[10%] px-5 text-white font-bold">
            Aktivitas Seru yang Wajib Dicoba Saat ke Taman Nasional Bromo Tengger Semeru
          </p>
          <p className="absolute bottom-[5%] pl-5 text-white font-semibold">
            10 Februari 2024
          </p>
        </Link>

        {/* Section kanan dengan artikel */}
        <section className="relative flex flex-col px-5 md:px-10 w-full h-full">
          <div>
            <h3 className="text-3xl font-bold">Artikel</h3>
            <p className="md:text-lg font-light py-5">
              Meskipun gambar bisa menggambarkan ribuan kata, beberapa cerita dan pengalaman lebih baik dijelaskan secara detail.
            </p>
            <p className="lg:text-lg font-light pb-5">
              Tidak hanya memuaskan mata, tetapi juga memastikan Anda yakin sebelum Anda
              berangkat untuk bepergian. Bagi Anda yang merasakan kerinduan akan petualangan,
              kunjungi blog untuk informasi lebih lanjut.
            </p>
          </div>

          {/* Swiper Slider */}
          <div className="relative">
            <Swiper
              modules={[Navigation]}
              navigation={{
                prevEl: ".swiper-button-prev",
                nextEl: ".swiper-button-next",
              }}
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 1 },
                1024: { slidesPerView: 2 },
              }}
              className="mySwiper"
            >
              {/* Slide 1 */}
              <SwiperSlide>
                <Link href={"/"} className="relative rounded-lg group">
                  <Image
                    width={1000}
                    height={1000}
                    src="/img/wisata/surabayazoo.jpg"
                    alt="Wisata Kebun Binatang Surabaya"
                  />
                  <div className="absolute bottom-0 text-white p-5 bg-black bg-opacity-30 w-full group-hover:h-full group-hover:bg-opacity-55 flex flex-col justify-center transform transition-all duration-300 ease-in-out">
                    <p className="text-white font-semibold">Wisata Kebun Binatang Surabaya</p>
                    <p className="text-white font-semibold">9 Februari 2024</p>
                  </div>
                </Link>
              </SwiperSlide>

              {/* Slide 2 */}
              <SwiperSlide>
                <Link href={"/"} className="relative rounded-lg group">
                  <Image
                    width={1000}
                    height={1000}
                    src="https://images.unsplash.com/photo-1581340151765-7ac189960bc9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Pesona Kawah Ijen"
                  />
                  <div className="absolute bottom-0 text-white p-5 bg-black bg-opacity-30 w-full group-hover:h-full group-hover:bg-opacity-55 flex flex-col justify-center transform transition-all duration-300 ease-in-out">
                    <p className="text-white font-semibold">Pesona Kawah Ijen Memikat Mata</p>
                    <p className="text-white font-semibold">8 Februari 2024</p>
                  </div>
                </Link>
              </SwiperSlide>

              {/* Slide 3 */}
              <SwiperSlide>
                <Link href={"/"} className="relative rounded-lg group">
                  <Image
                    width={1000}
                    height={1000}
                    src="/img/food/foodsurabaya.jpg"
                    alt="Cobain Kuliner Khas Surabaya"
                  />
                  <div className="absolute bottom-0 text-white p-5 bg-black bg-opacity-30 w-full group-hover:h-full group-hover:bg-opacity-55 flex flex-col justify-center transform transition-all duration-300 ease-in-out">
                    <p className="text-white font-semibold">Cobain Kuliner Khas Surabaya</p>
                    <p className="text-white font-semibold">7 Februari 2024</p>
                  </div>
                </Link>
              </SwiperSlide>

              {/* Slide 4 */}
              <SwiperSlide>
                <Link href={"/"} className="relative rounded-lg group">
                  <Image
                    width={1000}
                    height={1000}
                    src="https://images.unsplash.com/photo-1624153794998-50ca0ebfc6ff?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Ada Apa Saja di Museum Angkut?"
                  />
                  <div className="absolute bottom-0 text-white p-5 bg-black bg-opacity-30 w-full group-hover:h-full group-hover:bg-opacity-55 flex flex-col justify-center transform transition-all duration-300 ease-in-out">
                    <p className="text-white font-semibold">Ada Apa Saja di Museum Angkut?</p>
                    <p className="text-white font-semibold">6 Februari 2024</p>
                  </div>
                </Link>
              </SwiperSlide>

              {/* Slide 5 */}
              <SwiperSlide>
                <Link href={"/"} className="relative rounded-lg group">
                  <Image
                    width={1000}
                    height={1000}
                    src="https://indonesiakaya.com/wp-content/uploads/2020/10/1357_Saat_air_surut_karang-karang_di_Pantai_Balekambang_bermunculan_2-3.jpg"
                    alt="Hal Menarik di Pantai Balekambang"
                  />
                  <div className="absolute bottom-0 text-white p-5 bg-black bg-opacity-30 w-full group-hover:h-full group-hover:bg-opacity-55 flex flex-col justify-center transform transition-all duration-300 ease-in-out">
                    <p className="text-white font-semibold">Hal Menarik di Pantai Balekambang</p>
                    <p className="text-white font-semibold">5 Februari 2024</p>
                  </div>
                </Link>
              </SwiperSlide>
            </Swiper>

            {/* Navigasi Swiper */}
            <button className="swiper-button-prev text-white hover:text-yellow-300">
              <ArrowLeft />
            </button>
            <button className="swiper-button-next text-white hover:text-yellow-300">
              <ArrowRight />
            </button>
            
          </div>

        </section>
      </div>
    </article>
  );
};

export default Articles;
