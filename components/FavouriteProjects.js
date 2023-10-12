import React from "react";
import Link from "next/link";

export default function FavouriteProjects() {
  return (

    <div className="bg-[#F1F1F1] -mt-45 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <header className="flex flex-col md:flex-row justify-between items-center pt-40 mx-10 md:my-20 lg:my-0">
          <h1 className="text-6xl lg:text-9xl max-w-lg font-italic text-gray-200 my-20 md:my-0 md:text-black dark:text-gray-600 text-center">
            Resume
          </h1>
          <br></br>
          
        </header>

        <div class="text">
        <br /> <br />
        </div>
        {/* Grid starts here */}
        <div className="grid md:grid-cols-3 gap-8 lg:-mt-8 pb-40">
          {/* Single card */}
          <a
            href="https://drive.google.com/file/d/1CUStLDV-wnQwAUUOSv070FqNrAiMsLEK/view"
            className="w-full block col-span-3 shadow-2xl"
          >
            <div className="relative overflow-hidden">
              <img
                src="/resumee."
                alt="portfolio"
                className="transform hover:scale-125 transition duration-2000 ease-out"
              />

              <h1 className="absolute bottom-10 left-10 text-gray-50 font-bold text-xl">
                01
              </h1>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
