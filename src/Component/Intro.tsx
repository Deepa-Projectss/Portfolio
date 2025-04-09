import { INTRO_CONTENT } from "../Constant/Index";
import introPic from "../assets/introPic.jpg"
import { motion } from "motion/react"

const container = (delay: any) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay }
    }
});

export default function Intro() {
    return (
        <div id="intro" className="border-b border-neutral-900 pb-4 lg:mt-20 lg:border-none">
            <div className="flex flex-wrap">
                {/* Text Content */}
                <div className="w-full lg:w-1/2 flex flex-col items-start text-left px-4 sm:px-6">
                    <motion.h1
                        variants={container(0)}
                        initial="hidden"
                        animate="visible"
                        className="text-3xl sm:text-4xl md:text-5xl font-thin tracking-tight mt-6 lg:mt-16 mb-1 lg:mb-5"
                    >
                        Deepa Thirumalaikumar
                    </motion.h1>

                    <motion.span
                        variants={container(0.5)}
                        initial="hidden"
                        animate="visible"
                        className="text-lg sm:text-xl md:text-2xl font-light tracking-tight bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent mb-4"
                    >
                        Front-End Developer
                    </motion.span>

                    <motion.p
                        variants={container(1)}
                        initial="hidden"
                        animate="visible"
                        className="text-base sm:text-base lg:text-base font-light leading-relaxed tracking-tight max-w-full"
                    >
                        {INTRO_CONTENT}
                    </motion.p>
                </div>

                {/* Image */}
                <div className="w-full lg:w-1/2 flex justify-center mt-8 lg:mt-0 lg:p-8">
                    <motion.img
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 1.2 }}
                        src={introPic}
                        alt=""
                        className="w-full max-w-sm object-cover rounded-lg"
                    />
                </div>
            </div>
        </div>
    )
}
