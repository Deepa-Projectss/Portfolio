import { CONTACT } from "../Constant/Index";
import { motion } from "framer-motion"

export default function Contact() {
    return (
        <div id="contact" className="border-b border-neutral-900 pb-20">
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-10 text-center text-4xl">Contact </motion.h1>
            <motion.div className="text-center tracking-tighter"
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}>
                <p
                    className="my-4">{CONTACT.address}</p>
                <p
                    className="my-4">{CONTACT.phoneNo}</p>
                <button

                    onClick={() => window.location.href = `mailto:${CONTACT.email}`}
                    className="text-white bg-transparent cursor-pointer underline"
                >
                    {CONTACT.email}
                </button> <br />
                <a
                    href="/Portfolio/Deepa_Resumes.pdf"
                    download="Deepa_Resumes.pdf"
                    className="relative inline-block mt-4 text-base px-5 py-2 overflow-hidden b text-white transition-all duration-300 hover:text-black group"

                >
                    <span className="absolute inset-0 w-full h-0 rounded bg-white transition-all duration-300 ease-out group-hover:h-full group-hover:top-0 z-0"></span>
                    <span className="relative z-10">Download Resume</span>
                </a>





            </motion.div>
        </div>
    )
}
