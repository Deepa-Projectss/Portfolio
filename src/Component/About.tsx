import aboutImg from '../assets/pic 8.jpg';
import { ABOUT_TEXT } from '../Constant/Index';
import { motion } from "framer-motion";  // ✅ Correct Import

export default function About() {
    return (
        <div id="about" className="border-b border-neutral-900 pb-4">
            <h1 className="my-20 text-center text-4xl">About
                <span className="text-neutral-500"> Me</span>
            </h1>
            <div className="flex flex-wrap">
                {/* Image Section */}
                <motion.div 
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="w-full lg:w-1/2 lg:p-8"
                >
                    <div className="flex items-center justify-center">
                        <img src={aboutImg} className='rounded-2xl' alt="About Me" style={{ maxWidth: '70%' }} />
                    </div>
                </motion.div>

                {/* Text & Personal Details Section */}
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }} 
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 0.5 }}
                    className='w-full lg:w-1/2 space-y-6'
                >

                    {/* Description */}
                    <p className="text-gray-300">{ABOUT_TEXT}</p>

                    {/* Info Grid */}
                    <div className="border border-gray-700 rounded-lg p-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg bg-[#1a1a40]">
                        <div>
                            <p style={{marginBottom:"7%"}}><span className="font-semibold text-blue-400">Name:</span> Deepa Thirumalaikumar</p>
                            <p style={{marginBottom:"7%"}}><span className="font-semibold text-blue-400">Email:</span> deept2107@gmail.com</p>
                            <p style={{marginBottom:"7%"}}><span className="font-semibold text-blue-400">Phone:</span> 6369537260</p>
                        </div>
                        <div>
                            <p style={{marginBottom:"7%"}}><span className="font-semibold text-blue-400">Address:</span> Chennai</p>
                            <p  style={{marginBottom:"7%"}}><span className="font-semibold text-blue-400">Degree:</span> Master</p>
                            <p style={{marginBottom:"7%"}}><span className="font-semibold text-blue-400">Course:</span> Front-end Developer</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
