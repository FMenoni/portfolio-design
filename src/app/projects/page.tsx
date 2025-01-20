'use client'

import TiltedScroll from '@/components/blocks/TiltedScroll/TiltedScroll'
import SplitText from '@/animations/TextAnimations/SplitText/SplitText'
import { inView, motion } from 'framer-motion'
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Projets = () => {
    const [firstProjectRef, setFirstProjectRef] = useState(null);
    const [secondProjectRef, setSecondProjectRef] = useState(null);
    const [thirdProjectRef, setThirdProjectRef] = useState(null);
    const [fourthProjectRef, setFourthProjectRef] = useState(null);
    const [isFirstProjectInView, setIsFirstProjectInView] = useState(false);
    const [isSecondProjectInView, setIsSecondProjectInView] = useState(false);
    const [isThirdProjectInView, setIsThirdProjectInView] = useState(false);
    const [isFourthProjectInView, setIsFourthProjectInView] = useState(false);

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

    useEffect(() => {
        if (firstProjectRef) {
            inView(
                firstProjectRef,
                () => setIsFirstProjectInView(true),
                { amount: 0.5 }
            );
        }
        if (secondProjectRef) {
            inView(
                secondProjectRef,
                () => setIsSecondProjectInView(true),
                { amount: 0.5 }
            );
        }
        if (thirdProjectRef) {
            inView(
                thirdProjectRef,
                () => setIsThirdProjectInView(true),
                { amount: 0.5 }
            );
        }
        if (fourthProjectRef) {
            inView(
                fourthProjectRef,
                () => setIsFourthProjectInView(true),
                { amount: 0.5 }
            );
        }
    }, []);

    return (
        <div className="relative w-full overflow-hidden">
            <div className="bg-neutral-200 w-full h-full border border-neutral-300 rounded-[0.5em]">
                <div className="grid grid-cols-2 items-center py-[20em] max-w-6xl space-x-10 mx-auto">
                    <motion.div
                        className=""
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                        transition={{ duration: 1, delay: 0.3 }}
                    >
                        <TiltedScroll />
                    </motion.div>

                    <div>
                        <SplitText
                            text="Mes projets"
                            className="text-6xl font-extrabold text-neutral-800"
                            delay={150}
                            animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                            easing="easeOutCubic"
                            threshold={0.2}
                            rootMargin="-50px"
                            onLetterAnimationComplete={undefined}
                        />

                        <motion.p
                            className="text-lg text-neutral-400"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 3, delay: 0.3 }}
                        >
                            Page dédiée à mes projets réalisés lors de stages et d'expériences professionnelles et personnelles.
                        </motion.p>
                    </div>
                </div>

                <motion.div
                    className="max-w-6xl mx-auto my-40 space-y-10"
                    animate={isFirstProjectInView ? "visible" : "hidden"}
                    variants={staggerContainer}
                >
                    {/* Project 1 */}
                    <motion.div
                        className="border border-neutral-300 bg-neutral-100 grid grid-cols-2 rounded-[0.5em]"
                        variants={fadeInUp}
                        animate={isFirstProjectInView ? "visible" : "hidden"}
                        ref={firstProjectRef}
                    >
                        <Image src='/images/projects/mermoz.png' alt='Mermoz' className='rounded-l-[0.5em] w-full' width={400} height={400} />
                        <div className='flex justify-center items-center mx-auto relative'>
                            <div className='w-[30em]'>
                                <h2 className='text-neutral-800 text-2xl font-bold'>Site Groupe Mermoz</h2>
                                <p className='text-neutral-500'>Site web réalisé avec Wix pour l'entreprise Groupe Mermoz. Il répond aux besoins de la société et est optimisé pour le référencement naturel.</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Project 2 */}
                    <motion.div
                        className="border border-neutral-300 bg-neutral-100 grid grid-cols-2 rounded-[0.5em]"
                        variants={fadeInUp}
                        ref={secondProjectRef}
                    >
                        <div className='flex justify-center items-center mx-auto relative'>
                            <div className='w-[30em]'>
                                <h2 className='text-neutral-800 text-2xl font-bold'>Site FMenoni</h2>
                                <p className='text-neutral-500'>Site personnel réalisé avec Next.js et Tailwind CSS. Il me permet de présenter FMenoni, mon entreprise de développement web.</p>
                            </div>
                        </div>
                        <Image src='/images/projects/fmenoni.png' alt='FMenoni' className='rounded-r-[0.5em] w-full' width={400} height={400} />
                    </motion.div>

                    {/* Project 3 */}
                    <motion.div
                        className="border border-neutral-300 bg-neutral-100 grid grid-cols-2 rounded-[0.5em]"
                        variants={fadeInUp}
                        ref={thirdProjectRef}
                    >
                        <Image src='/images/projects/templates.png' alt='Templates' className='rounded-l-[0.5em] w-full' width={400} height={400} />
                        <div className='flex justify-center items-center mx-auto relative'>
                            <div className='w-[30em]'>
                                <h2 className='text-neutral-800 text-2xl font-bold'>Templates gratuits</h2>
                                <p className='text-neutral-500'>Création de templates gratuits pour les développeurs web. Ces templates sont réalisés avec Tailwind CSS et sont disponibles sur mon GitHub.</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Project 4 */}
                    <motion.div
                        className="border border-neutral-300 bg-neutral-100 grid grid-cols-2 rounded-[0.5em]"
                        variants={fadeInUp}
                        ref={fourthProjectRef}
                    >
                        <div className='flex justify-center items-center mx-auto relative'>
                            <div className='w-[30em]'>
                                <h2 className='text-neutral-800 text-2xl font-bold'>Portfolio</h2>
                                <p className='text-neutral-500'>Site personnel réalisé avec Next.js et Tailwind CSS. Il me permet de me présenter et de présenter mes projets et compétences.</p>
                            </div>
                        </div>
                        <Image src='/images/projects/portfolio.png' alt='Portfolio' className='rounded-r-[0.5em] w-full' width={400} height={400} />
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}

export default Projets;
