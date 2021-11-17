import pic from '../Images/chair.PNG'
import PictureCard from './PictureCard';
import { Card,Row,Col} from 'antd'
import DemoColumn from './Graph';
import VisitorsCard from './VisitorsCard';





const Card3 = () => {
    return (
        <div className="site-card-wrapper">
        <Row style={{display:'flex',     justifyContent: 'inline-block', marginLeft:'90px',marginTop:'20px', marginRight:'10px'}}gutter={16}>
        <Col style={{width:365, borderRadius:'5%', marginRight :'5px',marginTop:'-20px'}}>
            <Card style={{borderRadius:'5%', boxShadow:' 0px 0px 15px -5px'}} title={<p style={{fontWeight:'500'}}>Payments in the last 12 months</p>} bordered={false}>
                <DemoColumn />
                </Card>
            </Col>
            <Col style={{width:350, borderRadius:'5%', marginRight :'20px'}}>
                 <PictureCard data={{pic:pic,Heading1:'Company Meetup ---',Heading2:'Project Management Workshop #1', Date:'08 Jan 2021, 08:30am', Number:20, Diff:2, Price:'$50.00'}}/>
                
            </Col>
            <Col>
            <VisitorsCard />
            </Col>
            </Row>

        </div>
    )
}

export default Card3