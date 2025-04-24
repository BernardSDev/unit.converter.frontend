import dateTimeISO = CypressCommandLine.dateTimeISO;

interface HealthResponse {
    message: string;
    timestamp: dateTimeISO;
}

interface SendUnitConversionResponse {
    message: string;
    result: number;
}

export const fetchHealthData = async () : Promise<HealthResponse | undefined> => {
    try {
        const res = await fetch('http://localhost:5046/api/conversion/health/');
        return await res.json();
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

export const ConvertGramsToKilograms = async (grams: number) : Promise<SendUnitConversionResponse | undefined> => {
    try {
        const res = await fetch('http://localhost:5046/api/conversion/grams-to-kilograms', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(grams),
        });

        return  await res.json();
    } catch (error) {
        console.error('Error sending grams:', error);
    }
};

export const ConvertKilometersToMiles = async (kilometers: number) : Promise<SendUnitConversionResponse | undefined> => {
    try {
        const res = await fetch('http://localhost:5046/api/conversion/kilometers-to-miles', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(kilometers),
        });

        return  await res.json();
    } catch (error) {
        console.error('Error sending kilometers:', error);
    }
};

export const ConvertCelsiusToFahrenheit = async (celsius: number) : Promise<SendUnitConversionResponse | undefined> => {
    try {
        const res = await fetch('http://localhost:5046/api/conversion/celsius-to-fahrenheit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(celsius),
        });

        return  await res.json();
    } catch (error) {
        console.error('Error sending celsius:', error);
    }
};

export const ConvertLitersToGallons = async (liters: number) : Promise<SendUnitConversionResponse | undefined> => {
    try {
        const res = await fetch('http://localhost:5046/api/conversion/liters-to-gallons', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(liters),
        });

        return  await res.json();
    } catch (error) {
        console.error('Error sending liters:', error);
    }
};
