'use client';

import Image from "next/image";
import Modal from "@/app/components/Modal";
import {useState} from "react";
import ModalContent from "@/app/components/ModalContent";

function Main() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-background">
            <div className="container">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-10 md:gap-30 mt-5 min-h-[75svh] max-h-screen]">
                    <Image
                        src="/bg.jpg"
                        alt="mass unit"
                        width={1000}
                        height={1000}
                        className="w-[500px] object-fit rounded-2xl"
                    />
                    <div>
                        <h1 className="text-2xl mb-6">UnitConvert</h1>
                        <p className="mb-10 tracking-wide leading-relaxed text-foreground">UnitConvert is an online unit converter.It allows you to convert mass, volume and temperature. To get started, click the button below and select unit to convert.</p>
                        <button
                            onClick={() => setIsOpen(true)}
                            className="bg-blue-600 text-white px-8 py-2 rounded cursor-pointer"
                        >
                            Convert
                        </button>
                    </div>

                    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                        <ModalContent />
                    </Modal>
                </div>
            </div>
        </div>
    )
}

export default Main;