import React from 'react';
import TypewriterComponent from 'typewriter-effect';

export default function Intro() {
    return(
        <section className="container mx-auto max-w-2xl py-16 sm:py-48 lg:py-48 text-center">
            <p className="text-6xl font-bold mb-5 font-indie_flower">
                Hi! My name is Karina Guerrero Fern&aacute;ndez.
            </p>
            <p className="text-4xl mb-5 font-indie_flower">
                Some people know me by my alias: <span className="krausyd font-kaushan_script">krausyd</span>
            </p>
            <p className="text-xl font-share_tech_mono">
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
                    options={{loop: true}} />
            </p>
        </section>
    );
}