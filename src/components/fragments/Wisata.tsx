import Cards from "@/components/UI/Cards";

const Wisata = () => {

    return (
        <article className="mt-10 px-5 md:px-28">
            <section className="relative mx-auto container pt-5">
                <h2 className="text-xl md:text-2xl text-center font-bold">Destinasi
                    Wisata Pilihan</h2>
                <p className="text-center text-transparent font-bold underline decoration-red-800 decoration-4 mb-10">
                    ------------------</p>
                <article className="flex flex-col md:grid md:grid-cols-2 xl:grid-cols-3 gap-24">
                    <Cards />
                </article>
            </section>
        </article>
    )
}

export default Wisata;
