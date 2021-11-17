import { Card,Button,Progress } from "antd"
import React from "react"
import './Card.css'






const ProgressCard = () => {
    return(
        <div className='progressCard'>
        <Card style={{width:350, borderRadius:'5%',height:225, boxShadow:' 0px 0px 15px -5px'}} title={
                <span style={{display:'flex',justifyContent: 'space-between'}}>
                <p style={{fontWeight:'bold'}}>Benefits (2)</p>
                <p style={{fontWeight:'bold'}}>View all</p>
                </span>
            } bordered={false}>
                <span style={{display:'flex',justifyContent: 'space-between',height:'25px'}}>
                <p style={{fontWeight:'600',}}>All Day Pass </p>
                <p style={{fontWeight:'600'}}>6/10</p>
                </span>
            <Progress percent={60} showInfo={false}/>
            <span style={{display:'flex',justifyContent: 'space-between',height:'25px'}}>
                <p style={{fontWeight:'600'}}>Booking credits </p>
                <p style={{fontWeight:'600'}}>8/20</p>
                </span>
            <Progress percent={40} showInfo={false}/>
            <Button style={{marginTop:'11px',borderRadius:10,marginBottom:-30,backgroundColor:'#666ae5',color:'white',fontWeight:'500'}}>Join a Plan</Button>
            </Card>
        </div>
    )
}
export default ProgressCard;
        