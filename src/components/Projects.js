import React from "react";
import one from "../images/first.jpg";
import two from "../images/second.jpg";
import three from "../images/third.jpg";


const Projects = () => {
  return (
    <section id="project">
      <div>
        <h2 className="text-center capitalize text-2xl md:text-4xl font-mono font-medium">
          latest projects
        </h2>
        <div className="flex justify-center"><p className=" w-1/2 text-center flex justify-center lg:mx-80">
          In our portfolio, you can browse the latest products developed for our
          clients for different corporate purposes. Our qualified team of
          interface designers and software developers is always ready to create
          something unique for you.
        </p>
        </div>
      </div>
      <div className="w-full">
        <div className=" justify-center flex flex-col lg:flex-row lg:justify-evenly">
          <img src={one} alt="Project" className="ml-20 m-8 w-1/2  md:block md:m-1 lg:m-4" />
          <img src={two} alt="Project" className="ml-20 m-8 w-1/2 md:block md:m-1 lg:m-4" />
          <img src={three} alt="Project" className="ml-20 m-8 w-1/2 md:block  md:m-1 lg:m-4" />
        </div>
        {/* <div className="justify-center flex flex-col lg:flex-row lg:justify-evenly">
          <img src={four} alt="Project" className="ml-20 m-8 w-1/2 md:m-1  lg:m-4" />
          <img src={five} alt="Project" className="ml-20 m-8 w-1/2 md:m-1  lg:m-4" />
          <img src={sixth} alt="Project" className="ml-20 m-8 w-1/2 md:m-1  lg:m-4" />
        </div>
        <div className="justify-center flex flex-col lg:flex-row lg:justify-evenly">
          <img src={seven} alt="Project" className="ml-20 m-8 w-1/2 md:m-1  lg:m-4" />
          <img src={eight} alt="Project" className="ml-20 m-8 w-1/2 md:m-1  lg:m-4" />
          <img src={four} alt="Project" className="ml-20 m-8 w-1/2 md:m-1  lg:m-4" />
        </div> */}
      </div>
    </section>
  );
};

export default Projects;
