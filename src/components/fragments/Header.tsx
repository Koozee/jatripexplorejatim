"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
const Header = () => {
    const router = useRouter()
    const pathname = usePathname()
    const { status } = useSession();
    const showSession = () => {
        if (status === "authenticated") {
            return (
                <li className="font-semibold">
                    <div className="flex gap-8">
                        <button type="button" onClick={() => {
                            signOut({ redirect: false }).then(() => {
                                router.push("/");
                            });
                        }} className="border-2 border-blue-900 px-8 py-2 hover:bg-blue-800 transition-all ease-linear duration-150">Logout</button>
                    </div>
                </li>
            )
        } else {
            return (
                <li className="font-semibold">
                    <div className="flex gap-8">
                        <button type="button" onClick={() => router.push('/login')} className="border-2 border-blue-900 px-8 py-2 hover:bg-blue-800 transition-all ease-linear duration-150">Masuk</button>
                        <button type="button" onClick={() => router.push('/register')} className="bg-blue-800/90 px-8 py-2 hover:bg-blue-800 transition-all ease-linear duration-150">Daftar</button>
                    </div>
                </li>
            )
        }
    }
    return (
        <header className="absolute w-full transition-all ease-in-out duration-300 ">
            <nav className="container text-white flex justify-between md:justify-around items-center h-max max-w-full">
                <Link href={"/"}>
                    <Image width={264} height={264} src="/img/logonya.png"
                        alt="logonya" />
                </Link>
                <div id="navmenu"
                    className="absolute z-50 hidden md:block top-[15vw] w-screen md:relative md:top-0 md:w-max bg-blue-500 md:bg-transparent px-4">
                    <ul
                        className="py-5 md:py-0 flex flex-col md:flex-row md:items-center gap-5 md:text-lg xl:text-xl md:gap-10">
                        <Link href="/article">
                            <li
                                className={`font-semibold transition ease-in duration-300 hover:text-slate-200 hover:underline hover:underline-offset-2 ${pathname === "/article" ? `underline underline-offset-2` : null}`}>
                                Artikel
                            </li>
                        </Link>
                        <Link href="/carhire">
                            <li
                                className={`font-semibold transition ease-in duration-300 hover:text-slate-200 hover:underline hover:underline-offset-2 ${pathname === "/carhire" ? `underline underline-offset-2` : null}`}>
                                Layanan
                            </li>
                        </Link>
                        <Link href="">
                            <li
                                className="font-semibold transition ease-in duration-300 hover:text-slate-200 hover:underline hover:underline-offset-2">
                                Kontak
                            </li>
                        </Link>
                        {showSession()}
                    </ul>
                </div>
            </nav>
        </header>
    )
}
export default Header
