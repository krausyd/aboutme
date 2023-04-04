import React from 'react';
import TypewriterComponent from 'typewriter-effect';
import { motion } from 'framer-motion';
import useMediaQuery from '../hooks/useMediaQuery';
import krausyd from '../assets/images/krausyd.jpg'
import SocialMediaIcons from '../components/socialmedia';

export default function Intro() {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

    return (
        <section id="intro" className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10">
            { /* IMAGE SECTION */}
            <div className='md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32'>
                {isAboveMediumScreens
                    ? (<div className='relative z-0 ml-20 before:absolute before:-top-20 before:-left-20'>
                        <img alt="karina's photo" src={krausyd} className="z-10 w-full max-w-[400px] md:max-w-[600px] rounded-t-[400px]"></img>
                    </div>)
                    : (<img alt="karina's photo" src={krausyd} className="z-10 w-full max-w-[400px] md:max-w-[600px] rounded-t-[400px]"></img>)
                }
            </div>

            {/* MAIN CONTENT */}
            <div className='z-30 basis-2/5 mt-12 md:mt-32'>
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5 }} variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }}>
                    <p className="text-6xl font-indie_flower z-10 text-center md:text-start">
                        Hi! My name is Karina Guerrero Fern&aacute;ndez.
                    </p>
                    <p className="mt-4 mb-7 text-2xl font-indie_flower text-center md:text-start">
                        Some people know me by my alias: <span className="krausyd font-kaushan_script">krausyd</span>
                    </p>
                    <div className="text-l font-share_tech_mono">
                        <TypewriterComponent
                            onInit={(typewriter) => {
                                typewriter.typeString('I am mexican. spaniard. human. world inhabitant.')
                                    .pauseFor(1000)
                                    .deleteChars("mexican, spaniard, human, world inhabitant.".length)
                                    .typeString("a software development engineering apprentice.")
                                    .pauseFor(1000)
                                    .deleteChars("software development engineering apprentice.".length)
                                    .typeString("mental health advocate.")
                                    .pauseFor(1000)
                                    .deleteChars("a mental health advocate.".length)
                                    .typeString("learning every single day. aspiring to become an expert one day.")
                                    .pauseFor(1000)
                                    .deleteChars("am learning every single day. aspiring to become an expert one day.".length)
                                    .typeString("love reading. read technical books from cover to cover. always in search for the next great challenge.")
                                    .pauseFor(1000)
                                    .deleteChars("love reading. read technical books from cover to cover. always in search for the next great challenge.".length)
                                    .typeString("love solving problems with software.")
                                    .pauseFor(1000)
                                    .deleteChars("love solving problems with software.".length)
                                    .typeString("love taking pictures of places I go. love taking pictures of my poms")
                                    .pauseFor(1000)
                                    .deleteChars("love taking pictures of places I go. love taking pictures of my poms".length)
                                    .typeString("love pink.")
                                    .pauseFor(1000)
                                    .deleteAll()
                                    .start();
                            }}
                            options={{ loop: true }} />
                    </div>
                </motion.div>

                {/* SOCIAL MEDIA */}
                <motion.div 
                    className='flext mt-5 justify-center md:justify-start'
                    initial="hidden"
                    whileInView="visible" 
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }} 
                    variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }}
                >
                    <SocialMediaIcons />
                </motion.div>
            </div>
        </section>
    );
}