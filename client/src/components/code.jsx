import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import {AiOutlineFileText} from 'react-icons/ai';
import React from 'react';
const { Dragger } = Upload;
const props = {
  name: 'file',
  multiple: true,
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',

  onChange(info) {
    const { status } = info.file;

    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }

    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },

  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};

const Code = () => (
  <>
    <div className="mt-5 px-5">
      <h3>Deliverables</h3>
        <div className='d-flex flex-column justify-content-around px-2' style={{textDecoration: "underline", fontWeight: "normal", display: "block"}}>
            <a href="#" className='mt-2'><AiOutlineFileText size="1.2rem" style={{marginRight: "10px"}}/>FMS-Fronted-files.zip</a>
            <a href="#" className='mt-2'><AiOutlineFileText size="1.2rem" style={{marginRight: "10px"}}/>FMS-Databse-files.zip</a>
            <a href="#" className='mt-2'><AiOutlineFileText size="1.2rem" style={{marginRight: "10px"}}/>FMS-Documnetation-files.zip</a>
        </div>
    </div>
    <div className="m-5 mt-5" style={{height: "500px"}}>
        <center>
            <h3>Upload Files here</h3>
        </center>
        <Dragger {...props}>
            <p className="ant-upload-drag-icon">
            <InboxOutlined />
            </p>
            <p className="ant-upload-text">Click or drag file to this area to upload</p>
            <p className="ant-upload-hint">
            Please upload files shorter than 3 MB.
        </p>
        </Dragger>
    </div>
  </>
);

export default Code;