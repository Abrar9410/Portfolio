import { Link } from "react-router-dom";
import chillgamerImg from "../assets/project-a10(1).PNG"
import Title from "./Title";
import { useEffect } from "react";

const ChillGamer = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <div className="w-11/12 md:w-10/12 mx-auto py-12 text-white">
            <div className="mb-6">
                <img src={chillgamerImg} alt="CareCamp Image" className="w-full max-h-[80vh]" />
            </div>
            <Title title="ChillGamer - Game Review Platform"></Title>
            <p className="text-lg mb-6">
                ChillGamer is a dynamic and user-friendly game review platform designed to connect gaming
                enthusiasts. The project's goal is to provide a space where users can explore, share, and manage
                reviews of their favorite games. The application boasts a modern interface with smooth navigation,
                ensuring a "chill" experience for users who love to discover new games and engage with the gaming
                community. Whether a casual gamer or a dedicated reviewer, ChillGamer caters to all with essential
                features such as user authentication, CRUD operations for reviews, and a personalized WatchList
                management system.
            </p>
            <p className="flex flex-col gap-2 text-lg mb-6">
                <span className="font-bold text-[#01EEFF] text-xl">Key Features:</span>
                <ul className="list-disc ml-12">
                    <li>
                        <span className="font-bold">Dynamic Review Management: </span>
                        Users can add, update, or delete their game reviews, keeping their feedback relevant and accurate.
                    </li>
                    <li>
                        <span className="font-bold">Firebase Authentication: </span>
                        Secure and seamless user registration and login experience.
                    </li>
                    <li>
                        <span className="font-bold">Private Route Protection: </span>
                        Certain features like submitting reviews and managing the WatchList are accessible only to authenticated users.
                    </li>
                    <li>
                        <span className="font-bold">Review Exploration: </span>
                        Users can read all reviews shared by the community, helping them make informed decisions about games.
                    </li>
                    <li>
                        <span className="font-bold">Game Watchlist: </span>
                        Users can shortlist games they find interesting and manage this list on a dedicated WatchList page.
                    </li>
                    <li>
                        <span className="font-bold">Responsive Design: </span>
                        Ensures an optimal user experience across various devices.
                    </li>
                </ul>
            </p>
            <p className="flex flex-col gap-2 text-lg mb-6">
                <span className="font-bold text-[#01EEFF] text-xl">Technologies Used:</span>
                <ul className="list-disc ml-12">
                    <li>
                        <span className="font-bold">Frontend: </span>
                        React.js, React Router, Swiper.js, Tailwind CSS, DaisyUI, React Icons, React Toastify, Sweet Alert 2
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
                        Firebase
                    </li>
                </ul>
            </p>
            <p className="flex flex-col gap-2 text-lg mb-6">
                <span className="font-bold text-[#01EEFF] text-xl">Challenges Faced:</span>
                Building ChillGamer was both an exciting and insightful experience. One notable challenge was
                integrating CRUD operations with MongoDB while ensuring that the data flow remained efficient and
                reliable. Handling complex data relationships between games, reviews, and users required thoughtful
                backend design.
                <br /><br />
                Another significant hurdle was implementing secure user authentication with Firebase. It was
                crucial to safeguard user data and manage session persistence seamlessly. Debugging authentication
                flows and protecting private routes became a key learning opportunity.
                <br /><br />
                Furthermore, achieving a clean and engaging UI posed creative challenges. Using Swiper.js and
                integrating multiple React libraries like React-toastify and React-tooltip demanded careful
                planning to ensure smooth performance without overwhelming the user interface.
            </p>
            <p className="flex flex-col gap-2 text-lg mb-8">
                <span className="font-bold text-[#01EEFF] text-xl">Potential Improvements in Future:</span>
                Looking forward, several exciting enhancements can be made to ChillGamer. One idea is to introduce
                a rating system for reviews, allowing users to upvote or downvote reviews based on helpfulness.
                <br /><br />
                Additionally, implementing a notification system would be valuable, alerting users when their
                reviews receive interactions or when new games are trending.
                <br /><br />
                Another promising improvement would be gamifying the user experience by awarding badges or
                achievements for writing reviews, maintaining a watchlist, or engaging with community content.
                <br /><br />
                Finally, incorporating real-time chat or discussion boards would foster a more vibrant community
                where users can engage directly with each other about their favorite games.
            </p>
            <div className="flex flex-col justify-center items-center gap-3">
                <Link to="https://assignment-10-chill-gamer.netlify.app/" target="_blank">
                    <button className="w-max text-sm sm:text-base font-semibold px-2 py-1 rounded-lg text-white bg-[#01EEFF] hover:text-[#01EEFF] hover:bg-white outline-none">Visit ChillGamer</button>
                </Link>
                <Link to="https://github.com/Abrar9410/ChillGamer" target="_blank">
                    <button className="w-max text-sm sm:text-base font-semibold px-2 py-1 rounded-lg text-white bg-[#01EEFF] hover:text-[#01EEFF] hover:bg-white outline-none">GitHub Repo</button>
                </Link>
                <Link to="/">
                    <button className="w-max text-sm sm:text-base font-semibold px-2 py-1 rounded-lg text-white bg-[#01EEFF] hover:text-[#01EEFF] hover:bg-white outline-none">Return to Homepage</button>
                </Link>
            </div>
        </div>
    );
};

export default ChillGamer;