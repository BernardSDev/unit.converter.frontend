import Header from "@/app/components/Header";
import Main from "@/app/components/Main";
import {
    ConvertGramsToKilograms,
    ConvertKilometersToMiles,
    ConvertCelsiusToFahrenheit, ConvertLitersToGallons
} from "@/app/lib/data";
import {JSX} from "react";

export default async function Page() : Promise<JSX.Element> {
    const sendGrams = await ConvertGramsToKilograms(100);
    const sendKilometers = await ConvertKilometersToMiles(100);
    const sendCelsius = await ConvertCelsiusToFahrenheit(1);
    const sendLiters = await ConvertLitersToGallons(100);

    console.log(sendGrams, sendKilometers, sendCelsius, sendLiters);

    return (
        <div>
            <Header />
            <Main />
        </div>
    );
}
