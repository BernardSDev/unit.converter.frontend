'use client';

import {ReactNode, useState} from "react";

function ModalContent() : Readonly<ReactNode> {
    const [selectedUnit, setSelectedUnit] = useState('grams-to-kilograms');
    const [value, setValue] = useState<string>("0");

    const handleUnitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedUnit(e.target.value);
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const str = (selectedUnit.split("-"));
    const firstUnit = str[0];
    const lastUnit = str[str.length - 1];

    return (
        <div className="rounded-2xl  bg-background p-2 sm:border sm:border-gray-300 border-transparent">
            <div className="px-2">
                <label className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-10">
                    Select a unit:
                    <select
                        value={selectedUnit}
                        onChange={handleUnitChange}
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
                <div className="w-full bg-transparent rounded-sm border border-neutral-200 focus:outline-none text-foreground">
                    <input
                        type="text"
                        onChange={handleInputChange}
                        value={value}
                        className="bg-transparent w-full focus:outline-none pl-4 py-2"
                    />
                    <p className="bg-secondary border-t border-t-neutral-200 pl-4 py-1">{firstUnit}</p>
                </div>
                <div>=</div>
                <div className="w-full bg-transparent rounded-sm border border-neutral-200 focus:outline-none text-foreground">
                    <input
                        type="text"
                        value={0.001 * Number(value)}
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