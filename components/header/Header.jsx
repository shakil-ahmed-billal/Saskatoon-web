"use client"

import { Lightbulb, Search } from "lucide-react"
import { Button } from "../ui/button"
import { Menu } from "lucide-react"
import { useEffect, useState } from "react"


const Header = () => {

    const [open , setOpen] = useState(false)
    console.log(open);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(min-width: 768px)"); 
        
        const handleResize = () => setOpen(mediaQuery.matches);

        handleResize();

        mediaQuery.addEventListener("change", handleResize);
        return () => mediaQuery.removeEventListener("change", handleResize);
    }, []);
    

    return (
        <div className="">
            {/* header part - 1 */}
            <div className=" bg-green py-5 flex  items-center justify-center  text-white">
                <p className=" md:max-w-[1400px] w-11/12 mx-auto flex items-center gap-3"><Lightbulb /> New to Saskatoon? Register with us as a new client by clicking here!</p>
            </div>
            {/* header part- 2 */}
            <div className="bg-light-color py-5">
                <div className="md:max-w-[1400px] w-11/12  mx-auto flex justify-between items-center">
                    <div className="flex">
                        <p> Powered by Google TranslateTranslate</p>
                    </div>
                    <ul className="md:flex hidden gap-5 items-center">
                        <li>Become a Member</li>
                        <li>Careers</li>
                        <li>Contact</li>
                        <li>Calender</li>
                    </ul>
                    <Search></Search>
                </div>
            </div>
            {/* header part - 3 */}
            <div className=" md:max-w-[1400px] w-11/12 mx-auto flex justify-between items-center my-5">
                <div className="">
                    <img className="h-[90px]" src="/logo.svg" alt="brand logo" />
                </div>
                <div className="md:flex hidden items-center gap-5">
                    <img className="w-16" src="/brand/brand1.webp" alt="" />
                    <img className="w-16" src="/brand/brand2.svg" alt="" />
                    <img className="w-16" src="/brand/brand3.webp" alt="" />
                    <img className="w-16" src="/brand/brand4.webp" alt="" />
                </div>
                <div className="md:flex hidden gap-5 items-center">
                    <Button>Volunteer</Button>
                    <Button>Donate</Button>
                    <Button>Become a Client</Button>
                </div>
                <Menu onClick={()=>setOpen(!open)} className="cursor-pointer md:hidden flex size-8" />
            </div>
            {/* header part -4 */}
            <div className="md:max-w-[1400px] w-full mx-auto md:text-center relative mt-20 ">
                <div className={`bg-[#f8f9f4] p-14 ${open? "flex-col" : "hidden"} curved-rectangle-header-1 w-full md:max-h-[150px]`}>
                    <ul className={`md:flex ${open? "flex-col" : "hidden"} md:flex-row gap-5 md:text-xl text-lg font-bold text-blue justify-center`}>
                        <li>About Us</li>
                        <li>Welcoming</li>
                        <li>Connecting</li>
                        <li>Belonging</li>
                        <li>Our Service</li>
                        <li>Event</li>
                    </ul>
                </div>
                <div className={`bg-[#016d9b] p-14 text-white md:text-4xl text-xl font-bold curved-rectangle-header-2 absolute md:top-24 ${open? "top-52" : ""} w-full max-h-[150px]`}>
                    <p className="text-center">Serving Newcomers Since 1980</p>
                </div>
            </div>
        </div>
    )
}

export default Header