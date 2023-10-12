import React from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { Circle } from "./Circle";
import { RainbowHighlight } from "./RainbowHighlight";
import { Underline } from "./Underline";
import { Box } from "./Box";
import { Bracket } from "./Bracket";

import userData from "@/constants/data";

export default function AboutMe() {
  const colors = ["#088f8f", "#84CC16", "#10B981", "#3B82F6", "#FF0000"];
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          About Ethan!
        </h1>
      </div>
      <RoughNotationGroup show={true}>
      <div className="bg-[#F1F1F1] -mt-10 dark:bg-gray-900">
        <div className="text-container max-w-6xl mx-auto pt-20">
          <p
            className="leading-loose text-2xl md:text-4xl font-semibold  mx-4"
            style={{ lineHeight: "3rem" }}
          >
            
            I'm a fourth-year <Bracket color={colors[0]}>Electrical and Computer Engineering</Bracket> student at The Ohio State University.

          </p>
        </div>
      </div>
      

      <div className="bg-[#F1F1F1] dark:bg-gray-900 px-4">
        <div className="pt-20 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-20 gap-x-20">
          {/* Social Buttons */}
          <div className="inline-flex flex-col">
            <div className="mt-8">
              <RainbowHighlight color={colors[2]}>
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                Job Opportunities
              </h1>
              </RainbowHighlight>
              <p className="text-lg text-gray-500 mt-2 dark:text-gray-300">
                I'm currently seeking a job. If you see me as a good fit at your company, please have a look at my {" "}
                <a
                  href="https://drive.google.com/file/d/1CUStLDV-wnQwAUUOSv070FqNrAiMsLEK/view"
                  target="__blank"
                  className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                >
                  resume
                </a>{" "}
                and see my experiences. <br /><br />
              </p>

              <RainbowHighlight color={colors[1]}>
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                About this webpage
              </h1>
              </RainbowHighlight>
              <p className="text-lg text-gray-500 mt-2 dark:text-gray-300">
                This website was built using mainly Next.js and TailwindCSS. I wanted to demonstrate my skills in a manner more efficiently than a resume, and show that I have some creativity and problem solving as well. When I was working on this website, my little sister walked by and commented on how plain it looked, and because I love my little sister, I took it upon myself to add a bit more color to it. Luckily, the folks at {" "}
                <a
                  href="https://roughnotation.com/"
                  target="__blank"
                  className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                >
                  RoughNotation
                </a>{" "}
                had just the splash of color this website needed. After all, if it's not good enough for a 9 year old it isn't good enough for anyone. As she would always say, "everything needs pizazz".
                <br /><br />
              </p>
            </div>
            {/* Social Links */}
            <RainbowHighlight color={colors[3]}>
            <h1 className="text-xl font-semibold text-gray-700 mt-1 dark:text-gray-200">
              Social Links
            </h1>
            </RainbowHighlight>
            <div className="mt-4 ml-4">
              <div className="flex flex-row justify-start items-center">
                <a
                  href={userData.socialLinks.linkedin}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <div className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    LinkedIn
                  </div>
                </a>
              </div>
              <div className="flex flex-row justify-start items-center">
                <a
                  href={userData.socialLinks.instagram}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <div className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-28 group-hover:translate-x-0 transition duration-300"></div>
                    Instagram
                  </div>
                </a>
              </div>
            </div>
          </div>
          {/* Text area */}
          <div className="col-span-1 md:col-span-2">
            <p className="text-xl text-gray-700 mb-4 dark:text-gray-300 "> I've been writing code since 9th grade, and have been a computer engineering student my entire time at The Ohio State University.</p>
            <p className="text-xl text-gray-700 mb-4 dark:text-gray-300 "> Everyone always gets hit with the question, "<Circle color={colors[3]}>why do you like coding </Circle>? why are you in this field? When I was five, my dad got me a gift: a Saturn V rocket model kit, which my mom thought was too advanced for me at the time. However, to their surprise, when they came home from work one day I had it completely <Underline color={colors[4]}>done</Underline>. I had so much fun putting that little model rocket together that I had sat down for five hours, doing nothing but building - putting little blocks together and watching a project come to <Box color={colors[1]}>life.</Box></p>
            <p className="text-xl text-gray-700 mb-4 dark:text-gray-300 "> I have been fortunate enough to discover that my passion in this life is creating and building. Even now, when I pull all nighters for a project, or am simply writing code for a lab, I experience those tiny twinges of excitment, reminscent of that day almost 17 years ago.</p>
            <p className="text-xl text-gray-700 mb-4 dark:text-gray-300 "> Every time I submit code, push to master, and report my discoveries to my team, I feel like a puzzle piece has fallen into <Bracket color={colors[0]}>place.</Bracket></p>
            

            <h1 className="bg-red-500 text-3xl rounded-md px-2 py-1 inline-block font-bold text-gray-50">
              Tech Stack
            </h1>
            <div className="flex flex-row flex-wrap mt-8">
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/java/java.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/angular/angular.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/vue/vue.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/firebase/firebase.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mysql/mysql.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongodb/mongodb.png"
                className="h-20 w-20 mx-4 my-4"
              />
            </div>
          </div>
        </div>
      </div>
      </RoughNotationGroup>

    </section>
  );
}
