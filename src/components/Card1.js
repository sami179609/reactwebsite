
import React from 'react'
import "./Card.css"
import { Row,Col, } from 'antd'
import 'antd/dist/antd.css';
import pic from '../Images/person.PNG'
import PictureCard from './PictureCard';
import MeetingCard from './MeetingCard';
import {CheckCircleOutlined,FieldTimeOutlined} from "@ant-design/icons";

const Card1 = () => {
    return (
        <div className="site-card-wrapper">
        <Row style={{display:'flex',     justifyContent: 'inline-block', marginLeft:'90px',marginTop:'90px', }}gutter={16}>
        <Col style={{width:350, borderRadius:'5%', marginRight :'20px'}}>
            <MeetingCard data={{Date:'29 Nov 2020,3:30pm',Text:'This booking has not  been yet confirmed', Heading :'HDMI Room',Bottom :'Projector(2),Catering', Button:'Pending', Icon :< FieldTimeOutlined />}} />
            </Col>
            <Col style={{width:350, borderRadius:'5%', marginRight :'20px'}}>
                
                <MeetingCard data={{Date:'29 Nov, 3:30pm' ,Text:'This booking has been confirmed',Heading :'RJ-45 Room',Bottom :'Catering', Diff:2, Button:'Confirmed', Icon  :<CheckCircleOutlined />}} />
            </Col>
            <Col>
                <PictureCard data={{pic:pic,Heading1:'Design Update #20 ---',Heading2:'Talking with Damon Heart', Date:'29 Nov 2020, 03:30pm', Number:182, Diff:1, Price:'$50.00'}}/>
            </Col>
            </Row>

        </div>
    )
}

export default Card1
