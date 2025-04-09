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
        <div id="intro" className="border-b border-neutral-900 pb-4 lg:border-none">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1
                            variants={container(0)}
                            initial="hidden"
                            animate="visible"
                            className="pb-16 text-5xl font-thin tracking-tight lg:mt-16 lg:text-5xl">
                            Deepa Thirumalaikumar
                        </motion.h1>
                        <motion.span 
                        variants={container(0.5)}
                        initial="hidden"
                        animate="visible"
                        className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl tracking-tight text-transparent">Front-End Developer</motion.span>
                        <motion.p 
                        variants={container(1)}
                        initial="hidden"
                        animate="visible"
                        className="my-2 max-w-xl py-6 font-light tracking-tighter">{INTRO_CONTENT}</motion.p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8" >
                    <div className="flex justify-center">
                        <motion.img 
                        initial={{x:100,opacity:0}}
                        animate={{x:0,opacity:1}}
                        transition={{duration:1,delay:1.2}}
                        src={introPic} alt="" className="w-full max-w-sm object-cover rounded-lg" />
                    </div>
                </div>
            </div>

        </div>
    )
}