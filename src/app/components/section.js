import React from "react";

export default function Section({ id, bgColor, title, children }) {
    return (
        <section
      id={id}
      className={`min-h-screen w-full flex flex-col justify-center items-center p-8 ${bgColor}`}
    >
      <div className="max-w-4xl text-center w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
          {title}
        </h2>
        <div className="text-lg text-gray-600">
          {children}
        </div>
      </div>
    </section>
    );
};