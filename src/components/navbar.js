import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";

const Link = ({ page, selectedPage, setSelectedPage }) => {
    const lowerCasePage = page.toLowerCase();
    return (
        <AnchorLink
            className={`${selectedPage === lowerCasePage ? "text-rose_nav" : ""} hover:text-rose_nav transition duration-500`}
            href={`#${lowerCasePage === "intro" ? lowerCasePage : "wip" }`}
            onClick={() => setSelectedPage(lowerCasePage)}
        >
            {page}
        </AnchorLink>
    );
};

export default function NavBar({ isTopOfPage, selectedPage, setSelectedPage }) {
    const [isMenuToggled, setIsMenuTogged] = useState(false);
    const isAboveSmallScreens = useMediaQuery("(min-width:780px)");
    const navbarBackground = isTopOfPage ? "" : "bg-honeydew";

    return (
        <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-6`}>
            <div className="flex items-center justify-between mx-auto w-5/6">
                <h4 className="font-kaushan_script text-3xl font-bold logo">krausyd</h4>

                {/* DESKTOP NAV */}
                {isAboveSmallScreens
                    ? (<div className="flex justify-between gap-16 font-share_tech_mono test-sm font-semibold">
                        <Link page="intro" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        <Link page="skills" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        <Link page="projects" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        <Link page="resume" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        <Link page="contact" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                    </div>)
                    : (<button className="rounded-full p-2 bg-honeydew" onClick={() => setIsMenuTogged(!isMenuToggled)}>
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    </button>
                    )}

                {/* MOBILE MENU POPUP */}
                {!isAboveSmallScreens && isMenuToggled && (
                    <div className="fixed right-0 bottom-0 h-full bg-honeydew w-[300px]">
                        {/* CLOSE ICON */}
                        <div className="flex justify-end p-12">
                            <button onClick={() => setIsMenuTogged(!isMenuToggled)}>
                                <span className="sr-only">Close main menu</span>
                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </button>
                        </div>

                        {/* MENU ITEMS */}
                        <div className="flex flex-col gap-10 ml-[33%] text-2xl text-taupe_gray">
                            <Link page="intro" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                            <Link page="skills" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                            <Link page="projects" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                            <Link page="resume" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                            <Link page="contact" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}