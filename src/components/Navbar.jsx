import { MdArrowOutward } from "react-icons/md";
import logo from "../assets/my_logo.PNG"
import { useEffect, useState } from "react";

const Navbar = () => {

    const [activeSection, setActiveSection] = useState("home");

    const handleScroll = () => {
        const sections = document.querySelectorAll("section");
        let currentSection = "home"; // Default

        const scrollPosition = window.scrollY + window.innerHeight / 2; // Track the middle of the viewport

        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 105;
            const sectionBottom = sectionTop + section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                currentSection = section.getAttribute("id");
            }
        });

        setActiveSection(currentSection);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = <>
        <li>
            <a
                href="#home"
                onClick={(e) => {
                    e.preventDefault();
                    const target = document.getElementById('home');
                    window.scrollTo({
                        top: target.offsetTop - 105, // Fixed Navbar height
                        behavior: "smooth",
                    });
                }}
                className={`${activeSection === 'home' ? "text-[#01EEFF]" : "text-white cursor-pointer hover:text-[#01EEFF] hover:scale-105"}`}>
                Home
            </a>
        </li>
        <li>
            <a 
                href="#aboutMe"
                onClick={(e) => {
                    e.preventDefault();
                    const target = document.getElementById('aboutMe');
                    window.scrollTo({
                        top: target.offsetTop - 105, // Fixed Navbar height
                        behavior: "smooth",
                    });
                }}
                className={`${activeSection === 'aboutMe' ? "text-[#01EEFF]" : "text-white cursor-pointer hover:text-[#01EEFF] hover:scale-105"}`}>
                About Me
            </a>
        </li>
        <li>
            <a 
                href="#skills"
                onClick={(e) => {
                    e.preventDefault();
                    const target = document.getElementById('skills');
                    window.scrollTo({
                        top: target.offsetTop - 105, // Fixed Navbar height
                        behavior: "smooth",
                    });
                }}
                className={`${activeSection === 'skills' ? "text-[#01EEFF]" : "text-white cursor-pointer hover:text-[#01EEFF] hover:scale-105"}`}>
                Skills
            </a>
        </li>
        <li>
            <a 
                href="#projects"
                onClick={(e) => {
                    e.preventDefault();
                    const target = document.getElementById('projects');
                    window.scrollTo({
                        top: target.offsetTop - 105, // Fixed Navbar height
                        behavior: "smooth",
                    });
                }}
                className={`${activeSection === 'projects' ? "text-[#01EEFF]" : "text-white cursor-pointer hover:text-[#01EEFF] hover:scale-105"}`}>
                Projects
            </a>
        </li>
        <li>
            <a 
                href="#contact"
                onClick={(e) => {
                    e.preventDefault();
                    const target = document.getElementById('contact');
                    window.scrollTo({
                        top: target.offsetTop - 105, // Fixed Navbar height
                        behavior: "smooth",
                    });
                }}
                className={`${activeSection === 'contact' ? "text-[#01EEFF]" : "text-white cursor-pointer hover:text-[#01EEFF] hover:scale-105"}`}>
                Contact Me
            </a>
        </li>
    </>

    return (
        <div className="py-2 sm:py-4 sticky top-0 z-10 backdrop-blur-md">
            <div className="w-11/12 md:w-10/12 mx-auto py-2 px-2 sm:px-4 rounded-xl border-2 border-[#01EEFF] bg-black">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-1 min-[200px]:gap-2 min-[250px]:ml-2 min-[300px]:gap-3 min-[400px]:ml-3 sm:ml-0 sm:gap-0">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn-ghost sm:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="white">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-black rounded-box z-[1] mt-3 w-max p-2 shadow">
                                {navLinks}
                            </ul>
                        </div>
                        <a href="#">
                            <img src={logo} alt="logo" className="w-10 min-[250px]:w-12 min-[400px]:w-14 xl:w-16 2xl:w-20"/>
                        </a>
                    </div>
                    <div className="navbar-center hidden sm:flex">
                        <ul className="flex justify-center items-center gap-3 font-semibold md:text-lg xl:text-xl">
                            {navLinks}
                        </ul>
                    </div>
                    <div>
                        <a href="#contact">
                            <button className="w-max flex justify-center items-center gap-1 text-center min-[300px]:text-lg px-3 py-2 rounded-lg bg-[#01EEFF] text-white font-bold hover:bg-white hover:text-[#01EEFF] hover:scale-105 outline-none">
                                Hire Me
                                <MdArrowOutward />
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;