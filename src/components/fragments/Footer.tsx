import { Mail, PhoneCall } from "lucide-react"
import Image from "next/image"

const Footer = () => {
    return (
        <footer id="footer"
            className=" poppins w-full mt-16 border-t-2 bg-gradient-to-l from-blue-400 via-blue-600 to-blue-700">
            {/* <div className="container mx-auto">
                <div className="container mx-auto border-b-2 py-5 px-4">
                    <div className="flex flex-col lg:flex-row justify-around items-center">
                        <Image className="w-[25%] md:w-[16%]" src="/img/logonya.png" alt="" />
                        <p className="text-base lg:text-lg text-center font-medium py-5 text-white">Explore Jawa Timur With
                            Full Memories
                        </p>
                        <div className="flex items-center gap-5">
                            <div className="relative group">
                                <a className="group-hover:bg-opacity-75 transition-all"
                                    href="https://www.instagram.com/nikoachmad_koo?igsh=cHkxMzBrdWVydWI="><Image
                                        className="w-11/12" src="/img/icons/logos_instagram.svg" alt="igicn" /></a>
                                <p
                                    className="absolute -top-2/3 left-0 text-white bg-slate-600 opacity-0 group-hover:opacity-100 transition-all">
                                    Instagram</p>
                            </div>
                            <div className="relative group">
                                <a className="group-hover:bg-opacity-75 transition-all"
                                    href="https://www.facebook.com/niko.achmad.3?mibextid=kFxxJD"><Image className="w-11/12" fill
                                        src="img/icons/logos_facebook.svg" alt="fbicn" /></a>
                                <p
                                    className="absolute -top-2/3 left-0 text-white bg-slate-600 opacity-0 group-hover:opacity-100 transition-all">
                                    Facebook</p>
                            </div>
                            <div className="relative group">
                                <a className="group-hover:bg-opacity-75 transition-all" href="#"><Image className="w-11/12" fill
                                    src="img/icons/logos_youtube-icon.svg" alt="yticn" /></a>
                                <p
                                    className="absolute -top-2/3 left-0 text-white bg-slate-600 opacity-0 group-hover:opacity-100 transition-all">
                                    Youtube</p>
                            </div>
                            <div className="relative group">
                                <a className="group-hover:bg-opacity-75 transition-all" href="#"><Image className="w-11/12" fill
                                    src="img/icons/logos_tiktok-icon.svg" alt="tticn" /></a>
                                <p
                                    className="absolute -top-2/3 left-0 text-white bg-slate-600 opacity-0 group-hover:opacity-100 transition-all">
                                    Tiktok</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto border-b-2 pt-8 flex flex-col lg:flex-row justify-evenly">
                    <nav className="px-2 text-center lg:text-left">
                        <h2 className="text-lg text-white font-bold">TOUR</h2>
                        <ul className="mb-10">
                            <li className="text-lg py-2 hover:text-neutral-50"><a href="">Surabaya</a></li>
                            <li className="text-lg py-2 hover:text-neutral-50"><a href="">Malang</a></li>
                            <li className="text-lg py-2 hover:text-neutral-50"><a href="">Probolinggo</a></li>
                            <li className="text-lg py-2 hover:text-neutral-50"><a href="">Batu</a></li>
                            <li className="text-lg py-2 hover:text-neutral-50"><a href="">Blitar</a></li>
                        </ul>
                        <h2 className="text-lg text-white font-bold">SERVICE</h2>
                        <ul className="mb-10">
                            <li className="text-lg py-2 hover:text-neutral-50"><a href="">Car Hire</a></li>
                            <li className="text-lg py-2 hover:text-neutral-50"><a href="">Package Tour</a></li>
                        </ul>
                    </nav>
                    <nav className="px-2 text-center lg:text-left">
                        <h2 className="text-lg text-white font-bold">INFORMATION</h2>
                        <ul className="mb-10">
                            <li className="text-lg py-2 hover:text-neutral-50"><a href="">About Us</a></li>
                            <li className="text-lg py-2 hover:text-neutral-50"><a href="">Blog</a></li>
                            <li className="text-lg py-2 hover:text-neutral-50"><a href="">Kebijakan Privasi</a></li>
                            <li className="text-lg py-2 hover:text-neutral-50"><a href="">Dukungan Pengguna</a></li>
                        </ul>

                    </nav>
                    <nav className="px-2 text-center">
                        <h2 className="text-lg text-white font-bold">JATRIP - Macroma Media</h2>
                        <p className="mt-4 hover:text-neutral-50 hover:underline hover:underline-offset-2"><a href="">Office No.
                            56,
                            Jalan Raya Pakisaji, Kabupaten Malang, Jawa Timur(65162)</a></p>
                        <ul className="flex flex-col lg:block items-center mt-6 mb-10">
                            <li className="py-2 hover:text-slate-700"><a className="flex gap-5" href="https://wa.me/+6289673457965">
                                <PhoneCall />
                                <p> 0896 73457 965 <span className="font-bold">(Office)</span> </p>
                            </a></li>
                            <li className="py-2 hover:text-slate-700"><a className="flex gap-5"
                                href="mailto:nicoachmad15@gmail.com">
                                <Mail />
                                <p>nicoachmad15@gmail.com</p>
                            </a></li>
                        </ul>
                        <form action="#">
                            <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                                <div className="relative w-full">
                                    <label htmlFor="email"
                                        className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email
                                        address</label>
                                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                        <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor"
                                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z">
                                            </path>
                                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                        </svg>
                                    </div>
                                    <input
                                        className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Enter your email" type="email" id="email" />
                                </div>
                                <div>
                                    <button type="submit"
                                        className="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg bg-green-400 border cursor-pointer sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4">Subscribe</button>
                                </div>
                            </div>
                        </form>
                    </nav>
                </div>
                <div className="poppins container mx-auto py-10">
                    <p className="px-5 md:text-lg font-extrabold text-white">© Copyright 2024 - JATRIP</p>
                </div>
            </div> */}
        </footer>
    )
}

export default Footer