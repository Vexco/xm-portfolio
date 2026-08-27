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
        <p>Contactez moi</p>
      </Section>
    </main>
  );
}
