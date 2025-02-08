import project1Img from "../assets/project-a12(1).PNG";
import project2Img from "../assets/project-a11(1).PNG";
import project3Img from "../assets/project-a10(1).PNG";
import Title from "./Title";
import { Link } from "react-router-dom";


const Projects = () => {
    return (
        <section id="projects" className="mb-14">
            <Title title="My Projects"></Title>
            <div className="w-11/12 md:w-10/12 mx-auto bg-black rounded-xl p-2 min-[400px]:p-4 sm:p-6 lg:p-8">
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                    <div className="project-container relative">
                        <img src={project1Img} alt="" className="w-full h-[350px] rounded-xl"/>
                        <div className="project-info flex flex-col justify-center items-center gap-4">
                            <Link to="/projects/CareCamp">
                                <button className="w-max text-sm sm:text-base font-semibold px-2 py-1 rounded-lg text-white bg-[#01EEFF] hover:text-[#01EEFF] hover:bg-white outline-none">View Details</button>
                            </Link>
                            <Link to="https://github.com/Abrar9410/CareCamp-MCMS" target="_blank">
                                <button className="w-max text-sm sm:text-base font-semibold px-2 py-1 rounded-lg text-white bg-[#01EEFF] hover:text-[#01EEFF] hover:bg-white outline-none">GitHub Repo</button>
                            </Link>
                            <Link to="https://carecamp-mcms.netlify.app/" target="_blank">
                                <button className="w-max text-sm sm:text-base font-semibold px-2 py-1 rounded-lg text-white bg-[#01EEFF] hover:text-[#01EEFF] hover:bg-white outline-none">Live Link</button>
                            </Link>
                        </div>
                        <h3 className="text-center text-white text-xl min-[350px]:text-2xl font-semibold mt-2">CareCamp - MCMS</h3>
                    </div>
                    <div className="project-container relative">
                        <img src={project2Img} alt="" className="w-full h-[350px] rounded-xl"/>
                        <div className="project-info flex flex-col justify-center items-center gap-4">
                            <Link to="/projects/TrendyTalks">
                                <button className="w-max text-sm sm:text-base font-semibold px-2 py-1 rounded-lg text-white bg-[#01EEFF] hover:text-[#01EEFF] hover:bg-white outline-none">View Details</button>
                            </Link>
                            <Link to="https://github.com/Abrar9410/TrendyTalks" target="_blank">
                                <button className="w-max text-sm sm:text-base font-semibold px-2 py-1 rounded-lg text-white bg-[#01EEFF] hover:text-[#01EEFF] hover:bg-white outline-none">GitHub Repo</button>
                            </Link>
                            <Link to="https://asssignment-11-trendy-talks-blog-site.netlify.app/" target="_blank">
                                <button className="w-max text-sm sm:text-base font-semibold px-2 py-1 rounded-lg text-white bg-[#01EEFF] hover:text-[#01EEFF] hover:bg-white outline-none">Live Link</button>
                            </Link>
                        </div>
                        <h3 className="text-center text-white text-xl min-[350px]:text-2xl font-semibold mt-2">TrendyTalks</h3>
                    </div>
                    <div class="project-container relative">
                        <img src={project3Img} alt="" className="w-full h-[350px] rounded-xl"/>
                        <div className="project-info flex flex-col justify-center items-center gap-4">
                            <Link to="/projects/ChillGamer">
                                <button className="w-max text-sm sm:text-base font-semibold px-2 py-1 rounded-lg text-white bg-[#01EEFF] hover:text-[#01EEFF] hover:bg-white outline-none">View Details</button>
                            </Link>
                            <Link to="https://github.com/Abrar9410/ChillGamer" target="_blank">
                                <button className="w-max text-sm sm:text-base font-semibold px-2 py-1 rounded-lg text-white bg-[#01EEFF] hover:text-[#01EEFF] hover:bg-white outline-none">GitHub Repo</button>
                            </Link>
                            <Link to="https://assignment-10-chill-gamer.netlify.app/" target="_blank">
                                <button className="w-max text-sm sm:text-base font-semibold px-2 py-1 rounded-lg text-white bg-[#01EEFF] hover:text-[#01EEFF] hover:bg-white outline-none">Live Link</button>
                            </Link>
                        </div>
                        <h3 className="text-center text-white text-xl min-[350px]:text-2xl font-semibold mt-2">ChillGamer</h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;