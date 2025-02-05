"use client";

import Image from "next/image";
import FacebookLogo from "@/assets/svg/facebook-logo.svg"
import GoogleLogo from "@/assets/svg/google-logo.svg"
import Peepsitting from "@/assets/svg/peep-siting.svg"
import Samplechart from "@/assets/svg/sample-chart.svg"
import Profileone from "@/assets/svg/profile-1.svg"
import Profiletwo from "@/assets/svg/profile-2.svg"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Xarrow, {useXarrow, Xwrapper} from 'react-xarrows';

import * as motion from "motion/react-client"
import { useState, useRef } from "react"

export default function Register(){
    const [position, setPosition] = useState({ x: -150, y: -290 });
    const containerRef = useRef<HTMLDivElement>(null);
    const headerboxRef = useRef<HTMLDivElement>(null);
    const updateArrow = useXarrow();


    return (
        <>
        <div className="flex flex-row w-screen h-screen bg-white p-20 gap-8">
            
            {/*Register form*/}
            <div className="flex flex-col items-center self-center w-2/5 p-10">
                <h1 className="text-7xl font-bold mb-2 futura-bold">Join Now!</h1>
                    <p className=" text-black mb-6 p-10 pb-0 pt-2 text-center">
                        Sign up for <b>TaskFlow</b> and take your team’s productivity to the next level.
                    </p>

                    <form className="flex flex-col items-stretch gap-10 mt-6 w-full pr-20 pl-20">
                        <Input type="text" placeholder="Full Name" className="border-2 border-black p-3 h-[2.8rem] rounded-full"/>
                        <Input type="email" placeholder="Email Address" className="border-2 border-black p-3 h-[2.8rem] rounded-full"/>
                        <Input type="password" placeholder="Password" className="border-2 border-black p-3 h-[2.8rem] rounded-full"/>
                        <Input type="password" placeholder="Confirm Password" className="border-2 border-black p-3 h-[2.8rem] rounded-full"/>
                        <Button className="bg-black text-white py-3 h-[2.8rem] rounded-full w-full"><b>Sign up</b></Button>
                    </form>

                    {/* Divider */}
                    <div className="flex items-center my-4 w-full pr-20 pl-20">
                        <div className="flex-1 border-b-2 h-1 border-black"></div>
                        <p className="text-sm text-black px-2"><b>or continue with</b></p>
                        <div className="flex-1 border-b-2 h-1 border-black"></div>
                    </div>

                    <div className="flex w-full justify-center gap-4">
                            <Button className="facebook rounded-full w-16 h-16">
                                <Image src={GoogleLogo} alt="Facebook Icon" width={40} height={40} />
                            </Button>
                            <Button className="google rounded-full w-16 h-16">
                                <Image src={FacebookLogo} alt="Facebook Icon" width={60} height={60} />
                            </Button>
                        </div>

                    <p className="text-gray-600 mt-4 text-sm">
                        Already a member? <a href="#" className="text-black font-semibold">Log in here.</a>
                    </p>

            </div>

            <div ref={containerRef} className="flex flex-col items-center w-3/5 h-full flex-1 border-black border-4 rounded-[25]  bg-[#ADEBFF51] @container">
                    
                    <div ref={headerboxRef} className="flex flex-col w-3/5 h-auto items-center  text-center p-8">
                        <h1 className="lg:max-xl:text-1xl xl:max-2xl:text-2xl 2xl:text-3xl  "><b>Collaborate</b>, <b>Communicate</b>, and <b>Conquer</b> Tasks Together!</h1>
                        <h1 className="lg:max-xl:text-lg xl:max-2xl:text-xl 2xl:text-2xl font-bold"><i>- TaskFlow Developers</i></h1>
                    </div>
                    <div className="flex w-full h-full justify-end items-end">
                        <Image className="flex fixed bottom-[-3]" src={Peepsitting} alt="Peep Siting" width={300} height={300} />
                        <div id="person-hand" className="bg-white -z-10 h-1 w-1 fixed bottom-[168px] right-[289px] "></div>
                    </div>
                    <Xarrow
                        startAnchor="bottom"
                        showHead={false}
                        lineColor="#121212"
                        start={headerboxRef}
                        end="draggable-box-1"
                        endAnchor="top"
                        strokeWidth={3}
                    />
                    <motion.div 
                    className=" w-[316px] h-[202px] flex flex-col items-center p-6 bg-white rounded-[50px] shadow-[4px_8px_13px_rgba(0,0,0,0.25)] border-4 border-black"
                    drag 
                    dragConstraints={containerRef}
                    dragElastic={0.2}
                    onDrag={updateArrow}
                    style={{ x: position.x, y: position.y }}
                    id="draggable-box-1"
                    >
                        <Image className="absolute top-[-33%] right-[-18%]" src={Profileone} alt="" width={60} height={60}/>
                        <Image className="absolute bottom-[-33%] left-[-18%]" src={Profiletwo} alt="" width={60} height={60}/>
                        <span className="text-3xl font-semibold">Event Planning</span>
                        <span className="self-start pl-6">+ 10 Tasks</span>
                        <div className="flex flex-row justify-between w-full">
                            <div className="w-[79px] self-start m-4 h-[37px] flex flex-col items-center justify-center bg-[#adebff28] border-[3px] border-black  rounded-full">
                                <span className=" futura-bold">@Team</span>
                            </div>
                            <div className="flex pr-8">
                                <Image src={Samplechart} alt="Sample Chart" width={70} height={50}/>
                                
                            </div>
                            
                        </div>
                    </motion.div>
                    <Xarrow
                    strokeWidth={3}
                        showHead={false}
                        lineColor="#121212"
                        start="draggable-box-1"
                        startAnchor="bottom"
                        end="person-hand"
                        endAnchor="left"
                    />

                    <span className="futura-bold self-start pl-4">@ 2025 ProjectTaskFlow</span>
                </div>



        </div>
            
            </>
    )
}