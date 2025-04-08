"use client";

import AnimatedText from "../Home/AnimatedText";
import Layout from "../Home/Layout";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experienceData } from "../../constants";
import React from "react";

import { Link } from "react-router-dom";

const Experience = () => {
  return (
    <section id="experience">
      <div className="flex w-full justify-center items-center">
        <Layout className="pt-8 sm:pt-12 mb-0 px-4 sm:px-6 lg:px-8">
          <AnimatedText
            text='"Professional excellence painted in pixels. Discover my journey."'
            className="mb-8 sm:mb-14 !text-2xl sm:!text-4xl md:!text-6xl text-center"
          />
          <VerticalTimeline lineColor="">
            {experienceData.map((item, index) => (
              <React.Fragment key={index}>
                <VerticalTimelineElement
                  className="vertical-timeline-element--education bg-white rounded-lg shadow-lg p-3 sm:p-6 mb-4 sm:mb-8"
                  contentStyle={{
                    background: "#f3f4f6",
                    boxShadow:
                      "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.09)",
                    border: "2px solid rgba(0, 0, 0, 0.05)",
                    textAlign: "left",
                    padding: "0.75rem 1rem sm:1.3rem 2rem",
                  }}
                  date={item.date}
                  icon={
                    <img
                      src={item.icon}
                      className="mx-auto my-auto py-1 w-14 sm:w-20 h-auto"
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
                  <h3 className="vertical-timeline-element-title font-serif text-lg sm:text-2xl font-bold py-1 sm:py-4">
                    {item.companyName}
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle text-sm sm:text-lg font-semibold text-education font-montserrat py-0.5">
                    {item.title}
                  </h4>
                  <span className="font-montserrat text-primary font-semibold text-sm sm:text-base py-0.5 sm:py-2">
                    {item.location}
                  </span>
                  <ul className="text-grey/60 mt-2 sm:mt-4 p-1 list-disc space-y-1">
                    <li className="text-xs sm:text-sm leading-relaxed">{item.description.first}</li>
                    <li className="text-xs sm:text-sm leading-relaxed">{item.description.second}</li>
                  </ul>
                  <div className="flex flex-col sm:flex-row items-center self-start mt-2 sm:mt-4 gap-2 sm:gap-4">
                    <Link
                      to={item.certificateLink}
                      target="_blank"
                      className="flex items-center bg-dark/90 text-light p-1.5 px-3 sm:p-2 sm:px-4 rounded-lg text-xs sm:text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark"
                    >
                      Certificate
                    </Link>
                    <Link
                      to={item.companyLink}
                      target="_blank"
                      className="flex items-center bg-white text-dark p-1.5 px-3 sm:p-2 sm:px-4 rounded-lg text-xs sm:text-lg font-semibold hover:bg-dark hover:text-light border-2 border-solid border-dark hover:border-dark"
                    >
                      Contact
                    </Link>
                  </div>
                </VerticalTimelineElement>
              </React.Fragment>
            ))}
          </VerticalTimeline>
        </Layout>
      </div>
    </section>
  );
};

export default Experience;
