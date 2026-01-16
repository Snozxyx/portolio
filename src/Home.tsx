import React, { useRef } from "react";
import {
    motion,
    useMotionValue,
    useMotionTemplate,
    useScroll,
    useTransform,
} from "framer-motion";
import { MiniNavbar } from "@/components/ui/mini-navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { VelocitySection } from "@/components/VelocitySection";
import { ProjectSection } from "@/components/ProjectSection";
import { TimelineSection } from "@/components/TimelineSection";
import { SkillSection } from "@/components/SkillSection";
import { ThoughtSection } from "@/components/ThoughtSection";
import { TestimonialSection } from "@/components/TestimonialSection";
import { PreviewSection } from "@/components/PreviewSection";
import { BlogSection } from "@/components/BlogSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export const Home: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null!);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth mouse tracking for the spotlight
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const { left, top } = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - left);
        mouseY.set(e.clientY - top);
    };

    // Spotlight mask
    const maskImage = useMotionTemplate`radial-gradient(250px circle at ${mouseX}px ${mouseY}px, white, transparent)`;

    // Scroll animations for the background
    const { scrollYProgress } = useScroll();
    const background = useTransform(
        scrollYProgress,
        [0, 0.2, 1],
        ["#000000", "#050505", "#000000"]
    );

    return (
        <motion.main
            style={{ backgroundColor: background }}
            className="w-full text-white selection:bg-white/20 overflow-clip"
        >
            <MiniNavbar 
                navLinks={[
                    { label: 'About', href: '#about' },
                    { label: 'Projects', href: '#projects' },
                    { label: 'Skills', href: '#skills' },
                    { label: 'Journal', href: '#blog' },
                    { label: 'Contact', href: '#contact' },
                ]}
                logoText="ANTIGRAVITY"
            />
            <HeroSection
                containerRef={containerRef}
                mouseX={mouseX}
                mouseY={mouseY}
                handleMouseMove={handleMouseMove}
                maskImage={maskImage}
            />
            <AboutSection />
            <VelocitySection />
            <ProjectSection />
            <TimelineSection />
            <SkillSection />
            <ThoughtSection />
            <TestimonialSection />
            <PreviewSection />
            <BlogSection />
            <ContactSection />
            <Footer />
        </motion.main>
    );
};
