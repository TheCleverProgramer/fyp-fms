
// const taskbar = () => {
//   return (
//     <>
//       <div className="container-fluid d-flex flex-column justify-content-center align-items-start taskbar">
//         <div calssName="project-info">
//           <div className="d-flex justify-content-start align-items-center">
//             <img className="rounded" style={{width:"28px", height:"28px"}}src="https://fypmanagementsystem.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10422?size=xxlarge" alt="project-icon" />
//             <div className="px-3">
//               <h6 className="m-0 p-0 fw-bold">FMS</h6>
//               <p className="m-0 p-0">Software Project</p>
//             </div>
//           </div>
//         </div>
//         <div className="mt-4 ">
//           <h6 className="fw-bold">PLANNING</h6>
//           <div className="d-flex">
//             <RiBarChartHorizontalFill size="1.2rem"/>
//             <p className="px-3">Roadmap</p>
//           </div>
//           <div className="d-flex">
//             <BiChalkboard size="1.2rem"/>
//             <p className="px-3">Board</p>
//           </div>
//         </div>
//         <div className="mt-3 ">
//           <h6 className="fw-bold">Development</h6>
//           <div className="d-flex">
//             <BiCodeAlt size="1.2rem"/>
//             <p className="px-3">Code</p>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default taskbar

import {RiBarChartHorizontalFill} from 'react-icons/ri';
import {BiChalkboard, BiCodeAlt} from 'react-icons/bi';


import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import { Button, Menu } from 'antd';
import React, { useState } from 'react';

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem('Roadmap', '1', <RiBarChartHorizontalFill size="1.2rem"/>),
  getItem('Board', '2', <DesktopOutlined />),
  getItem('Code', '3', <BiCodeAlt size="1.2rem"/>)
];

const Taskbar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      className='my-5'
      style={{
        width: 256,
        height: '100%'
      }}
    >
      <div className="d-flex justify-content-start align-items-center py-3 px-2">
        <img className="rounded" style={{width:"28px", height:"28px"}}src="https://fypmanagementsystem.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10422?size=xxlarge" alt="project-icon" />
        <div className="px-3">
          <h6 className="m-0 p-0 fw-bold">FMS</h6>
          <p className="m-0 p-0">Software Project</p>
        </div>
      </div>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="light"
        inlineCollapsed={collapsed}
        items={items}
      />
    </div>
  );
};

export default Taskbar;