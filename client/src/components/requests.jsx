import { React, useState } from "react";


const Requests = () => {
    const [isShow, setIsShow] = useState(true);
    return (
        <>
            <div className={`m-5 d-${isShow?'block':'none'}`}>
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">FYP</th>
                    <th scope="col">Members</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Muhammad Ibrahim Ahmed</td>
                    <td>FMS (FYP Management System)</td>
                    <td>3</td>
                    <td><div className="d-flex justify-content-around">
                            <button className="btn btn-primary" onClick={()=>{setIsShow(false)}}>Approve</button>
                            <button className="btn btn-warning" onClick={()=>{setIsShow(false)}}>Delete</button>
                        </div>
                    </td>
                    </tr>
                </tbody>
            </table>
            </div>
            <div className={`m-5 d-${!isShow?'block':'none'}`}><h3>No request pending</h3></div>
        </>
    );
};

export default Requests;