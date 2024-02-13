
import dekstop_bg from "/images/bg-desktop.svg"
import mobile_bg from "/images/bg-mobile.svg"
import logo from "/images/logo.svg"
import illustration from "/images/illustration-mockups.svg"
import { CiFacebook } from "react-icons/ci";
import { FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa";

export default function App(){
  return(
    <>
      <div className="text-white p-8 font-Poppins md:p-5 flex flex-col md:flex-row justify-center bg-[url('/images/bg-mobile.svg')] bg-Violet min-h-screen md:bg-[url('/images/bg-desktop.svg')] bg-no-repeat bg-contain">
          <div className="image">
            <div className="logo md:p-5">
              <img src={logo} className="h-10 2xl:h-[60px]" alt="" />
            </div>
            <div className="mobile md:p-5">
              <img src={illustration} className="mt-[50px] md:h-60 md:w-full md:mt-0 2xl:h-[500px]" alt="" />
            </div>
          </div>
          <div className="">
            <div className="text md:w-[350px] md:mt-[100px] 2xl:w-[800px] 2xl:mt-[150px]">
              <h1 className="text-[1.8em] mt-10 mb-5  text-center font-semibold md:text-[1.1em] 2xl:text-[3em] 2xl:text-left 2xl:pl-8 2xl:font-medium md:text-left md:px-10">Build The Community <br /> Your Fans Will Love</h1>
              <p className="text-[1.2em] text-center md:text-[1em] 2xl:text-[1.6em] 2xl:px-10 2xl:text-left 2xl:font-[300] md:text-left md:pl-10">Huddle re-imagines the way we build communities. You have a voice, but so does your audience. 
                  Create connections with your users as you engage in genuine discussion. 
              </p>
              <div className="register text-center p-5 2xl:text-left 2xl:mt-5 2xl:px-10">
                  <a className="bg-white px-16 rounded-[30px] py-3 text-Violet 2xl:py-4 2xl:text-[1.2em] hover:bg-Soft_Magenta cursor-pointer hover:text-white">Register</a>
              </div>
            </div>
            <div className="icons flex items-center justify-center mt-10 md:flex md:justify-end 2xl:mt-40 2xl:mb-10">
                <FaFacebookF className="m-2 border-[1px] rounded-full p-2 h-10 w-10 md:h-8 md:w-8 2xl:h-10 2xl:w-10  hover:border-Soft_Magenta cursor-pointer hover:text-Soft_Magenta"/>
                <FaTwitter className="m-2 border-[1px] rounded-full p-2 h-10 w-10 md:h-8 md:w-8  2xl:h-10 2xl:w-10 hover:border-Soft_Magenta cursor-pointer hover:text-Soft_Magenta" />
                <FaInstagram className="m-2 border-[1px] rounded-full p-2 h-10 w-10 md:h-8 md:w-8  2xl:h-10 2xl:w-10 hover:border-Soft_Magenta cursor-pointer hover:text-Soft_Magenta" />
            </div>
          </div>
      </div>
    </>
  )
}
