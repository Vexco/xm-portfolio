import Image from "next/image";
import Section from "./components/section";
import React from "react";

export default function Home() {
  return (
    <main>
      <Section id="accueil" bgColor="bg-gray-50" title="MANTELLATO Xavier">
       <p>Passionné d'informatique</p>
      </Section>
      <Section id="resume" bgColor="bg-gray-50" title="Qui je suis ?">
       <p>Passionné d'informatique</p>
      </Section>
      <Section id="projets" bgColor="bg-white" title="Mes Projets">
        <p>Mes projets réalisés</p>
      </Section>
      <Section id="cv" bgColor="bg-gray-50" title="Mon CV">
       <p>Voici mon CV</p>
      </Section>
      <Section id="contact" bgColor="bg-blue-50" title="Me Contacter">
        <p>Contactez moi</p>
      </Section>
    </main>
  );
}
