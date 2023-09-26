'use client'
import GoogleIcon from '@mui/icons-material/Google';
import FilterDramaIcon from '@mui/icons-material/FilterDrama';
import JavascriptIcon from '@mui/icons-material/Javascript';
import { SiFirebase } from "react-icons/si";
import { IoLogoVercel } from 'react-icons/io5'
import { GrReactjs } from 'react-icons/gr'
import { DiGoogleAnalytics } from 'react-icons/di'
import {SiNextdotjs} from 'react-icons/si'
export function SectionCardBlack() {



    return (
        <>
            <section id='card inicio black' className=" flex flex-col justify-center">
                <div className='mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56'>

                    <div className='mx-auto max-w-7xl px-6 lg:px-8'>

                        <div className='mx-auto max-w-2xl lg:max-w-none'>
                            <div className='flex items-center gap-x-8'>
                        <p className='text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left' > We work with incredible technology </p>
                        <h1 className='h-px flex-auto bg-neutral-800'></h1>
                    </div>

                    <div className='flex flex-wrap justify-center gap-20 mt-10'>
                        <div className=' flex flex-col text-white font-bold text-center'>
                            <GoogleIcon sx={{ color: "#fff", fontSize: "3.75rem", sm:""}} />
                            <h1>Google</h1>
                        </div>
                        <div className=' flex flex-col text-white font-bold text-center '>
                            <FilterDramaIcon sx={{ color: "#fff", fontSize: "3.75rem" }} />
                            <h1>Cloud</h1>
                        </div>
                        <div className=' flex flex-col text-white font-bold text-center'>
                            <JavascriptIcon sx={{ color: "#fff", fontSize: "3.75rem" }} />
                            <h1>JavaScript</h1>
                        </div>
                        <div className=' flex flex-col text-white font-bold text-center'>
                            <SiFirebase className="text-white text-6xl " />
                            <h1>Firebase</h1>
                        </div>
                        <div className=' flex flex-col text-white font-bold text-center'>
                            <IoLogoVercel className="text-white text-6xl" />
                            <h1>Vercel</h1>
                        </div>
                        <div className=' flex flex-col text-white font-bold text-center'>
                            <DiGoogleAnalytics className="text-white text-6xl " />
                            <h1>Analytics</h1>
                        </div>
                        <div className=' flex flex-col text-white font-bold text-center'>
                            <SiNextdotjs className="text-white text-6xl" />
                            <h1>Next.js</h1>
                            </div>
                        <div className=' flex flex-col text-white font-bold text-center'>
                            <GrReactjs className="text-white text-6xl" />
                            <h1>React</h1>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}