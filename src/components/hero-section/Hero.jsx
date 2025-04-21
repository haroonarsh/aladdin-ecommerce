import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { useRouter } from 'next/navigation';

const scrollData = [
    {
        id:1,
        heading:"Get the new ",
        span:"beauty buzz.",
        pargh:"The latest, greatest & freshest from your fave brands",
        img:"./images/img-4.png"
    },
    {
        id:2,
        heading: "Get the latest ", 
        span:"mobiles.",
        pargh:"Get talest mobiles & accessories ever.",
        img:"./images/img-1.png"
    },
    {
        id:3,
        heading: "Buy the grossery ",
        span:"you love.",
        pargh:"Grossery delevery at your doorstep.",
        img:"./images/img-2.png"
    },
    {
        id:4,
        heading: "Shop your fave",
        span:"cloths brands.",
        pargh:"Click here to shop your fave cloths brands.",   
        img:"./images/img-5.png"
    }
];

function Hero() {
    const [activeIndex, setActiveIndex] = useState(0);
    const router = useRouter();

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % scrollData.length);
    };

    const handlePrev = () => {
        setActiveIndex((prev) => (prev - 1 + scrollData.length) % scrollData.length);
    };

    const currentItem = scrollData[activeIndex];

    return (
        <div className='flex justify-between items-center w-full mt-20 pl-5 pr-5 border-b-2 border-gray-300' style={{ height: "500px" }}>
            <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className='text-xl neutral6-bg neutral1 rounded-full p-3 cursor-pointer'
                onClick={handlePrev}
            >
                <FaAngleLeft />
            </motion.div>

            <div className='flex justify-between gap-9 items-center w-full ml-32 mr-32 overflow-hidden'>
                <AnimatePresence mode='wait'>
                    <motion.div
                        key={activeIndex}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 50 }}
                        transition={{ type: "spring", stiffness: 100, damping: 20 }}
                        className='w-1/2'
                    >
                        <h1 className='text-5xl font-bold'
                        >
                            {currentItem.heading}
                                <motion.span
                                    
                                    initial={{ y: 20 }}
                                    animate={{ y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className='block text-5xl font-bold neutral11'
                                >
                                {currentItem.span}
                                </motion.span>
                            
                        </h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className='mt-5 w-2/3 neutral9 mb-5'
                        >
                            {currentItem.pargh}
                        </motion.p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className='neutral6-bg neutral1 pt-2.5 pb-2.5 pl-5 pr-5 rounded-md cursor-pointer'
                            onClick={() => router.push('/products-page')}
                        >
                            Shop now
                        </motion.button>
                    </motion.div>

                    <motion.div
                        key={`image-${activeIndex}`}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ type: "spring", stiffness: 100, damping: 20 }}
                        className='w-2/3 h-96 flex items-end justify-end'
                    >
                        <motion.img
                            src={currentItem.img}
                            alt="hero"
                            className='w-full h-full'
                            style={{objectFit: "cover", objectPosition: "center"}}
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 100 }}
                        />
                    </motion.div>
                </AnimatePresence>
            </div>

            <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className='text-xl neutral6-bg neutral1 rounded-full p-3 cursor-pointer'
                onClick={handleNext}
            >
                <FaAngleRight />
            </motion.div>
        </div>
    );
}

export default Hero;