import myPhoto2 from "../assets/Abrar_Shahriar2.JPG"
import { useState } from "react";
import Title from "./Title";


const MyStory = () => {

    const [fullStory, setFullStory] = useState(false)

    return (
        <section id="aboutMe" className="mb-14">
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
                                    From a deep love for Mathematics to finding my creative calling in web
                                    development, my journey has been anything but conventional. I initially pursued
                                    a B.Sc. (Hons.) in Mathematics at the University of Chittagong, driven by my
                                    fascination with problem-solving and logical thinking. Despite performing well
                                    academically, I gradually realized that traditional education didn't fuel my
                                    desire for creativity. However, those years introduced me to programming
                                    through minor courses involving Mathematica and Fortran, sparking my interest
                                    in coding.<br/><br/>
                                    After much contemplation, I decided to dive into web development, a field
                                    that beautifully combines problem-solving with creative expression. At first,
                                    I explored various technologies independently but struggled to maintain focus.
                                    Everything changed when a friend introduced me to Programming Hero. Under the
                                    mentorship of Mr. Jhankar Mahbub, one of Bangladesh's leading developers,
                                    I received structured guidance, completed the course with excellent marks, and
                                    emerged as a junior frontend developer focused on the MERN stack.<br/><br/>
                                    My expertise now spans React.js, Tailwind CSS, Firebase, and more. I am
                                    currently expanding my knowledge by learning Next.js to stay at the forefront
                                    of modern web technologies.<br/><br/>
                                    Beyond coding, I am passionate about sports and
                                    gaming. I had the honor of being part of the champion team in a tape tennis
                                    cricket tournament during my university years and played 2nd Division cricket
                                    for Chittagong Cricket Academy.<br/><br/>
                                    My journey is fueled by a relentless desire to grow, solve complex problems,
                                    and create seamless, user-centric web applications that make a difference.
                            </p>
                                <button onClick={() => setFullStory(false)} className="w-max text-sm sm:text-base font-semibold px-2 py-1 rounded-lg text-white bg-[#01EEFF] hover:text-[#01EEFF] hover:bg-white outline-none">See less</button>  
                        </>:
                        <>
                            <p className="text-white">
                                    From a deep love for Mathematics to finding my creative calling in web
                                    development, my journey has been anything but conventional. I initially pursued
                                    a B.Sc. (Hons.) in Mathematics at the University of Chittagong, driven by my
                                    fascination with problem-solving and logical thinking. Despite performing well
                                    academically, I gradually realized that traditional education didn't fuel my
                                    desire for creativity...
                            </p>
                            <button onClick={() => setFullStory(true)} className="w-max text-sm sm:text-base font-semibold px-2 py-1 rounded-lg text-white bg-[#01EEFF] hover:text-[#01EEFF] hover:bg-white outline-none">Read More</button>  
                        </>
                    }
                </div>
            </div>
        </section>
    );
};

export default MyStory;