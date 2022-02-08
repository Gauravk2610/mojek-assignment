import { Col, Row } from 'antd';
import React from 'react';
import './Advertise.css'


const AdvertiseCard = ({title, img}) => (
    <div className='advertise-card'>
        <div className="advertise-card-title">{title}</div>
        <p className='advertise-card-desc' >Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <button className='advertise-card-learn-more'>Learn More</button>

        <img className='side-logo' src={`/assests/${img}.png`} alt="" />
    </div>
)

function Advertise() {
    return (
        <div className='advertise'>
            <Row gutter={[32, 16]}>
                <Col lg={{span: 12}}>
                    <AdvertiseCard title={'Keep track of your investements'} img={'Activity'} />
                </Col>
                <Col lg={{span: 12}}>
                    <AdvertiseCard  title={'Set up alerts based on your preferences'} img={'Notification'}  />
                </Col>
            </Row>
        </div>
    );
}

export default Advertise;
