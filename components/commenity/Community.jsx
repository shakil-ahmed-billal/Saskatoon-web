import { Home } from "lucide-react"
import { Button } from "../ui/button"

const Community = () => {
    return (
        <div className="max-w-[1400px] mx-auto space-y-5 my-10">
            {/* community section part - 1 */}
            <div className=" curved-rectangle w-full flex-col-reverse md:flex-row flex md:gap-5 max-h-[640px]">
                <div className="bg-green md:max-w-[540px] text-white flex flex-col px-3  md:p-10 justify-center">
                    <p className="md:text-3xl pt-3 text-xl font-extrabold">Start Your Life in Saskatoon</p>
                    <p className="md:py-5 py-3 md:text-lg ">Saskatoon Open Door Society believes in helping newcomers get settled into their new life in Canada. We strive to help both immigrants and refugees feel welcome, get connected and develop a sense of belonging.</p>
                    <p>We provide assistance at every step of the settlement journey.</p>
                    <div className="mt-3 mb-2 md:mt-5 flex items-center justify-center md:justify-start">
                        <Button variant="outline" className="text-white bg-transparent"><Home></Home> Get Settled</Button>
                    </div>
                </div>
                <div className="">
                    <img className="w-full md:h-full min-h-[312px] object-cover" src="/image/image1.jpg" alt="" />
                </div>
            </div>
            {/* community section part - 2 */}
            <div className=" curved-rectangle w-full flex-col-reverse md:flex-row flex md:gap-5 max-h-[640px]">
                <div className="bg-light-blue md:max-w-[540px] text-white flex flex-col px-3  md:p-10 justify-center">
                    <p className="md:text-3xl pt-3 text-xl font-extrabold">Start Your Life in Saskatoon</p>
                    <p className="md:py-5 py-3 md:text-lg ">Saskatoon Open Door Society believes in helping newcomers get settled into their new life in Canada. We strive to help both immigrants and refugees feel welcome, get connected and develop a sense of belonging.</p>
                    <p>We provide assistance at every step of the settlement journey.</p>
                    <div className="mt-3 mb-2 md:mt-5 flex items-center justify-center md:justify-start">
                        <Button variant="outline" className="text-white bg-transparent"><Home></Home> Get Settled</Button>
                    </div>
                </div>
                <div className="">
                    <img className="w-full md:h-full min-h-[312px] object-cover" src="/image/image2.jpg" alt="" />
                </div>
            </div>
            {/* community section part - 3 */}
            <div className=" curved-rectangle w-full flex-col md:flex-row flex md:gap-5 max-h-[640px]">
                <div className="">
                    <img className="w-full md:h-full min-h-[312px] object-cover" src="/image/image3.jpg" alt="" />
                </div>
                <div className="bg-light-orange md:max-w-[540px] text-white flex flex-col px-3  md:p-10 justify-center">
                    <p className="md:text-3xl pt-3 text-xl font-extrabold">Start Your Life in Saskatoon</p>
                    <p className="md:py-5 py-3 md:text-lg ">Saskatoon Open Door Society believes in helping newcomers get settled into their new life in Canada. We strive to help both immigrants and refugees feel welcome, get connected and develop a sense of belonging.</p>
                    <p>We provide assistance at every step of the settlement journey.</p>
                    <div className="mt-3 mb-2 md:mt-5 flex items-center justify-center md:justify-start">
                        <Button variant="outline" className="text-white bg-transparent"><Home></Home> Get Settled</Button>
                    </div>
                </div>
            </div>
            {/* community section part - 4 */}
            <div className=" curved-rectangle w-full flex-col-reverse md:flex-row flex md:gap-5 max-h-[640px]">
                <div className="bg-light-blue md:max-w-[540px] text-white flex flex-col px-3  md:p-10 justify-center">
                    <p className="md:text-3xl pt-3 text-xl font-extrabold">Start Your Life in Saskatoon</p>
                    <p className="md:py-5 py-3 md:text-lg ">Saskatoon Open Door Society believes in helping newcomers get settled into their new life in Canada. We strive to help both immigrants and refugees feel welcome, get connected and develop a sense of belonging.</p>
                    <p>We provide assistance at every step of the settlement journey.</p>
                    <div className="mt-3 mb-2 md:mt-5 flex items-center justify-center md:justify-start">
                        <Button variant="outline" className="text-white bg-transparent"><Home></Home> Get Settled</Button>
                    </div>
                </div>
                <div className="">
                    <img className="w-full md:h-full min-h-[312px] object-cover" src="/image/image4.jpg" alt="" />
                </div>
            </div>
            {/* community section part - 5 */}
            <div className=" curved-rectangle w-full flex-col md:flex-row flex md:gap-5 max-h-[640px]">
                <div className="">
                    <img className="w-full md:h-full min-h-[312px] object-cover" src="/image/image5.jpg" alt="" />
                </div>
                <div className="bg-light-orange md:max-w-[540px] text-white flex flex-col px-3  md:p-10 justify-center">
                    <p className="md:text-3xl pt-3 text-xl font-extrabold">Start Your Life in Saskatoon</p>
                    <p className="md:py-5 py-3 md:text-lg ">Saskatoon Open Door Society believes in helping newcomers get settled into their new life in Canada. We strive to help both immigrants and refugees feel welcome, get connected and develop a sense of belonging.</p>
                    <p>We provide assistance at every step of the settlement journey.</p>
                    <div className="mt-3 mb-2 md:mt-5 flex items-center justify-center md:justify-start">
                        <Button variant="outline" className="text-white bg-transparent"><Home></Home> Get Settled</Button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col py-16 items-center justify-center">
                <p className="text-3xl text-center font-bold">Programs, Activities and Events Calendar</p>
                <Button className="mt-5">View Full Calender</Button>
            </div>
        </div>
    )
}

export default Community