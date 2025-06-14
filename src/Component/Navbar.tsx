import { useState } from "react";
import { FaBars, FaTimes, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinks = ["Home", "About", "Technologies", "Projects", "Experience", "Blog", "Contact"];

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id.toLowerCase()); // convert to lowercase!
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setMenuOpen(false);
        }
    };

    return (
        <nav className="w-full py-4 px-6 flex items-center justify-between text-white z-50 relative">
            {/* Logo */}
            <p className="text-4xl font-bold">DT</p>

            {/* Menu links for large screens */}
            <div className="hidden lg:flex items-center gap-8 text-lg">
                {navLinks.map((id) => (
                    <p
                        key={id}
                        onClick={() => scrollToSection(id)}
                        className="cursor-pointer hover:text-blue-400 capitalize"
                    >
                        {id}
                    </p>
                ))}
            </div>

            {/* Right section */}
            <div className="flex items-center gap-4">
                <a
                    href={`${import.meta.env.BASE_URL}Resume.pdf`}
                    download="Resume.pdf"
                    className="inline-block text-sm px-3 py-1 rounded bg-white text-black hover:bg-gray-200 transition"
                >
                    Resume
                </a>

                <a
                    href="https://www.linkedin.com/in/deepa-kumar-3b990a237"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl hover:text-blue-400"
                >
                    <FaLinkedin />
                </a>
                <a
                    href="https://github.com/Deepa-Projectss"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl hover:text-gray-300"
                >
                    <FaGithub />
                </a>

                {/* Hamburger for small screens */}
                <button
                    className="text-2xl lg:hidden"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile dropdown menu */}
            {menuOpen && (
                <div className="absolute top-full left-0 w-full bg-black/80 text-white flex flex-col items-center gap-4 py-4 lg:hidden z-40 backdrop-blur-sm">
                    {navLinks.map((id) => (
                        <p
                            key={id}
                            onClick={() => scrollToSection(id)}
                            className="cursor-pointer hover:text-blue-400 capitalize"
                        >
                            {id}
                        </p>
                    ))}
                </div>
            )}
        </nav>
    );
}
