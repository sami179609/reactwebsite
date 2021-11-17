
import React from 'react'
import "./Card.css"
import { Row,Col } from 'antd'
import 'antd/dist/antd.css';
import pic1 from '../Images/dp.jpg';
import ProgressCard from './ProgressCard';
import PostCard from './PostCard';
import PerksCard from './PerksCard';





const Card2 = () => {
    return (
        <div className="site-card-wrapper">
        <Row style={{ display:'flex',     justifyContent: 'inline-block', marginLeft:'90px',marginTop:'20px'}}gutter={16}>
        <Col style={{width:350, borderRadius:'5%', marginRight :'20px'}}>
        <PostCard data={{pic1:pic1,Name:'Michaels Walton',Heading1:'I think we need to integrate an',Heading2:'outdoor pool in our backyard',Heading3:'lounge area...' ,Likes:'91 Likess', Reply:'27 replies'}}/>
            </Col>
            <Col style={{width:350, borderRadius:'5%', marginRight :'20px'}}>
                
                <ProgressCard />
            </Col>
            <Col>
            <PerksCard />
            </Col>
            </Row>

        </div>
    )
}

export default Card2