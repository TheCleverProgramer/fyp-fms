import React, {useState, useEffect} from 'react';
import {  Skeleton, Space } from 'antd';
import {MailOutlined} from '@ant-design/icons';
import { useParams } from 'react-router-dom';
import {HiOutlineOfficeBuilding} from 'react-icons/hi';
import requestSentSvg from '../assets/sent_request.svg';
import {Button} from 'antd';
import axios from 'axios';
const FacultyProfile = () =>{

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

    const showSkeleton = () => {
        setTimeout(() => {
            setDisplaySkeleton('d-none');
            setDisplayBody('');
        }, 1500);
    };


    let params = useParams();

    const getFacultyById = () => {
        axios.get(`/api/faculty/getFacultyById/${params.facultyId}`)
        .then((res) => {
            console.log(res);
            const {name, email, office, specializations, image, graduation, masters, phd, designation} = res.data;
            setFaculty({name: name, email: email, office: office, specializations: specializations, image: image, graduation:graduation, masters:masters, phd:phd, designation: designation}); 
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
                            <a className="text-center"><MailOutlined style={{'fontSize': '130%', 'marginRight':'7px','marginBottom':'10px'}}/>{faculty.email}</a>
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
                    <div>
                        {faculty.specializations.map((elem, index)=>{
                            return <h5>{`${index+1}) ${elem}`}</h5>
                        })}
                    </div>
                </div>
                <hr />
                <div id="requestSection" className="d-flex align-items-center justify-content-center">
                <Button type='primary' className='rounded shadow' style={{'font-size': '1rem', 'margin-top': '80px'}}>Request for advisor</Button>
                </div>
            </div>
        </div>
    </>
);
}

export default FacultyProfile;