import CoverImg from '../assets/umt-cover-banner.png';
import { useRef, useState, useEffect} from 'react';
import {message} from 'antd';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const error = (error) => {
    message.error(error.response.data.message);
  };

  const key = 'updatable';
  const openMessage = () => {
    message.loading({ content: 'Loading...', key });
    setTimeout(() => {
      message.success({ content: 'Login Successful!', key, duration: 3 });
      navigate(`/home/${role}`);
    }, 1000);
  };

  const userRef = useRef();

  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [role, setRole] = useState('student');


  const login = () => {
    axios.post(`/api/${role}/login${role}/${email}/${pwd}`)
    .then((res) => {
      console.log(res);
      global.config.chat.userName = res.data.name;
      console.log("data ok!");
      openMessage();
    })
    .catch((err, res)=>{
      console.log(err);
      error(err);
    });
};

  const handleSubmit = async (e)=>{
    e.preventDefault();
    login();
    setEmail('');
    setPwd('');
  }

  useEffect(()=>{
    userRef.current.focus();
  }, [])

  useEffect(() =>{
  }, [email, pwd]);


  return (
    <>
        {/* <div className='banner'></div> */}
       <img src={CoverImg} alt=""  style={{position: "absolute", width: "100%", height:"70%", zIndex:"-1"}}/>
       <div className="d-flex justify-content-around align-items-center my-5">
            <div style={{background: "rgba(0, 1, 1, .4)"}}>
            <h1 className="shadow-lg GradientText m-0" style={{color: '#f6f6f6'}}>FYP MANAGEMENT SYSTEM</h1>
            </div>
            <div className="my-5 rounded" style={{background: "rgba(0, 1, 1, .4)", color: "white"}}>
            <form  className="p-5" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input 
                      type="email" 
                      ref={userRef} 
                      className="form-control InputStyle" 
                      id="exampleInputEmail1" 
                      aria-describedby="emailHelp"
                      autoComplete="off"
                      onChange={(e)=>{setEmail(e.target.value);}}
                      value={email}
                      required
                      />
                <div id="emailHelp" className="form-text text-light">We'll never share your email with anyone else.</div>
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input 
                      type="password"
                      className="form-control InputStyle"
                      id="exampleInputPassword1"
                      onChange={(e)=>{setPwd(e.target.value)}}
                      value={pwd}
                      required
                      />
              </div>
              <div className="mb-3">
                <select class="form-select" aria-label="Default select example" onClick={(e)=>{setRole(e.target.value);}}>
                  <option value="student">Student</option>
                  <option value="faculty">Faculty</option>
                  <option value="coordinator">Coordinator</option>
                </select>
              </div>
              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" for="exampleCheck1">Keep me sign in</label>
              </div>
              <button type="submit" className="btn btn-primary w-100">Submit</button>
            </form>
            </div>
       </div>
    </>
  );
}

export default Login;