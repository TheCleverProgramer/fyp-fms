import Logo from '../assets/umt-sphere-logo-preview.png';
import {CgMenuGridR} from 'react-icons/cg';
import {HiUserCircle} from 'react-icons/hi';
import {IoMdHelpCircle, IoMdSettings, IoMdNotifications} from 'react-icons/io';
const navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <div className="navbar-brand text-align-center" href="a">
              <div className="d-flex jusitfy-content-around align-items-center">
                <a href="a" className="rounded-circle"><CgMenuGridR size="1.5rem" color="#525252"/></a>
                <a href="a" className="rounded-pill" style={{color:"#140330"}}><img className= "logo-brand" src={Logo} alt="UMT-Logo" style={{marginLeft: "20px", marginRight: "5px"}} />FYP Management System</a>
              </div>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active rounded-pill" aria-current="page" href="a">
                  Your work
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link rounded-pill" href="a">
                  Projects
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link rounded-pill" href="a">
                  People
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control"
                style={{fontSize:"small"}}
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
            <a href="#" className="rounded-pill"><IoMdNotifications className="mx-2" size="1.5rem" color="#525252"/></a>
            <a href="" className="rounded-pill"><IoMdSettings  className="mx-2" size="1.5rem" color="#525252"/></a>
            <a href="" className="rounded-pill"><IoMdHelpCircle className="mx-2" size="1.5rem" color="#525252"/></a>
            <a href="" className="rounded-pill"><HiUserCircle className="mx-2" size="1.5rem" color="#525252"/></a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default navbar;
