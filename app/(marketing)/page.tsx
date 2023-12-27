import localFont from "next/font/local"
import { Medal } from "lucide-react";
import Link from "next/link";
import { Poppins } from "next/font/google"
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const headingFont = localFont({
    src: "../../public/fonts/font.woff2",
})

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
const MarketingPage = () => {
    return (
        <div className="flex items-center justify-center flex-col">
            <div className={cn(
                "flex items-center justify-center flex-col",
                headingFont.className,
                )}>
                
                <h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-6">
                    BisyBoard help teams 
                </h1>
                <div className="text-3xl md:text-6xl bg-gradient-to-r from-fuchsia-600 to-indigo-600 text-white px-4 p-2 rounded-md w-fit">
                    move work forward.
                </div>
            </div>
            <div className={cn(
                "text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto",
                textFont.className,
                )}>
                Collaborate with your team, manage projects, and reach new productivity peaks. The way your team works is unique — accomplish it all with BisyBoard.
            </div>
            <Button className="mt-6" size="lg" asChild>
                <Link href="/sign-up">
                Get BisyBoard for free
                </Link>
            </Button>
        </div>
    )
}

export default MarketingPage;
