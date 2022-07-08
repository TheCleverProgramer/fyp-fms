import React, { useState, useEffect } from "react";
import { AutoComplete } from "antd";
import { HiPlusSm } from "react-icons/hi";
import { Modal, Button } from 'antd';

const ActivityModal = () => {

  const [students, setStudents] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const getStudents = async () => {
    let response = await fetch("/api/student/getStudents");
    response = await response.json();
    response.forEach((elem) => {
      elem["value"] = elem["name"];
    });
    setStudents(response);
  };

  const addActivity = async () => {
    let response = await fetch("/api/student/addActivity");
    return response = await response.json();
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    addActivity();
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
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
              <input type="text" className="form-control" />
            </div>
            <div className="mb-3">
              <div className="d-flex justify-content-around align-items-center">
                <div>
                  <label className="form-label">From: </label>
                  <input type="date" name="fromDate" className="form-control" />
                </div>
                <div>
                  <label className="form-label">To: </label>
                  <input type="date" name="toDate" className="form-control" />
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
                filterOption={(inputValue, student) =>
                  student.name
                    .toUpperCase()
                    .indexOf(inputValue.toUpperCase()) !== -1 ||
                  student.email
                    .toUpperCase()
                    .indexOf(inputValue.toUpperCase()) !== -1
                }
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