import React from 'react';
import { Avatar, Image } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { IoPersonCircle } from "react-icons/io5";

const facultyList = ({ facultyId, facultyName, facultyImage }) => {

  const getFacultyById = async () => {
    const response = await fetch(`/api/faculty/getFacultyById/${facultyId}`);
    console.log(await response.json());
  };

  const clickHandler = () => {
    getFacultyById();
  }

  return (
    <>
      <div
        className="d-flex justify-content-around align-items-center my-2"
        style={{ width: "100%" }}
      >
        {/* <IoPersonCircle className="icons" size="2.5rem" /> */}
        <Avatar
      src={
        <Image
          src={facultyImage}
          style={{
            width: 32,
          }}
        />
      }
    />
        <div className="w-50">
          <a href="" className="word-break" onClick={clickHandler}>
            {facultyName}
          </a>
        </div>
      </div>
    </>
  );
};

export default facultyList;
