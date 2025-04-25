'use server';

import {
    ConvertGramsToKilograms,
    ConvertKilometersToMiles,
    ConvertCelsiusToFahrenheit,
    ConvertLitersToGallons,
} from '@/app/lib/data';

export async function performConversion(unit: string, value: number) {
    switch (unit) {
        case 'grams':
            return await ConvertGramsToKilograms(value);
        case 'kilometers':
            return await ConvertKilometersToMiles(value);
        case 'celsius':
            return await ConvertCelsiusToFahrenheit(value);
        case 'litres':
            return await ConvertLitersToGallons(value);
        default:
            return { result: 0 };
    }
}
