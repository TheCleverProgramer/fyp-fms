import { Card } from 'antd';
import React from 'react';

const Projects = () => {
  return (
    <>
      <div className='m-5'>
        <h3>Advising projects</h3>
      </div>
      <div className="site-card-border-less-wrapper m-5 d-flex justify-content-around">
    <div className='shadow'>
    <Card
      title="FYP Management System"
      bordered={false}
      style={{
        width: 300,
      }}
    >
      <div className="d-flex flex-column">
        <div className='d-flex flex-column justify-content-around px-2' style={{textDecoration: "underline", color: "#4ec2f7", fontWeight: "light", display: "block"}}>
            <a href="#" className='mt-2'>Muhammad Ibrahim Ahmed</a>
            <a href="#" className='mt-2'>Syed Abdul Moiz</a>
            <a href="#" className='mt-2'>Farooq Parvez</a>
        </div>
      </div>
    </Card>
    </div>
    <div className='shadow'>
    <Card
      title="Online E-Commerce Store"
      bordered={false}
      style={{
        width: 300,
      }}
    >
      <div className="d-flex flex-column">
        <div className='d-flex flex-column justify-content-around px-2' style={{textDecoration: "underline", color: "#4ec2f7", fontWeight: "light", display: "block"}}>
            <a href="#" className='mt-2'>Ehtesham Ul Haq</a>
            <a href="#" className='mt-2'>Sadam Khan</a>
        </div>
      </div>
    </Card>
    </div>
    <div className='shadow'>
    <Card
      title="Rent a car"
      bordered={false}
      style={{
        width: 300,
      }}
    >
      <div className="d-flex flex-column">
        <div className='d-flex flex-column justify-content-around px-2' style={{textDecoration: "underline", color: "#4ec2f7", fontWeight: "light", display: "block"}}>
            <a href="#" className='mt-2'>Ahmad Azmat</a>
            <a href="#" className='mt-2'>Ali Ashar Awan</a>
            <a href="#" className='mt-2'>Khurram Shafqat</a>
        </div>
      </div>
    </Card>
    </div>
    
  </div>
    </>
  );
}

export default Projects;