import React, { useState, useEffect } from "react";
import { Navbar, Taskbar, FacultyList, Roadmap, Chat, Board, Code} from "../components";
import { useParams } from 'react-router-dom';

import io from "socket.io-client";
const socket = io.connect("http://localhost:3080");

const HomeStudent = () => {
  socket.emit("join_room", global.config.chat.room);
  const params = useParams();
  const [faculty, setFaculty] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedItem, setSelectedItem] = useState(1);


  const getFaculty = async () => {
    const response = await fetch("/api/faculty/getFaculty");
    setFaculty(await response.json());
  };


  useEffect(() => {
    getFaculty();
  }, []);

  return (
    <>
      <div className="d-flex justify-content-between px-2">
          <div style={{height: 1000, backgroundColor: '#ffff'}}>
          <Taskbar selectedItem={selectedItem} setSelectedItem={setSelectedItem} role='student'/>
          </div>
        <div className="col-8 md-col-5" style={{ backgroundColor: "#fafbfc" }}>
          {selectedItem == 1? <Roadmap /> : selectedItem == 2? <Board /> : <Code />}
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
              placeholder="Search faculty"
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
              return <FacultyList facultyId={elem._id} facultyName={elem.name} facultyImage={elem.image}/>;
            })}
        </div>
      </div>
    </>
  );
};

export default HomeStudent;
