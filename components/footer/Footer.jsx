import addressData from "@/utils/addressData"
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react"
import BorderDefault from "../border/BorderDefault"
import AddressCard from "../card/AddressCard"

const Footer = () => {
  return (
    <div>
      {/* footer part - 1 */}
      <div className="w-11/12 md:max-w-[1400px] mx-auto my-10">
        <div className="grid md:grid-cols-6">
          <div className="col-span-2 space-y-5">
            <img className="h-[90px]" src="/logo.svg" alt="" />
            <img className="max-h-[40px]" src="/footerImg/footerImage1.svg" alt="" />
            <img className="h-[30px]" src="/footerImg/footerImage2.png" alt="" />
            <img className="h-[100px]" src="/footerImg/footerImage3.png" alt="" />
          </div>
          <div className="col-span-4 ">
            <div className="flex md:flex-row flex-col gap-5 md:mt-0 mt-5">
              {addressData?.map(data => <AddressCard key={data.id} item={data} />)}
            </div>
            <div className="flex items-center my-5 gap-3">
              <img className="h-[82px]" src="/footerImg/footerImage4.png" alt="" />
              <p>
                Si vous êtes un nouvel arrivant francophone à Saskatoon ou dans toute la Saskatchewan, et que vous cherchez des services en français, n'hésitez pas à contacter le d'accueil et d'inclusion francophone - SK </p>
            </div>
          </div>
        </div>
      </div>
      {/* footer part - 2 */}
      <div className="w-full border"></div>
      <div className="w-11/12 md:max-w-[1400px] mx-auto my-10 md:flex justify-between">
        <ul className="md:flex flex-wrap gap-3">
          <li>Home</li>
          <li>Careers</li>
          <li>Donate</li>
          <li>Volunteer</li>
          <li>Become a Member</li>
        </ul>
        <div className="">
          <p className="flex gap-2">Follows SODS in Social: <Facebook /> <Instagram /> <Linkedin /> <Youtube /></p>
        </div>
      </div>
      <div className="w-11/12 md:max-w-[1400px] mx-auto my-10 md:flex justify-between">
        <div className="md:flex gap-10 items-center">
          <p>© Saskatoon Open Door Society 2025 | All Rights Reserved</p>
          <ul className="md:flex gap-3">
            <li>Terms Use</li>
            <li>Privacy Statement</li>
            <li>Admin Login</li>
          </ul>
        </div>
      </div>
      <BorderDefault></BorderDefault>
    </div>
  )
}

export default Footer