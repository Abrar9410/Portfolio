import project1Img from "../assets/project-a11(1).PNG";
import project2Img from "../assets/project-a10(1).PNG";
import project3Img from "../assets/project-a9(1).PNG";


const Projects = () => {
    return (
        <div id="projects" className="">
            <div className="bg-black p-8">
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                    <div className="project-container relative">
                        <img src={project1Img} alt="" className="w-full h-[350px] rounded-xl"/>
                        <div className="project-info flex flex-col justify-center items-center gap-4">
                            <a href="">
                                <button className="w-max text-sm text-white bg-[#01EEFF] hover:text-[#01EEFF] hover:bg-white outline-none">View Details</button>
                            </a>
                            <a href="">
                                <button className="w-max text-sm text-white bg-[#01EEFF] hover:text-[#01EEFF] hover:bg-white outline-none">GitHub Repo</button>
                            </a>
                            <a href="">
                                <button className="w-max text-sm text-white bg-[#01EEFF] hover:text-[#01EEFF] hover:bg-white outline-none">Live Link</button>
                            </a>
                        </div>
                    </div>
                    <div className="project-container relative">
                        <img src={project2Img} alt="" className="w-full h-[350px] rounded-xl"/>
                        <div className="project-info flex flex-col justify-center items-center gap-4">
                            <a href="">
                                <button className="w-max text-sm text-white bg-[#01EEFF] hover:text-[#01EEFF] hover:bg-white outline-none">View Details</button>
                            </a>
                            <a href="">
                                <button className="w-max text-sm text-white bg-[#01EEFF] hover:text-[#01EEFF] hover:bg-white outline-none">GitHub Repo</button>
                            </a>
                            <a href="">
                                <button className="w-max text-sm text-white bg-[#01EEFF] hover:text-[#01EEFF] hover:bg-white outline-none">Live Link</button>
                            </a>
                        </div>
                    </div>
                    <div class="project-container relative">
                        <img src={project3Img} alt="" className="w-full h-[350px] rounded-xl"/>
                        <div className="project-info flex flex-col justify-center items-center gap-4">
                            <a href="">
                                <button className="w-max text-sm text-white bg-[#01EEFF] hover:text-[#01EEFF] hover:bg-white outline-none">View Details</button>
                            </a>
                            <a href="">
                                <button className="w-max text-sm text-white bg-[#01EEFF] hover:text-[#01EEFF] hover:bg-white outline-none">GitHub Repo</button>
                            </a>
                            <a href="">
                                <button className="w-max text-sm text-white bg-[#01EEFF] hover:text-[#01EEFF] hover:bg-white outline-none">Live Link</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;