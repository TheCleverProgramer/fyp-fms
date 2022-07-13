import React from 'react';
import { Avatar, Image } from 'antd';
import {Link} from 'react-router-dom';

const facultyList = ({ facultyId, facultyName, facultyImage }) => {


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
          <Link to={`/facultyProfile/${facultyId}`} 
                className="word-break"
                key={facultyId}
                >
            {facultyName}
          </Link>
        </div>
      </div>
    </>
  );
};

export default facultyList;
