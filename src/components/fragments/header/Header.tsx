const Header = () => {
    return (
        <header className="absolute w-full transition-all ease-in-out duration-300 ">
            <nav className="container text-white flex justify-between md:justify-around items-center h-max max-w-full">
                <a className="p" href=""><img className="w-[30vw] md:w-[20vw] lg:h-[190px]" src="/img/logonya.png"
                    alt="" /></a>
                <div id="navmenu"
                    className="absolute z-50 hidden md:block top-[15vw] w-screen md:relative md:top-0 md:w-max bg-blue-500 md:bg-transparent px-4">
                    <ul
                        className="py-5 md:py-0 flex flex-col md:flex-row md:items-center gap-5 md:text-lg xl:text-xl md:gap-10">
                        <li
                            className="font-semibold transition ease-in duration-300 hover:text-gray-500 hover:underline hover:underline-offset-2">
                            <a href="">Beranda</a>
                        </li>
                        <li
                            className="font-semibold transition ease-in duration-300 hover:text-gray-500 hover:underline hover:underline-offset-2">
                            <a href="">Wisata</a>
                        </li>
                        <li
                            className="font-semibold transition ease-in duration-300 hover:text-gray-500 hover:underline hover:underline-offset-2">
                            <a href="">Artikel</a>
                        </li>
                        <li
                            className="font-semibold transition ease-in duration-300 hover:text-gray-500 hover:underline hover:underline-offset-2">
                            <a href="./carhire.html">Car Hire</a>
                        </li>
                        <li
                            className="font-semibold transition ease-in duration-300 hover:text-gray-500 hover:underline hover:underline-offset-2">
                            <a href="">Kontak</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
export default Header
