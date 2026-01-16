"use client";

import React from "react";
import { Timeline } from "@/components/ui/timeline";

export const TimelineSection: React.FC = () => {
    const data = [
        {
            title: "2024",
            content: (
                <div>
                    <p className="text-neutral-500 text-sm md:text-base font-normal mb-8">
                        Built and launched high-performance web applications using React and Next.js.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80"
                            alt="startup template"
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&q=80"
                            alt="startup template"
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "2023",
            content: (
                <div>
                    <p className="text-neutral-500 text-sm md:text-base font-normal mb-8">
                        Developed complex UI components and micro-interactions for various client projects.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
                            alt="startup template"
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&q=80"
                            alt="startup template"
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
                        />
                    </div>
                </div>
            ),
        },
    ];

    return (
        <section id="timeline" className="w-full">
            <Timeline data={data} />
        </section>
    );
};
