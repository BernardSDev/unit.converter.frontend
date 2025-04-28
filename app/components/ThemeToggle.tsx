"use client";

import { useTheme } from "next-themes";
import {ReactNode} from "react";
import {Moon, SunMoon} from 'lucide-react';
import IsMounted from "@/app/components/IsMounted";

function ThemeToggle(): Readonly<ReactNode> {
    const {theme, setTheme} = useTheme();

    return (
        <IsMounted>
            <button
                className={"p-2 rounded-full cursor-pointer border border-border"}
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
                {
                    theme === "light" ?
                        <Moon size={17} className="text-text-on-dark"/> :
                        <SunMoon size={17} className="text-text-on-dark"/>
                }
            </button>
        </IsMounted>
    )
}

export default ThemeToggle;