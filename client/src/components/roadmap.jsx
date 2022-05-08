import React, { useState } from "react";
import { ActivityModal } from "../components";
import { HiPlusSm } from "react-icons/hi";

const Roadmap = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="container">
        <div className="p-4">
          <h4>Roadmap</h4>
          <button className="btn btn-primary" onClick={() => setShow(true)}>
            <HiPlusSm value={{ color: "white" }} size="1.6rem" />
            Create new activity
          </button>
        </div>
      </div>
      <ActivityModal show={show} setShow={setShow} />
    </>
  );
};

export default Roadmap;
