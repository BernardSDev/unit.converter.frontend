'use client';

import Image from "next/image";
import Modal from "@/app/components/Modal";
import {useState} from "react";
import ModalContent from "@/app/components/ModalContent";

function Main() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-background pb-4">
            <div className="container">
                <div className="grid grid-cols-1">
                    <Image
                        src="/hero.svg"
                        alt="mass unit"
                        width={1000}
                        height={1000}
                        className="w-[400px] object-fit rounded-2xl justify-self-center mb-10 mt-4"
                    />
                    <div className="text-center">
                        <h1 className="text-6xl md:text-7xl mb-5">UnitConvert</h1>
                        <p className="mb-10 sm:w-1/2 mx-auto tracking-wide leading-loose text-foreground">UnitConvert is an online unit converter.It allows you to convert mass, volume and temperature. To get started, click the button below and select unit to convert.</p>
                        <button
                            onClick={() => setIsOpen(true)}
                            className="bg-danger text-white px-8 py-2 rounded cursor-pointer justify-self-center"
                        >
                            Convert now
                        </button>
                    </div>
                    <Modal
                        isOpen={isOpen}
                        onClose={() => setIsOpen(false)}
                    >
                        <ModalContent />
                    </Modal>
                </div>
            </div>
        </div>
    )
}

export default Main;