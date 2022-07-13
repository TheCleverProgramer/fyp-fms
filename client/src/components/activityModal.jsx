import React, { useState, useEffect } from "react";
import { AutoComplete } from "antd";
import { HiPlusSm } from "react-icons/hi";
import { Modal, Button } from 'antd';
import { message } from 'antd';

const ActivityModal = () => {

  const [students, setStudents] = useState([]);
  const [activity, setActivity] = useState({activityName: '', fromDate: '', toDate: '', assignedTo: ''});
  const [isModalVisible, setIsModalVisible] = useState(false);


  const getStudents = async () => {
    let response = await fetch("/api/student/getStudents");
    response = await response.json();
    response.forEach((elem) => {
      elem["value"] = elem["name"];
    });
    setStudents(response);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const key = 'updatable';

  const openMessage = () => {
    message.loading({
      content: 'Loading...',
      key,
    });
    setTimeout(() => {
      message.success({
        content: 'Activity created!',
        key,
        duration: 2,
      });
    }, 1000);
  };


  const handleOk = async () => {
    let res = await fetch("/api/student/addActivity", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(activity)
    }); 
    if(res.status === 201){
      setIsModalVisible(false);
      openMessage();
     }else{
      message.error('Activity insertion failed!');
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setActivity({...activity, [name]:value});
    console.log('Event called by ' + name);
  };

  useEffect(() => {
    getStudents();
  }, []);
  return (
    <>
    <Button type="primary" onClick={showModal}>
      <HiPlusSm value={{ color: "white" }} size="1.3rem" />
      Create New Activity
    </Button>
    <Modal title="New Activity" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
    <form>
            <div className="mb-3">
              <label className="form-label">Activity Name</label>
              <input 
                type="text"
                name="activityName" 
                className="form-control"  
                value={activity.activityName} 
                onChange={handleInputs}
              />
            </div>
            <div className="mb-3">
              <div className="d-flex justify-content-around align-items-center">
                <div>
                  <label className="form-label">From: </label>
                  <input 
                    type="date" 
                    name="fromDate" 
                    className="form-control"  
                    value={activity.fromDate} 
                    onChange={handleInputs}
                  />
                </div>
                <div>
                  <label className="form-label">To: </label>
                  <input 
                    type="date" 
                    name="toDate" 
                    className="form-control" 
                    value={activity.toDate} 
                    onChange={handleInputs}
                  />
                </div>
              </div>
            </div>
            <div className="mb-3 d-flex flex-column">
              <label className="form-label">Assign to</label>
              <AutoComplete
                style={{
                  width: 200,
                }}
                options={students}
                placeholder="Enter email or name."
                name="assignedTo"
                filterOption={(inputValue, student) =>
                  student.name
                    .toUpperCase()
                    .indexOf(inputValue.toUpperCase()) !== -1 ||
                  student.email
                    .toUpperCase()
                    .indexOf(inputValue.toUpperCase()) !== -1
                }
                onChange={(event, value) => {setActivity({...activity, 'assignedTo': value._id})}}
              />
              <div className="form-text">
                Enter email or name of the student to assign activity.
              </div>
            </div>
          </form>
    </Modal>
  </>
  );
};

export default ActivityModal;


