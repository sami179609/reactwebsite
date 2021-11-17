import React from 'react'
import "./Card.css"
import {Card,Button } from 'antd'
import 'antd/dist/antd.css';
import pic from '../Images/EO.PNG';
import pic1 from '../Images/MR.PNG';
import { EllipsisOutlined,PlusOutlined } from "@ant-design/icons";



const VisitorsCard = () => {
    return (
        <>
         <Card style={{width:350, borderRadius:'5%',height:230,marginTop:'-20px', boxShadow:' 0px 0px 15px -5px'}} title={
                <span style={{display:'flex',justifyContent: 'space-between'}}>
                <h3 style={{fontWeight:'500',marginLeft:'8px'}}>Visitors (284)</h3>
                <p style={{fontWeight:'500'}}>View all</p>
                </span> }>
                <img style={{float:'left', width:'50px',marginTop:'-20px'}} alt="example" src={pic} />
                <span style={{display:'flex',justifyContent:'space-between',marginTop:'-20px'}}>    
                <h5 style={{fontWeight:'bold',marginTop:'8px'}}>Eddie Osmond</h5>
                <EllipsisOutlined  style={{marginTop:'15px'}}/>
                </span>
                <p style={{color:'grey',fontSize:'11px', fontWeight:'bold',marginTop:'-5px'}}>08 Jan 2021, 08:30am</p>

                <img style={{float:'left', width:'50px'}} alt="example" src={pic1} />
                <span style={{display:'flex',justifyContent:'space-between'}}>    
                <h5 style={{fontWeight:'bold',marginTop:'8px'}}>Melanie Robertson</h5>
                <EllipsisOutlined  style={{marginTop:'15px'}}/>
                </span>
                <p style={{color:'grey',fontSize:'11px', fontWeight:'bold',marginTop:'-5px'}}>11 Jan 2021, 08:30am</p>
                <Button style={{marginLeft:'8px',marginTop:'11px',borderRadius:10,marginBottom:-30,backgroundColor:'#666ae5',color:'white',fontWeight:'500'}}><PlusOutlined /> Add Visitors</Button>
                </Card>
             
        
        
                
        
        </>
    )
}

export default VisitorsCard
