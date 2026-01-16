"use client";
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";

const POSTS = [
    {
        tag: 'Design',
        date: 'Jan 12, 2026',
        title: 'The Psychology of Interaction: Beyond Visuals',
        description: 'How motion and timing influence the emotional state of users and why subtle delays can be as important as animations.',
        href: '#',
        imageUrl: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80',
    },
    {
        tag: 'Tech',
        date: 'Dec 04, 2025',
        title: 'Distributed Systems in the Edge Computing Era',
        description: 'Exploring the shift towards local-first software and how synchronization protocols are evolving to handle offline-first experiences.',
        href: '#',
        imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
    },
    {
        tag: 'Future',
        date: 'Nov 22, 2025',
        title: 'The Singularity of Creative Development',
        description: 'What happens when AI becomes a primary design tool? A look into the changing role of the developer in an automated world.',
        href: '#',
        imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    },
    {
        tag: 'Philosophy',
        date: 'Jan 16, 2026',
        title: 'Minimalism as a Strategy for Resilience',
        description: 'Why reduction is not just an aesthetic choice, but a requirement for building sustainable and high-performance digital ecosystems.',
        href: '#',
        imageUrl: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=800&q=80',
    },
    {
        tag: 'Development',
        date: 'Oct 18, 2025',
        title: 'Building Scalable Component Libraries',
        description: 'A deep dive into the architecture decisions that make component libraries maintainable and scalable across large teams.',
        href: '#',
        imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
    },
    {
        tag: 'Career',
        date: 'Sep 30, 2025',
        title: 'The Art of Deep Work in a Distracted World',
        description: 'Strategies for maintaining focus and producing high-quality work in an age of constant notifications and interruptions.',
        href: '#',
        imageUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&q=80',
    },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1] as const,
        },
    },
};

const BlogCard: React.FC<{
    tag: string;
    date: string;
    title: string;
    description: string;
    href: string;
    imageUrl: string;
}> = ({ tag, date, title, description, imageUrl }) => {
    return (
        <article className="group relative bg-neutral-900/50 border border-white/5 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-500">
            <div className="aspect-[16/10] overflow-hidden">
                <img
                    src={imageUrl}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
            </div>
            <div className="p-6 space-y-4">
                <div className="flex items-center gap-3 text-xs">
                    <span className="px-3 py-1 rounded-full bg-white/5 text-white font-medium">{tag}</span>
                    <span className="text-neutral-500">{date}</span>
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-neutral-300 transition-colors line-clamp-2">
                    {title}
                </h3>
                <p className="text-neutral-500 text-sm leading-relaxed line-clamp-3">
                    {description}
                </p>
                <div className="pt-2">
                    <span className="inline-flex items-center gap-2 text-sm text-white/70 group-hover:text-white transition-colors">
                        Read Article
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                </div>
            </div>
        </article>
    );
};

export const Blog: React.FC = () => {
    return (
        <div className="min-h-screen bg-black text-white">
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/5">
                <div className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-3 text-white hover:text-neutral-400 transition-colors">
                        <ArrowLeft className="w-5 h-5" />
                        <span className="text-sm font-medium">Back to Home</span>
                    </Link>
                    <span className="text-xl font-bold tracking-tighter">ANTIGRAVITY<span className="text-white">.</span></span>
                </div>
            </header>

            {/* Hero */}
            <section className="pt-40 pb-20 px-6 md:px-10">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="space-y-6"
                    >
                        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter">Journal</h1>
                        <p className="text-neutral-500 font-light text-lg md:text-xl max-w-2xl">
                            Thoughts on technology, design, philosophy, and the architecture of the digital world. Explore ideas that shape the future.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="pb-40 px-6 md:px-10">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {POSTS.map((post, index) => (
                            <motion.div key={index} variants={itemVariants}>
                                <BlogCard {...post} />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-white/5 py-12 px-6 md:px-10">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-neutral-600 text-xs font-mono">© 2026 ANTIGRAVITY</p>
                    <div className="flex gap-8 text-neutral-600 text-xs font-mono">
                        <Link to="/terms" className="hover:text-white transition-colors">TERMS OF SERVICE</Link>
                        <Link to="/" className="hover:text-white transition-colors">HOME</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
};