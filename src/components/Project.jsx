import React, { useEffect, useState } from "react";
import axios from "axios";

function Project() {
  const [project, setProject] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.github.com/users/njn1raj/repos")
      .then((res) => {
        setProject(res.data);
      })
      .catch((error) => {
        console.log("Something went wrong : ", error);
      });
  }, []);

  return (
    <div>
      <div className="mt-4 text-2xl text-center">Projects</div>
      <div className="text-gray-400 text-center">
        Here are the list of few projects I have worked on and currently working
        as well
      </div>
      <div>
        {project.map((item) => {
          return (
            <section className="py-8 px-8" key={item.id}>
              <h1 className="text-xl font-semibold">{item.name}</h1>
              <p className="text-gray-400">{item.description}</p>
              <a
                href={item.html_url}
                target="_blank"
                className="cursor-pointer underline underline-offset-2"
              >
                View on Github
              </a>
            </section>
          );
        })}
      </div>
    </div>
  );
}

export default Project;
