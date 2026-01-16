"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Github, Linkedin, Twitter, ArrowUpRight, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export const ContactSection: React.FC = () => {
    return (
        <section id="contact" className="relative w-full py-32 bg-black overflow-hidden">
            {/* Background Accents - Subtle Monochrome Glow */}
            <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-white/[0.03] rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-1/4 -left-20 w-[600px] h-[600px] bg-white/[0.01] rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

                    {/* Left Column: Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="space-y-12"
                    >
                        <div className="space-y-6">
                            <h2 className="text-6xl md:text-8xl font-bold text-white tracking-tighter leading-none">
                                LET'S <span className="text-white italic">CONNECT</span>
                            </h2>
                            <p className="text-neutral-500 text-lg max-w-md font-light leading-relaxed">
                                I'm always open to discussing new projects, creative ideas, or being part of your visions.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                            <div className="space-y-3">
                                <h3 className="text-neutral-600 text-[10px] font-mono uppercase tracking-[0.3em]">Email Me</h3>
                                <a href="mailto:hello@example.com" className="group flex items-center gap-2 text-xl font-medium text-white hover:text-neutral-300 transition-colors">
                                    hello@example.com
                                    <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                                </a>
                            </div>
                            <div className="space-y-3">
                                <h3 className="text-neutral-600 text-[10px] font-mono uppercase tracking-[0.3em]">Based In</h3>
                                <p className="text-xl font-medium text-white flex items-center gap-2">
                                    <MapPin className="w-4 h-4 text-white" />
                                    Mumbai, India
                                </p>
                            </div>
                        </div>

                        <div className="space-y-6 pt-6">
                            <h3 className="text-neutral-600 text-[10px] font-mono uppercase tracking-[0.3em]">Socials</h3>
                            <div className="flex gap-4">
                                {[
                                    { name: "Github", icon: <Github />, href: "#" },
                                    { name: "Linkedin", icon: <Linkedin />, href: "#" },
                                    { name: "Twitter", icon: <Twitter />, href: "#" }
                                ].map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.href}
                                        className="w-14 h-14 rounded-2xl border border-white/5 bg-white/[0.02] flex items-center justify-center text-neutral-400 hover:text-white hover:border-white transition-all duration-300"
                                    >
                                        {React.cloneElement(social.icon as React.ReactElement<{ size?: number }>, { size: 20 })}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="relative group py-2"
                    >
                        {/* Glass Card Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent rounded-3xl border border-white/10 backdrop-blur-sm -z-10 transition-colors group-hover:border-white/20" />

                        <form className="p-8 md:p-10 space-y-8" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-3">
                                    <Label htmlFor="name" className="text-neutral-400 font-mono text-xs uppercase tracking-widest pl-1">Full Name</Label>
                                    <Input
                                        id="name"
                                        placeholder="John Doe"
                                        className="bg-black/40 border-white/10 focus:border-white focus:ring-white/10 h-14 rounded-xl px-5 transition-all duration-300"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <Label htmlFor="email" className="text-neutral-400 font-mono text-xs uppercase tracking-widest pl-1">Email Address</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="john@example.com"
                                        className="bg-black/40 border-white/10 focus:border-white focus:ring-white/10 h-14 rounded-xl px-5 transition-all duration-300"
                                    />
                                </div>
                            </div>

                            <div className="space-y-3">
                                <Label htmlFor="subject" className="text-neutral-400 font-mono text-xs uppercase tracking-widest pl-1">Subject</Label>
                                <Input
                                    id="subject"
                                    placeholder="Work Inquiry"
                                    className="bg-black/40 border-white/10 focus:border-white focus:ring-white/10 h-14 rounded-xl px-5 transition-all duration-300"
                                />
                            </div>

                            <div className="space-y-3">
                                <Label htmlFor="message" className="text-neutral-400 font-mono text-xs uppercase tracking-widest pl-1">Message</Label>
                                <Textarea
                                    id="message"
                                    placeholder="Tell me about your project..."
                                    className="bg-black/40 border-white/10 focus:border-white focus:ring-white/10 min-h-[160px] rounded-xl px-5 py-4 resize-none transition-all duration-300"
                                />
                            </div>

                            <Button className="w-full bg-white text-black hover:bg-neutral-100 h-16 rounded-xl text-lg font-bold transition-all duration-300 flex gap-3 group/btn">
                                Send Message
                                <Send className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                            </Button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};
