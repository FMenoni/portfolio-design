'use client';

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, inView } from "framer-motion";
import BlurText from "@/animations/TextAnimations/BlurText/BlurText";
import { experiences, formations } from "@/data/data-about";

const Presentation = () => {
    const [expandedExperience, setExpandedExperience] = useState<number | null>(null);
    const [expandedFormation, setExpandedFormation] = useState<number | null>(null);
    const [isAboutInView, setIsAboutInView] = useState(false);
    const [isExperienceInView, setIsExperienceInView] = useState(false);

    // Refs for in-view animations
    const aboutRef = useRef(null);
    const experienceRef = useRef(null);

    useEffect(() => {
        if (aboutRef.current) {
            inView(
                aboutRef.current,
                () => setIsAboutInView(true),
                { amount: 0.5 }
            );
        }
        if (experienceRef.current) {
            inView(
                experienceRef.current,
                () => setIsExperienceInView(true),
                { amount: 0.5 }
            );
        }
    }, []);

    const toggleExperience = (index: number) => {
        setExpandedExperience(expandedExperience === index ? null : index);
    };

    const toggleFormation = (index: number) => {
        setExpandedFormation(expandedFormation === index ? null : index);
    };

    const fadeInUp = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
        },
    };

    return (
        <div className="relative w-full overflow-hidden">
            <div className="bg-neutral-200 w-full h-full pb-40 border border-neutral-300 rounded-[0.5em]">
                <BlurText
                    text="Qui suis-je ?"
                    delay={150}
                    animateBy="words"
                    direction="top"
                    className="text-8xl font-bold text-neutral-600 absolute top-[25rem] left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-apple"
                    animationFrom={undefined}
                    animationTo={undefined}
                    onAnimationComplete={undefined} />

                {/* À propos de moi */}
                <motion.div
                    ref={aboutRef}
                    className="max-w-5xl mx-auto p-8 text-xl space-y-2 text-neutral-600 text-justify mt-[50em] tracking-wide cursor-default"
                    initial="hidden"
                    animate={isAboutInView ? "visible" : "hidden"}
                    variants={staggerContainer}
                >
                    <motion.h2 className="text-6xl font-bold" variants={fadeInUp}>
                        À propos de moi
                    </motion.h2>
                    <motion.p variants={fadeInUp}>
                        Bonjour, je m&apos;appelle Fabian Menoni, j&apos;ai 18 ans, et je suis passionné par l&apos;informatique,
                        en particulier le développement full-stack. Depuis plusieurs années, j&apos;explore comment créer
                        des applications web complètes, du front-end au back-end, en utilisant des technologies modernes.
                    </motion.p>
                    <motion.p variants={fadeInUp}>
                        Ce qui me motive, c&apos;est la capacité de résoudre des problèmes complexes et de voir les résultats
                        concrets de mon travail. J&apos;aime particulièrement apprendre et expérimenter avec des frameworks comme
                        React et Symfony pour créer des projets innovants et fonctionnels.
                    </motion.p>
                    <motion.p variants={fadeInUp}>
                        Je continue à développer mes compétences et à me tenir au courant des dernières tendances en
                        informatique, toujours prêt à relever de nouveaux défis dans ce domaine en constante évolution.
                    </motion.p>
                </motion.div>

                {/* Mon parcours et expériences */}
                <motion.div
                    ref={experienceRef}
                    className="max-w-5xl mx-auto p-8 mb-20 text-xl space-y-2 text-neutral-600 text-justify mt-[20em] tracking-wide cursor-default"
                    initial="hidden"
                    animate={isExperienceInView ? "visible" : "hidden"}
                    variants={staggerContainer}
                >
                    <motion.h2 className="text-6xl font-bold" variants={fadeInUp}>
                        Mon parcours et expériences
                    </motion.h2>

                    <div className="grid grid-cols-2 md:grid-cols-2 justify-between pt-8">
                        {/* Experiences Section */}
                        <div>
                            <motion.h3 className="font-bold text-2xl mb-4" variants={fadeInUp}>
                                Expériences professionnelles
                            </motion.h3>
                            <div className="space-y-6">
                                {experiences.map((experience, index) => (
                                    <motion.div
                                        key={index}
                                        className="bg-neutral-300 p-4 rounded-[0.5em] w-[20em]"
                                        variants={fadeInUp}
                                    >
                                        <div
                                            className="flex items-center space-x-4 cursor-pointer"
                                            onClick={() => toggleExperience(index)}
                                        >
                                            <motion.div
                                                className="size-8 bg-neutral-500 rounded-full ring ring-neutral-400 flex items-center justify-center"
                                                animate={{ rotate: expandedExperience === index ? 90 : 0 }}
                                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" className="justd-icons size-4" data-slot="icon" aria-hidden="true"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m9 4 8 8-8 8"></path></svg>
                                            </motion.div>
                                            <div className="leading-none">
                                                <h4 className="font-bold">{experience.title}</h4>
                                                <p className="text-sm text-neutral-400">{experience.date}</p>
                                            </div>
                                        </div>

                                        <AnimatePresence>
                                            {expandedExperience === index && (
                                                <motion.div
                                                    className="mt-4 text-neutral-600 text-sm"
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{
                                                        height: { duration: 0.5, ease: "easeInOut" },
                                                        opacity: { duration: 0.3, ease: "easeInOut" },
                                                    }}
                                                >
                                                    <p>{experience.description}</p>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Formations Section */}
                        <div>
                            <motion.h3 className="font-bold text-2xl mb-4" variants={fadeInUp}>
                                Formations
                            </motion.h3>
                            <div className="space-y-6">
                                {formations.map((formation, index) => (
                                    <motion.div
                                        key={index}
                                        className="bg-neutral-300 p-4 rounded-[0.5em] w-[20em]"
                                        variants={fadeInUp}
                                    >
                                        <div
                                            className="flex items-center space-x-4 cursor-pointer"
                                            onClick={() => toggleFormation(index)}
                                        >
                                            <motion.div
                                                className="size-8 bg-neutral-500 rounded-full ring ring-neutral-400 flex items-center justify-center"
                                                animate={{ rotate: expandedFormation === index ? 90 : 0 }}
                                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                            >
                                                {/* Chevron Right Icon */}
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" className="justd-icons size-4" data-slot="icon" aria-hidden="true"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m9 4 8 8-8 8"></path></svg>
                                            </motion.div>
                                            <div className="leading-none">
                                                <h4 className="font-bold">{formation.title}</h4>
                                                <p className="text-sm text-neutral-400">{formation.date}</p>
                                            </div>
                                        </div>

                                        <AnimatePresence>
                                            {expandedFormation === index && (
                                                <motion.div
                                                    className="mt-4 text-neutral-600 text-sm"
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{
                                                        height: { duration: 0.5, ease: "easeInOut" },
                                                        opacity: { duration: 0.3, ease: "easeInOut" },
                                                    }}
                                                >
                                                    <p>{formation.description}</p>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Presentation;
