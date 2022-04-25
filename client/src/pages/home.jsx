import {Navbar, Taskbar} from '../components';

const home = () => {
  return (
    <>
        <Navbar/>
        <div className="container-fluid">
          <div className='row'>
            <div className='col-2 py-5' style={{backgroundColor: "#fafbfc"}}>
              <Taskbar/>
            </div>
          </div>
        </div>
    </>
  )
}

export default home