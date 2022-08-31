import React, { useState, useEffect } from "react";
import {Taskbar, FacultyList, Projects,  Chat, Requests, Code} from "../components";
import { useParams } from 'react-router-dom';

import io from "socket.io-client";
const socket = io.connect("http://localhost:3080");

const HomeFaculty = () => {
  socket.emit("join_room", "Dr. Syed Muhammad Irteza");
  // const params = useParams();
  const [faculty, setFaculty] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedItem, setSelectedItem] = useState(1);
  const [showChat, setShowChat] = useState(true);


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
            <Taskbar selectedItem={selectedItem} setSelectedItem={setSelectedItem} role='faculty'/>
          </div>
        <div className="col-8 md-col-5" style={{ backgroundColor: "#fafbfc" }}>
          {selectedItem == 1? <Projects /> : <Requests />}
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
      <Chat socket={socket} username={global.config.chat.room} room={"Dr. Syed Muhammad Irteza"} showChat={showChat} setShowChat={setShowChat}/>
    </>
  );
};

export default HomeFaculty;
