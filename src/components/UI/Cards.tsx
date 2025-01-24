"use client"
import Image from "next/image";
import { useState, useEffect } from "react"

interface ListItem {
    id: string;
    image: string;
    name: string;
    description: string;
    location: string;
}
const Cards = () => {
    const [data, setData] = useState<ListItem[] | null>(null);

    useEffect(() => {
        fetch(`https://66bc77c324da2de7ff6aa948.mockapi.io/api/jatrip/wisata`)
            .then((response) => response.json())
            .then((data: ListItem[]) => setData(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    if (!data) {
        return <div>Loading...</div>;
    }

    if (data.length === 0) {
        return <div>No data available.</div>;
    }


    return (
        <>
            {data.map((list) => (
                <div
                    key={list.id}
                    className="flex flex-col justify-center items-center border-2 rounded-md border-slate-300 shadow-2xl"
                >
                    <div className="relative z-10 w-full h-64">
                        <Image
                            className="rounded-sm brightness-90"
                            src={list.image}
                            alt={list.name}
                            fill
                            sizes="100vw"
                            style={{ objectFit: 'cover', objectPosition: 'center' }}
                        />
                        <p className="w-full absolute bottom-[10%] text-white text-center text-2xl font-bold z-20">
                            {list.name}
                        </p>
                    </div>

                    <ul className="w-full flex justify-evenly">
                        <li
                            className="cursor-pointer relative py-1 border-2 border-slate-300 w-full text-center"
                        >
                            <div className="group">
                                <Image
                                    className="relative w-10 mx-auto z-0 transition-all ease-out duration-200 group-hover:-translate-y-20"
                                    src="/img/icons/map-svgrepo-com.svg"
                                    alt="Map Icon"
                                    width={20}
                                    height={20}
                                />
                                <p
                                    className="absolute text-blue-500 font-semibold -translate-y-4 py-1 w-full transition-all ease-out duration-200 group-hover:-translate-y-10 invisible group-hover:visible"
                                >
                                    Location
                                </p>
                            </div>
                        </li>

                        <li className="cursor-pointer relative py-1 border-2 border-slate-300 w-full text-center">
                            <div className="group">
                                <Image
                                    className="relative w-10 mx-auto z-0 transition-all ease-out duration-200 group-hover:-translate-y-20"
                                    src="/img/icons/ticket-svgrepo-com.svg"
                                    alt="Ticket Icon"
                                    width={20}
                                    height={20}
                                />
                                <p
                                    className="absolute text-blue-500 font-semibold -translate-y-4 py-1 w-full transition-all ease-out duration-200 group-hover:-translate-y-10 invisible group-hover:visible"
                                >
                                    Ticket
                                </p>
                            </div>
                        </li>
                    </ul>

                    <div className="relative z-50 p-4">
                        <p className="z-0 text-sm font-medium text-justify pb-5">
                            {list.description}
                        </p>
                        <div
                            className="text-white bg-blue-500 bg-opacity-90 invisible transition-all ease-in duration-300 w-full h-0 absolute top-0 left-0 p-5"
                        >
                            <a
                                href="https://maps.app.goo.gl/YpD7N5sVXHJiSLZn6"
                                target="_blank"
                                className="font-medium hover:underline"
                            >
                                {list.location}
                            </a>
                        </div>
                        <div
                            className="text-white bg-blue-500 bg-opacity-90 invisible transition-all ease-in duration-300 w-full h-0 absolute top-0 left-0 p-5"
                        >
                            <p className="text-lg font-medium">1. Wisatawan Lokal</p>
                            <ul>
                                <li>Hari Kerja: Rp. 29.000</li>
                                <li>Weekend: Rp. 34.000</li>
                            </ul>
                            <p className="text-lg font-medium">2. Wisatawan Asing</p>
                            <ul>
                                <li>Hari Kerja: Rp. 220.000</li>
                                <li>Weekend: Rp. 320.000</li>
                            </ul>
                        </div>
                        <a
                            className="text-base text-blue-500 font-bold uppercase group hover:text-yellow-300"
                            href=""
                        >
                            view detail{" "}
                            <span className="transition-all duration-300 group-hover:pl-2">
                                {" > "}
                            </span>
                        </a>
                    </div>
                </div>
            ))}
        </>
    );

}

export default Cards