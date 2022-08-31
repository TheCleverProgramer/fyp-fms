import React, {useState, useEffect} from 'react';
import {  Skeleton, Space, Modal, } from 'antd';
import {MailOutlined} from '@ant-design/icons';
import { useParams } from 'react-router-dom';
import {HiOutlineOfficeBuilding} from 'react-icons/hi';
import {BsChatSquareText} from 'react-icons/bs';
import requestSentSvg from '../assets/sent_request.svg';
import {Button, Popconfirm} from 'antd';
import {message} from 'antd';
import axios from 'axios';
import io from "socket.io-client";
import {Chat} from '../components';


const socket = io.connect("http://localhost:3080");
const FacultyProfile = () =>{

    const [isModalVisible, setIsModalVisible] = useState(false);
    const key = 'updatable';

    const openMessage = () => {
        message.loading({
          content: 'Loading...',
          key,
        });
        setTimeout(() => {
          message.success({
            content: 'Email sent successfuly!',
            key,
            duration: 2,
          });
        }, 1000);
      };

    const [showChat, setShowChat] = useState(false);

    const [displaySkeleton, setDisplaySkeleton] = useState('');
    const [displayBody, setDisplayBody] = useState('d-none');
    const [faculty, setFaculty] = useState({
        name: '', 
        email: '',
        office: '',
        specializations:[],
        image:'',
        graduation: '',
        masters: '',
        phd: '',
        designation: ''
    });
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
        openMessage();
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const showSkeleton = () => {
        setTimeout(() => {
            setDisplaySkeleton('d-none');
            setDisplayBody('');
        }, 1500);
    };

    const [visible, setVisible] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);

    const showPopconfirm = () => {
        setVisible(true);
    };

    const handlePopUpOk = () => {
        setConfirmLoading(true);
        setTimeout(() => {
        setVisible(false);
        setConfirmLoading(false);
        }, 2000);
    };

    const handlePopUpCancel = () => {
        console.log('Clicked cancel button');
        setVisible(false);
    };


    

    let params = useParams();

    const getFacultyById = () => {
        axios.get(`/api/faculty/getFacultyById/${params.facultyId}`)
        .then((res) => {
            console.log(res);
            const {name, email, office, specializations, image, graduation, masters, phd, designation} = res.data;
            setFaculty({name: name, email: email, office: office, specializations: specializations, image: image, graduation:graduation, masters:masters, phd:phd, designation: designation}); 
            socket.emit("join_room", faculty.name);
        });
    };
    useEffect(()=>{
        showSkeleton();
        getFacultyById();
    },[]);


return (
    <>  
        <div className='container bg-white'>
            <div id="skeletonBody" className={displaySkeleton}>
            <div className="d-flex flex-column justify-content-center align-item-center">
                <div className='w-50 mt-5'>
                    <Space>
                    <Skeleton.Button  active size="default" shape="round" block />
                    <Skeleton.Avatar active size="default" shape="circle" />
                    <Skeleton.Input active size="default" />
                    </Space>
                    <br />
                    <br />
                    <Skeleton.Button active size="default" shape="round" block />
                        <br />
                        <br />
                    <Skeleton.Input active size="default" block />
                        <br />
                        <br />
                    <Skeleton.Image  active />
                </div>
                <div className='mt-5'>
                    <Skeleton  active/>
                </div>
                <div className='mt-5'>
                    <Skeleton  active/>
                </div>
                <div className='mt-5'>
                    <Skeleton active/>
                </div>
            </div>
            </div>
            {/*After Skeleton actual body*/}
            <div className={displayBody}>
            <Modal title="Send Email" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} okText="Send">
            <form>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input 
                        type="email"
                        name="txtEmail" 
                        className="form-control"  
                        value={faculty.email} 
                        disabled
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Subject</label>
                    <input 
                        type="text"
                        name="txtSubject" 
                        className="form-control"  
                        value={subject}
                        onChange={(e)=>{setSubject(e.target.value)}}
                    />
                </div>
                <div class="form-floating mb-3">
                    <textarea class="form-control" placeholder="Type your message here" id="floatingTextarea2" style={{height: "100px"}} value={message} onChange={(e)=>{setMessage(e.target.value)}}></textarea>
                    <label for="floatingTextarea2">Message</label>
                </div>
            </form>
            </Modal>
                <div id="bioSection">
                    <div className='parent'>
                        <img className="image1 shadow" src="https://i0.wp.com/academiamag.com/wp-content/uploads/2020/03/UMT-3.jpg?fit=1920%2C1280&ssl=1" alt=""
                             style={{'width': '100%', 'height': '300px'}}
                        />
                        <img src={faculty.image}
                            className="rounded-circle image2 shadow" 
                            alt="profileImage" 
                            style={{'height':'250px', 'width': '250px'}}
                        />
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <h4 className="mt-3">{faculty.name}</h4>
                            <a className="rounded p-1" style={{'color': '#ffff', 'background-color':'#0298db'}}>{faculty.designation}</a>
                        </div>
                        <div id="emailStyle" className='d-flex flex-column'>
                            <a className="text-center" onClick={()=>{showModal()}}><MailOutlined style={{'fontSize': '130%', 'marginRight':'7px','marginBottom':'10px'}}/>{faculty.email}</a>
                            <a className="text-center"><HiOutlineOfficeBuilding size="1.5rem"/>{faculty.office}</a>
                        </div>
                    </div>
                </div>
                <hr />
                <div id="qualificationSection">
                    <h4>Qualification</h4>
                    <div className="d-flex justify-content-around">
                        <div><h5>Graduation: <h6>{faculty.graduation}</h6></h5></div>
                        <div><h5>Masters: <h6>{faculty.masters}</h6></h5></div>
                        <div><h5>PHD: <h6>{faculty.phd}</h6></h5></div>
                    </div>
                </div>
                <hr/>
                <div id="specializationSection">
                    <h4>Specialization/Intrusts</h4>
                    <div className='d-flex align-item-center justify-content-between px-5'>
                        <div>
                            {faculty.specializations.map((elem, index)=>{
                                return <h5>{`${index+1}) ${elem}`}</h5>
                            })}
                        </div>
                        <span>
                            <Button type="primary" className='rounded' onClick={()=>{
                                                                            setShowChat(true);
                                                                            }}>
                                <BsChatSquareText fontSize="200%" style={{paddingRight: "7px"}}/> 
                            Open Chat</Button>
                        </span>
                    </div>
                </div>
                <hr />
                <div id="requestSection" className="d-flex align-items-center justify-content-center">
                    <Popconfirm
                        title={`Are you sure to request ${faculty.name} to be your advisor?`}
                        visible={visible}
                        onConfirm={handlePopUpOk}
                        okButtonProps={{
                            loading: confirmLoading,
                        }}
                        onCancel={handlePopUpCancel}
                        >
                        <Button type='primary' className='rounded shadow' onClick={showPopconfirm} style={{'font-size': '1rem', 'margin-top': '80px'}}>Request for advisor</Button>
                    </Popconfirm>
                
                </div>
            </div>
        </div>
        <Chat socket={socket}username={global.config.chat.userName} room={"Dr. Syed Muhammad Irteza"} showChat={showChat} setShowChat={setShowChat}/>
    </>
);
}

export default FacultyProfile;