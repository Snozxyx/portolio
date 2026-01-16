"use client";
import React from "react";
import { BlogPostCard } from '@/components/ui/card-18';
import { motion } from 'framer-motion';

const POSTS = [
    {
        tag: 'Design',
        date: 'Jan 12, 2026',
        title: 'The Psychology of Interaction: Beyond Visuals',
        description: 'How motion and timing influence the emotional state of users and why subtle delays can be as important as animations.',
        href: '#',
    },
    {
        tag: 'Tech',
        date: 'Dec 04, 2025',
        title: 'Distributed Systems in the Edge Computing Era',
        description: 'Exploring the shift towards local-first software and how synchronization protocols are evolving to handle offline-first experiences.',
        href: '#',
    },
    {
        tag: 'Future',
        date: 'Nov 22, 2025',
        title: 'The Singularity of Creative Development',
        description: 'What happens when AI becomes a primary design tool? A look into the changing role of the developer in an automated world.',
        href: '#',
    },
];

const FEATURED_POST = {
    tag: 'Philosophy',
    date: 'Jan 16, 2026',
    title: 'Minimalism as a Strategy for Resilience',
    description: 'Why reduction is not just an aesthetic choice, but a requirement for building sustainable and high-performance digital ecosystems in an increasingly cluttered web.',
    href: '#',
    imageUrl: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=1200&q=80',
};

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants: any = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

export const BlogSection: React.FC = () => {
    return (
        <section id="blog" className="relative w-full py-40 bg-black border-y border-white/5">
            <div className="w-full max-w-7xl mx-auto px-6 md:px-10">
                <div className="mb-24 text-center md:text-left">
                    <h2 className="text-4xl md:text-7xl font-bold text-white mb-6 tracking-tighter">Journal</h2>
                    <p className="text-neutral-500 font-light text-sm md:text-base max-w-lg italic">
                        Thoughts on technology, design, and the architecture of the digital world.
                    </p>
                </div>

                <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-12">
                    <BlogPostCard
                        variant="featured"
                        {...FEATURED_POST}
                    />
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {POSTS.map((post, index) => (
                        <motion.div key={index} variants={itemVariants}>
                            <BlogPostCard {...post} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
