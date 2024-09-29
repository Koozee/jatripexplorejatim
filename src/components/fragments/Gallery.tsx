"use client"
import { useState } from "react";

const Gallery = () => {

    const [activeIndex, setActiveIndex] = useState(1);

    const indexList = [
        {
            "id": 1,
            "location": "Surabaya",
            "thumbnails": "/img/Surabaya.webp",
            "img1": "/img/gallery/surabaya1.jpeg",
            "img2": "/img/gallery/surabaya2.jpeg",
            "img3": "/img/gallery/surabaya3.jpeg",
            "img4": "/img/gallery/surabaya4.jpeg",
            "img5": "/img/gallery/surabaya5.jpeg",
            "img6": "/img/gallery/surabaya6.jpeg",
            "description": `Ibukota provinsi Jawa Timur dan kota terbesar di
                                            wilayah
                                            ini.
                                            Surabaya merupakan
                                            pusat
                                            perdagangan,
            industri, dan pendidikan yang penting di Jawa Timur.`
        },
        {
            "id": 2,
            "location": "Malang",
            "thumbnails": "/img/malang.png",
            "img1": "/img/gallery/malang1.jpg",
            "img2": "/img/gallery/malang2.jpg",
            "img3": "/img/gallery/malang3.jpg",
            "img4": "/img/gallery/malang4.webp",
            "img5": "/img/gallery/malang5.png",
            "img6": "/img/gallery/malang6.webp",
            "description": `Kota yang terkenal dengan udara sejuknya dan
                                    keindahan alamnya. Malang juga dikenal dengan sebutan "Kota Pendidikan" karena
                                    banyaknya perguruan tinggi di sana.`
        },
        {
            "id": 3,
            "thumbnails": "/img/banyuwangi.png",
            "location": "Banyuwangi",
            "img1": "/img/gallery/banyuwangi1.jpg",
            "img2": "/img/gallery/banyuwangi2.jpg",
            "img3": "/img/gallery/banyuwangi3.jpeg",
            "img4": "/img/gallery/banyuwangi4.jpeg",
            "img5": "/img/gallery/banyuwangi5.jpg",
            "img6": "/img/gallery/banyuwangi6.jpg",
            "description": `Kabupaten yang terletak di ujung timur Jawa Timur,
                                    terkenal dengan keindahan alamnya seperti Pantai Pulau Merah, Kawah Ijen, dan Taman
                                    Nasional Baluran.`
        },
        {
            "id": 4,
            "location": "Batu",
            "thumbnails": "/img/batu.png",
            "img1": "/img/gallery/batu1.jpg",
            "img2": "/img/gallery/batu2.jpg",
            "img3": "/img/gallery/batu3.jpg",
            "img4": "/img/gallery/batu4.jpg",
            "img5": "/img/gallery/batu5.jpg",
            "img6": "/img/gallery/batu6.jpg",
            "description": `Kota kecil yang terletak di lereng Gunung Panderman,
                                    dikenal sebagai destinasi wisata dengan udara sejuk, kebun apel, dan beragam atraksi
                                    seperti Jatim Park.`
        }
    ]
    const handleLocationClick = (index: (number)) => {
        setActiveIndex(index);
    }

    return (
        <section className="w-full h-full mt-10 px-5 lg:px-24">
            <div className="container py-10 mx-auto">
                <div className="mb-16 flex flex-col lg:flex-row justify-between items-center">
                    <div className="w-full lg:w-[40%] xl:w-[60%] lg:px-10 xl:px-40">
                        <div className="mb-3 w-full bg-black h-[1px] lg:h-[2px]"></div>
                        <h1 className="text-start text-2xl lg:text-3xl font-bold">Pengalaman Explore Jawa Timur</h1>
                    </div>
                    <h3 className="w-full py-5 lg:py-0 lg:w-[40%] lg:text-lg">Temukan keindahan alam dan budaya Jawa Timur di
                        sini! Terpesonakah Anda
                        oleh
                        pemandangan yang menakjubkan
                        ini? Jelajahi lebih lanjut dan mulailah merencanakan petualangan Anda sekarang!</h3>
                </div>
                <div className="container lg:px-10 xl:px-16 pt-14">

                    <ul className="flex justify-center pb-14">
                        {indexList.map((index) =>
                            <li key={index.id} onClick={() =>
                                handleLocationClick(index.id)
                            } className="cursor-pointer group w-2/5 text-center">
                                <div className="relative bg-green-500 h-[2px] w-full">
                                    <svg
                                        className={`transition-all duration-200 ease-in-out absolute h-10 w-10 left-1/2 -top-3 transform -translate-x-1/2 ${activeIndex === index.id ? `-translate-y-full` : `-translate-y-1/2 invisible`}`}
                                        fill="#ff0000" height="64px" width="64px" version="1.1"
                                        xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                                        viewBox="0 0 512 512" enable-background="new 0 0 512 512" xmlSpace="preserve"
                                        stroke="#ff0000">
                                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                        <g id="SVGRepo_iconCarrier">
                                            <path
                                                d="M256,0C149.3,0,64,85.3,64,192c0,36.9,11,65.4,30.1,94.3l141.7,215v0c4.3,6.5,11.7,10.7,20.2,10.7c8.5,0,16-4.3,20.2-10.7 l141.7-215C437,257.4,448,228.9,448,192C448,85.3,362.7,0,256,0z M256,298.6c-58.9,0-106.7-47.8-106.7-106.8 c0-59,47.8-106.8,106.7-106.8c58.9,0,106.7,47.8,106.7,106.8C362.7,250.8,314.9,298.6,256,298.6z">
                                            </path>
                                        </g>
                                    </svg>
                                    <div id={`list${index.id}`}
                                        className={`transition-colors ease-linear duration-300 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 h-4 w-4 rounded-full ${activeIndex === index.id ? `bg-red-500` : 'bg-green-500'}`}>
                                    </div>
                                </div>
                                <p id={`textlist${index.id}`}
                                    className={`${activeIndex === index.id ? `font-medium` : ``} transition-all duration-300 textlist py-5 text-sm md:text-lg group-hover:font-medium`}>
                                    {index.location}</p>
                            </li>
                        )}
                    </ul>

                    <div className="container">
                        {indexList.map((index) =>
                            <div key={index.id}
                                className={`transition container flex-col-reverse grid-cols-2 gap-10 ${activeIndex === index.id ? `flex lg:grid` : `hidden`}`}>
                                <div className="flex flex-col items-center w-full mx-auto md:grid grid-cols-2 gap-10">
                                    <img className="w-full max-w-lg rounded-lg h-full" src={index.img1}
                                        alt="" />
                                    <img className="w-full max-w-lg rounded-lg h-full" src={index.img2}
                                        alt="" />
                                    <img className="w-full max-w-lg rounded-lg h-full" src={index.img3}
                                        alt="" />
                                    <img className="w-full max-w-lg rounded-lg h-full" src={index.img4}
                                        alt="" />
                                    <img className="w-full max-w-lg rounded-lg h-full" src={index.img5}
                                        alt="" />
                                    <img className="w-full max-w-lg rounded-lg h-full" src={index.img6}
                                        alt="" />
                                </div>
                                <div className="flex flex-col">
                                    <div className="relative text-center flex flex-col items-center">

                                        <h2 className="py-5 text-2xl font-medium">{index.location}</h2>
                                        <p className="text-lg font-light pb-5">{index.description}</p>
                                        <button
                                            className="overflow-hidden relative w-32 p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer z-10 group">
                                            <a href="/src/views/surabaya.html">
                                                VIEW ALL
                                                <span
                                                    className="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"></span>
                                                <span
                                                    className="absolute w-36 h-32 -top-8 -left-2 bg-indigo-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"></span>
                                                <span
                                                    className="absolute w-36 h-32 -top-8 -left-2 bg-indigo-600 rotate-12 transform scale-x-0 group-hover:scale-x-50 transition-transform group-hover:duration-1000 duration-500 origin-left"></span>
                                                <span
                                                    className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">Explore!</span>
                                            </a>
                                        </button>

                                        <img className=" top-1/2" src={index.thumbnails} alt={index.location} />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </section>
    )
}
export default Gallery;