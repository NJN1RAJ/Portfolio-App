import thopda from "../assets/thopda.jpg";

import React from "react";

function Home() {
  return (
    <div className="flex justify-around my-32">
      <div className="w-5/12 ml-10 ">
        <div className="text-2xl font-semibold text-white ">About Me</div>
        <div className="mt-5 text-xl text-white">Hi I'm Niraj,</div>
        <p className="text-gray-400">
          I am a Computer Science undergraduate with a passion for technology
          and software development. My journey in the world of programming began
          when I wrote my first "Hello, World!" program, and I have been
          captivated by the endless possibilities of coding ever since.
        </p>
        <p className="text-gray-400">
          As a developer, I am proficient in a wide range of technologies,
          including JavaScript, React, HTML/CSS, Node.js, and MongoDB. I am also
          experienced in UI/UX design and version control with Git.
        </p>
        <p className="text-gray-400">
          My goal is to leverage my skills and knowledge to create innovative
          and user-friendly web applications. I am enthusiastic about learning
          new technologies and staying up-to-date with industry trends to ensure
          that I deliver high-quality solutions to every project I undertake.
        </p>
      </div>
      <div className="my-10 mr-6">
        <div
          className="bg-center"
          style={{
            width: "200px",
            height: "200px",
            backgroundSize: "cover",
            backgroundImage: `url(${thopda})`,
          }}
        ></div>
        <div className="my-2 font-semibold text-lg  text-white">Contact</div>
        <div className="text-gray-400">nirajc2023@gmail.com</div>
      </div>
    </div>
  );
}

export default Home;
