import Link from "next/link"
import Image from "next/image"

import { Poppins } from "next/font/google"

import { cn } from "@/lib/utils"

const textFont = Poppins({
    subsets: ["latin"],
    weight: [
        "100",
        "200",
        "300",
        "400",
        "500",
        "600",
        "700",
        "800",
        "900",
    ],
});


export const Logo = () => { 
    return (
        <Link href="/">
        <div className="hover:opacity-80 transition items-center gap-1 hidden md:flex">
            <Image 
            src="/logo.svg"
            alt="Logo"
            height={20}
            width={20}
            />
            <p className={cn(
                "text-xl text-neutral-800 tracking-tighter pt-1 font-medium",
                textFont.className
                )}>
                BisyBoard
            </p>
        </div>
        </Link>
    )
}