'use client';

import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        const closeOnEscapeKey = (e: KeyboardEvent) => e.key === 'Escape' ? onClose() : null;
        document.addEventListener('keydown', closeOnEscapeKey);
        return () => document.removeEventListener('keydown', closeOnEscapeKey);
    }, [onClose]);

    if (!mounted || !isOpen) return null;

    const modalRoot = document.getElementById('modal-root');
    if (!modalRoot) return null;

    return ReactDOM.createPortal(
        <div className="fixed inset-0 bg-secondary/85 flex items-center justify-center z-50">
            <div className="fixed rounded-2xl h-[90svh] w-[90vw] grid place-items-center box-border min-w-fit overflow-hidden bg-background shadow-2xl">
                <button
                    onClick={onClose}
                    className="absolute text-red-500 top-4 right-4 text-4xl font-bold cursor-pointer"
                >
                    &times;
                </button>
                {children}
            </div>
        </div>,
        modalRoot
    );
}
