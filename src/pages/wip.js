import Footer from "../components/footer";

export default function Wip() {
    return (
        <>
            <section
                id="wip"
                className="md:flex md:justify-between md:items-center gap-16 md:h-5/6 py-10"
            >
                <div className="overflow-hidden container mx-auto max-w-2xl py-16 sm:py-24 lg:py-36 text-center">
                    <p className="text-8xl font-bold mb-5 logo font-kaushan_script mb-32 sm:mb-40 lg:mb-44">
                        krausyd
                    </p>
                    <p className="text-4xl font-bold mb-5 font-indie_flower">
                        Launching soon!
                    </p>
                    <p className="text-xl font-share_tech_mono">
                        I am currently making some improvements to my website!
                    </p>
                </div>
            </section>
            <Footer />
        </>
    );
}
