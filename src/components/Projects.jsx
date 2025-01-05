import project1Img from "../assets/project-a11(1).PNG";
import project2Img from "../assets/project-a10(1).PNG";
import project3Img from "../assets/project-a9(1).PNG";
import Title from "./Title";


const Projects = () => {
    return (
        <div id="projects" className="mb-12">
            <Title title="My Projects"></Title>
            <div className="w-11/12 md:w-10/12 mx-auto bg-black rounded-xl p-8">
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                    <div className="project-container relative">
                        <img src={project1Img} alt="" className="w-full h-[350px] rounded-xl"/>
                        <div className="project-info flex flex-col justify-center items-center gap-4">
                            <a href="">
                                <button className="w-max text-sm sm:text-base font-semibold px-2 py-1 rounded-lg text-white bg-[#01EEFF] hover:text-[#01EEFF] hover:bg-white outline-none">View Details</button>
                            </a>
                            <a href="https://github.com/programming-hero-web-course2/b10a11-client-side-Abrar9410" target="_blank">
                                <button className="w-max text-sm sm:text-base font-semibold px-2 py-1 rounded-lg text-white bg-[#01EEFF] hover:text-[#01EEFF] hover:bg-white outline-none">GitHub Repo</button>
                            </a>
                            <a href="https://asssignment-11-trendy-talks-blog-site.netlify.app/" target="_blank">
                                <button className="w-max text-sm sm:text-base font-semibold px-2 py-1 rounded-lg text-white bg-[#01EEFF] hover:text-[#01EEFF] hover:bg-white outline-none">Live Link</button>
                            </a>
                        </div>
                    </div>
                    <div className="project-container relative">
                        <img src={project2Img} alt="" className="w-full h-[350px] rounded-xl"/>
                        <div className="project-info flex flex-col justify-center items-center gap-4">
                            <a href="">
                                <button className="w-max text-sm sm:text-base font-semibold px-2 py-1 rounded-lg text-white bg-[#01EEFF] hover:text-[#01EEFF] hover:bg-white outline-none">View Details</button>
                            </a>
                            <a href="https://github.com/programming-hero-web-course2/b10-a10-client-side-Abrar9410?tab=readme-ov-file" target="_blank">
                                <button className="w-max text-sm sm:text-base font-semibold px-2 py-1 rounded-lg text-white bg-[#01EEFF] hover:text-[#01EEFF] hover:bg-white outline-none">GitHub Repo</button>
                            </a>
                            <a href="https://assignment-10-chill-gamer.netlify.app/" target="_blank">
                                <button className="w-max text-sm sm:text-base font-semibold px-2 py-1 rounded-lg text-white bg-[#01EEFF] hover:text-[#01EEFF] hover:bg-white outline-none">Live Link</button>
                            </a>
                        </div>
                    </div>
                    <div class="project-container relative">
                        <img src={project3Img} alt="" className="w-full h-[350px] rounded-xl"/>
                        <div className="project-info flex flex-col justify-center items-center gap-4">
                            <a href="">
                                <button className="w-max text-sm sm:text-base font-semibold px-2 py-1 rounded-lg text-white bg-[#01EEFF] hover:text-[#01EEFF] hover:bg-white outline-none">View Details</button>
                            </a>
                            <a href="https://github.com/programming-hero-web-course1/b10-a9-authentication-Abrar9410" target="_blank">
                                <button className="w-max text-sm sm:text-base font-semibold px-2 py-1 rounded-lg text-white bg-[#01EEFF] hover:text-[#01EEFF] hover:bg-white outline-none">GitHub Repo</button>
                            </a>
                            <a href="https://assignment09-discount-pro.netlify.app/" target="_blank">
                                <button className="w-max text-sm sm:text-base font-semibold px-2 py-1 rounded-lg text-white bg-[#01EEFF] hover:text-[#01EEFF] hover:bg-white outline-none">Live Link</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;