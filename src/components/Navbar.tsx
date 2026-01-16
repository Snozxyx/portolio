"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    LayoutGrid,
    Search,
    Heart,
    TrendingUp,
    Users,
    User,
    Settings,
    LogIn,
    Menu,
    X
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const NAV_ITEMS = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Capabilities", href: "#skills" },
    { label: "Journal", href: "#blog" },
    { label: "Contact", href: "#contact" },
];

export const Navbar: React.FC = () => {
    const [activeSection, setActiveSection] = useState("hero");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            const sections = ["hero", "about", "projects", "skills", "blog", "contact"];
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top >= -300 && rect.top <= 300;
                }
                return false;
            });

            if (current) setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollTo = (id: string) => {
        const element = document.getElementById(id.replace("#", ""));
        element?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            {/* Desktop Navigation */}
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 hidden md:flex items-center justify-center pt-6 transition-all duration-300",
                    scrolled ? "pt-4" : "pt-8"
                )}
            >
                <div className="flex items-center gap-8 px-8 py-3 rounded-full bg-black/40 backdrop-blur-xl border border-white/5 shadow-2xl">
                    <button
                        onClick={() => scrollTo("hero")}
                        className="text-white font-bold tracking-tighter text-xl mr-4"
                    >
                        ANTIGRAVITY<span className="text-white">.</span>
                    </button>

                    <div className="flex items-center gap-6">
                        {NAV_ITEMS.map((item) => (
                            <button
                                key={item.label}
                                onClick={() => scrollTo(item.href)}
                                className={cn(
                                    "text-sm font-medium transition-colors hover:text-white",
                                    activeSection === item.href.replace("#", "")
                                        ? "text-white"
                                        : "text-neutral-500"
                                )}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>

                    <button
                        onClick={() => scrollTo("#contact")}
                        className="ml-4 px-5 py-2 rounded-full bg-white text-black text-xs font-bold hover:bg-neutral-200 transition-colors"
                    >
                        GET IN TOUCH
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Navigation (User's Layout) */}
            <div className="md:hidden fixed bottom-6 left-6 right-6 h-16 bg-neutral-900/80 backdrop-blur-2xl border border-white/10 rounded-2xl flex items-center justify-around px-2 z-50 shadow-2xl">
                <NavIcon
                    icon={LayoutGrid}
                    active={activeSection === "hero"}
                    onClick={() => scrollTo("hero")}
                />
                <NavIcon
                    icon={Search}
                    active={activeSection === "projects"}
                    onClick={() => scrollTo("projects")}
                />

                {/* Favorites/Trending Dropdown */}
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <div className="group relative cursor-pointer focus:outline-none p-3">
                            <Heart className={cn(
                                "w-5 h-5 transition-colors",
                                activeSection === "blog" || activeSection === "explorations"
                                    ? "text-white"
                                    : "text-neutral-500 group-hover:text-white"
                            )} />
                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="center" side="top" className="mb-4 bg-neutral-900 border-white/10 text-white">
                        <DropdownMenuItem className="focus:bg-white/5 focus:text-white cursor-pointer" onClick={() => scrollTo("blog")}>
                            <Heart className="w-4 h-4 mr-2 text-white" />
                            Journal
                        </DropdownMenuItem>
                        <DropdownMenuItem className="focus:bg-white/5 focus:text-white cursor-pointer" onClick={() => scrollTo("explorations")}>
                            <TrendingUp className="w-4 h-4 mr-2 text-white" />
                            Explorations
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

                <NavIcon
                    icon={Users}
                    active={activeSection === "testimonials"}
                    onClick={() => scrollTo("testimonials")}
                />

                {/* Profile/Settings Dropdown */}
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <button className="focus:outline-none active:scale-95 transition-transform">
                            <Avatar className={cn(
                                "w-10 h-10 border-2 transition-all",
                                activeSection === "about" || activeSection === "contact"
                                    ? "border-white"
                                    : "border-transparent hover:border-white/20"
                            )}>
                                <AvatarImage src="https://github.com/shadcn.png" alt="User" />
                                <AvatarFallback className="bg-white text-black font-bold text-sm">
                                    AG
                                </AvatarFallback>
                            </Avatar>
                        </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" side="top" className="mb-4 bg-neutral-900 border-white/10 text-white">
                        <DropdownMenuItem className="focus:bg-white/5 focus:text-white cursor-pointer" onClick={() => scrollTo("about")}>
                            <User className="w-4 h-4 mr-2 text-white" />
                            About
                        </DropdownMenuItem>
                        <DropdownMenuItem className="focus:bg-white/5 focus:text-white cursor-pointer" onClick={() => scrollTo("contact")}>
                            <Settings className="w-4 h-4 mr-2 text-white" />
                            Contact
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </>
    );
};

const NavIcon: React.FC<{
    icon: any;
    active: boolean;
    onClick: () => void
}> = ({ icon: Icon, active, onClick }) => (
    <button
        onClick={onClick}
        className={cn(
            "p-3 rounded-xl transition-all duration-300",
            active ? "text-white bg-white/10" : "text-neutral-500 hover:text-white hover:bg-white/5"
        )}
    >
        <Icon className="w-5 h-5" />
    </button>
);
