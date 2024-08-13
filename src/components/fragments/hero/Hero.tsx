const Hero = () => {
    return (
        <main
            className="bg-cover bg-fixed bg-no-repeat w-screen h-screen flex flex-col md:flex-row justify-center items-center md:justify-start md:py-96"
            style={{ backgroundImage: "url('/img/background/bgmain.jpg')" }}
        >
            <div className="ml-5 md:ml-20 flex flex-col justify-center">
                <div className="w-max transform -skew-x-12 origin-bottom-left bg-blue-500 shadow-lg">
                    <h3 className="font-semibold text-white text-3xl lg:text-xl 2xl:text-4xl tracking-widest p-2">LET' S GO</h3>
                </div>
                <h1 className=" text-white w-max font-black tracking-widest text-4xl md:text-7xl 2xl:text-8xl">EXPLORE</h1>
                <h1 className=" text-white w-max font-bold tracking-widest md:text-lg xl:text-xl">THE BEST VACATION IN EAST JAVA
                </h1>
                <h6 className="text-slate-100 font-semibold text-lg  md:w-1/2 2xl:text-xl mt-5">Mulai petualangan Anda sekarang dan
                    biarkan
                    kami membawa Anda dalam perjalanan
                    yang memukau melalui destinasi-destinasi paling menarik dan tersembunyi di Jawa Timur.</h6>
                <button
                    className="w-max bg-blue-500 hover:bg-blue-700 transition-colors ease-linear shadow-lg text-white md:text-2xl tracking-widest font-semibold py-3 px-4 md:px-5 mt-3">
                    DESTINATIONS
                </button>

                <ul className="mt-8 flex gap-10">
                    <li className="hover:opacity-60 transition-opacity ease-linear duration-200"><a href=""><img
                        src="/img/icons/logos_facebook.svg" alt="" /></a></li>
                    <li className="hover:opacity-60 transition-opacity ease-linear duration-200"><a href=""><img
                        src="/img/icons/logos_instagram.svg" alt="" /></a></li>
                    <li className="hover:opacity-60 transition-opacity ease-linear duration-200"><a href=""><img
                        src="/img/icons/logos_tiktok-icon.svg" alt="" /></a></li>
                </ul>
            </div>
        </main>
    )
}
export default Hero
