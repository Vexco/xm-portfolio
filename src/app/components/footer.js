import React from "react";

export default function Card({ }) {
    return (
        <footer className="w-full border-t border-black/10 bg-[#F1F4EE]/50 mt-auto">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
                <span className="font-serif font-bold text-base sm:text-lg text-slate-900">MANTELLATO Xavier</span>
                <span className="font-mono text-xs sm:text-sm text-black/50 max-w-md sm:text-right">2026 - Développeur FullStack. Conçu et codé avec soin.</span>
            </div>
        </footer>
    );
};