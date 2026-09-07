import React from "react";
import Image from 'next/image';

export default function Project({ id, title, image, description }) {
    return (
        <project
            id={id}
            className="flex flex-row justify-start items-center whitespace-nowrap m-5 min-w-100">
            <div className="bg-gradient-to-b from-gray-100/40 to-gray/20 max-h-150 max-w-100 m-1 shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out rounded-3xl">
                <p className="m-4">
                    {title} 
                </p>
                <div className="flex flex-col justify-center items-center m-4 white-space:normal">
                    <Image priority src={image} alt={image} />
                    <p className="m-4 whitespace-normal break-words max-w-full">{description}</p>
                </div>
            </div>
        </project>
    );
};