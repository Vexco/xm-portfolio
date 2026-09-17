import Section from "./components/section";
import Project from "./components/projectCard";
import Card from "./components/card";
import React from "react";
import Logo from '../../public/nextjs.svg'

export default function Home() {
  return (
    <main className="min-h-screen min-w-100% flex flex-col items-center">
      <div className="flex flex-row items-center justify-center">
        <div className="flex flex-col w-1/3 m-10 h-150 justify-center items-start">
          {/* <p className="text-6sm ml-5 mb-5">Disponible pour de nouveau projets</p> */}
          <h1 className="font-serif text-7xl ml-5"><b>Développeur FullStack</b></h1>
          <p className="text-2xl m-5 max-w-150 leading-relaxed">Je conçois des applications pc, mobile ou web de bout en bout. En faisant attention à l'expérience utilisateur et à la qualité du code.</p>
          <div className="flex flex-row items-center justify-start">
            <button className="m-5 border border-black/25 p-3 rounded-3xl hover:bg-[#227531] bg-[#223831] text-white font-medium">Voir mes projets</button>
            <button className="m-5 border border-black/25 p-3 rounded-3xl hover:bg-white/85 font-medium">Contactez-moi</button>
          </div>
        </div>
        <div className="flex flex-col w-1/3 rounded-xl border border-black/15 bg-white/50 p-6 m-10">
          <p className="text-6sm m-4 font-mono">Comment je fonctionne ?</p>
          <p className="text-4xl m-4 font-serif">Transformer un besoin en produit clair</p>
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
      <div className="flex flex-col justify-center w-full max-w-6xl mt-8">
        <div className="flex flex-col items-start justify-center">
          <h2 className="text-3xl font-serif font-bold mb-6">Mes projets</h2>
          <div className="flex flex-row items-center w-full rounded-2xl border border-black/15 bg-white/50 p-6 mb-10 min-h-100">
            <img src="/nextjs.svg" alt="Next.js" className="h-50 w-1/2" />
            <div className="flex flex-col w-1/2">
              <p className="font-mono text-sm leading-relaxed">01 PRESENTATION  .  FRONT</p>
              <p className="text-3xl font-serif font-bold leading-relaxed">Portfolio Personnel</p>
              <p className="text-xl leading-relaxed mb-5">Page de présentation personnelle pour centraliser projets et compétences. Lien pour contacter si interessé.</p>
              <div className="flex flex-row justify-evenly leading-relaxed">
                <div className="pl-7 pr-7 pt-1 pb-1 bg-black/25 rounded-xl border border-black/25">
                  <p className="font-mono text-sm">TypeScript</p>
                </div>
                <div className="pl-7 pr-7 pt-1 pb-1 bg-black/25 rounded-xl border border-black/25">
                  <p className="font-mono text-sm">NextJS</p>
                </div>
                <div className="pl-7 pr-7 pt-1 pb-1 bg-black/25 rounded-xl border border-black/25">
                  <p className="font-mono text-sm">TailWindCSS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center w-full max-w-6xl mt-8">
        <div className="flex flex-col items-start p-7 mb-10 justify-center rounded-2xl border border-black/15 bg-white/50">
          <h2 className="text-5xl font-serif font-bold mb-6">Mes Compétences</h2>
          <div className="flex flex-row items-center justify-evenly w-full p-6 mb-2">
            <div className="flex flex-col items-start justify-start w-1/3">
              <p className="text-sm font-mono mb-6 text-gray">Front-end</p>
              <div className="font-serif border-b border-black/15 mr-2 pb-2 mb-2 min-w-9/10">React & Next.js</div>
              <div className="font-serif border-b border-black/15 mr-2 pb-2 mb-2 min-w-9/10">TypeScript</div>
              <div className="font-serif border-b border-black/15 mr-2 pb-2 mb-2 min-w-9/10">Tailwind CSS</div>
              <div className="font-serif border-b border-black/15 mr-2 pb-2 mb-2 min-w-9/10">VueJS</div>
              <div className="font-serif">ASP.NET</div>
            </div>
            <div className="flex flex-col items-start justify-start w-1/3">
              <p className="text-sm font-mono mb-6 text-gray">Back-End</p>
              <div className="font-serif border-b border-black/15 mr-2 pb-2 mb-2 min-w-9/10">Node.js</div>
              <div className="font-serif border-b border-black/15 mr-2 pb-2 mb-2 min-w-9/10">PostgreSQL</div>
              <div className="font-serif border-b border-black/15 mr-2 pb-2 mb-2 min-w-9/10">.NET</div>
              <div className="font-serif border-b border-black/15 mr-2 pb-2 mb-2 min-w-9/10">API REST</div>
              <div className="font-serif">Authentification</div>
            </div>
            <div className="flex flex-col items-start justify-start w-1/3">
              <p className="text-sm font-mono mb-6 text-gray">Outils et infrastructures</p>
              <div className="font-serif border-b border-black/15 mr-2 pb-2 mb-2 min-w-9/10">Docker</div>
              <div className="font-serif border-b border-black/15 mr-2 pb-2 mb-2 min-w-9/10">CI/CD</div>
              <div className="font-serif border-b border-black/15 mr-2 pb-2 mb-2 min-w-9/10">Git</div>
              <div className="font-serif border-b border-black/15 mr-2 pb-2 mb-2 min-w-9/10">Linux</div>
              <div className="font-serif">Automatisation</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center w-full max-w-6xl mt-8">
        <div className="flex flex-col items-start justify-center">
          <h2 className="text-3xl font-serif font-bold mb-6">Mes étapes de travail</h2>
          <div className="flex flex-row items-stretch justify-start w-full p-6 mb-10 min-h-70">
            <div className="flex flex-col items-center justify-center rounded-2xl border border-black/15 mr-8 bg-white/50 w-1/4">
              <h3>Cadrer</h3>
              <p>On échange pour préciser le besoin, les contraintes et les périmètres.</p>
            </div>
            <div className="flex flex-col items-center justify-center rounded-2xl border border-black/15 mr-8 bg-white/50 w-1/4">
              <h3>Planifier</h3>
              <p>Suite au cadrage je choisis les technologies et l'architecture adaptée au projet</p>
            </div>
            <div className="flex flex-col items-center justify-center rounded-2xl border border-black/15 mr-8 bg-white/50 w-1/4">
              <h3>Construire</h3>
              <p>J'avance sur le projet par incréments réguliers testés et révisions régulières.</p>
            </div>
            <div className="flex flex-col items-center justify-center rounded-2xl border border-black/15 bg-white/50 w-1/4">
              <h3>Livrer</h3>
              <p>Je déploie, mesure et transmets une base saine qui tient dans la durée</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
