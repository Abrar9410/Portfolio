import myPhoto2 from "../assets/Abrar_Shahriar2.JPG"
import { useState } from "react";
import Title from "./Title";


const MyStory = () => {

    const [fullStory, setFullStory] = useState(false)

    return (
        <div id="aboutMe" className="mb-12">
            <Title title="My Story"></Title>
            <div className="bg-black w-11/12 md:w-1/2 mx-auto p-8 rounded-xl flex flex-col sm:flex-row items-center sm:items-start gap-4">
                <div className="w-1/2 rounded-lg">
                    <img src={myPhoto2} alt="Abrar's Photo" className="w-full rounded-lg"/>
                </div>
                <div className="w-full sm:w-1/2 flex flex-col items-center gap-4">
                    {
                        fullStory?
                        <>
                            <p className="text-white">
                                    Hi, Abrar Shahriar here! I am a passionate web development enthusiast and
                                    a proud student of Programming-Hero, where I am diving deep into the
                                    fascinating world of creating dynamic, user-friendly web applications.
                                    With a strong foundation in HTML, CSS, and JavaScript, I have expanded my
                                    skill set to include modern tools and frameworks such as TailwindCSS,
                                    DaisyUI, and React. I am also proficient in using React Router for
                                    building seamless navigation experiences and Firebase Authentication to
                                    add secure user management to web applications. I enjoy bringing ideas to
                                    life by crafting responsive and interactive websites. My journey as a
                                    developer is fueled by a continuous desire to learn, solve problems, and
                                    create applications that make an impact. When I’m not coding, I love
                                    exploring new technologies and improving my skills to stay ahead in the
                                    ever-evolving world of web development. Feel free to connect with me if
                                    you’d like to collaborate or discuss exciting projects. Let’s create
                                    something amazing together!
                            </p>
                                <button onClick={() => setFullStory(false)} className="w-max text-sm sm:text-base font-semibold px-2 py-1 rounded-lg text-white bg-[#01EEFF] hover:text-[#01EEFF] hover:bg-white outline-none">See less</button>  
                        </>:
                        <>
                            <p className="text-white">
                                Hi, Abrar Shahriar here! I am a passionate web development enthusiast and
                                a proud student of Programming-Hero, where I am diving deep into the fascinating
                                world of creating dynamic, user-friendly web applications. With a strong
                                foundation in HTML, CSS, and JavaScript, I have expanded my skill set to include
                                modern tools and frameworks such as TailwindCSS, DaisyUI, and React.
                            </p>
                            <button onClick={() => setFullStory(true)} className="w-max text-sm sm:text-base font-semibold px-2 py-1 rounded-lg text-white bg-[#01EEFF] hover:text-[#01EEFF] hover:bg-white outline-none">Read More</button>  
                        </>
                    }
                </div>
            </div>
        </div>
    );
};

export default MyStory;