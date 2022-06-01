import React, { useState, useEffect } from "react";
import { Navbar, Taskbar, FacultyList, Roadmap } from "../components";

const Home = () => {
  const [faculty, setFaculty] = useState([]);
  const [search, setSearch] = useState("");

  const getFaculty = async () => {
    const response = await fetch("/api/faculty/getFaculty");
    setFaculty(await response.json());
  };

  useEffect(() => {
    getFaculty();
  }, []);

  return (
    <>
      <Navbar />
      <div className="d-flex justify-content-between px-2">
        <div
          className="col-2 md-col-3 py-5"
          style={{ backgroundColor: "#fafbfc" }}
        >
          <Taskbar />
        </div>
        <div className="col-7 md-col-5" style={{ backgroundColor: "#fafbfc" }}>
          <Roadmap />
        </div>
        <div
          className="col-2 md-col-3 py-5"
          style={{ backgroundColor: "#fafbfc" }}
        >
          <div className="d-flex justify-content-center mb-5 px-5">
            <input
              type="text"
              name="search"
              className="form-control rounded-pill"
              placeholder="Search"
              onChange={(event) => {
                setSearch(event.target.value);
              }}
            />
          </div>
          {faculty
            .filter((elem) => {
              if (search === "") {
                return elem;
              } else if (
                elem.name.toLowerCase().includes(search.toLowerCase())
              ) {
                return elem;
              }
            })
            .map((elem) => {
              return <FacultyList facultyId={elem._id} facultyName={elem.name} />;
            })}
        </div>
      </div>
    </>
  );
};

export default Home;
