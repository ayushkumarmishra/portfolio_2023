"use client";

import { motion } from "framer-motion";
import AnimatedText from "../Home/AnimatedText";
import Layout from "../Home/Layout";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experienceData } from "../../constants";
import React from "react";
import { Button } from "react-scroll";
import { Link } from "react-router-dom";

const Experience = () => {
  return (
    <section id="experience">
      <div className="flex w-full justify-center items-center">
        <Layout className="pt-12 mb-0 ">
          <AnimatedText
            text='"Professional excellence painted in pixels. Discover my journey."'
            className="mb-14 "
          />
          <VerticalTimeline lineColor="">
            {experienceData.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--education bg-white rounded-lg shadow-lg p-6 mb-8"
                    contentStyle={{
                      background: "#f3f4f6",
                      boxShadow:
                        "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.09)",
                      border: "2px solid rgba(0, 0, 0, 0.05)",
                      textAlign: "left",
                      padding: "1.3rem 2rem",
                    }}
                    date={item.date}
                    icon={
                      <img
                        src={item.icon}
                        className="mx-auto my-auto py-1 w-20 h-auto"
                        alt="Icon"
                      />
                    }
                    iconStyle={{
                      background: "white",
                    }}
                    contentArrowStyle={{
                      borderRight: "0.4rem solid #9ca3af",
                    }}
                  >
                    <h3 className="vertical-timeline-element-title font-serif text-2xl font-bold py-4">
                      {item.companyName}
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle text-lg font-semibold text-education font-montserrat py-1">
                      {item.title}
                    </h4>
                    <span className="font-montserrat text-primary font-semibold py-2">
                      {item.location}
                    </span>
                    <ul className="text-grey/60 mt-4 p-1 list-disc">
                      <li className="block mb-2 ">{item.description.first}</li>
                      <li className="block">{item.description.second}</li>
                    </ul>
                    <div className=" flex items-center self-start mt-2">
                      <Link
                        to={item.certificateLink}
                        target="_blank"
                        className="flex items-center bg-dark/90 text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark"
                      >
                        Certificate
                      </Link>
                      <Link
                        to={item.companyLink}
                        target="_blank"
                        className="flex items-center bg-white text-dark p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-dark hover:text-light border-2 border-solid border-dark hover:border-dark mx-4"
                      >
                        Contact
                      </Link>
                    </div>
                  </VerticalTimelineElement>
                </React.Fragment>
              );
            })}
          </VerticalTimeline>
        </Layout>
      </div>
    </section>
  );
};

export default Experience;
