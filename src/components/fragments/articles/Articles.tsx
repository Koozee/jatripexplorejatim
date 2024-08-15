import { ArrowLeft, ArrowRight } from "lucide-react"

const Articles = () => {
    return (
        <article className="mt-10 lg:px-20">
            <div className="container w-full h-full mx-auto lg:grid grid-cols-2 py-10">
                <div className="hidden lg:block relative w-full h-full">
                    <img className="w-full h-full rounded-md" src="img/wisata/jip-bromo.webp" alt="" />
                    <p className="absolute bottom-[10%] px-5 text-white font-bold">Aktivitas Seru yang Wajib Dicoba Saat
                        ke Taman
                        Nasional Bromo Tengger Semeru</p>
                    <p className="absolute bottom-[5%] pl-5 text-white font-semibold">10 Februari 2024</p>
                </div>
                <div className="relative flex flex-col px-5 md:px-10 w-full h-full">
                    <div>
                        <h3 className="text-3xl font-bold">Artikel</h3>
                        <p className="md:text-lg font-light py-5">Meskipun gambar bisa menggambarkan ribuan kata, beberapa
                            cerita
                            dan
                            pengalaman lebih baik
                            dijelaskan
                            secara
                            detail.</p>
                        <p className="lg:text-lg font-light pb-5"> Tidak hanya memuaskan mata, tetapi juga memastikan Anda yakin
                            sebelum Anda
                            berangkat untuk bepergian.
                            Bagi Anda yang merasakan kerinduan akan petualangan, untuk memahami tujuan Anda, untuk
                            mengetahui
                            petualangan
                            yang akan datang, kunjungi blog untuk informasi lebih lanjut.</p>
                    </div>

                    <div className="lg:hidden relative w-full h-full">
                        <img className="h-full rounded-md" src="img/wisata/jip-bromo.webp" alt="" />
                        <div className="absolute bottom-3">
                            <p className="px-3 py-1 text text-white font-semibold">Aktivitas Seru yang Wajib Dicoba
                                Saat
                                ke Taman
                                Nasional Bromo Tengger Semeru</p>
                            <p className="pl-3 text-white font-semibold">10 Februari 2024</p>
                        </div>
                    </div>

                    <div className="flex relative">
                        <div className="absolute top-1/2 left-7 z-50 flex items-center">
                            <div className="w-full">
                                <button onclick="prev()" className="text-white hover:text-yellow-300">
                                    <ArrowLeft />
                                </button>
                            </div>
                        </div>
                        <div id="slidercontainer" className="w-full h-full overflow-hidden">
                            <ul id="slider" className="flex w-full transition-all duration-500 ease-in-out">
                                <li className="cards w-96 lg:p-5">
                                    <div className="relative rounded-lg">
                                        <img className="brightness-75 h-60 w-full object-cover"
                                            src="img/wisata/surabayazoo.jpg" alt="" />
                                        <div className="absolute bottom-0 text-white p-5">
                                            <p className="px-3 py-1 text text-white font-semibold">Wisata Kebun Binatang
                                                Surabaya
                                            </p>
                                            <p className="pl-3 text-white font-semibold">9 Februari 2024</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="cards w-96 lg:p-5">
                                    <div className="relative rounded-lg">
                                        <img className="brightness-75 h-60 w-full object-cover"
                                            src="https://images.unsplash.com/photo-1581340151765-7ac189960bc9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                            alt="" />
                                        <div className="absolute bottom-0 text-white p-5">
                                            <p className="px-3 py-1 text text-white font-semibold">Pesona Kawah Ijen Memikat
                                                Mata
                                            </p>
                                            <p className="pl-3 text-white font-semibold">8 Februari 2024</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="cards w-96 lg:p-5">
                                    <div className="relative rounded-lg">
                                        <img className="brightness-75 h-60 w-full object-cover"
                                            src="img/food/foodsurabaya.jpg" alt="" />
                                        <div className="absolute bottom-0 text-white p-5">
                                            <p className="px-3 py-1 text text-white font-semibold">Cobain Kuliner Khas Surabaya
                                            </p>
                                            <p className="pl-3 text-white font-semibold">7 Februari 2024</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="cards w-96 lg:p-5">
                                    <div className="relative rounded-lg">
                                        <img className="brightness-75 h-60 w-full object-cover"
                                            src="https://images.unsplash.com/photo-1624153794998-50ca0ebfc6ff?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                            alt="" />
                                        <div className="absolute bottom-0 text-white p-5">
                                            <p className="px-3 py-1 text text-white font-semibold">Ada Apa Saja di Museum
                                                Angkut?
                                            </p>
                                            <p className="pl-3 text-white font-semibold">6 Februari 2024</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="cards w-96 lg:p-5">
                                    <div className="relative rounded-lg">
                                        <img className="brightness-75 h-60 w-full object-cover"
                                            src="https://indonesiakaya.com/wp-content/uploads/2020/10/1357_Saat_air_surut_karang-karang_di_Pantai_Balekambang_bermunculan_2-3.jpg"
                                            alt="" />
                                        <div className="absolute bottom-0 text-white p-5">
                                            <p className="px-3 py-1 text text-white font-semibold">Hal Menarik di Pantai
                                                Balekambang
                                            </p>
                                            <p className="pl-3 text-white font-semibold">5 Februari 2024</p>
                                        </div>
                                    </div>
                                </li>

                            </ul>
                        </div>
                        <div className="flex items-center absolute top-1/2 right-7">
                            <div className="w-full">
                                <button onclick="next()" className="text-white hover:text-yellow-300">
                                    <ArrowRight />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default Articles