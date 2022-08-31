import {RiBarChartHorizontalFill} from 'react-icons/ri';
import {BiChalkboard, BiCodeAlt, BiMessageAdd} from 'react-icons/bi';
import {AiOutlineProject} from 'react-icons/ai';


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



const Taskbar = ({selectedItem, setSelectedItem, role}) => {
  const [collapsed, setCollapsed] = useState(false);
  const items = role === 'student'?
  [
    getItem('Roadmap', '1', <RiBarChartHorizontalFill size="1.2rem"/>),
    getItem('Board', '2', <DesktopOutlined />),
    getItem('Code', '3', <BiCodeAlt size="1.2rem"/>)
  ] : role === 'faculty'?
    [
      getItem('Projects', '1', <AiOutlineProject size="1.2rem"/>),
      getItem('Requests', '2', <BiMessageAdd size="1.2rem"/>)
    ] : 
    [
      getItem('Requests', '1', <AiOutlineProject size="1.2rem"/>) 
    ];

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
        onClick={(e)=>{setSelectedItem(e.key);}}
      />
    </div>
  );
};

export default Taskbar;