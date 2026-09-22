'use client';

import Link from "next/link";
import React from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

    return (
      <header 
          onMouseLeave={() => setIsHovered(false)}
          className={`
            fixed top-0 left-0 right-0 z-50
            transition-transform duration-300 ease-in-out
            flex flex-col md:flex-row justify-between items-center
            px-4 sm:px-8 py-4 
            bg-[#223831] text-[#D47032] shadow-md
            ${isVisible ? 'translate-y-0' : '-translate-y-full'}
        `}>
      
      {/* 1er Enfant (Tout à gauche) : Ton Nom */}
      <div className="flex justify-between items-center w-full md:w-auto">
        <div className="text-xl sm:text-2xl font-bold tracking-tight">
          <Link href="#home">MANTELLATO Xavier</Link>
        </div>

{/* Bouton Burger */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden p-2 text-[#D47032] hover:text-[#F1F4EE] focus:outline-none"
          aria-label="Ouvrir le menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMobileMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* 2ème Enfant (Tout à droite) : La Navigation complète */}
      <nav className={`
          flex-col md:flex-row items-center gap-4 md:gap-8 font-medium w-full md:w-auto
          mt-4 md:mt-0 pt-4 md:pt-0 border-t md:border-t-0 border-[#D47032]/20
          ${isMobileMenuOpen ? 'flex' : 'hidden md:flex'}
        `}>
        <Link href="#projects" className="hover:text-[#F1F4EE] transition-colors py-1 sm:py-0 w-full md:w-auto text-center">
          Projets
        </Link>
        <Link href="#skills" className="hover:text-[#F1F4EE] transition-colors py-1 sm:py-0 w-full md:w-auto text-center">
          Compétences
        </Link>
        <Link href="#workflow" className="hover:text-[#F1F4EE] transition-colors py-1 sm:py-0 w-full md:w-auto text-center">
          Méthodologie
        </Link>
        <Link href="#contact" className="hover:text-[#F1F4EE] transition-colors py-1 sm:py-0 w-full md:w-auto text-center">
          Contact
        </Link>
      </nav>

    </header>
    )
}