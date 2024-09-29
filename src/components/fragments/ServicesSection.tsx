const ServicesSection = ()=>{
    return(
        <section className="mt-10 px-5 md:px-28">
        <div className="container mx-auto">
            <div className="text-center">
                <h1 className="text-2xl font-bold py-5">SERVICE KAMI</h1>
                <h2 className="pb-5 text-gray-600">Dengan
                    pengalaman dan pengetahuan yang kami miliki tentang keindahan Jawa Timur, kami berkomitmen untuk
                    menjadi mitra yang dapat diandalkan dalam menjelajahi destinasi menakjubkan di provinsi ini.
                    Jadikanlah kami sebagai teman perjalanan yang dapat Anda percayai, siap menyertai setiap langkah
                    perjalanan Anda menuju pengalaman wisata yang mengesankan.</h2>
            </div>
            <div className="flex flex-col md:flex-row gap-5 py-10">
                <div className="flex flex-col items-center text-center">
                    <a href="/src/views/carhire.html">
                        <img className="hover:animate-rotate-y" src="/img/icons/car-wash.png" alt=""/>
                    </a>
                    <p className="text-xl font-medium py-5">Car Hire</p>
                    <p className="text-gray-600">Jelajahi Jawa Timur dengan kenyamanan dan fleksibilitas, memilih dari
                        berbagai jenis mobil
                        yang sesuai dengan gaya perjalanan Anda.</p>
                </div>
                <div className="flex flex-col items-center text-center">
                    <a href="/src/views/packagetrip.html">
                        <img className="hover:animate-rotate-y" src="/img/icons/luggage.png" alt=""/>
                    </a>
                    <p className="text-xl font-medium py-5">Package Trip</p>
                    <p className="text-gray-600">Pilihlah paket liburan eksklusif Jatrip, kami menyediakan
                        paket liburan yang disesuaikan dengan kebutuhan dan anggaran Anda.</p>
                </div>
                <div className="flex flex-col items-center text-center">
                    <img  className="cursor-pointer hover:animate-rotate-y"
                        src="/img/icons/bot.png" alt=""/>
                    <p className="text-xl font-medium py-5">Chat Bot Assistant</p>
                    <p className="text-gray-600">Dapatkan bantuan langsung dan jawaban cepat atas pertanyaan Anda dengan
                        bantuan chatbot assistant
                        kami. Sederhana, cepat, dan efisien.</p>
                </div>
            </div>
        </div>
    </section>
    )
}

export default ServicesSection