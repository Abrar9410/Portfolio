import { MdArrowOutward } from "react-icons/md";
import logo from "../assets/my_logo.PNG"

const Navbar = () => {
    return (
        <div className="py-2 sm:py-4">
            <div className="w-11/12 md:w-10/12 mx-auto py-2 px-2 sm:px-4 rounded-xl border-2 border-[#01eeff] bg-black sticky top-0 z-10 backdrop-blur-md">
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
                                className="menu menu-sm dropdown-content bg-black text-white rounded-box z-[1] mt-3 max-[200px]:w-max w-52 p-2 shadow">
                                <li><a>Home</a></li>
                                <li><a>About Me</a></li>
                                <li><a>Skills</a></li>
                                <li><a>Projects</a></li>
                                <li><a>Contact Me</a></li>
                            </ul>
                        </div>
                        <a>
                            <img src={logo} alt="logo" className="w-10 min-[250px]:w-12 min-[400px]:w-14 xl:w-16 2xl:w-20"/>
                        </a>
                    </div>
                    <div className="navbar-center hidden sm:flex">
                        <ul className="flex justify-center items-center gap-3 text-white font-semibold md:text-lg xl:text-xl">
                            <li><a>Home</a></li>
                            <li><a>About Me</a></li>
                            <li><a>Skills</a></li>
                            <li><a>Projects</a></li>
                            <li><a>Contact Me</a></li>
                        </ul>
                    </div>
                    <div>
                        <a>
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