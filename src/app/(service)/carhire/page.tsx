const CarHirePage = () => {
    return (
        <main>
            <article className="bg-cover bg-fixed bg-no-repeat w-screen h-screen flex  justify-center md:py-96"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1548237326-bf241b55a874?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
                <div className="flex flex-col justify-center gap-5 text-center px-10 md:px-20 xl:px-40">
                    <h1 className="text-start pl-2 text-white uppercase font-extrabold text-xl md:text-3xl xl:text-4xl">car rental -
                        Search, Compare & Save</h1>
                    <ul className="flex flex-col md:flex-row gap-y-5 md:gap-x-10 text-white font-semibold md:text-xl">
                        <li className="flex items-center"><span><svg className="w-7 md:w-10" fill="#FFFFFF"
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
                            <path
                                d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z">
                            </path>
                        </svg></span>
                            <p className="text-lg">Kenyamanan & Fleksibilitas</p>
                        </li>
                        <li className="flex items-center"><span><svg className="w-7 md:w-10" fill="#FFFFFF"
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
                            <path
                                d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z">
                            </path>
                        </svg></span>
                            <p className="text-lg">Pilihan Kendaraan yang Beragam</p>
                        </li>
                        <li className="flex items-center"><span><svg className="w-7 md:w-10" fill="#FFFFFF"
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
                            <path
                                d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z">
                            </path>
                        </svg></span>
                            <p className="text-lg">Harga yang Terjangkau</p>
                        </li>
                    </ul>

                </div>
            </article>

            <section className="mt-20 px-10 md:px-28">
                <div className="container mx-auto">
                    <h2 className="text-2xl font-semibold">Cara Rental Mobil?</h2>
                    <div className="mt-10 flex flex-col lg:flex-row justify-between items-center gap-7">
                        <div className="w-full flex flex-col items-center text-center">
                            <img className="w-full md:w-4/5 h-[300px] md:h-[400px]" src="img/icons/searchcar.svg" alt="" />
                            <p className="pt-5 text-2xl font-semibold text-cyan-500">1. Cari</p>
                            <p className="pt-5 font-semibol">Cari Mobil yang sesuai dengan tujuan Anda</p>
                        </div>
                        <div className="w-full flex flex-col items-center text-center">
                            <img className="w-full md:w-4/5 h-[300px] md:h-[400px]" src="img/icons/selectcar.svg" alt="" />
                            <p className="pt-5 text-2xl font-semibold text-cyan-500">2. Pilih</p>
                            <p className="pt-5 ">Pilih Mobil terbaik yang cocok untuk Anda</p>
                        </div>
                        <div className="w-full flex flex-col items-center text-center">
                            <img className="w-full md:w-4/5 h-[300px] md:h-[400px]" src="img/icons/usecar.svg" alt="" />
                            <p className="pt-5 text-2xl font-semibold text-cyan-500">3. Ready</p>
                            <p className="pt-5 ">Mobil kami siap untuk menjemput dan dipakai</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white bg-opacity-80 p-5 rounded-lg">
                    <div className="w-max">
                        <p className="text-start font-extrabold py-5">Pilih Jenis Mobil?</p>
                        <div className="flex items-center justify-between w-full">
                            <div className="bg-blue- flex items-center border-2 border-black rounded-tl-md rounded-bl-md p-3">
                                <img src="img/icons/cars-filter.cf7c3fd.png" alt="" />
                                <p className="pl-2">City Car</p>
                            </div>
                            <div className="flex items-center border-2 border-black rounded-tr-md rounded-br-md p-3">
                                <img src="img/icons/vans-trucks-filter.ae42ce1.png" alt="" />
                                <p className="pl-2">Mini Bus & Vans</p>
                            </div>
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
                                    <input className="text-center" type="date" name="pickupdate" id="pickupdate"/>
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
                                    <input className="text-center" type="date" name="dropoffdate" id="dropoffdate"/>
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
                </div>
            </section>

            <section className="mt-20">
                <div className="container mx-auto">
                    <h2 className="text-xl font-medium text-center">Rekomendasi Mobil yang Sering Dipilih</h2>
                    <p className="text-center text-transparent font-bold underline decoration-yellow-400 decoration-4 mb-10">
                        ---------------------</p>

                     {/* innova reborn car  */}
                    <div className="flex flex-col lg:flex-row justify-center items-center gap-5 px-3">
                        <div className="md:w-1/2 xl:w-1/4 px-10 border rounded-md">
                            <h3 className="text-center py-10">INNOVA REBORN (7 Seat)</h3>
                            <img className="" src="img/car/toyota-new-kijang-innova.png" alt="" />
                        </div>

                        <div className="w-full xl:w-3/4">
                            <div
                                className="grid grid-cols-2 md:grid-cols-4 rounded-lg bg-blue-600 text-xl font-bold text-white text-center">
                                <div
                                    className="uppercase border-r-2 rounded-tl-lg rounded-bl-lg text-base lg:text-base px-5 lg:px-10 py-5">
                                    Destination</div>
                                <div className="uppercase border-r-2 text-base lg:text-base px-5 lg:px-10 py-5">Duration</div>
                                <div className="hidden md:block uppercase border-r-2 text-base lg:text-base px-5 lg:px-10 py-5">
                                    Price</div>
                                <div
                                    className="hidden md:block uppercase rounded-tr-lg rounded-br-lg text-base lg:text-base px-5 lg:px-10 py-5">
                                    Details</div>
                            </div>

                            <div className="border-2 rounded-lg grid grid-cols-2 md:grid-cols-4 justify-center items-center">
                                <div className="p-5 text-center font-medium border-r-2">
                                    Surabaya
                                </div>
                                <div className="p-5 text-center font-medium border-r-2">
                                    24 Hours
                                </div>
                                <div className="xl:p-5 text-amber-500 text-center font-medium border-r-2">
                                    Rp. 2.000.000
                                </div>
                                <div className="p-5 flex flex-col xl:flex-row justify-center gap-2">
                                    <button
                                        onclick="seedetails()" className="xl:w-1/2 bg-blue-800 hover:bg-yellow-400 transition-colors duration-300 ease-linear py-4 text-sm lg:text-base lg:px-2 xl:px-3 rounded-lg text-white font-medium">SEE DETAILS</button>
                                    <button
                                        className="xl:w-1/2 bg-blue-800 hover:bg-yellow-400 transition-colors duration-300 ease-linear py-4 text-sm lg:text-base lg:px-2 xl:px-3 rounded-lg text-white font-medium"><a
                                            href="">BOOK NOW</a></button>
                                </div>
                            </div>
                            <div className="mt-3 border-2 rounded-lg grid grid-cols-2 md:grid-cols-4 justify-center items-center">
                                <div className="p-5 text-center font-medium border-r-2">
                                    Malang
                                </div>
                                <div className="p-5 text-center font-medium border-r-2">
                                    24 Hours
                                </div>
                                <div className="xl:p-5 text-amber-500 text-center font-medium border-r-2">
                                    Rp. 2.000.000
                                </div>
                                <div className="p-5 flex flex-col xl:flex-row justify-center gap-2">
                                    <button
                                        onclick="seedetails()" className="xl:w-1/2 bg-blue-800 hover:bg-yellow-400 transition-colors duration-300 ease-linear py-4 text-sm lg:text-base lg:px-2 xl:px-3 rounded-lg text-white font-medium">SEE DETAILS</button>
                                    <button
                                        className="xl:w-1/2 bg-blue-800 hover:bg-yellow-400 transition-colors duration-300 ease-linear py-4 text-sm lg:text-base lg:px-2 xl:px-3 rounded-lg text-white font-medium"><a
                                            href="">BOOK NOW</a></button>
                                </div>
                            </div>
                            <div className="mt-3 border-2 rounded-lg grid grid-cols-2 md:grid-cols-4 justify-center items-center">
                                <div className="p-5 text-center font-medium border-r-2">
                                    Batu
                                </div>
                                <div className="p-5 text-center font-medium border-r-2">
                                    24 Hours
                                </div>
                                <div className="xl:p-5 text-amber-500 text-center font-medium border-r-2">
                                    Rp. 2.000.000
                                </div>
                                <div className="p-5 flex flex-col xl:flex-row justify-center gap-2">
                                    <button
                                        onclick="seedetails()" className="xl:w-1/2 bg-blue-800 hover:bg-yellow-400 transition-colors duration-300 ease-linear py-4 text-sm lg:text-base lg:px-2 xl:px-3 rounded-lg text-white font-medium">SEE DETAILS</button>
                                    <button
                                        className="xl:w-1/2 bg-blue-800 hover:bg-yellow-400 transition-colors duration-300 ease-linear py-4 text-sm lg:text-base lg:px-2 xl:px-3 rounded-lg text-white font-medium"><a
                                            href="">BOOK NOW</a></button>
                                </div>
                            </div>
                            <div className="mt-3 border-2 rounded-lg grid grid-cols-2 md:grid-cols-4 justify-center items-center">
                                <div className="p-5 text-center font-medium border-r-2">
                                    Banyuwangi
                                </div>
                                <div className="p-5 text-center font-medium border-r-2">
                                    24 Hours
                                </div>
                                <div className="xl:p-5 text-amber-500 text-center font-medium border-r-2">
                                    Rp. 2.000.000
                                </div>
                                <div className="p-5 flex flex-col xl:flex-row justify-center gap-2">
                                    <button
                                        onclick="seedetails()" className="xl:w-1/2 bg-blue-800 hover:bg-yellow-400 transition-colors duration-300 ease-linear py-4 text-sm lg:text-base lg:px-2 xl:px-3 rounded-lg text-white font-medium">SEE DETAILS</button>
                                    <button
                                        className="xl:w-1/2 bg-blue-800 hover:bg-yellow-400 transition-colors duration-300 ease-linear py-4 text-sm lg:text-base lg:px-2 xl:px-3 rounded-lg text-white font-medium"><a
                                            href="">BOOK NOW</a></button>
                                </div>
                            </div>
                            <div className="mt-3 border-2 rounded-lg grid grid-cols-2 md:grid-cols-4 justify-center items-center">
                                <div className="p-5 text-center font-medium border-r-2">
                                    Blitar
                                </div>
                                <div className="p-5 text-center font-medium border-r-2">
                                    24 Hours
                                </div>
                                <div className="xl:p-5 text-amber-500 text-center font-medium border-r-2">
                                    Rp. 2.000.000
                                </div>
                                <div className="p-5 flex flex-col xl:flex-row justify-center gap-2">
                                    <button
                                        onclick="seedetails()" className="xl:w-1/2 bg-blue-800 hover:bg-yellow-400 transition-colors duration-300 ease-linear py-4 text-sm lg:text-base lg:px-2 xl:px-3 rounded-lg text-white font-medium">SEE DETAILS</button>
                                    <button
                                        className="xl:w-1/2 bg-blue-800 hover:bg-yellow-400 transition-colors duration-300 ease-linear py-4 text-sm lg:text-base lg:px-2 xl:px-3 rounded-lg text-white font-medium"><a
                                            href="">BOOK NOW</a></button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* veloz car  */}
                    <div className="mt-10 flex flex-col lg:flex-row justify-center items-center gap-5 px-3">
                        <div className="md:w-1/2 xl:w-1/4 px-10 border rounded-md">
                            <h3 className="text-center py-10">AVANZA VELOZ (7 Seat)</h3>
                            <img className="" src="img/car/3-veloz-platinum-white-pearl.png" alt="" />
                        </div>

                        <div className="w-full xl:w-3/4">
                            <div
                                className="grid grid-cols-2 md:grid-cols-4 rounded-lg bg-blue-600 text-xl font-bold text-white text-center">
                                <div
                                    className="uppercase border-r-2 rounded-tl-lg rounded-bl-lg text-base lg:text-base px-5 lg:px-10 py-5">
                                    Destination</div>
                                <div className="uppercase border-r-2 text-base lg:text-base px-5 lg:px-10 py-5">Duration</div>
                                <div className="hidden md:block uppercase border-r-2 text-base lg:text-base px-5 lg:px-10 py-5">
                                    Price</div>
                                <div
                                    className="hidden md:block uppercase rounded-tr-lg rounded-br-lg text-base lg:text-base px-5 lg:px-10 py-5">
                                    Details</div>
                            </div>

                            <div className="border-2 rounded-lg grid grid-cols-2 md:grid-cols-4 justify-center items-center">
                                <div className="p-5 text-center font-medium border-r-2">
                                    Surabaya
                                </div>
                                <div className="p-5 text-center font-medium border-r-2">
                                    24 Hours
                                </div>
                                <div className="xl:p-5 text-amber-500 text-center font-medium border-r-2">
                                    Rp. 2.000.000
                                </div>
                                <div className="p-5 flex flex-col xl:flex-row justify-center gap-2">
                                    <button
                                        onclick="seedetails()" className="xl:w-1/2 bg-blue-800 hover:bg-yellow-400 transition-colors duration-300 ease-linear py-4 text-sm lg:text-base lg:px-2 xl:px-3 rounded-lg text-white font-medium">SEE DETAILS</button>
                                    <button
                                        className="xl:w-1/2 bg-blue-800 hover:bg-yellow-400 transition-colors duration-300 ease-linear py-4 text-sm lg:text-base lg:px-2 xl:px-3 rounded-lg text-white font-medium"><a
                                            href="">BOOK NOW</a></button>
                                </div>
                            </div>
                            <div className="mt-3 border-2 rounded-lg grid grid-cols-2 md:grid-cols-4 justify-center items-center">
                                <div className="p-5 text-center font-medium border-r-2">
                                    Malang
                                </div>
                                <div className="p-5 text-center font-medium border-r-2">
                                    24 Hours
                                </div>
                                <div className="xl:p-5 text-amber-500 text-center font-medium border-r-2">
                                    Rp. 2.000.000
                                </div>
                                <div className="p-5 flex flex-col xl:flex-row justify-center gap-2">
                                    <button
                                        onclick="seedetails()" className="xl:w-1/2 bg-blue-800 hover:bg-yellow-400 transition-colors duration-300 ease-linear py-4 text-sm lg:text-base lg:px-2 xl:px-3 rounded-lg text-white font-medium">SEE DETAILS</button>
                                    <button
                                        className="xl:w-1/2 bg-blue-800 hover:bg-yellow-400 transition-colors duration-300 ease-linear py-4 text-sm lg:text-base lg:px-2 xl:px-3 rounded-lg text-white font-medium"><a
                                            href="">BOOK NOW</a></button>
                                </div>
                            </div>
                            <div className="mt-3 border-2 rounded-lg grid grid-cols-2 md:grid-cols-4 justify-center items-center">
                                <div className="p-5 text-center font-medium border-r-2">
                                    Batu
                                </div>
                                <div className="p-5 text-center font-medium border-r-2">
                                    24 Hours
                                </div>
                                <div className="xl:p-5 text-amber-500 text-center font-medium border-r-2">
                                    Rp. 2.000.000
                                </div>
                                <div className="p-5 flex flex-col xl:flex-row justify-center gap-2">
                                    <button
                                        onclick="seedetails()" className="xl:w-1/2 bg-blue-800 hover:bg-yellow-400 transition-colors duration-300 ease-linear py-4 text-sm lg:text-base lg:px-2 xl:px-3 rounded-lg text-white font-medium">SEE DETAILS</button>
                                    <button
                                        className="xl:w-1/2 bg-blue-800 hover:bg-yellow-400 transition-colors duration-300 ease-linear py-4 text-sm lg:text-base lg:px-2 xl:px-3 rounded-lg text-white font-medium"><a
                                            href="">BOOK NOW</a></button>
                                </div>
                            </div>
                            <div className="mt-3 border-2 rounded-lg grid grid-cols-2 md:grid-cols-4 justify-center items-center">
                                <div className="p-5 text-center font-medium border-r-2">
                                    Banyuwangi
                                </div>
                                <div className="p-5 text-center font-medium border-r-2">
                                    24 Hours
                                </div>
                                <div className="xl:p-5 text-amber-500 text-center font-medium border-r-2">
                                    Rp. 2.000.000
                                </div>
                                <div className="p-5 flex flex-col xl:flex-row justify-center gap-2">
                                    <button
                                        onclick="seedetails()" className="xl:w-1/2 bg-blue-800 hover:bg-yellow-400 transition-colors duration-300 ease-linear py-4 text-sm lg:text-base lg:px-2 xl:px-3 rounded-lg text-white font-medium">SEE DETAILS</button>
                                    <button
                                        className="xl:w-1/2 bg-blue-800 hover:bg-yellow-400 transition-colors duration-300 ease-linear py-4 text-sm lg:text-base lg:px-2 xl:px-3 rounded-lg text-white font-medium"><a
                                            href="">BOOK NOW</a></button>
                                </div>
                            </div>
                            <div className="mt-3 border-2 rounded-lg grid grid-cols-2 md:grid-cols-4 justify-center items-center">
                                <div className="p-5 text-center font-medium border-r-2">
                                    Blitar
                                </div>
                                <div className="p-5 text-center font-medium border-r-2">
                                    24 Hours
                                </div>
                                <div className="xl:p-5 text-amber-500 text-center font-medium border-r-2">
                                    Rp. 2.000.000
                                </div>
                                <div className="p-5 flex flex-col xl:flex-row justify-center gap-2">
                                    <button
                                        onclick="seedetails()" className="xl:w-1/2 bg-blue-800 hover:bg-yellow-400 transition-colors duration-300 ease-linear py-4 text-sm lg:text-base lg:px-2 xl:px-3 rounded-lg text-white font-medium">SEE DETAILS</button>
                                    <button
                                        className="xl:w-1/2 bg-blue-800 hover:bg-yellow-400 transition-colors duration-300 ease-linear py-4 text-sm lg:text-base lg:px-2 xl:px-3 rounded-lg text-white font-medium"><a
                                            href="">BOOK NOW</a></button>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* HIACE car  */}
                    <div className="mt-10 flex flex-col lg:flex-row justify-center items-center gap-5 px-3">
                        <div className="md:w-1/2 xl:w-1/4 px-10 border rounded-md">
                            <h3 className="text-center py-10">HIACE MINI BUS (16 Seat)</h3>
                            <img className="" src="img/car/2 hiace premio white.png" alt="" />
                        </div>

                        <div className="w-full xl:w-3/4">
                            <div
                                className="grid grid-cols-2 md:grid-cols-4 rounded-lg bg-blue-600 text-xl font-bold text-white text-center">
                                <div
                                    className="uppercase border-r-2 rounded-tl-lg rounded-bl-lg text-base lg:text-base px-5 lg:px-10 py-5">
                                    Destination</div>
                                <div className="uppercase border-r-2 text-base lg:text-base px-5 lg:px-10 py-5">Duration</div>
                                <div className="hidden md:block uppercase border-r-2 text-base lg:text-base px-5 lg:px-10 py-5">
                                    Price</div>
                                <div
                                    className="hidden md:block uppercase rounded-tr-lg rounded-br-lg text-base lg:text-base px-5 lg:px-10 py-5">
                                    Details</div>
                            </div>

                            <div className="border-2 rounded-lg grid grid-cols-2 md:grid-cols-4 justify-center items-center">
                                <div className="p-5 text-center font-medium border-r-2">
                                    Surabaya
                                </div>
                                <div className="p-5 text-center font-medium border-r-2">
                                    24 Hours
                                </div>
                                <div className="xl:p-5 text-amber-500 text-center font-medium border-r-2">
                                    Rp. 2.000.000
                                </div>
                                <div className="p-5 flex flex-col xl:flex-row justify-center gap-2">
                                    <button
                                        onclick="seedetails()" className="xl:w-1/2 bg-blue-800 hover:bg-yellow-400 transition-colors duration-300 ease-linear py-4 text-sm lg:text-base lg:px-2 xl:px-3 rounded-lg text-white font-medium">SEE DETAILS</button>
                                    <button
                                        className="xl:w-1/2 bg-blue-800 hover:bg-yellow-400 transition-colors duration-300 ease-linear py-4 text-sm lg:text-base lg:px-2 xl:px-3 rounded-lg text-white font-medium"><a
                                            href="">BOOK NOW</a></button>
                                </div>
                            </div>
                            <div className="mt-3 border-2 rounded-lg grid grid-cols-2 md:grid-cols-4 justify-center items-center">
                                <div className="p-5 text-center font-medium border-r-2">
                                    Malang
                                </div>
                                <div className="p-5 text-center font-medium border-r-2">
                                    24 Hours
                                </div>
                                <div className="xl:p-5 text-amber-500 text-center font-medium border-r-2">
                                    Rp. 2.000.000
                                </div>
                                <div className="p-5 flex flex-col xl:flex-row justify-center gap-2">
                                    <button
                                        onclick="seedetails()" className="xl:w-1/2 bg-blue-800 hover:bg-yellow-400 transition-colors duration-300 ease-linear py-4 text-sm lg:text-base lg:px-2 xl:px-3 rounded-lg text-white font-medium">SEE DETAILS</button>
                                    <button
                                        className="xl:w-1/2 bg-blue-800 hover:bg-yellow-400 transition-colors duration-300 ease-linear py-4 text-sm lg:text-base lg:px-2 xl:px-3 rounded-lg text-white font-medium"><a
                                            href="">BOOK NOW</a></button>
                                </div>
                            </div>
                            <div className="mt-3 border-2 rounded-lg grid grid-cols-2 md:grid-cols-4 justify-center items-center">
                                <div className="p-5 text-center font-medium border-r-2">
                                    Batu
                                </div>
                                <div className="p-5 text-center font-medium border-r-2">
                                    24 Hours
                                </div>
                                <div className="xl:p-5 text-amber-500 text-center font-medium border-r-2">
                                    Rp. 2.000.000
                                </div>
                                <div className="p-5 flex flex-col xl:flex-row justify-center gap-2">
                                    <button
                                        onclick="seedetails()" className="xl:w-1/2 bg-blue-800 hover:bg-yellow-400 transition-colors duration-300 ease-linear py-4 text-sm lg:text-base lg:px-2 xl:px-3 rounded-lg text-white font-medium">SEE DETAILS</button>
                                    <button
                                        className="xl:w-1/2 bg-blue-800 hover:bg-yellow-400 transition-colors duration-300 ease-linear py-4 text-sm lg:text-base lg:px-2 xl:px-3 rounded-lg text-white font-medium"><a
                                            href="">BOOK NOW</a></button>
                                </div>
                            </div>
                            <div className="mt-3 border-2 rounded-lg grid grid-cols-2 md:grid-cols-4 justify-center items-center">
                                <div className="p-5 text-center font-medium border-r-2">
                                    Banyuwangi
                                </div>
                                <div className="p-5 text-center font-medium border-r-2">
                                    24 Hours
                                </div>
                                <div className="xl:p-5 text-amber-500 text-center font-medium border-r-2">
                                    Rp. 2.000.000
                                </div>
                                <div className="p-5 flex flex-col xl:flex-row justify-center gap-2">
                                    <button
                                        onclick="seedetails()" className="xl:w-1/2 bg-blue-800 hover:bg-yellow-400 transition-colors duration-300 ease-linear py-4 text-sm lg:text-base lg:px-2 xl:px-3 rounded-lg text-white font-medium">SEE DETAILS</button>
                                    <button
                                        className="xl:w-1/2 bg-blue-800 hover:bg-yellow-400 transition-colors duration-300 ease-linear py-4 text-sm lg:text-base lg:px-2 xl:px-3 rounded-lg text-white font-medium"><a
                                            href="">BOOK NOW</a></button>
                                </div>
                            </div>
                            <div className="mt-3 border-2 rounded-lg grid grid-cols-2 md:grid-cols-4 justify-center items-center">
                                <div className="p-5 text-center font-medium border-r-2">
                                    Blitar
                                </div>
                                <div className="p-5 text-center font-medium border-r-2">
                                    24 Hours
                                </div>
                                <div className="xl:p-5 text-amber-500 text-center font-medium border-r-2">
                                    Rp. 2.000.000
                                </div>
                                <div className="p-5 flex flex-col xl:flex-row justify-center gap-2">
                                    <button
                                        onclick="seedetails()" className="xl:w-1/2 bg-blue-800 hover:bg-yellow-400 transition-colors duration-300 ease-linear py-4 text-sm lg:text-base lg:px-2 xl:px-3 rounded-lg text-white font-medium">SEE DETAILS</button>
                                    <button
                                        className="xl:w-1/2 bg-blue-800 hover:bg-yellow-400 transition-colors duration-300 ease-linear py-4 text-sm lg:text-base lg:px-2 xl:px-3 rounded-lg text-white font-medium"><a
                                            href="">BOOK NOW</a></button>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </section>

            {/* terms and conditions  */}
            <article id="terms" className="z-50 invisible scale-0 bg-opacity-50 w-screen h-screen flex items-center transition-transform ease-linear duration-300 fixed bottom-1/2 right-1/2 translate-y-1/2 translate-x-1/2">
                <div className="h-screen w-screen md:h-max md:w-[60vw] mx-auto bg-slate-50 px-5 md:p-10 rounded-md flex flex-col items-center">
                    <img className="mx-auto w-1/2 md:w-2/5" src="img/logonya.png" alt="" />
                    <p>Terms And Conditions :</p>
                    <ul className="py-5">
                        <li className="py-1 flex gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                            </svg>

                            <p>Reservasi mobil harus dilakukan secara tertulis dan pembayaran harus dilakukan sebelum waktu
                                peminjaman yang ditentukan.</p>
                        </li>
                        <li className="py-1 flex gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                            </svg>

                            <p>Pembatalan reservasi harus dilakukan dalam waktu yang ditentukan dan
                                dapat dikenakan biaya pembatalan.</p>
                        </li>
                        <li className="py-1 flex gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                            </svg>

                            <p>Penyewa harus memiliki usia minimum 21 tahun dan izin mengemudi yang sah dan berlaku.</p>
                        </li>

                        <li className="py-1 flex gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                            </svg>

                            <p>Mobil harus dikembalikan dalam kondisi yang sama dengan saat penyerahan, kecuali adanya kerusakan
                                karena penggunaan normal.</p>
                        </li>
                        <li className="py-1 flex gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                            </svg>

                            <p>Penyewa bertanggung jawab atas kerusakan atau kehilangan yang terjadi pada mobil, kecuali jika
                                dilindungi oleh asuransi.</p>
                        </li>
                        <li className="py-1 flex gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                            </svg>

                            <p>Mobil hanya boleh digunakan untuk keperluan pribadi atau non-komersial dan tidak boleh digunakan
                                untuk tujuan ilegal.</p>
                        </li>
                        <li className="py-1 flex gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                            </svg>

                            <p>Perjanjian penyewaan dapat memerlukan persetujuan tambahan terkait dengan kondisi khusus.</p>
                        </li>
                    </ul>
                    <button onclick="closeseedetails()" className="w-max bg-blue-600 hover:bg-yellow-400 transition-colors ease-linear duration-200 text-xl font-medium text-white px-20 py-2">CLOSE</button>
                </div>
            </article>
        </main>
    )
}

export default CarHirePage