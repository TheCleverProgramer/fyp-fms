import { IoPersonCircle } from "react-icons/io5";

const facultyList = ({ facultyId, facultyName }) => {

  const getFacultyById = async () => {
    const response = await fetch("/api/faculty/getFacultyById/"+facultyId);
    return await response.json()
  };

  const clickHandler = () => {
    const faculty  = getFacultyById();
    console.log(faculty);
  }

  return (
    <>
      <div
        className="d-flex justify-content-around align-items-center"
        style={{ width: "100%" }}
      >
        <IoPersonCircle className="icons" size="2.5rem" />
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
