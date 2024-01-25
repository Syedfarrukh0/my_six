'use client'

import { useRouter } from 'next/navigation';
import { ButtonSecondary } from "../custom_ui/button";
import { motion } from "framer-motion";

const BgSlider = (prop) => {
    const router = useRouter();
    return (

        <div className="bg_slider_wraper relative">

            <div className="overlay w-full h-screen absolute z-10 flex justify-center items-center">

                    <motion.div
                        initial={{ rotate: 180, scale: 0 }}
                        animate={{ rotate: 0, scale: 1 }}
                        exit={{ rotate: 180, scale: 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 20,
                            delay: 1,
                            ease: "linear",
                        }}
                        className="absolute flex flex-col items-center justify-center"
                    >
                        <h4 className="text-white text-4xl text-center mb-2
                        max-[360px]:text-3xl"
                        >
                            {prop.title}
                        </h4>
                        <h1 className="text-white text-7xl font-semibold text-center mb-8
                        max-[768px]:text-5xl max-[360px]:text-4xl"
                        >
                            {prop.sitename}
                        </h1>
                        <ButtonSecondary name={`Get Started`} onclick={() => router.push('pages/signup')} />
                    </motion.div>

                    <motion.img
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.6 }}
                        className="w-full h-full" src="../../images/overlay.png" alt="overlay.png"
                    />

            </div>

            <motion.div
                initial={{ opacity: 0, y: 700 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 700 }}
                transition={{ duration: 0.6 }}
                className='v_slider w-full h-screen m-0 relative overflow-hidden'>

                <div className="slide_track_wrap w-full h-screen flex">

                    {/* 1st track of slide */}
                    <div className="slide_track m-0 p-0">

                        {/* slides */}
                        <div className="slide">
                            <img src="../../images/1.jpg" alt="1.jpg" />
                        </div>
                        <div className="slide">
                            <img src="../../images/2.jpg" alt="2.jpg" />
                        </div>
                        <div className="slide">
                            <img src="../../images/3.jpg" alt="3.jpg" />
                        </div>
                        <div className="slide">
                            <img src="../../images/4.jpg" alt="4.jpg" />
                        </div>
                        <div className="slide">
                            <img src="../../images/5.jpg" alt="5.jpg" />
                        </div>
                        <div className="slide">
                            <img src="../../images/6.jpg" alt="6.jpg" />
                        </div>
                        <div className="slide">
                            <img src="../../images/7.jpg" alt="7.jpg" />
                        </div>
                        <div className="slide">
                            <img src="../../images/8.jpg" alt="8.jpg" />
                        </div>
                        <div className="slide">
                            <img src="../../images/9.jpg" alt="9.jpg" />
                        </div>


                        {/* same slides of 1st */}
                        <div className="slide">
                            <img src="../../images/1.jpg" alt="1.jpg" />
                        </div>
                        <div className="slide">
                            <img src="../../images/2.jpg" alt="2.jpg" />
                        </div>
                        <div className="slide">
                            <img src="../../images/3.jpg" alt="3.jpg" />
                        </div>
                        <div className="slide">
                            <img src="../../images/4.jpg" alt="4.jpg" />
                        </div>
                        <div className="slide">
                            <img src="../../images/5.jpg" alt="5.jpg" />
                        </div>
                        <div className="slide">
                            <img src="../../images/6.jpg" alt="6.jpg" />
                        </div>
                        <div className="slide">
                            <img src="../../images/7.jpg" alt="7.jpg" />
                        </div>
                        <div className="slide">
                            <img src="../../images/8.jpg" alt="8.jpg" />
                        </div>
                        <div className="slide">
                            <img src="../../images/9.jpg" alt="9.jpg" />
                        </div>

                    </div>

                    {/* 2nd track of slide */}
                    <div className="slide_track m-0 p-0">

                        {/* slides */}
                        <div className="slide">
                            <img src="../../images/10.jpg" alt="10.jpg" />
                        </div>
                        <div className="slide">
                            <img src="../../images/11.jpg" alt="11.jpg" />
                        </div>
                        <div className="slide">
                            <img src="../../images/12.jpg" alt="12.jpg" />
                        </div>
                        <div className="slide">
                            <img src="../../images/13.jpg" alt="13.jpg" />
                        </div>
                        <div className="slide">
                            <img src="../../images/14.jpg" alt="14.jpg" />
                        </div>
                        <div className="slide">
                            <img src="../../images/15.jpg" alt="15.jpg" />
                        </div>
                        <div className="slide">
                            <img src="../../images/16.jpg" alt="16.jpg" />
                        </div>
                        <div className="slide">
                            <img src="../../images/17.jpg" alt="17.jpg" />
                        </div>
                        <div className="slide">
                            <img src="../../images/18.jpg" alt="18.jpg" />
                        </div>


                        {/* slides */}
                        <div className="slide">
                            <img src="../../images/10.jpg" alt="10.jpg" />
                        </div>
                        <div className="slide">
                            <img src="../../images/11.jpg" alt="11.jpg" />
                        </div>
                        <div className="slide">
                            <img src="../../images/12.jpg" alt="12.jpg" />
                        </div>
                        <div className="slide">
                            <img src="../../images/13.jpg" alt="13.jpg" />
                        </div>
                        <div className="slide">
                            <img src="../../images/14.jpg" alt="14.jpg" />
                        </div>
                        <div className="slide">
                            <img src="../../images/15.jpg" alt="15.jpg" />
                        </div>
                        <div className="slide">
                            <img src="../../images/16.jpg" alt="16.jpg" />
                        </div>
                        <div className="slide">
                            <img src="../../images/17.jpg" alt="17.jpg" />
                        </div>
                        <div className="slide">
                            <img src="../../images/18.jpg" alt="18.jpg" />
                        </div>

                    </div>

                    {/* 3rd track of slide */}
                    <div className="slide_track m-0 p-0">

                        {/* slides */}
                        <div className="slide">
                            <img src="../../images/19.jpg" alt="19.jpg" />
                        </div>
                        <div className="slide">
                            <img src="../../images/20.jpg" alt="20.jpg" />
                        </div>
                        <div className="slide">
                            <img src="../../images/21.jpg" alt="21.jpg" />
                        </div>
                        <div className="slide">
                            <img src="../../images/22.jpg" alt="22.jpg" />
                        </div>
                        <div className="slide">
                            <img src="../../images/23.jpg" alt="23.jpg" />
                        </div>
                        <div className="slide">
                            <img src="../../images/24.jpg" alt="24.jpg" />
                        </div>
                        <div className="slide">
                            <img src="../../images/25.jpg" alt="25.jpg" />
                        </div>
                        <div className="slide">
                            <img src="../../images/26.jpg" alt="26.jpg" />
                        </div>
                        <div className="slide">
                            <img src="../../images/27.jpg" alt="27.jpg" />
                        </div>


                        {/* same slides */}
                        <div className="slide">
                            <img src="../../images/19.jpg" alt="19.jpg" />
                        </div>
                        <div className="slide">
                            <img src="../../images/20.jpg" alt="20.jpg" />
                        </div>
                        <div className="slide">
                            <img src="../../images/21.jpg" alt="21.jpg" />
                        </div>
                        <div className="slide">
                            <img src="../../images/22.jpg" alt="22.jpg" />
                        </div>
                        <div className="slide">
                            <img src="../../images/23.jpg" alt="23.jpg" />
                        </div>
                        <div className="slide">
                            <img src="../../images/24.jpg" alt="24.jpg" />
                        </div>
                        <div className="slide">
                            <img src="../../images/25.jpg" alt="25.jpg" />
                        </div>
                        <div className="slide">
                            <img src="../../images/26.jpg" alt="26.jpg" />
                        </div>
                        <div className="slide">
                            <img src="../../images/27.jpg" alt="27.jpg" />
                        </div>

                    </div>

                    {/* 4th track of slide */}
                    <div className="slide_track m-0 p-0">

                        {/* slides */}
                        <div className="slide">
                            <img src="../../images/28.jpg" alt="28.jpg" />
                        </div>
                        <div className="slide">
                            <img src="../../images/29.jpg" alt="29.jpg" />
                        </div>
                        <div className="slide">
                            <img src="../../images/30.jpg" alt="30.jpg" />
                        </div>
                        <div className="slide">
                            <img src="../../images/31.jpg" alt="31.jpg" />
                        </div>
                        <div className="slide">
                            <img src="../../images/32.jpg" alt="32.jpg" />
                        </div>
                        <div className="slide">
                            <img src="../../images/33.jpg" alt="33.jpg" />
                        </div>
                        <div className="slide">
                            <img src="../../images/34.jpg" alt="34.jpg" />
                        </div>
                        <div className="slide">
                            <img src="../../images/35.jpg" alt="35.jpg" />
                        </div>
                        <div className="slide">
                            <img src="../../images/36.jpg" alt="36.jpg" />
                        </div>


                        {/* same slides */}
                        <div className="slide">
                            <img src="../../images/28.jpg" alt="28.jpg" />
                        </div>
                        <div className="slide">
                            <img src="../../images/29.jpg" alt="29.jpg" />
                        </div>
                        <div className="slide">
                            <img src="../../images/30.jpg" alt="30.jpg" />
                        </div>
                        <div className="slide">
                            <img src="../../images/31.jpg" alt="31.jpg" />
                        </div>
                        <div className="slide">
                            <img src="../../images/32.jpg" alt="32.jpg" />
                        </div>
                        <div className="slide">
                            <img src="../../images/33.jpg" alt="33.jpg" />
                        </div>
                        <div className="slide">
                            <img src="../../images/34.jpg" alt="34.jpg" />
                        </div>
                        <div className="slide">
                            <img src="../../images/35.jpg" alt="35.jpg" />
                        </div>
                        <div className="slide">
                            <img src="../../images/36.jpg" alt="36.jpg" />
                        </div>

                    </div>

                    {/* 5th track of slide */}
                    <div className="slide_track m-0 p-0">

                        {/* slides */}
                        <div className="slide">
                            <img src="../../images/37.jpg" alt="37.jpg" />
                        </div>
                        <div className="slide">
                            <img src="../../images/38.jpg" alt="38.jpg" />
                        </div>
                        <div className="slide">
                            <img src="../../images/39.jpg" alt="39.jpg" />
                        </div>
                        <div className="slide">
                            <img src="../../images/40.jpg" alt="40.jpg" />
                        </div>
                        <div className="slide">
                            <img src="../../images/41.jpg" alt="41.jpg" />
                        </div>
                        <div className="slide">
                            <img src="../../images/42.jpg" alt="42.jpg" />
                        </div>
                        <div className="slide">
                            <img src="../../images/43.jpg" alt="43.jpg" />
                        </div>
                        <div className="slide">
                            <img src="../../images/44.jpg" alt="44.jpg" />
                        </div>
                        <div className="slide">
                            <img src="../../images/45.jpg" alt="45.jpg" />
                        </div>


                        {/* same slides */}
                        <div className="slide">
                            <img src="../../images/37.jpg" alt="37.jpg" />
                        </div>
                        <div className="slide">
                            <img src="../../images/38.jpg" alt="38.jpg" />
                        </div>
                        <div className="slide">
                            <img src="../../images/39.jpg" alt="39.jpg" />
                        </div>
                        <div className="slide">
                            <img src="../../images/40.jpg" alt="40.jpg" />
                        </div>
                        <div className="slide">
                            <img src="../../images/41.jpg" alt="41.jpg" />
                        </div>
                        <div className="slide">
                            <img src="../../images/42.jpg" alt="42.jpg" />
                        </div>
                        <div className="slide">
                            <img src="../../images/43.jpg" alt="43.jpg" />
                        </div>
                        <div className="slide">
                            <img src="../../images/44.jpg" alt="44.jpg" />
                        </div>
                        <div className="slide">
                            <img src="../../images/45.jpg" alt="45.jpg" />
                        </div>

                    </div>

                    {/* 6th track of slide */}
                    <div className="slide_track m-0 p-0">

                        {/* slides */}
                        <div className="slide">
                            <img src="../../images/46.jpg" alt="46.jpg" />
                        </div>
                        <div className="slide">
                            <img src="../../images/47.jpg" alt="47.jpg" />
                        </div>
                        <div className="slide">
                            <img src="../../images/48.jpg" alt="48.jpg" />
                        </div>
                        <div className="slide">
                            <img src="../../images/49.jpg" alt="49.jpg" />
                        </div>
                        <div className="slide">
                            <img src="../../images/50.jpg" alt="50.jpg" />
                        </div>
                        <div className="slide">
                            <img src="../../images/51.jpg" alt="51.jpg" />
                        </div>
                        <div className="slide">
                            <img src="../../images/52.jpg" alt="52.jpg" />
                        </div>
                        <div className="slide">
                            <img src="../../images/53.jpg" alt="53.jpg" />
                        </div>
                        <div className="slide">
                            <img src="../../images/54.jpg" alt="54.jpg" />
                        </div>

                        {/* same slides */}
                        <div className="slide">
                            <img src="../../images/46.jpg" alt="46.jpg" />
                        </div>
                        <div className="slide">
                            <img src="../../images/47.jpg" alt="47.jpg" />
                        </div>
                        <div className="slide">
                            <img src="../../images/48.jpg" alt="48.jpg" />
                        </div>
                        <div className="slide">
                            <img src="../../images/49.jpg" alt="49.jpg" />
                        </div>
                        <div className="slide">
                            <img src="../../images/50.jpg" alt="50.jpg" />
                        </div>
                        <div className="slide">
                            <img src="../../images/51.jpg" alt="51.jpg" />
                        </div>
                        <div className="slide">
                            <img src="../../images/52.jpg" alt="52.jpg" />
                        </div>
                        <div className="slide">
                            <img src="../../images/53.jpg" alt="53.jpg" />
                        </div>
                        <div className="slide">
                            <img src="../../images/54.jpg" alt="54.jpg" />
                        </div>

                    </div>

                    {/* 7th track of slide */}
                    <div className="slide_track m-0 p-0">

                        {/* slides */}
                        <div className="slide">
                            <img src="../../images/55.jpg" alt="55.jpg" />
                        </div>
                        <div className="slide">
                            <img src="../../images/56.jpg" alt="56.jpg" />
                        </div>
                        <div className="slide">
                            <img src="../../images/57.jpg" alt="57.jpg" />
                        </div>
                        <div className="slide">
                            <img src="../../images/58.jpg" alt="58.jpg" />
                        </div>
                        <div className="slide">
                            <img src="../../images/59.jpg" alt="59.jpg" />
                        </div>
                        <div className="slide">
                            <img src="../../images/60.jpg" alt="60.jpg" />
                        </div>
                        <div className="slide">
                            <img src="../../images/61.jpg" alt="61.jpg" />
                        </div>
                        <div className="slide">
                            <img src="../../images/62.jpg" alt="62.jpg" />
                        </div>
                        <div className="slide">
                            <img src="../../images/63.jpg" alt="63.jpg" />
                        </div>


                        {/* same slides */}
                        <div className="slide">
                            <img src="../../images/55.jpg" alt="55.jpg" />
                        </div>
                        <div className="slide">
                            <img src="../../images/56.jpg" alt="56.jpg" />
                        </div>
                        <div className="slide">
                            <img src="../../images/57.jpg" alt="57.jpg" />
                        </div>
                        <div className="slide">
                            <img src="../../images/58.jpg" alt="58.jpg" />
                        </div>
                        <div className="slide">
                            <img src="../../images/59.jpg" alt="59.jpg" />
                        </div>
                        <div className="slide">
                            <img src="../../images/60.jpg" alt="60.jpg" />
                        </div>
                        <div className="slide">
                            <img src="../../images/61.jpg" alt="61.jpg" />
                        </div>
                        <div className="slide">
                            <img src="../../images/62.jpg" alt="62.jpg" />
                        </div>
                        <div className="slide">
                            <img src="../../images/63.jpg" alt="63.jpg" />
                        </div>

                    </div>

                </div>

            </motion.div>
        </div>
    );
}

export default BgSlider;