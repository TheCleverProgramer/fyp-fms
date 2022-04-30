import { Navbar, Taskbar, FacultyList } from "../components";

const home = () => {
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 py-5" style={{ backgroundColor: "#fafbfc" }}>
            <Taskbar />
          </div>
          <div className="col-8"></div>
          <div className="col-2" style={{ backgroundColor: "#fafbfc" }}>
            <FacultyList />
            <FacultyList />
            <FacultyList />
            <FacultyList />
            <FacultyList />
            <FacultyList />
            <FacultyList />
            <FacultyList />
            <FacultyList />
            <FacultyList />
            <FacultyList />
            <FacultyList />
            <FacultyList />
            <FacultyList />
          </div>
        </div>
      </div>
    </>
  );
};

export default home;
