'use client'

import React, { useState } from "react";
import Modal from './components/modal'
import Email from './components/email-template'
import CustImg from './components/Image'

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
    <main className="min-h-screen w-full flex flex-col items-center px-4 sm:px-6 sm:mt-8 lg:px-8 overflow-x-hidden">   
      {/* Hero Section */}   
      <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-6xl my-8 lg:my-16 gap-8">
        <div className="flex flex-col w-full lg:w-1/2 justify-center items-start" id="home" title="home">
          {/* <p className="text-6sm ml-5 mb-5">Disponible pour de nouveau projets</p> */}
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold"><b>Développeur FullStack</b></h1>
          <p className="text-lg sm:text-2xl my-5 max-w-xl leading-relaxed text-slate-700">Je conçois des applications pc, mobile ou web de bout en bout. En faisant attention à l'expérience utilisateur et à la qualité du code.</p>
          <div className="flex flex-wrap items-center justify-start gap-4 mt-2">
            <a className="border border-black/25 px-5 py-3 rounded-3xl hover:bg-[#227531] bg-[#223831] text-white font-medium transition-colors" href="#projects">Voir mes projets</a>
            <a className="border border-black/25 px-5 py-3 rounded-3xl hover:bg-white/85 font-medium transition-colors" href="#contact">Contactez-moi</a>
          </div>
        </div>
        <div className="flex flex-col w-full lg:w-1/2 rounded-xl border border-black/15 bg-white/50 p-6 sm:p-8">
          <p className="text-xs sm:text-sm mb-2 font-mono">Comment je fonctionne ?</p>
          <p className="text-2xl sm:text-3xl lg:text-4xl mb-6 font-serif font-semibold">Transformer un besoin en produit clair</p>
          <div className="mb-6">
            <div className="flex justify-between items-center text-xs font-mono mb-2">
              <span className="text-slate-600 font-medium">Interface & expérience</span>
              <span className="text-slate-800 font-semibold">En progression</span>
            </div>
            <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
              <div className="h-full bg-emerald-800 rounded-full w-[40%]"></div>
            </div>
          </div>
          <div className="mb-8">
            <div className="flex justify-between items-center text-xs font-mono mb-2">
              <span className="text-slate-600 font-medium">Architecture & données</span>
              <span className="text-slate-800 font-semibold">Robuste</span>
            </div>
            <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
              <div className="h-full bg-orange-600 rounded-full w-[75%]"></div>
            </div>
          </div>

          <hr className="mb-6"/>

          <div className="flex flex-row items-center justify-evenly">
            <div className="flex flex-col items-center">
              <p className="font-serif font-bold text-lg text-slate-900 leading-tight">Front</p>
              <p className="text-[10px] font-mono tracking-wider text-slate-500 uppercase mt-0.5">INTERFACES</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="font-serif font-bold text-lg text-slate-900 leading-tight">Back</p>
              <p className="text-[10px] font-mono tracking-wider text-slate-500 uppercase mt-0.5">SERVICES</p>
            </div>
          </div>
        </div>
      </div>

{/* Projets */}

      <div className="flex flex-col justify-center w-full max-w-6xl mt-4 sm:mt-8">
        <div className="flex flex-col items-start justify-center" id="projects" title="projects">
          <h2 className="text-3xl sm:text-5xl font-serif font-bold mb-6">Mes projets</h2>

          <div className="flex flex-col md:flex-row items-center w-full rounded-2xl border border-black/15 bg-white/50 p-6 sm:p-15 mb-10 gap-6">
            <div className="w-full md:w-1/2 flex justify-center items-center p-4">
              <CustImg src="/nextjs.svg" alt="Next.js" className="h-50 w-1/2" />
            </div>
            <div className="flex flex-col w-full md:w-1/2">
              <p className="font-mono text-xs sm:text-sm mb-2">01 PRESENTATION  .  FRONT</p>
              <p className="text-2xl sm:text-3xl font-serif font-bold mb-3">Portfolio Personnel</p>
              <p className="text-base sm:text-xl leading-relaxed mb-6 text-slate-700">Page de présentation personnelle pour centraliser projets et compétences. Lien pour contacter si interessé.</p>
              <div className="flex flex-wrap gap-3">
                <div className="px-4 py-1.5 bg-black/5 rounded-xl border border-black/25">
                  <p className="font-mono text-xs sm:text-sm">TypeScript</p>
                </div>
                <div className="px-4 py-1.5 bg-black/5 rounded-xl border border-black/25">
                  <p className="font-mono text-xs sm:text-sm">NextJS</p>
                </div>
                <div className="px-4 py-1.5 bg-black/5 rounded-xl border border-black/25">
                  <p className="font-mono text-xs sm:text-sm">TailWindCSS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

{/* Compétences */}

      <div className="flex flex-col justify-center w-full max-w-6xl mt-4 sm:mt-8">
        <div className="flex flex-col items-start p-6 sm:p-8 mb-10 justify-center rounded-2xl border border-black/15 bg-white/50 w-full" title="skills" id="skills">
          <h2 className="text-3xl sm:text-5xl font-serif font-bold mb-8">Mes Compétences</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            <div className="flex flex-col items-start justify-start w-full">
              <p className="text-sm font-mono mb-4 text-gray-500 uppercase tracking-wider">Front-end</p>
              <div className="font-serif border-b border-black/15 pb-2 mb-2 w-full">React & Next.js</div>
              <div className="font-serif border-b border-black/15 pb-2 mb-2 w-full">TypeScript</div>
              <div className="font-serif border-b border-black/15 pb-2 mb-2 w-full">Tailwind CSS</div>
              <div className="font-serif border-b border-black/15 pb-2 mb-2 w-full">VueJS</div>
              <div className="font-serif w-full">ASP.NET</div>
            </div>
            <div className="flex flex-col items-start justify-start w-full">
              <p className="text-sm font-mono mb-4 text-gray-500 uppercase tracking-wider">Back-End</p>
              <div className="font-serif border-b border-black/15 pb-2 mb-2 w-full">Node.js</div>
              <div className="font-serif border-b border-black/15 pb-2 mb-2 w-full">PostgreSQL</div>
              <div className="font-serif border-b border-black/15 pb-2 mb-2 w-full">.NET</div>
              <div className="font-serif border-b border-black/15 pb-2 mb-2 w-full">API REST</div>
              <div className="font-serif w-full">Authentification</div>
            </div>
            <div className="flex flex-col items-start justify-start w-full">
              <p className="text-sm font-mono mb-4 text-gray-500 uppercase tracking-wider">Outils et infrastructures</p>
              <div className="font-serif border-b border-black/15 pb-2 mb-2 w-full">Docker</div>
              <div className="font-serif border-b border-black/15 pb-2 mb-2 w-full">CI/CD</div>
              <div className="font-serif border-b border-black/15 pb-2 mb-2 w-full">Git</div>
              <div className="font-serif border-b border-black/15 pb-2 mb-2 w-full">Linux</div>
              <div className="font-serif w-full">Automatisation</div>
            </div>
          </div>
        </div>
      </div>

{/* Etapes de travail */}

      <div className="flex flex-col justify-center w-full max-w-6xl mt-4 sm:mt-8">
        <div className="flex flex-col items-start justify-center w-full" title="workflow" id="workflow">
          <h2 className="text-3xl sm:text-5xl font-serif font-bold mb-6">Mes étapes de travail</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-10">
            <div className="flex flex-col justify-start rounded-2xl border border-black/15 bg-white/50 p-6">
              <h3 className="font-bold font-serif text-2xl leading-relaxed mb-2">Cadrer</h3>
              <p className="leading-relaxed font-serif text-gray text-sm sm:text-base">On échange pour préciser le besoin, les contraintes et les périmètres.</p>
            </div>
            <div className="flex flex-col justify-start rounded-2xl border border-black/15 bg-white/50 p-6">
              <h3 className="font-bold font-serif text-2xl leading-relaxed mb-2">Planifier</h3>
              <p className="leading-relaxed font-serif text-gray text-sm sm:text-base">Suite au cadrage je choisis les technologies et l'architecture adaptée au projet</p>
            </div>
            <div className="flex flex-col justify-start rounded-2xl border border-black/15 bg-white/50 p-6">
              <h3 className="font-bold font-serif text-2xl leading-relaxed mb-2">Construire</h3>
              <p className="leading-relaxed font-serif text-gray text-sm sm:text-base">J'avance sur le projet par incréments réguliers testés et révisions régulières.</p>
            </div>
            <div className="flex flex-col justify-start rounded-2xl border border-black/15 bg-white/50 p-6">
              <h3 className="font-bold font-serif text-2xl leading-relaxed mb-2">Livrer</h3>
              <p className="leading-relaxed font-serif text-gray text-sm sm:text-base">Je déploie, mesure et transmets une base saine qui tient dans la durée</p>
            </div>
          </div>
        </div>
      </div>

{/* Contact */}

      <div className="flex flex-col justify-center w-full max-w-6xl mt-4 sm:mt-8 mb-16">
        <div className="flex flex-col items-start p-6 sm:p-10 lg:p-12 mb-10 justify-center rounded-2xl border border-black/15 bg-[#223831] w-full" id="contact" title="contact">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-4 text-white max-w-2xl leading-tight">Besoin de me contacter? Une idée à concrétiser?<br/>Parlons-en !</h2>
          <p className="font-serif text-white/70 max-w-xl text-base sm:text-lg mb-6">Je suis disponible pour concevoir, développer ou faire évoluer votre prochain produit numérique.</p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 w-full sm:w-auto items-stretch sm:items-center">
            <button className="bg-[#D47032] text-[#223831] font-medium text-sm rounded-full px-6 py-3 transition-transform hover:-translate-y-0.5 text-center break-all sm:break-normal" onClick={() => setShowModal(true)}>xavier.mantellato.pro@gmail.com</button>
            {
              showModal &&
                <Modal onClose={() => setShowModal(false)} title="Formulaire de contact">
                  <Email></Email>
                </Modal>
            }
            <a className="text-white text-sm border border-white/25 rounded-full px-6 py-3 transition-colors hover:bg-white/10 text-center" href="https://www.linkedin.com/in/xavier-mantellato/">LinkedIn</a>
            <a className="text-white text-sm border border-white/25 rounded-full px-6 py-3 transition-colors hover:bg-white/10 text-center" href="https://github.com/Vexco">GitHub</a>
          </div>
        </div>
      </div>
    </main>
    </>
  );
}
