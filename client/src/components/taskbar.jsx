import {RiBarChartHorizontalFill} from 'react-icons/ri';
import {BiChalkboard, BiCodeAlt} from 'react-icons/bi';

const taskbar = () => {
  return (
    <>
      <div className="container-fluid d-flex flex-column justify-content-center align-items-start taskbar">
        <div calssName="project-info">
          <div className="d-flex justify-content-start align-items-center">
            <img className="rounded" style={{width:"28px", height:"28px"}}src="https://fypmanagementsystem.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10422?size=xxlarge" alt="project-icon" />
            <div className="px-3">
              <h6 className="m-0 p-0 fw-bold">FMS</h6>
              <p className="m-0 p-0">Software Project</p>
            </div>
          </div>
        </div>
        <div className="mt-4 ">
          <h6 className="fw-bold">PLANNING</h6>
          <div className="d-flex">
            <RiBarChartHorizontalFill size="1.2rem"/>
            <p className="px-3">Roadmap</p>
          </div>
          <div className="d-flex">
            <BiChalkboard size="1.2rem"/>
            <p className="px-3">Board</p>
          </div>
        </div>
        <div className="mt-3 ">
          <h6 className="fw-bold">Development</h6>
          <div className="d-flex">
            <BiCodeAlt size="1.2rem"/>
            <p className="px-3">Code</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default taskbar