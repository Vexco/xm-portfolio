import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

export default function Modal({ onClose, children, title }) {
    const [isMounted, setIsMounted] = useState(false);
    const handleCloseClick = (e) => {
        e.preventDefault();
        onClose();
    };

    useEffect(() => {
        setIsMounted(true);

        document.body.style.overflow = 'hidden';

        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            document.body.style.overflow = 'unset';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [onClose])

    if (!isMounted) return null;

    const modalRoot = document.getElementById("modal-root");
    if (!modalRoot) return null;

    const modalContent = (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
        >
            <div 
                className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#F1F4EE] rounded-2xl p-6 sm:p-8 shadow-2xl border border-black/10"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    type="button"
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 text-slate-500 hover:text-black hover:bg-black/5 rounded-full transition-colors focus:outline-none"
                    aria-label="Fermer la boîte de dialogue"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                        {/* Titre */}
                {title && (
                  <h2 className="text-2xl sm:text-4xl font-serif font-bold text-slate-900 mb-6 pr-8">
                    {title}
                  </h2>
                )}

                {/* Corps de la modale */}
                <div className="font-serif text-slate-800">
                  {children}
                </div>
            </div>
        </div>
    );

    return ReactDOM.createPortal(
        modalContent,
        modalRoot
    );
};