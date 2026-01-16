"use client";
import React from "react";
import { FocusRail, type FocusRailItem } from "@/components/ui/focus-rail";

const PROJECTS: FocusRailItem[] = [
    {
        id: 1,
        title: "Aether Void",
        description: "An immersive exploration of generative nebulae and spatial audio, pushing the limits of WebGL performance.",
        meta: "Creative Coding • WebGL",
        imageSrc: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=1200&q=80",
        href: "#",
    },
    {
        id: 2,
        title: "Lumina OS",
        description: "A conceptual operating system designed for neural-link interfaces, focusing on gesture fluidiy and cognitive load.",
        meta: "Interface Design • Future Tech",
        imageSrc: "https://images.unsplash.com/photo-1550741111-3d6d17e04561?w=1200&q=80",
        href: "#",
    },
    {
        id: 3,
        title: "Zenith Mono",
        description: "A custom typeface and design system built for the next generation of high-contrast, minimalist scientific publications.",
        meta: "Typography • Design Systems",
        imageSrc: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?w=1200&q=80",
        href: "#",
    },
    {
        id: 4,
        title: "Eco Pulse",
        description: "Harnessing real-time satellite data to visualize Earth's biospheric health with unprecedented granularity.",
        meta: "Data Visualization • Sustainability",
        imageSrc: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80",
        href: "#",
    },
];

export const ProjectSection: React.FC = () => {
    return (
        <section id="projects" className="relative w-full py-32 bg-black flex flex-col items-center justify-center overflow-hidden">
            <div className="mb-20 text-center px-6">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tighter">Featured Works</h2>
                <p className="text-neutral-500 font-light max-w-lg mx-auto">Selected experiments and professional case studies that showcase my design philosophy.</p>
            </div>

            <FocusRail
                items={PROJECTS}
                autoPlay={true}
                loop={true}
                interval={5000}
            />
        </section>
    );
};
