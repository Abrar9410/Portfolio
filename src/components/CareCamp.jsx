import { Link } from "react-router-dom";
import carecampImg from "../assets/project-a12(1).PNG"
import Title from "./Title";

const CareCamp = () => {
    return (
        <div className="w-11/12 md:w-10/12 mx-auto py-12 text-white">
            <div className="mb-6">
                <img src={carecampImg} alt="CareCamp Image" className="w-full max-h-[80vh]" />
            </div>
            <Title title="CareCamp - Medical Camp Management System"></Title>
            <p className="text-lg mb-6">
                CareCamp is a comprehensive MERN stack web application designed to streamline the management and
                coordination of medical camps. The system provides seamless interactions between organizers and
                participants, making camp management efficient and user-friendly.
            </p>
            <p className="flex flex-col gap-2 text-lg mb-6">
                <span className="font-bold text-[#01EEFF] text-xl">Key Features:</span>
                <ul className="list-disc ml-12">
                    <li>
                        <span className="font-bold">Secure User Authentication: </span>
                        JWT-based authentication system powered by Firebase, ensuring data privacy and access control.
                    </li>
                    <li>
                        <span className="font-bold">Role-Based Dashboards: </span>
                        <ul className="list-disc ml-12">
                            <li>Participants can register for camps, provide feedback, view registration statuses, and analyze their activity with usage analytics.</li>
                            <li>Organizers can manage camp schedules, review participant data, and track feedback analytics.</li>
                        </ul>
                    </li>
                    <li>
                        <span className="font-bold">Dynamic Camp Search: </span>
                        Search for camps by title, location, or healthcare professional with real-time query handling.
                    </li>
                    <li>
                        <span className="font-bold">Payment Integration: </span>
                        Secure payment handling via the Stripe payment gateway.
                    </li>
                    <li>
                        <span className="font-bold">Dark Mode: </span>
                        Fully responsive dark mode for a user-friendly experience across different lighting conditions.
                    </li>
                    <li>
                        <span className="font-bold">Real-Time Data Fetching: </span>
                        Optimized data fetching with TanStack Query for enhanced performance.
                    </li>
                    <li>
                        <span className="font-bold">Feedback and Analytics: </span>
                        Integrated system for participant feedback and expense analytics.
                    </li>
                    <li>
                        <span className="font-bold">Responsive Design: </span>
                        Mobile-first design ensuring seamless access across various device sizes.
                    </li>
                    <li>
                        <span className="font-bold">Custom UI Styling: </span>
                        Tailored user interface with Tailwind CSS and DaisyUI for a modern and intuitive design.
                    </li>
                </ul>
            </p>
            <p className="flex flex-col gap-2 text-lg mb-6">
                <span className="font-bold text-[#01EEFF] text-xl">Technologies Used:</span>
                <ul className="list-disc ml-12">
                    <li>React.js</li>
                    <li>Tailwind CSS</li>
                    <li>DaisyUI</li>
                    <li>Firebase</li>
                    <li>TanStack Query</li>
                    <li>Axios</li>
                    <li>Node.js & Express.js</li>
                    <li>MongoDB</li>
                    <li>Stripe Payment Gateway</li>
                    <li>React-hook-form</li>
                    <li>React-data-table</li>
                    <li>Recharts</li>
                </ul>
            </p>
            <p className="flex flex-col gap-2 text-lg mb-6">
                <span className="font-bold text-[#01EEFF] text-xl">Challenges Faced:</span>
                Building CareCamp was an enlightening journey that tested my problem-solving abilities and
                perseverance.First of many significant hurdles was implementing a fully responsive dark mode which
                was trickier than anticipated. Tailwind's utility classes offered flexibility, but I had to ensure
                that my custom dark mode styling did not conflict with DaisyUI's default themes. Fine-tuning the
                user experience to provide both a functional and visually appealing design was worth every effort.
                <br /><br />
                Another major challenge emerged while creating role-based dashboards for participants and
                organizers. Designing and structuring dynamic components that catered to their distinct
                functionalities, such as payment processing for participants and analytics management for
                organizers, required careful state management and user role validation.<br /><br />
                Moreover, integrating the Stripe payment gateway was a steep learning curve. Ensuring that all
                transactions were secure and completed smoothly without introducing latency was a challenge that
                demanded meticulous attention to API requests and error handling.
            </p>
            <p className="flex flex-col gap-2 text-lg mb-8">
                <span className="font-bold text-[#01EEFF] text-xl">Potential Improvements in Future:</span>
                While CareCamp is functional and visually appealing, there's always room for improvement. One
                promising enhancement would be to integrate advanced analytics dashboards with detailed visual
                insights for both participants and organizers. This would provide a better understanding of
                participant engagement trends and feedback analysis.
                <br /><br />
                Lastly, introducing push notifications would significantly enhance user engagement. Participants
                could receive timely reminders for camp schedules, registration updates, and personalized health
                tips.
            </p>
            <div className="flex flex-col justify-center items-center gap-3">
                <Link to="https://carecamp-mcms.netlify.app/" target="_blank">
                    <button className="w-max text-sm sm:text-base font-semibold px-2 py-1 rounded-lg text-white bg-[#01EEFF] hover:text-[#01EEFF] hover:bg-white outline-none">Visit CareCamp</button>
                </Link>
                <Link to="https://github.com/Abrar9410/CareCamp-MCMS" target="_blank">
                    <button className="w-max text-sm sm:text-base font-semibold px-2 py-1 rounded-lg text-white bg-[#01EEFF] hover:text-[#01EEFF] hover:bg-white outline-none">GitHub Repo</button>
                </Link>
                <Link to="/">
                    <button className="w-max text-sm sm:text-base font-semibold px-2 py-1 rounded-lg text-white bg-[#01EEFF] hover:text-[#01EEFF] hover:bg-white outline-none">Return to Homepage</button>
                </Link>
            </div>
        </div>
    );
};

export default CareCamp;