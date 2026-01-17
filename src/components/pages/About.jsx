import React from "react";
import { Heading } from "../common/Heading";
import { about } from "../data/dummydata";

import React from 'react'

export const About = () => {
  return (
    <div>
        <section className="about">
            <div className="container flex">
                {about.map((val) => (
                    <div>
                        <div className="left" data-aos="fade-down-right">
                            <img src={val.cover} alt="" />
                        </div>
                        <div className="right" data-aos="fade-down-left">
                            <Heading title="About me"/>
                            <p>{val.desc}</p>
                            <p>{val.desc1}</p>
                            <button>Download CV</button>
                            <button className="primaryBtn">Download CV</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    </div>
  )
}
