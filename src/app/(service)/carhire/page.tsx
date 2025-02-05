"use client"

import CarList from "@/components/fragments/CarList/CarList";
import TermList from "@/components/fragments/Terms/TermsList";
import Check from "@/components/UI/Check"
import Image from "next/image"
import { useState } from "react"

export default function CarHirePage() {
    const [isDetailOpen, setIsDetailOpen] = useState(false);
    return (
        <main>
            <article className="bg-cover bg-fixed bg-no-repeat w-screen h-screen flex  justify-center md:py-96"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1484950763426-56b5bf172dbb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
                <div className="flex flex-col justify-center gap-5 text-center px-10 md:px-20 xl:px-40">
                    <h1 className="text-start pl-2 text-white uppercase font-extrabold text-xl md:text-3xl xl:text-4xl">car rental -
                        Search, Compare & Save</h1>
                    <ul className="flex flex-col md:flex-row gap-y-5 md:gap-x-10 text-white font-semibold md:text-xl">
                        <li className="flex items-center"><span><Check /></span>
                            <p className="text-lg">Kenyamanan & Fleksibilitas</p>
                        </li>
                        <li className="flex items-center"><span><Check /></span>
                            <p className="text-lg">Pilihan Kendaraan yang Beragam</p>
                        </li>
                        <li className="flex items-center"><span><Check /></span>
                            <p className="text-lg">Harga yang Terjangkau</p>
                        </li>
                    </ul>
                </div>
            </article>

            <article className="mt-20 px-10 md:px-28">
                <div className="container mx-auto">
                    <h2 className="text-2xl font-semibold">Cara Rental Mobil?</h2>
                    <div className="mt-10 flex flex-col lg:flex-row justify-between items-center gap-1">

                        <section className="w-full flex flex-col items-center text-center">
                            <Image width={320} height={320} className="w-full md:w-4/5 h-[300px]" src="/img/icons/searchcar.svg" alt="" />
                            <p className="pt-5 text-2xl font-semibold text-cyan-500">1. Cari</p>
                            <p className="pt-5 font-semibol">Cari Mobil yang sesuai dengan tujuan Anda</p>
                        </section>

                        <section className="w-full flex flex-col items-center text-center">
                            <Image width={320} height={320} className="w-full md:w-4/5 h-[300px]" src="/img/icons/selectcar.svg" alt="" />
                            <p className="pt-5 text-2xl font-semibold text-cyan-500">2. Pilih</p>
                            <p className="pt-5 ">Pilih Mobil terbaik yang cocok untuk Anda</p>
                        </section>

                        <section className="w-full flex flex-col items-center text-center">
                            <Image width={320} height={320} className="w-full md:w-4/5 h-[300px]" src="/img/icons/usecar.svg" alt="" />
                            <p className="pt-5 text-2xl font-semibold text-cyan-500">3. Ready</p>
                            <p className="pt-5 ">Mobil kami siap untuk menjemput dan dipakai</p>
                        </section>

                    </div>
                </div>

                {/* <div className="bg-white bg-opacity-80 p-5 rounded-lg">
                    <div className="w-max">
                        <p className="text-start font-extrabold py-5">Pilih Jenis Mobil?</p>
                        <div className="flex items-center justify-between w-full">
                            <button className="bg-blue- flex items-center border-2 border-black rounded-tl-md rounded-bl-md p-3">
                                <Image width={96} height={96} src="/img/icons/cars-filter.cf7c3fd.png" alt="" />
                                <p className="pl-2">City Car</p>
                            </button>
                            <button className="flex items-center border-2 border-black rounded-tr-md rounded-br-md p-3">
                                <Image width={96} height={96} src="/img/icons/vans-trucks-filter.ae42ce1.png" alt="" />
                                <p className="pl-2">Mini Bus & Vans</p>
                            </button>
                        </div>
                    </div>

                    <div className="mt-10 flex items-center justify-between rounded-md bg-blue-400 bg-opacity-80 p-5">

                        <div className="w-2/5">
                            <label htmlFor="default-search" className="mb-2 text-sm font-medium sr-only">Search</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                </div>
                                <input type="search" id="default-search"
                                    className="block w-full p-4 ps-10 text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Pick-Up Location" required />
                            </div>
                        </div>

                        <div className="flex gap-5">
                            <div className="w-full flex items-center gap-1 bg-white px-2 rounded-md">
                                <div>
                                    <svg viewBox="0 0 24 24" width="1em" height="1em">
                                        <path
                                            d="M22.502 13.5v8.25a.75.75 0 0 1-.75.75h-19.5a.75.75 0 0 1-.75-.75V5.25a.75.75 0 0 1 .75-.75h19.5a.75.75 0 0 1 .75.75v8.25zm1.5 0V5.25A2.25 2.25 0 0 0 21.752 3h-19.5a2.25 2.25 0 0 0-2.25 2.25v16.5A2.25 2.25 0 0 0 2.252 24h19.5a2.25 2.25 0 0 0 2.25-2.25V13.5zm-23.25-3h22.5a.75.75 0 0 0 0-1.5H.752a.75.75 0 0 0 0 1.5zM7.502 6V.75a.75.75 0 0 0-1.5 0V6a.75.75 0 0 0 1.5 0zm10.5 0V.75a.75.75 0 0 0-1.5 0V6a.75.75 0 0 0 1.5 0z">
                                        </path>
                                    </svg>
                                </div>
                                <div className="flex flex-col items-center gap-2">
                                    <label aria-hidden="true" htmlFor="pickupdate">Tanggal Pick-Up</label>
                                    <input className="text-center" type="date" name="pickupdate" id="pickupdate" />
                                </div>
                            </div>

                            <div className="w-full flex items-center gap-1 bg-white px-2 rounded-md">
                                <div>
                                    <svg viewBox="0 0 24 24" width="1em" height="1em">
                                        <path
                                            d="M21.75 12c0 5.385-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25s9.75 4.365 9.75 9.75zm1.5 0C23.25 5.787 18.213.75 12 .75S.75 5.787.75 12 5.787 23.25 12 23.25 23.25 18.213 23.25 12zm-10.5 0V8.25a.75.75 0 0 0-1.5 0V12a.75.75 0 0 0 1.5 0zm-1.28.53l4.687 4.688a.75.75 0 0 0 1.06-1.06L12.53 11.47a.75.75 0 0 0-1.06 1.06z">
                                        </path>
                                    </svg>
                                </div>
                                <div className="flex flex-col items-center gap-2">
                                    <label htmlFor="pickuptime">Waktu</label>
                                    <select name="pickuptime" id="pickuptime">
                                        <option value="">08.00</option>
                                        <option value="">09.00</option>
                                        <option value="">10.00</option>
                                        <option value="">12.00</option>
                                        <option value="">13.00</option>
                                        <option value="">14.00</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-5">
                            <div className="flex items-center gap-1 bg-white px-2 rounded-md">
                                <div>
                                    <svg viewBox="0 0 24 24" width="1em" height="1em">
                                        <path
                                            d="M22.502 13.5v8.25a.75.75 0 0 1-.75.75h-19.5a.75.75 0 0 1-.75-.75V5.25a.75.75 0 0 1 .75-.75h19.5a.75.75 0 0 1 .75.75v8.25zm1.5 0V5.25A2.25 2.25 0 0 0 21.752 3h-19.5a2.25 2.25 0 0 0-2.25 2.25v16.5A2.25 2.25 0 0 0 2.252 24h19.5a2.25 2.25 0 0 0 2.25-2.25V13.5zm-23.25-3h22.5a.75.75 0 0 0 0-1.5H.752a.75.75 0 0 0 0 1.5zM7.502 6V.75a.75.75 0 0 0-1.5 0V6a.75.75 0 0 0 1.5 0zm10.5 0V.75a.75.75 0 0 0-1.5 0V6a.75.75 0 0 0 1.5 0z">
                                        </path>
                                    </svg>
                                </div>
                                <div className="flex flex-col items-center gap-2">
                                    <label aria-hidden="true" htmlFor="pickupdate">Tanggal Drop-Off</label>
                                    <input className="text-center" type="date" name="dropoffdate" id="dropoffdate" />
                                </div>
                            </div>

                            <div className="flex items-center gap-1 bg-white px-2 rounded-md">
                                <div>
                                    <svg viewBox="0 0 24 24" width="1em" height="1em">
                                        <path
                                            d="M21.75 12c0 5.385-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25s9.75 4.365 9.75 9.75zm1.5 0C23.25 5.787 18.213.75 12 .75S.75 5.787.75 12 5.787 23.25 12 23.25 23.25 18.213 23.25 12zm-10.5 0V8.25a.75.75 0 0 0-1.5 0V12a.75.75 0 0 0 1.5 0zm-1.28.53l4.687 4.688a.75.75 0 0 0 1.06-1.06L12.53 11.47a.75.75 0 0 0-1.06 1.06z">
                                        </path>
                                    </svg>
                                </div>
                                <div className="flex flex-col items-center gap-2">
                                    <label htmlFor="dropofftime">Waktu</label>
                                    <select name="dropofftime" id="dropofftime">
                                        <option value="">08.00</option>
                                        <option value="">09.00</option>
                                        <option value="">10.00</option>
                                        <option value="">12.00</option>
                                        <option value="">13.00</option>
                                        <option value="">14.00</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <button type="submit"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                    </div>
                </div> */}

            </article>

            <article className="mt-20">
                <div className="container mx-auto">
                    <h2 className="text-xl font-medium text-center">Rekomendasi Mobil yang Sering Dipilih</h2>
                    <p className="text-center text-transparent font-bold underline decoration-yellow-400 decoration-4 mb-10">
                        ---------------------</p>

                   <CarList/>


                </div>
            </article>

            {/* terms and conditions  */}
            <article className={`${isDetailOpen ? 'bg-slate-800' : 'invisible scale-0'} bg-opacity-50 z-50 w-screen h-screen flex items-center transition-transform ease-linear duration-300 fixed bottom-1/2 right-1/2 translate-y-1/2 translate-x-1/2`}>
                <div className="h-screen w-screen md:h-max md:w-[60vw] mx-auto bg-slate-100 px-5 md:p-10 rounded-md flex flex-col items-center">
                    <Image width={200} height={200} className="mx-auto" src="/img/logonya.png" alt="" />
                    <p>Terms And Conditions :</p>
                    <TermList />
                    <button onClick={() => setIsDetailOpen(!isDetailOpen)} className="w-max bg-blue-600 hover:bg-yellow-400 transition-colors ease-linear duration-200 text-xl font-medium text-white px-20 py-2">CLOSE</button>
                </div>
            </article>
        </main>
    )
}
