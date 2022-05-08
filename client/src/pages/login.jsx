import { Navbar } from "../components";
import CoverImg from "../assets/umt-cover-banner.png";

const login = () => {
  return (
    <>
      <Navbar />
      {/* <div className='banner'></div> */}
      <img
        src={CoverImg}
        alt=""
        style={{
          position: "absolute",
          width: "100%",
          height: "70%",
          zIndex: "-1",
        }}
      />
      <div className="d-flex jsutify-content-space-between">
        <div classname="row">
          <div classname="col-6"></div>
          <div
            className="col-6 p-5 mt-5 mx-5 rounded"
            style={{ backgroundColor: "white", width: "100%", opacity: 0.95 }}
          >
            <form>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" for="exampleCheck1">
                  Keep me sign in
                </label>
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default login;
