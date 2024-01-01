import React from "react";
import Card from "./Card";

const skills = [
  {
    name: "Web Development",
    image: "https://cdn-icons-png.flaticon.com/128/7991/7991055.png",
  },
  {
    name: "JavaScript",
    image: "https://cdn-icons-png.flaticon.com/128/5968/5968292.png",
  },
  {
    name: "React",
    image:
      "https://t3.ftcdn.net/jpg/05/83/61/64/240_F_583616402_eeFIruMMzI8pFF4pkAmDjywdMWu9TQsT.jpg",
  },
  {
    name: "HTML/CSS",
    image:
      "https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-html-logo-0.png",
  },
  {
    name: "Responsive Design",
    image: "https://img.icons8.com/?size=160&id=p18SuBMiR84K&format=png",
  },
  {
    name: "Node.js",
    image:
      "https://t3.ftcdn.net/jpg/03/52/67/82/240_F_352678266_NFcwIwhhY76mkQItT4lCxyxcCTP3LgvY.jpg",
  },
  {
    name: "Express.js",
    image: "https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png",
  },
  {
    name: "MongoDB",
    image: "https://img.icons8.com/?size=160&id=iFoT5Ds3iK1c&format=png",
  },
  {
    name: "UI/UX Design",
    image: "https://img.icons8.com/?size=100&id=53451&format=png",
  },
  {
    name: "Version Control (Git)",
    image: "https://img.icons8.com/?size=96&id=AZOZNnY73haj&format=png",
  },
  {
    name: "Machine Learning",
    image: "https://img.icons8.com/?size=160&id=FgCCywmSSE6U&format=png",
  },
  {
    name: "Java",
    image: "https://staging.svgrepo.com/show/184143/java.svg",
  },
];

function Skills() {
  return (
    <div className="h-[33rem] w-full flex justify-center flex-wrap mt-5 px-4 py-4">
      {skills.map((item) => {
        return (
          <Card skillimg={item.image} skillname={item.name} key={item.name} />
        );
      })}
    </div>
  );
}

export default Skills;
