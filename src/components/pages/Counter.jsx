import React from 'react'
import { project } from '../data/dummydata'
import CountUp from "react-countup"

export const Counter = () => {
  return (
    <div>
      <div className="hero container">
        <div className="container grid3 grid4">
          {project.map((item)=> (
            <div className="box" data-aos="aoom-in">
              <i>{item.icon}</i>
              <h1 className="heading">
                <CountUp enableScrollSpy duration={2} end={item.num}/>
              </h1>
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
