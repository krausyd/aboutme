import AnchorLink from "react-anchor-link-smooth-scroll"
export default function DotGroup({ selectedPage, setSelectedPage }) {
    const selectedStyles = `relative bg-rose_nav before:absolute before:w-6 before:h-6
    before:rounded-full before:border-2 before:border-rose_nav
    before:left-[-50%] before:top-[-50%]`;
    return (
        <div className="flex flex-col gap-6 fixed top-[60%] right-7">
            <AnchorLink
                className={`${selectedPage === "intro" ? selectedStyles : "bg-honeydew"} w-3 h-3 rounded-full`}
                href="#intro"
                onClick={() => setSelectedPage("intro")}
            />
            <AnchorLink
                className={`${selectedPage === "skills" ? selectedStyles : "bg-honeydew"} w-3 h-3 rounded-full`}
                href="#wip"
                onClick={() => setSelectedPage("skills")}
            />
            <AnchorLink
                className={`${selectedPage === "projects" ? selectedStyles : "bg-honeydew"} w-3 h-3 rounded-full`}
                href="#wip"
                onClick={() => setSelectedPage("projects")}
            />
            <AnchorLink
                className={`${selectedPage === "resume" ? selectedStyles : "bg-honeydew"} w-3 h-3 rounded-full`}
                href="#wip"
                onClick={() => setSelectedPage("resume")}
            />
            <AnchorLink
                className={`${selectedPage === "contact" ? selectedStyles : "bg-honeydew"} w-3 h-3 rounded-full`}
                href="#wip"
                onClick={() => setSelectedPage("contact")}
            />
        </div>
    );
}