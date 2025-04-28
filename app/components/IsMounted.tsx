'use client';

import {JSX, useEffect, useState} from "react";

function IsMounted({
    children
}: Readonly<{ children: JSX.Element; }>): JSX.Element {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return isMounted ? children : <></>;
}

export default IsMounted;