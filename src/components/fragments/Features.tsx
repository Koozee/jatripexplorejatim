const Features = ()=> {
    return(
        <section className="mt-10 px-5 lg:px-28">
        <div className="container py-10 mx-auto">
            <h1 className="text-center text-2xl font-bold py-10">Menagapa Jatrip?</h1>

            <div className="flex flex-col lg:flex-row">
                <div className="flex flex-col-reverse lg:flex-row items-center lg:w-1/2 py-3">
                    <div className="text-wrap w-full lg:w-1/2 lg:pr-7">
                        <p className="lg:text-end text-lg font-semibold">
                            Informasi Komprehensif
                        </p>
                        <p className="pt-2 lg:text-end">
                            Menyajikan informasi yang komprehensif tentang berbagai destinasi wisata, kuliner khas,
                            budaya, sejarah,
                            dan kegiatan di Jawa Timur, memungkinkan pengunjung untuk mendapatkan pemahaman yang
                            mendalam tentang
                            provinsi ini.
                        </p>
                    </div>
                    <div className="w-full md:w-1/2">
                        <img className=""
                            src="https://images.unsplash.com/photo-1644030692707-b59d8ef5e8b1?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""/>
                    </div>
                </div>

                <div className="relative hidden lg:block bg-red-500 w-[2px] mx-10">
                    <div
                        className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 h-4 w-4 rounded-full bg-red-500">
                    </div>
                </div>

                <div className="flex flex-col-reverse lg:flex-row-reverse items-center lg:w-1/2 py-3">
                    <div className="text-wrap w-full lg:w-1/2 lg:pl-7">
                        <p className="lg:text-end text-lg font-semibold">
                            Agen Berpengalaman
                        </p>
                        <p className="pt-2 lg:text-end">
                            Agen wisata berpengalaman di Jawa Timur yang dapat membantu pengunjung merencanakan
                            perjalanan mereka dengan lebih baik. Ini termasuk rekomendasi agen tour lokal yang dapat
                            menyediakan paket perjalanan yang disesuaikan dengan kebutuhan dan preferensi pengunjung.
                        </p>
                    </div>
                    <div className="w-full md:w-1/2">
                        <img className=""
                            src="https://images.unsplash.com/photo-1524850301259-7729d41d11d9?q=80&w=1994&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""/>
                    </div>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row">
                <div className="flex flex-col-reverse lg:flex-row items-center lg:w-1/2 py-3">
                    <div className="text-wrap w-full lg:w-1/2 lg:pr-7">
                        <p className="lg:text-end text-lg font-semibold">
                            Peminjaman Mobil Terpercaya
                        </p>
                        <p className="pt-2 lg:text-end">
                            Memfasilitasi peminjaman mobil melalui situs web, dengan opsi untuk memilih dari berbagai
                            jenis mobil yang sesuai dengan kebutuhan perjalanan pengunjung. Sistem peminjaman yang mudah
                            digunakan dan integrasi dengan penyedia jasa rental mobil terkemuka memudahkan pengunjung
                            dalam merencanakan transportasi mereka di Jawa Timur.
                        </p>
                    </div>
                    <div className="w-full md:w-1/2">
                        <img className=""
                            src="https://images.unsplash.com/photo-1608790039230-6121188d1280?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""/>
                    </div>
                </div>

                <div className="relative hidden lg:block bg-red-500 w-[2px] mx-10">
                    <div
                        className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 h-4 w-4 rounded-full bg-red-500">
                    </div>
                </div>

                <div className="flex flex-col-reverse lg:flex-row-reverse items-center lg:w-1/2 py-3">
                    <div className="text-wrap w-full lg:w-1/2 lg:pl-7">
                        <p className="lg:text-end text-lg font-semibold">
                            Assistant AI
                        </p>
                        <p className="pt-2 lg:text-end">
                            Menyediakan asisten virtual berbasis kecerdasan buatan (AI) yang dapat membantu pengunjung
                            dalam menemukan informasi, merencanakan perjalanan, dan menjawab pertanyaan umum tentang
                            destinasi, kuliner, budaya, dan kegiatan di Jawa Timur. Asisten AI ini dapat meningkatkan
                            pengalaman pengunjung dengan memberikan respon cepat dan akurat.
                        </p>
                    </div>
                    <div className="w-full md:w-1/2">
                        <img className=""
                            src="https://img.freepik.com/free-vector/chatbot-messenger-isometric-concept_1284-69074.jpg?t=st=1709634169~exp=1709637769~hmac=68352c1e1c3127bcadd1ddf131a635eec336d738be6c9f204be152b11aa58c66&w=826"
                            alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Features