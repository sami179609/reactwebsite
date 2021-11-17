import React from 'react'
import "./Card.css"
import { Card, Tooltip } from 'antd'
import 'antd/dist/antd.css';
import {EllipsisOutlined,RightCircleOutlined} from "@ant-design/icons";

const MeetingCard = (props) => {
    return (
        <> 
        <Card style={{width:350, borderRadius:'5%',height:210, boxShadow:' 0px 0px 15px -5px' }} title={
            <span style={{display:'flex',flexDirection:'column',alignItems:'initial',borderLeft:props.data.Diff === 2 ? '4px solid #ccaf2d':'4px solid #eb7134',borderRadius:2}}>
                <span style={{display:'flex',justifyContent: 'space-between',marginBottom:10}}>
                <p className="heading"> {props.data.Heading} </p>
                <EllipsisOutlined style={{marginTop:'10px'}} />
                </span>
                <span style={{display:'flex',justifyContent: 'inline-block'}}>
                    <button className="card-button">Small meeting room</button>
                    <button className="card-button1">Boardroom</button>
                </span>
                </span> }>
            <h5 className="stime">Start time</h5>
            <p className="sdate"> {props.data.Date}</p>
            <RightCircleOutlined style={{marginLeft:'140px',marginTop:'-40px',display:'flex'}} />
            <h5 className="etime"> End time</h5>
            <p className="edate">  31 Nov,7:00pm</p>            
            <span style={{display:'flex',justifyContent: 'space-between',marginTop:30}}>
            <p style={{color:'grey', fontWeight:'500',fontSize:'12px'}}><button className="card-button2">+</button> {props.data.Bottom}</p>    
            <Tooltip    placement="topRight" title={props.data.Text}>  
            <button className="card-button3" style={{background:props.data.Diff === 2 ? '#8cfaa9' : '#fabc98'}}>{props.data.Icon}  {props.data.Button}</button>
            </Tooltip>
                </span> 
        </Card>
        </>
    )
}

export default MeetingCard
