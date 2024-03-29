import { Card, Col, Row } from 'antd';
import React from 'react';

const Board = () => (
  <>
    <div className='d-flex justify-content-center align-items-center mt-5'>
        <div className="site-card-wrapper">
            <Row gutter={16}>
            <Col span={8}>
                <Card title="Card title" bordered={false}>
                Card content
                </Card>
            </Col>
            <Col span={8}>
                <Card title="Card title" bordered={false}>
                Card content
                </Card>
            </Col>
            <Col span={8}>
                <Card title="Card title" bordered={false}>
                Card content
                </Card>
            </Col>
            </Row>
        </div>
    </div>
  </>
);

export default Board;
