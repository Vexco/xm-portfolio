import React, { Children } from "react";
import Image from 'next/image';

export default function Card({ id, title, children }) {
    return (
        <card
            id={id} title={title}
            className="flex flex-row justify-start items-center whitespace-nowrap m-5 min-w-100">
            <div className="bg-gradient-to-b from-gray-100/80 to-white max-h-150 max-w-100 m-1 shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out rounded-3xl">
                {children}                
            </div>
        </card>
    );
};