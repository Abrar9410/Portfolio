import Marquee from "react-fast-marquee";
import Title from "./Title";


const Skills = () => {
    return (
        <div id="skills" className="mb-12">
            <Title title="My Skills"></Title>
            <div className="w-11/12 sm:w-10/12 mx-auto p-8 rounded-xl">
                <Marquee pauseOnHover={true} speed={100} className="space-x-10 text-lg font-semibold">
                    <div className="flex flex-col items-center gap-4 ml-16">
                        {/* <img src={} alt="" /> */}
                        <h5 className="text-white">HTML5</h5>
                    </div>
                    <div className="flex flex-col items-center gap-4 ml-16">
                        {/* <img src={} alt="" /> */}
                        <h5 className="text-white">CSS3</h5>
                    </div>
                    <div className="flex flex-col items-center gap-4 ml-16">
                        {/* <img src={} alt="" /> */}
                        <h5 className="text-white">JavaScript</h5>
                    </div>
                    <div className="flex flex-col items-center gap-4 ml-16">
                        {/* <img src={} alt="" /> */}
                        <h5 className="text-white">Tailwind-CSS</h5>
                    </div>
                    <div className="flex flex-col items-center gap-4 ml-16">
                        {/* <img src={} alt="" /> */}
                        <h5 className="text-white">DaisyUI</h5>
                    </div>
                    <div className="flex flex-col items-center gap-4 ml-16">
                        {/* <img src={} alt="" /> */}
                        <h5 className="text-white">NPM</h5>
                    </div>
                    <div className="flex flex-col items-center gap-4 ml-16">
                        {/* <img src={} alt="" /> */}
                        <h5 className="text-white">React</h5>
                    </div>
                    <div className="flex flex-col items-center gap-4 ml-16">
                        {/* <img src={} alt="" /> */}
                        <h5 className="text-white">Nodejs</h5>
                    </div>
                    <div className="flex flex-col items-center gap-4 ml-16">
                        {/* <img src={} alt="" /> */}
                        <h5 className="text-white">MongoDB</h5>
                    </div>
                </Marquee>
            </div>
        </div>
    );
};

export default Skills;