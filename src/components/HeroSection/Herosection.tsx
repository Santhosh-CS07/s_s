import {
  ArrowRightOnRectangleIcon,
  InformationCircleIcon,
  UserPlusIcon,
} from "@heroicons/react/24/outline";
import { FaRegSmile } from "react-icons/fa"; // Import the smile icon from react-icons
import Image from "next/image";
//import handHoldingImage from '../public/images/guillaume-de-germain-fgmLRBlUIpc-unsplash.jpg'; // Ensure you have an appropriate image in the public folder
import { FiMessageSquare, FiPhoneCall, FiVideo } from "react-icons/fi"; // Import chat, phone call, and video call icons
import Homenavbar from "../HomeNavBar/Homenavbar";
import Login from "../Login/Login";
import Authentication from "../Authentication/Authentication";

export default function HeroSection() {
  return (
    <div className="py-6">
      {/* <Homenavbar /> */}
      <div className="flex justify-evenly">
        <div className="flex justify-items-center pt-12 sm:pt-24 md:w-1/2 text-left">
          <div className="">
            <h1 className="text-4xl md:text-3xl font-bold text-blue-900 mb-6">
              Join Ekathra COMMUNITY for Real-Time Help at Right time.
            </h1>
            <p className="text-lg md:text-xl  mb-2 overflow-wrap">
              Every Human is a unique creature - Learn from them.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex flex-col items-center justify-center p-4 rounded-lg shadow-md bg-light-blue-500">
                <FiMessageSquare className="h-10 w-10  rounded-lg p-1" />
                <span >Live Chat</span>
              </div>
              <div className="flex flex-col items-center justify-center p-4 rounded-lg shadow-md bg-light-blue-500">
                <FiPhoneCall className="h-10 w-10  rounded-lg p-1" />
                <span >Internet Call</span>
              </div>
              <div className="flex flex-col items-center justify-center p-4 rounded-lg shadow-md bg-light-blue-500">
                <FiVideo className="h-10 w-10  rounded-lg p-1" />
                <span >Video Call</span>
              </div>
              <div className="flex flex-col items-center justify-center p-4 rounded-lg shadow-md bg-light-blue-500">
                <InformationCircleIcon className="h-10 w-10  rounded-lg p-1" />
                <span >Anonymously</span>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <Authentication />
        </div>
      </div>
    </div>
  );
}
