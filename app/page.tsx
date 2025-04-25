import Header from "@/app/components/Header";
import Main from "@/app/components/Main";
import {JSX} from "react";

export default function Page() : Readonly<JSX.Element> {
    return (
        <div>
            <Header />
            <Main />
        </div>
    );
}
