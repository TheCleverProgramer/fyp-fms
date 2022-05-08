import { HiPlusSm } from "react-icons/hi";
const roadmap = () => {
  return (
    <>
      <div className="container">
        <div className="p-4">
          <h4>Roadmap</h4>
          <button className="btn btn-primary">
            <HiPlusSm value={{ color: "white" }} size="1.6rem" />
            Create new activity
          </button>
        </div>
      </div>
    </>
  );
};

export default roadmap;
