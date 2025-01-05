import { FaDownload, FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import myPhoto from "../assets/Abrar_Shahriar.JPG"

const Banner = () => {
    return (
        <div className="w-11/12 md:w-10/12 mx-auto mb-12 flex flex-col md:flex-row md:justify-between items-center bg-gradient-to-b md:bg-gradient-to-r from-[#151925] to-black relative">
            <div className="flex flex-col max-md:items-center max-md:text-center gap-1 min-[500px]:gap-2 md:gap-3 xl:gap-4 md:w-1/2 py-4 md:pl-4">
                <p className="text-white min-[300px]:text-lg min-[400px]:text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-semibold">Hello, I'm</p>
                <h1 className="text-white text-xl min-[300px]:text-2xl min-[400px]:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold">
                    <span className="text-[#01EEFF]">A</span>brar 
                    <span className="text-[#01EEFF]"> S</span>hahriar
                </h1>
                <p className="text-[#01EEFF] text-lg min-[300px]:text-xl min-[400px]:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold">Front-end Developer</p>
                <p className="text-white/80 text-sm min-[300px]:text-base lg:text-lg xl:text-xl 2xl:text-2xl">with a passion for creating beautiful and responsive websites.</p>
                <p className="text-white min-[300px]:text-lg min-[400px]:text-xl md:text-2xl font-semibold">Find Me On:</p>
                <div className="flex items-center gap-4 lg:gap-6">
                    <a href="" target="_blank" className="hover:scale-105"><FaLinkedin className="text-[#0E76A8] bg-white text-2xl lg:text-3xl"/></a>
                    <a href="https://github.com/Abrar9410" target="_blank" className="hover:scale-105"><FaGithub className="text-[#171515] bg-white rounded-full text-2xl lg:text-3xl"/></a>
                    <a href="https://www.facebook.com/profile.php?id=61551634958282" target="_blank" className="hover:scale-105"><FaFacebook className="text-[#1877F2] bg-white rounded-full text-2xl lg:text-3xl"/></a>
                </div>
            </div>
            <div className="md:w-1/2 flex flex-col items-center md:justify-end md:flex-row md:items-end gap-4 xl:gap-8">
                <div className="md:absolute md:transform md:left-1/2 md:-translate-x-1/2 pb-4">
                    <a href="https://docs.google.com/document/d/158UG5AVEV32-nVw1K7W2syifY38xzWvu_Q58PEG1uog/edit?usp=sharing" target="_blank">
                        <button className="w-max flex justify-center items-center gap-1 text-center min-[300px]:text-lg md:text-base lg:text-lg px-3 py-2 rounded-lg bg-[#01EEFF] text-white font-bold hover:bg-white hover:text-[#01EEFF] hover:scale-105 outline-none">
                            Download CV
                            <FaDownload />
                        </button>
                    </a>
                </div>
                <div className="md:w-3/4">
                    <img src={myPhoto} alt="Abrar's Image" className="w-full max-h-[700px]" />
                </div>
            </div>
        </div>
    );
};

export default Banner;