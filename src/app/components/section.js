import React from "react";

export default function Section({ id, bgColor, title, children, titleColor, textColor }) {
    return (
        <section
      id={id}
      className={`min-h-screen w-full flex flex-col justify-center items-center p-8 ${bgColor}`}
    >
      <div className="max-w-7xl text-center w-full">
        <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${titleColor}`}>
          {title}
        </h2>
        <div className={`flex flex-col justify-center items-center text-lg ${textColor}`}>
          {children}
        </div>
      </div>
    </section>
    );
};