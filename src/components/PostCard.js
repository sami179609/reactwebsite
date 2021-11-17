import React from 'react'
import "./Card.css"
import 'antd/dist/antd.css';
import { Card } from "antd"
import { LikeOutlined,CommentOutlined } from "@ant-design/icons";

const PostCard = (props) => {
    return (
        < >

        
        <Card
            hoverable
            style={{ width: 350 ,paddingLeft: 0,borderRadius:'5%',height:200,marginLeft:props.data.Diff === 2 ? 470 : 1, marginTop:props.data.Diff === 2 ? -95 : 1, boxShadow:' 0px 0px 15px -5px' }}>
         <span style={{display:'flex',justifyContent: 'inline',marginTop:'-15px'}}>
            <img style={{float:'left', width:'30px',marginTop:'15px',marginLeft:'-5px'}} alt="example" src={props.data.pic1} />
            <p style={{fontSize:'10px',marginTop:'25px',color:'grey',fontWeight:'bold',marginLeft:'5px'}}> {props.data.Name}</p>
            </span>
            
            <h2 style={{textDecoration:props.data.Diff === 2 ? 'none':'underline',marginLeft:'-5px',fontWeight:'bold',fontSize:'18px'}}>{props.data.Heading1}</h2>
            <h3 style={{textDecoration:props.data.Diff === 2 ? 'none':'underline',marginLeft:'-5px',fontWeight:'bold',fontSize:'18px',marginTop:'-10px'}}>{props.data.Heading2}</h3>
            <h3 style={{textDecoration:'underline',marginLeft:'-5px',fontWeight:'bold',fontSize:'18px',marginTop:'-10px'}}>{props.data.Heading3}</h3>
           <span style={{display:'flex', justifyContent:'inline-block'}}> <LikeOutlined style={{marginLeft:'-5px', marginTop:props.data.Diff === 2 ? 60 : 20}} >  </LikeOutlined> <p style={{marginTop:props.data.Diff === 2 ? 60 : 20,marginLeft:'5px',fontWeight:'bold',color:'grey',fontSize:'10px'}}>{props.data.Likes}</p>
           <CommentOutlined  style={{marginLeft:'15px', marginTop:props.data.Diff === 2 ? 60 : 20}} >  </CommentOutlined > <p style={{marginTop:props.data.Diff === 2 ? 60 : 20,marginLeft:'5px',fontWeight:'bold',color:'grey',fontSize:'10px'}}>{props.data.Reply}</p>
        </span>
        
                </Card>
        
        </>
    )
}

export default PostCard
