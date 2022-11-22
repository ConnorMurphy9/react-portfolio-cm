// import '../App.css';
// import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import { SiJavascript, SiHtml5, SiCss3, SiNodedotjs, SiExpress, SiMysql, SiSequelize, SiHandlebarsdotjs, SiMongodb, SiReact } from "react-icons/si";
import React from "react";
function Skills () {

    return (
        <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          {/* <ChipIcon className="w-10 inline-block mb-4" /> */}
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Below are the languages I have learned:
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {/* {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))} */}
          <div class="flex flex-row justify-center">
            <SiMysql className="mx-auto inline-block w-10 mb-4 techicons" />
				    <SiSequelize className="mx-auto inline-block w-10 mb-4 techicons" />
				    <SiHandlebarsdotjs className="mx-auto inline-block w-10 mb-4 techicons" />
				    <SiMongodb className="mx-auto inline-block w-10 mb-4 techicons" />
				    <SiReact className="mx-auto inline-block w-10 mb-4 techicons" />
			    </div>
			    <div class="flex flex-row justify-center">
            <SiHtml5 className="mx-auto inline-block w-10 mb-4 techicons" />
				    <SiCss3 className="mx-auto inline-block w-10 mb-4 techicons" />
				    <SiJavascript className="mx-auto inline-block w-10 mb-4 techicons" />
				    <SiNodedotjs className="mx-auto inline-block w-10 mb-4 techicons" />
				    <SiExpress className="mx-auto inline-block w-10 mb-4 techicons" />
			</div>

        </div>
      </div>
    </section>
    )
}


export default Skills