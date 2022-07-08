import React, { useState } from "react";
import { ActivityModal } from "../components";
import { CalenderComponent } from "../components/calendar";
import heroSvg from "../assets/calendar.svg";

const Roadmap = () => {
  return (
    <>
      <div className="container">
        <div className="p-4 d-flex justify-content-between">
          <div>
            <h4>Roadmap</h4>
            <ActivityModal />
          </div>
          <div>
            <img src={heroSvg} alt="" style={{width:'10rem',height:'5rem'}}/>
            {/* <heroSvg/> */}
          </div>
        </div>
        <CalenderComponent />
      </div>
    </>
  );
};

export default Roadmap;
