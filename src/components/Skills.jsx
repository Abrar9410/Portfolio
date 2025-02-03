import html5 from "../assets/html5.svg";
import css3 from "../assets/css3.svg";
import javaScript from "../assets/javaScript.svg";
import tailwind from "../assets/tailwind.svg";
import daisyUI from "../assets/daisyUI.svg";
import npm from "../assets/npm.svg";
import react from "../assets/react.svg";
import firebase from "../assets/firebase.svg";
import node from "../assets/node.svg";
import mongoDB from "../assets/mongoDB.svg";
import Marquee from "react-fast-marquee";
import Title from "./Title";


const Skills = () => {
    return (
        <div id="skills" className="mb-14">
            <Title title="My Skills"></Title>
            <div className="w-11/12 sm:w-10/12 mx-auto p-4 rounded-xl bg-black">
                <Marquee pauseOnHover={true} speed={100} className="space-x-10 text-lg font-semibold">
                    <div className="flex flex-col items-center gap-1 ml-16">
                        <img src={html5} alt="HTML5" className="w-16"/>
                        <h5 className="text-white">HTML5</h5>
                    </div>
                    <div className="flex flex-col items-center gap-1 ml-16">
                        <img src={css3} alt=""  className="w-16"/>
                        <h5 className="text-white">CSS3</h5>
                    </div>
                    <div className="flex flex-col items-center gap-1 ml-16">
                        <img src={javaScript} alt=""  className="w-16"/>
                        <h5 className="text-white">JavaScript</h5>
                    </div>
                    <div className="flex flex-col items-center gap-1 ml-16">
                        <img src={tailwind} alt=""  className="w-16"/>
                        <h5 className="text-white">Tailwind-CSS</h5>
                    </div>
                    <div className="flex flex-col items-center gap-1 ml-16">
                        <img src={daisyUI} alt=""  className="w-16 h-16"/>
                        <h5 className="text-white">DaisyUI</h5>
                    </div>
                    <div className="flex flex-col items-center gap-1 ml-16">
                        <img src={npm} alt=""  className="w-16"/>
                        <h5 className="text-white">NPM</h5>
                    </div>
                    <div className="flex flex-col items-center gap-1 ml-16">
                        <img src={react} alt=""  className="w-16"/>
                        <h5 className="text-white">React</h5>
                    </div>
                    <div className="flex flex-col items-center gap-1 ml-16">
                        <img src={firebase} alt=""  className="w-16"/>
                        <h5 className="text-white">Firebase</h5>
                    </div>
                    <div className="flex flex-col items-center gap-1 ml-16">
                        <img src={node} alt=""  className="w-16 bg-white"/>
                        <h5 className="text-white">Node.js</h5>
                    </div>
                    <div className="flex flex-col items-center gap-1 ml-16">
                        <img src={mongoDB} alt=""  className="w-16"/>
                        <h5 className="text-white">MongoDB</h5>
                    </div>
                </Marquee>
            </div>
        </div>
    );
};

export default Skills;