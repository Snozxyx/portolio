"use client";

import React from "react";
import { motion } from "framer-motion";

const SKILLS = [
    { name: "React", level: "Expert" },
    { name: "TypeScript", level: "Advanced" },
    { name: "Tailwind CSS", level: "Expert" },
    { name: "Framer Motion", level: "Advanced" },
    { name: "Next.js", level: "Advanced" },
    { name: "Three.js", level: "Intermediate" },
    { name: "Node.js", level: "Advanced" },
    { name: "UI/UX Design", level: "Expert" },
];

export const SkillSection: React.FC = () => {
    return (
        <section id="skills" className="relative w-full py-24 bg-black overflow-hidden border-y border-white/5">
            <div className="max-w-7xl mx-auto px-6 md:px-10">
                <div className="mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tighter uppercase">Capabilities</h2>
                    <p className="text-neutral-500 font-light max-w-lg italic">
                        A specialized toolkit for building high-performance digital products and immersive visual experiences.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {SKILLS.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            className="group p-6 rounded-xl border border-white/5 bg-neutral-900/30 hover:bg-neutral-900/50 hover:border-white/10 transition-all duration-300"
                        >
                            <h3 className="text-lg font-bold text-white mb-1">{skill.name}</h3>
                            <p className="text-neutral-600 text-[10px] font-mono uppercase tracking-widest">{skill.level}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
