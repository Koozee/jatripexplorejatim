import { ArrowLeftCircle } from "lucide-react"
import { useRouter } from "next/navigation";

const ArrowBack = () => {
    const router = useRouter();
    return (
        <header className="absolute p-4">
            <button type="button" onClick={() => router.push("/")} className="text-white flex items-center justify-between w-max after:content-['Back_to_Home'] after:ml-2 hover:text-slate-200 transition-colors duration-200">
                <ArrowLeftCircle size={"40"} />
            </button>
        </header>
    )
}

export default ArrowBack;