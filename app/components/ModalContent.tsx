'use client';

import {ReactNode, useState} from "react";
import {
    ConvertCelsiusToFahrenheit,
    ConvertGramsToKilograms,
    ConvertKilometersToMiles,
    ConvertLitersToGallons
} from "@/app/lib/data";

function ModalContent() : Readonly<ReactNode> {
    const [selectedConversion, setSelectedConversion] = useState('grams-to-kilograms');
    const [value, setValue] = useState<number>(0);
    const [result, setResult] = useState<number>(0);

    const conversion = selectedConversion.split("-");
    const unit = conversion[0];
    const lastUnit = conversion[conversion.length - 1];

    const handleConversionChange = (e?: React.ChangeEvent<HTMLSelectElement>) => {
        if (e) {
            setSelectedConversion(e.target.value);
            setValue(0);
            setResult(0);
        }

    }

    const handleUnitInputChange = async  (e: React.ChangeEvent<HTMLInputElement>) => {
        const input = Number(e.target.value);
        setValue(input);

        switch (unit) {
            case 'grams':
                try {
                    const response = await ConvertGramsToKilograms(input);

                    if (response && typeof response?.result === 'number') setResult(Number(response.result.toPrecision(2)));
                    else setResult(value / 1000);
                } catch (err) {
                    console.error("Backend conversion failed, falling back:", err);
                    setResult(value / 1000);
                }
                break;

            case 'kilometers':
                try {
                    const response = await ConvertKilometersToMiles(input);

                    if (response && typeof response?.result === 'number') setResult(Number(response.result.toPrecision(2)));
                    else setResult(value / 1.609344);
                } catch (err) {
                    console.error("Backend conversion failed, falling back:", err);
                    setResult(value / 1.609344);
                }
                break;

            case 'celsius':
                try {
                    const response = await ConvertCelsiusToFahrenheit(input);

                    if (response && typeof response?.result === 'number') setResult(Number(response.result.toPrecision(2)));
                    else setResult((value * 9/5) + 32);
                } catch (err) {
                    console.error("Backend conversion failed, falling back:", err);
                    setResult((value * 9/5) + 32);
                }
                break;

            case 'litres':
                try {
                    const response = await ConvertLitersToGallons(input);

                    if (response && typeof response?.result === 'number') setResult(Number(response.result.toPrecision(2)));
                    else setResult(value / 0.264172);
                } catch (e) {
                    console.error("Backend conversion failed, falling back:", e);
                    setResult(value / 0.264172);
                }
                break;

            default:
                setResult(0);
        }
    };

    return (
        <div className="rounded-2xl  bg-background p-2 sm:border sm:border-border border-transparent sm:px-8 sm:py-10">
            <div className="px-2">
                <label className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-10">
                    Select a unit:
                    <select
                        value={selectedConversion}
                        onChange={handleConversionChange}
                        className={"bg-secondary border-none text-lg text-foreground p-3 rounded-md"}
                    >
                        <option value="grams-to-kilograms">Grams to Kilograms</option>
                        <option value="kilometers-to-miles">Kilometers to Miles</option>
                        <option value="celsius-to-fahrenheit">Celsius to Fahrenheit</option>
                        <option value="litres-to-gallons">Litres to Gallons</option>
                    </select>
                </label>
            </div>
            <div className="bg-background flex items-center justify-between py-8 mt-2 gap-2 sm:gap-5 px-2">
                <div className="w-full bg-transparent rounded-sm border border-neutral-200 focus:outline-none text-text-secondary">
                    <input
                        type="text"
                        onChange={handleUnitInputChange}
                        value={value}
                        className="bg-transparent w-full focus:outline-none pl-4 py-2"
                    />
                    <p className="bg-secondary border-t border-t-neutral-200 pl-4 py-1">{unit}</p>
                </div>
                <div>=</div>
                <div className="w-full bg-transparent rounded-sm border border-neutral-200 focus:outline-none text-foreground">
                    <input
                        type="text"
                        value={result}
                        className="bg-transparent w-full focus:outline-none pl-4 py-2"
                        disabled={true}
                    />
                    <p className="bg-secondary border-t border-t-neutral-200 pl-4 py-1">{lastUnit}</p>
                </div>
            </div>
        </div>
    )
}

export default ModalContent;