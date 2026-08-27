import Link from "next/link";
import React from "react";

export default function Header() {
    return (
        <header className="flex justify-between items-center w-full px-8 py-4 bg-slate-900 text-white">
      
      {/* 1er Enfant (Tout à gauche) : Ton Nom */}
      <div className="text-2xl font-bold tracking-tight">
        <Link href="#accueil">MANTELLATO Xavier</Link>
      </div>

      {/* 2ème Enfant (Tout à droite) : La Navigation complète */}
      <nav className="flex items-center gap-8 font-medium">
        <Link href="#resume" className="hover:text-blue-400 transition-colors">
          Resume
        </Link>
        <Link href="#projets" className="hover:text-blue-400 transition-colors">
          Portfolio
        </Link>
        <Link href="#cv" className="hover:text-blue-400 transition-colors">
          CV
        </Link>
        <Link href="#contact" className="hover:text-blue-400 transition-colors">
          Contact
        </Link>
      </nav>

    </header>
    )
}