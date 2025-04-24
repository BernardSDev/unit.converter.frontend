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
            <div className="fixed h-[95svh] w-[95vw] grid place-content-center rounded-2xl overflow-hidden container bg-background shadow-2xl">
                <button
                    onClick={onClose}
                    className="absolute text-red-500 top-3 right-5 text-4xl font-bold cursor-pointer"
                >
                    &times;
                </button>
                {children}
            </div>
        </div>,
        modalRoot
    );
}
