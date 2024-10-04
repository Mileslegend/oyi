import React from "react";
import "./About.css";
import { about } from "../../assets";
import { keypoints } from "../../data";

const About = () => {
  return (
    <section id="about">
      <div className="overlay__div">
        <div className="container">
          <div className="about__image">
            <img src={about} alt="" />
          </div>
          <div className="section__header">
            <h3 className="title">About Us</h3>
            <h1 className="sub__heading">
              Building Your Vision, Crafting Your Future
            </h1>
            <p className="description">
              At Oyirwoth, we transform your vision for a sustainable future into reality with our expertise in Sustainable Energy, Clean Cooking, and Data Analytics. From innovative training programs to impactful community engagement, we are committed to creating solutions that inspire and endure. Together, let's build a future powered by clean energy and enriched by knowledge!
            </p>
            <div className="keypoints__container">
                {keypoints.map((keypoint, index) => (
                    <div className="flex keypoint" key={index}>
                        <div className="flex__center primary icon">
                            {keypoint.icon}
                        </div>
                        <h4 className="title">{keypoint.title}</h4>
                    </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
