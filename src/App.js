import React from 'react'
import './App.css'
import Card1 from './components/Card1';
import Card2 from './components/Card2';
import Card3 from './components/Card3';
import 'antd/dist/antd.css';
import pic1 from './Images/dp1.jpg';
import PostCard from './components/PostCard';
const App =()=> {
    return(
   <div>
     <Card1 />
     <Card2 />
     <Card3 />
     <PostCard   data={{pic1:pic1, Diff: 2 ,Name:'Donny Wells',Heading1:'How do we setup our office to',Heading2:'accommodate more users' ,Likes:'3 Likess', Reply:'7 replies'}}/> 
    
   </div>
    );
  }

export default App; 
