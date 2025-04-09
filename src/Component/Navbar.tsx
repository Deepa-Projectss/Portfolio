import { FaLinkedin, FaGithub, } from "react-icons/fa";

export default function Navbar() {
    // Scroll to section when clicked
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav className="w-full mb-20 flex items-center justify-between py-6  px-10">
            <p className="text-3xl font-semibold tracking-wide text-white">DT</p>
            {/* Navigation Links */}
            <div className="flex space-x-6 text-white text-lg">
                <p onClick={() => scrollToSection("intro")} className="cursor-pointer hover:text-blue-400">
                    Home
                </p>
                <p onClick={() => scrollToSection("about")} className="cursor-pointer hover:text-blue-400">
                    About
                </p>
                <p onClick={() => scrollToSection("technologies")} className="cursor-pointer hover:text-blue-400">
                    Technologies
                </p>
                <p onClick={() => scrollToSection("projects")} className="cursor-pointer hover:text-blue-400">
                    Projects
                </p>
                <p onClick={() => scrollToSection("experience")} className="cursor-pointer hover:text-blue-400">
                    Experience
                </p>
                <p onClick={() => scrollToSection("blog")} className="cursor-pointer hover:text-blue-400">
                    Blog
                </p>
                <p onClick={() => scrollToSection("contact")} className="cursor-pointer hover:text-blue-400">
                    Contact
                </p>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center gap-6">
                {/* Resume Button */}
                <a
                    href="/resume.pdf"
                    download="Deepa_Resume.pdf"
                    className="relative inline-block px-4 py-2 rounded-lg bg-bl overflow-hidden group"
                >
                    {/* Background Slide Layer */}
                    <span className="absolute inset-0 bg-white translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0 rounded-lg"></span>

                    {/* Text Layer */}
                    <span className="relative z-10 text-white group-hover:text-black transition-colors duration-300">
                        Download Resume
                    </span>
                </a>



                {/* Social Icons */}
                <div className="flex items-center gap-4 text-2xl text-white">
                    <a
                        href="https://www.linkedin.com/in/deepa-kumar-3b990a237"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-500"
                    >
                        <FaLinkedin className="cursor-pointer" />
                    </a>
                    <a
                        href="https://github.com/Deepa-Projectss"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-400"
                    >
                        <FaGithub className="cursor-pointer" />
                    </a>
                    
                </div>
            </div>
        </nav>
    );
}
