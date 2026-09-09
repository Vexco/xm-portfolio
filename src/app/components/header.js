'use client';

import Link from "next/link";
import React from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);

  // Détecte le défilement de la page
  React.useEffect(() => {
    const handleScroll = () => {
      // On cache la navbar si on a scrollé de plus de 50 pixels
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // La navbar est visible si on est en haut de la page OU si la souris la survole
  const isVisible = !isScrolled || isHovered;
    return (
      <>
      <div 
        className="fixed top-0 left-0 w-full h-8 z-40"
        onMouseEnter={() => setIsHovered(true)}
      />

      <header className="
          flex justify-between items-center w-full 
          px-8 py-4 
          bg-orange-200 text-blue-950 
          dark:bg-slate-900 dark:text-white">
      
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
            </>
    )
}