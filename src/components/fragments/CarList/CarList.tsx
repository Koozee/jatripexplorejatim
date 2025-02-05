import Image from "next/image";
import Link from "next/link";

type Destination = {
    name: string;
    duration: string;
    price: string;
};

type Car = {
    name: string;
    image: string;
    destinations: Destination[];
};

const TableHeader: React.FC = () => (
    <div className="grid grid-cols-2 md:grid-cols-4 rounded-lg bg-blue-600 text-xl font-bold text-white text-center my-5">
        <div className="uppercase border-r-2 rounded-tl-lg rounded-bl-lg px-5 py-5">Destination</div>
        <div className="uppercase border-r-2 px-5 py-5">Duration</div>
        <div className="hidden md:block uppercase border-r-2 px-5 py-5">Price</div>
        <div className="hidden md:block uppercase rounded-tr-lg rounded-br-lg px-5 py-5">Details</div>
    </div>
);

const DestinationItem: React.FC<{ item: Destination }> = ({ item }) => (
    <div className="mt-1 border-2 rounded-lg grid grid-cols-2 md:grid-cols-4 items-center">
        <div className="p-5 text-center font-medium border-r-2">{item.name}</div>
        <div className="p-5 text-center font-medium border-r-2">{item.duration}</div>
        <div className="p-5 text-amber-500 text-center font-medium border-r-2">{item.price}</div>
        <div className="p-5 flex flex-col xl:flex-row gap-2 justify-center">
            <button className="bg-blue-800 hover:bg-yellow-400 py-4 px-1 rounded-lg text-white font-medium">
                SEE DETAILS
            </button>
            <button className="bg-blue-800 hover:bg-yellow-400 py-4 px-1 rounded-lg text-white font-medium">
                <Link href="/booking">
                    BOOK NOW
                </Link>
            </button>
        </div>
    </div>
);

const CarSection: React.FC<{ car: Car }> = ({ car }) => (
    <section className="flex flex-col lg:flex-row justify-center items-center gap-5 px-3">
        <div className="md:w-1/2 xl:w-1/4 px-10 border rounded-md">
            <h3 className="text-center py-10">{car.name}</h3>
            <Image
                width={640}
                height={640}
                src={car.image}
                alt={car.name}
                placeholder="blur"
                blurDataURL="/img/placeholder.png"
            />
        </div>
        <div className="w-full xl:w-3/4">
            <TableHeader />
            {car.destinations.map((item, index) => (
                <DestinationItem key={index} item={item} />
            ))}
        </div>
    </section>
);

const CarList: React.FC = () => {
    const cars: Car[] = [
        {
            name: "INNOVA REBORN (7 Seat)",
            image: "/img/car/toyota-new-kijang-innova.png",
            destinations: [
                { name: "Surabaya", duration: "24 Hours", price: "Rp. 2.000.000" },
                { name: "Malang", duration: "24 Hours", price: "Rp. 2.000.000" },
                { name: "Batu", duration: "24 Hours", price: "Rp. 2.000.000" },
                { name: "Banyuwangi", duration: "24 Hours", price: "Rp. 2.000.000" },
                { name: "Blitar", duration: "24 Hours", price: "Rp. 2.000.000" },
            ],
        },
        {
            name: "Avanza Veloz (7 Seat)",
            image: "/img/car/3-veloz-platinum-white-pearl.png",
            destinations: [
                { name: "Surabaya", duration: "24 Hours", price: "Rp. 2.000.000" },
                { name: "Malang", duration: "24 Hours", price: "Rp. 2.000.000" },
                { name: "Batu", duration: "24 Hours", price: "Rp. 2.000.000" },
                { name: "Banyuwangi", duration: "24 Hours", price: "Rp. 2.000.000" },
                { name: "Blitar", duration: "24 Hours", price: "Rp. 2.000.000" },
            ],
        },
        {
            name: "Hiace Mini Bus (16 Seat)",
            image: "/img/car/2 hiace premio white.png",
            destinations: [
                { name: "Surabaya", duration: "24 Hours", price: "Rp. 2.000.000" },
                { name: "Malang", duration: "24 Hours", price: "Rp. 2.000.000" },
                { name: "Batu", duration: "24 Hours", price: "Rp. 2.000.000" },
                { name: "Banyuwangi", duration: "24 Hours", price: "Rp. 2.000.000" },
                { name: "Blitar", duration: "24 Hours", price: "Rp. 2.000.000" },
            ],
        },
    ];

    return (
        <div>
            {cars.map((car, index) => (
                <CarSection key={index} car={car} />
            ))}
        </div>
    );
};

export default CarList;
