"use client";

import { useTheme } from "next-themes";
import {ReactNode} from "react";
import {Moon, SunMoon} from 'lucide-react';

function ThemeToggle(): Readonly<ReactNode> {
const {theme, setTheme} = useTheme();

    return(
        <>
            <button
                className={"p-2 rounded-full cursor-pointer border border-gray-200"}
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
                {
                    theme === "light" ?
                    <Moon size={17}/> :
                    <SunMoon size={17}/>
                }
            </button>
        </>
    )
}

export default ThemeToggle;