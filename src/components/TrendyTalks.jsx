import { Link } from "react-router-dom";
import trendytalksImg from "../assets/project-a11(1).PNG"
import Title from "./Title";
import { useEffect } from "react";

const TrendyTalks = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <div className="w-11/12 md:w-10/12 mx-auto py-12 text-white">
            <div className="mb-6">
                <img src={trendytalksImg} alt="CareCamp Image" className="w-full max-h-[80vh]" />
            </div>
            <Title title="TrendyTalks - Blog Website"></Title>
            <p className="text-lg mb-6">
                TrendyTalks is an engaging and user-friendly blog platform where users can seamlessly read, write,
                post, and discuss blogs on a wide range of topics. The platform is designed to foster an
                interactive experience for both content creators and readers. With dynamic web pages and smooth
                navigation, TrendyTalks ensures an optimized performance across all devices. This project was
                built with modern technologies to deliver a professional and polished blogging experience.
            </p>
            <p className="flex flex-col gap-2 text-lg mb-6">
                <span className="font-bold text-[#01EEFF] text-xl">Key Features:</span>
                <ul className="list-disc ml-12">
                    <li>
                        <span className="font-bold">Secure Authentication: </span>
                        Fully secured with Firebase Authentication and JSON Web Tokens (JWT) to protect user data and manage access.
                    </li>
                    <li>
                        <span className="font-bold">Dynamic Data Handling: </span>
                        Backend CRUD operations powered by MongoDB for real-time data management.
                    </li>
                    <li>
                        <span className="font-bold">Blog Creation: </span>
                        Registered users can create and post their blogs effortlessly.
                    </li>
                    <li>
                        <span className="font-bold">Commenting System: </span>
                        While everyone can read comments, only signed-in users can contribute their thoughts.
                    </li>
                    <li>
                        <span className="font-bold">Wishlist Feature: </span>
                        Users can shortlist, like, and manage a wishlist of favorite blogs, accessible through a dedicated wishlist page.
                    </li>
                </ul>
            </p>
            <p className="flex flex-col gap-2 text-lg mb-6">
                <span className="font-bold text-[#01EEFF] text-xl">Technologies Used:</span>
                <ul className="list-disc ml-12">
                    <li>
                        <span className="font-bold">Frontend: </span>
                        React.js, React Router, Framer Motion, Tailwind CSS, DaisyUI, React Icons, React Toastify, Moment.js
                    </li>
                    <li>
                        <span className="font-bold">Backend: </span>
                        Node.js, Express.js
                    </li>
                    <li>
                        <span className="font-bold">Database: </span>
                        MongoDB
                    </li>
                    <li>
                        <span className="font-bold">Authentication: </span>
                        Firebase, JWT
                    </li>
                </ul>
            </p>
            <p className="flex flex-col gap-2 text-lg mb-6">
                <span className="font-bold text-[#01EEFF] text-xl">Challenges Faced:</span>
                Creating TrendyTalks was both a rewarding and challenging experience. One of the most significant
                hurdles was optimizing the user experience while managing dynamic data in real time. Ensuring
                seamless CRUD operations through MongoDB and Express.js required meticulous planning and testing
                to avoid performance bottlenecks.
                <br /><br />
                Designing the secure authentication system also presented its complexities. Implementing Firebase
                Authentication and JWT was straightforward initially, but the challenge arose when handling user
                sessions securely without impacting the platform's performance. Finding the right balance between
                security and usability took considerable effort.
                <br /><br />
                Furthermore, crafting a visually appealing yet functional UI with Tailwind CSS and DaisyUI
                demanded creativity and constant iterations. Achieving a responsive design that looked polished
                on all devices required a deep understanding of responsive design principles and persistent
                debugging.
            </p>
            <p className="flex flex-col gap-2 text-lg mb-8">
                <span className="font-bold text-[#01EEFF] text-xl">Potential Improvements in Future:</span>
                Looking forward, TrendyTalks has immense potential for growth and enhancement. One of the primary
                improvements planned is integrating advanced user analytics to provide insights into popular blog
                topics and user engagement trends.
                <br /><br />
                Another exciting avenue is introducing a recommendation system that suggests blogs based on user
                preferences and reading history, making the platform more personalized and engaging.
                <br/><br/>
                Additionally, implementing social sharing features would greatly enhance the platform's reach,
                allowing users to share their favorite blogs directly to social media. Improving accessibility
                features to make TrendyTalks more inclusive for all users is also a top priority.
                <br/><br/>
                With these improvements, TrendyTalks aims to continue evolving as a dynamic, user-centric blog
                platform.
            </p>
            <div className="flex flex-col justify-center items-center gap-3">
                <Link to="https://trendy-talks-blog-site.netlify.app/" target="_blank">
                    <button className="w-max text-sm sm:text-base font-semibold px-2 py-1 rounded-lg text-white bg-[#01EEFF] hover:text-[#01EEFF] hover:bg-white outline-none">Visit TrendyTalks</button>
                </Link>
                <Link to="https://github.com/Abrar9410/TrendyTalks" target="_blank">
                    <button className="w-max text-sm sm:text-base font-semibold px-2 py-1 rounded-lg text-white bg-[#01EEFF] hover:text-[#01EEFF] hover:bg-white outline-none">GitHub Repo</button>
                </Link>
                <Link to="/">
                    <button className="w-max text-sm sm:text-base font-semibold px-2 py-1 rounded-lg text-white bg-[#01EEFF] hover:text-[#01EEFF] hover:bg-white outline-none">Return to Homepage</button>
                </Link>
            </div>
        </div>
    );
};

export default TrendyTalks;