import React from 'react'
import "./Card.css"
import { Button, Card } from 'antd'
import 'antd/dist/antd.css';
import pic from '../Images/perks.PNG'



const PerksCard = () => {
    return (
        <>
         <Card
            hoverable
            style={{ width: 350 ,paddingLeft: 0,borderRadius:'5%',height:215, marginTop:'-10px' , boxShadow:' 0px 0px 15px -5px'}}
        >
         
         <span style={{display:'flex',justifyContent: 'space-between'}}>
                <h3 style={{ marginTop:'-5px',marginLeft:'7px',fontWeight:'bold'}}>Perks and Discounts</h3> </span>
                 <img style={{float:'left', width:'300px',height:'100px',marginLeft:''}} alt="example" src={pic} />
                 <Button style={{marginLeft:'7px',borderRadius:10,marginBottom:-30,backgroundColor:'#666ae5',color:'white',fontWeight:'500',marginTop:'10px'}}>View All</Button>
        
        </Card>
        
                
        
        </>
    )
}

export default PerksCard
