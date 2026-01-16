"use client";
import React from 'react';
import { ZoomParallax } from "@/components/ui/zoom-parallax";

export const PreviewSection: React.FC = () => {

    const images = [
        {
            src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80',
            alt: 'Modern architecture building',
        },
        {
            src: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80',
            alt: 'Urban cityscape at sunset',
        },
        {
            src: 'https://images.unsplash.com/photo-1557683316-973673baf926?w=800&h=800&fit=crop&crop=entropy&auto=format&q=80',
            alt: 'Abstract geometric pattern',
        },
        {
            src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80',
            alt: 'Mountain landscape',
        },
        {
            src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=800&fit=crop&crop=entropy&auto=format&q=80',
            alt: 'Minimalist design elements',
        },
        {
            src: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80',
            alt: 'Ocean waves and beach',
        },
        {
            src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80',
            alt: 'Forest trees and sunlight',
        },
    ];

    return (
        <section id="explorations" className="relative w-full py-0 bg-black">
            <div className="relative flex flex-col items-center justify-center mb-20 px-6 pt-32">
                <h2 className="text-center text-5xl md:text-7xl font-bold tracking-tighter text-white mb-4">
                    Core Explorations
                </h2>
                <p className="text-neutral-500 text-lg max-w-lg text-center font-light">
                    A collection of visual experiences and design experiments that push the boundaries of modern creative development.
                </p>
            </div>
            <ZoomParallax images={images} className="h-[1000vh]" />
        </section>
    );
}
