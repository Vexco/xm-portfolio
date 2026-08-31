import Image from "next/image";
import Section from "./components/section";
import React from "react";

export default function Home() {
  return (
    <main>
      <Section
        id="accueil" title="MANTELLATO Xavier"
        bgColor="bg-orange-100 dark:bg-blue-950"
        titleColor="text-gray-800 dark:text-white"
        textColor="text-gray-600 dark:text-gray-300">
        <p>Passionné d'informatique</p>
      </Section>
      <Section
        id="resume" title="Qui suis-je?"
        bgColor="bg-orange-50 dark:bg-indigo-950"
        titleColor="text-gray-800 dark:text-white"
        textColor="text-gray-600 dark:text-gray-300">
        <p>Je m'appelle MANTELLATO Xavier. Je suis passionné d'informatique depuis mes 15 ans. Après un cursus d'étude de 2 ans et de l'expérience professionnel dans le développement j'ai décidé d'élargir mes horizons vers la cybersécurité.</p>
      </Section>
      <Section
        id="projets" title="Mes Projets"
        bgColor="bg-orange-100 dark:bg-blue-950"
        titleColor="text-gray-800 dark:text-white"
        textColor="text-gray-600 dark:text-gray-300">
        <p>Mes projets réalisés</p>
      </Section>
      <Section
        id="cv" title="Mon CV"
        bgColor="bg-orange-50 dark:bg-indigo-950"
        titleColor="text-gray-800 dark:text-white"
        textColor="text-gray-600 dark:text-gray-300">
        <p>Voici mon CV</p>
      </Section>
      <Section
        id="contact" title="Me Contacter"
        bgColor="bg-orange-100 dark:bg-blue-950"
        titleColor="text-gray-800 dark:text-white"
        textColor="text-gray-600 dark:text-gray-300">

        <p>Si vous souhaitez me contacter</p>

        <form>
          <div className="border-b dark:border-white/5 pb-12 border-black/5">
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="userName" className="block text-sm/6 font-medium text-grey dark:text-white">
                  Username
                </label>
                <div className="mt-2">
                  <input
                    id="userName"
                    name="userName"
                    type="text"
                    autoComplete="userName"
                    placeholder="Username"
                    className="
                      block w-full rounded-md px-3 py-1.5 text-base outline-1 -outline-offset-1 focus:outline-2 focus:-outline-offset-2 focus:outline-slate-500 sm:text-sm/6 
                      dark:text-white dark:outline-white/10 bg-black/5
                      text-grey outline-grey/10 placeholder:text-gray-500"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="email" className="block text-sm/6 font-medium text-grey dark:text-white">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="text"
                    autoComplete="emailAddress"
                    placeholder="Email Address"
                    className="block w-full rounded-md bg-black/5 dark:bg-white/5 px-3 py-1.5 text-base text-grey dark:text-white outline-1 -outline-offset-1 outline-grey dark:outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-slate-500 sm:text-sm/6"
                  />
                </div>
              </div>
              <div className="col-span-full">
                <label htmlFor="about" className="block text-sm/6 font-medium text-grey dark:text-white">
                  About
                </label>
                <div className="mt-2">
                  <textarea
                    id="about"
                    name="about"
                    placeholder="Ecrivez votre message !"
                    rows={3}
                    className="block w-full rounded-md bg-black/5 dark:bg-white/5 px-3 py-1.5 text-base text-grey dark:text-white outline-1 -outline-offset-1 outline-grey/10 dark:outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-slate-500 sm:text-sm/6"
                    defaultValue={''}
                  />
                </div>
              </div>
            </div>
          </div>
        </form>

      </Section>
    </main>
  );
}
