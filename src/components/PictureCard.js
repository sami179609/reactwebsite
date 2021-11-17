import { Card,Button } from "antd"
import React from "react"
import { TeamOutlined,CheckOutlined } from "@ant-design/icons"
import './Card.css'


const PictureCard = (props) => {
    return(
        <div className='pictureCard'>
        <Card
            hoverable
            style={{ width: 350 ,paddingLeft: 0,borderRadius:'5%',height:200 , boxShadow:' 0px 0px 15px -5px'}}
        >
            <img style={{float:'left', width:props.data.Diff===1?137:146,borderRadius:'5%',paddingRight:20,marginTop:'-1px',marginLeft:'-1px'}} alt="example" src={props.data.pic} />
            <span >
                <p style={{fontWeight:'700',fontSize:15,marginTop:10}}>{props.data.Heading1}</p>
                <p style={{fontWeight:'700',fontSize:15, marginTop:'-14px'}}>{props.data.Heading2}</p>
                <p style={{fontWeight:'500',fontSize:11,color:'grey',margin:0}}>Start time</p>
                <p style={{fontWeight:'600',fontSize:12}}>{props.data.Date}</p>
                <span  style={{display:'flex', justifyContent:'space-between'}}><p style={{display:'inline-block',color:'grey',fontWeight:'500',marginTop:props.data.Diff === 2 ? -25 : -1}}><TeamOutlined style={{width:20,marginTop:45}}/>{props.data.Number}</p><p style={{display:'inline-block',marginTop:props.data.Diff === 1 ? 38 : 13,fontWeight:'bold',fontSize:15}}>{props.data.Diff === 1 ? props.data.Price : (<Button style={{margin:0,padding:0,borderRadius:8,height:21, fontSize: 10, backgroundColor:' #e6e8e6',fontWeight:'bold',marginTop:'-10px'}}><CheckOutlined />Ticket Bought</Button>)}</p></span>
                </span>
        </Card>
        </div>
    )
}
export default PictureCard;
