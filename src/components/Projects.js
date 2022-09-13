import React from 'react'
import { Link } from 'react-router-dom'
import one from "../images/first.jpg"
import two from "../images/second.jpg"
import three from "../images/third.jpg"
import four from "../images/fourth.jpg"
import five from "../images/fifth.jpg"
import sixth from "../images/sixth.jpg"
import seven from "../images/seven.jpg"
import eight from "../images/eight.jpg"



const Projects = () => {
  return (
    <section id='project'>
      <div>
        <h2 className="text-center capitalize text-2xl md:text-4xl font-mono font-medium">
          latest projects
        </h2>
        <p className="text-center ">
          In our portfolio, you can browse the latest products developed for our
          clients for different corporate purposes. Our qualified team of
          interface designers and software developers is always ready to create
          something unique for you.
        </p>
      </div>
      <div className="">
        <div className="m-8 block md:flex justify-evenly">
          <img src={one} alt="Project" />
          <img src={two} alt="Project" />
          <img src={three} alt="Project" />
        </div>
        <div className="m-8 block md:flex justify-evenly">
          <img src={four} alt="Project" />
          <img src={five} alt="Project" />
          <img src={sixth} alt="Project" />
        </div>
        <div className="m-8 block md:flex justify-evenly">
          <img src={seven} alt="Project" />
          <img src={eight} alt="Project" />
          <img src={four} alt="Project" />
        </div>
      </div>
    </section>
  );
}

export default Projects
