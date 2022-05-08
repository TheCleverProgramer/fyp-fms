import { IoPersonCircle } from "react-icons/io5";

const facultyList = (props) => {
  return (
    <>
      <div
        className="d-flex justify-content-around align-items-center"
        style={{ width: "100%" }}
      >
        <a href="">
          <IoPersonCircle className="icons" size="2.5rem" />
        </a>
        <div className="w-50">
          <a href="" className="word-break">
            {props.facultyName}
          </a>
        </div>
      </div>
    </>
  );
};

export default facultyList;