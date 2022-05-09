import React, { useState, useEffect } from "react";
import { AutoComplete } from "antd";

const ActivityModal = ({ show, setShow }) => {
  const [students, setStudents] = useState([]);

  const getStudents = async () => {
    let response = await fetch("/api/student/getStudents");
    response = await response.json();
    response.forEach((elem) => {
      elem["value"] = elem["name"];
    });
    setStudents(response);
  };

  useEffect(() => {
    getStudents();
  }, []);

  if (!show) {
    return null;
  }
  return (
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">New Activity</h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            onClick={() => setShow(false)}
          ></button>
        </div>
        <div className="modal-body">
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
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-bs-dismiss="modal"
            onClick={() => {
              setShow(false);
            }}
          >
            Close
          </button>
          <button type="submit" className="btn btn-primary">
            Save changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActivityModal;
