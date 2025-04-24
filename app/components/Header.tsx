import {JSX} from "react";
import ThemeToggle from "@/app/components/ThemeToggle";

function Header() : JSX.Element {
    return(
        <header className="bg-background">
            <div className="container flex justify-between items-center py-2">
                <h1 className="text-xl tracking-tighter font-bold">Unit<span className="text-danger">Convert.</span></h1>
                <div className="flex items-center gap-10">
                    <ThemeToggle />
                    <button className="bg-danger text-white px-8 py-2 rounded cursor-pointer hidden sm:block">
                        Convert
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header;