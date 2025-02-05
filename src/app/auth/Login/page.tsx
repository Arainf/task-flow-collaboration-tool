"use client";
// SVG elements
import Image from "next/image";
import FacebookLogo from "@/assets/svg/facebook-logo.svg"
import GoogleLogo from "@/assets/svg/google-logo.svg"
import Peepsitting from "@/assets/svg/peep-siting.svg"
import Samplechart from "@/assets/svg/sample-chart.svg"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

import * as motion from "motion/react-client"
import { useState, useRef } from "react"


export default function Login() {
    const containerRef = useRef<HTMLDivElement>(null);

    
    
    return (
        <>
            <div className="flex flex-row w-screen h-screen p-20 gap-8">

                {/* LogIn Form */}
                <div className="flex flex-col w-2/5 p-10 gap-8">

                    <div className="flex flex-col items-center ">
                        <h1 className="font-bold text-[5rem] m-0 futura-bold">Welcome Back!</h1>
                        <p className="text-center w-3/4 m-[-1rem] "><b>`TaskFlow</b> has transformed the way our team works. It’s simple, intuitive, and incredibly powerful!’ – <i>Developer</i></p>
                    </div>

                    <form className="flex flex-col gap-y-6 my-10 px-20 items-center">
                        <div className="flex flex-col gap-y-4 w-full   ">
                            <Input type="text" placeholder="Username" className="h-[2.8rem] !placeholder:text-white rounded-full border-2 my-1 border-black" />
                            <Input type="password" placeholder="Password"  className="h-[2.8rem] !placeholder:text-white rounded-full border-2 my-1 border-black"/>
                        </div>
                         <a href="" className="self-end ">forgot password?</a>
                        <Button type="submit" className="rounded-full font-bold w-full h-[2.8rem]">Login</Button>
                    </form>

                    <div className="flex flex-col gap-8 m-[-1rem]">
                        <div className="flex flex-row gap-4 px-20 items-center">
                            <hr className="bg-black h-1 w-full rounded-full flex-1" />
                            <h1 className="font-bold text-sm">or continue with</h1>
                            <hr className="bg-black h-1 w-full rounded-full flex-1" />
                        </div>
                        <div className="flex w-full justify-center gap-4">
                            <Button className="facebook rounded-full w-16 h-16">
                                <Image src={GoogleLogo} alt="Facebook Icon" width={40} height={40} />
                            </Button>
                            <Button className="google rounded-full w-16 h-16">
                                <Image src={FacebookLogo} alt="Facebook Icon" width={60} height={60} />
                            </Button>
                        </div>
                    </div>
                    <div className="flex w-full justify-center">
                        <p className="font-thin">Not a member? <a href="/auth/Register" className="font-bold">Register now.</a></p>
                    </div>
                </div>
                
                <div ref={containerRef} className="flex flex-col items-center w-3/5 h-full flex-1 border-black border-4 rounded-[25]  bg-[#ADEBFF51] @container">
                    <div className="flex flex-col w-3/5 h-auto items-center  text-center p-8">
                        <h1 className="lg:max-xl:text-1xl xl:max-2xl:text-2xl 2xl:text-3xl  "><b>Collaborate</b>, <b>Communicate</b>, and <b>Conquer</b> Tasks Together!</h1>
                        <h1 className="lg:max-xl:text-lg xl:max-2xl:text-xl 2xl:text-2xl font-bold"><i>- TaskFlow Developers</i></h1>
                    </div>
                    <div className="flex w-full h-full justify-end items-end">
                        <Image className="flex fixed bottom-[-3]" src={Peepsitting} alt="Peep Siting" width={300} height={300} />
                    </div>
                    <motion.div 
                    className="w-[316px] h-[202px] flex flex-col items-center p-6 bg-white rounded-[50px] shadow-[4px_8px_13px_rgba(0,0,0,0.25)] border-4 border-black"
                    drag 
                    dragConstraints={containerRef}
                    dragElastic={0.2}
                    >
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
                </div>
                
            </div>
        </>
    )
}

