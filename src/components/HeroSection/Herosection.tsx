"use client";
import Authentication from "../Authentication/Authentication";

export default function HeroSection() {
  return (
    <div className="py-0 px-6 sm:px-10">
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <div className="pt-6 sm:pt-24 w-full sm:w-1/2">
          <h1 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-6">
            Join Ekathra COMMUNITY for Real-Time Help at Right time.
          </h1>
          <p className="text-base sm:text-lg mb-2">
            Every Human is a unique creature - Learn from them.
          </p>
          {/* <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6">
            <div className="flex-1 flex flex-col items-center justify-center p-4 rounded-lg shadow-md bg-light-blue-500">
              <FiMessageSquare className="h-10 w-10 rounded-lg p-1" />
              <span>Live Chat</span>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center p-4 rounded-lg shadow-md bg-light-blue-500">
              <FiPhoneCall className="h-10 w-10 rounded-lg p-1" />
              <span>Internet Call</span>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center p-4 rounded-lg shadow-md bg-light-blue-500">
              <FiVideo className="h-10 w-10 rounded-lg p-1" />
              <span>Video Call</span>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center p-4 rounded-lg shadow-md bg-light-blue-500">
              <InformationCircleIcon className="h-10 w-10 rounded-lg p-1" />
              <span>Anonymously</span>
            </div>
          </div> */}
        </div>
        <div className="w-full sm:w-1/2 mt-6 sm:mt-0">
          <Authentication />
        </div>
      </div>
    </div>
  );
}
