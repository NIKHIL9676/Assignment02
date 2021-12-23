import React from 'react';
import {
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardText,
    Button,
} from 'reactstrap';

const PlayersList=[
    {id:1,name:"Virat Kohli",country:"India",category:"RightHand Batsman",image:'https://cdn.dnaindia.com/sites/default/files/styles/full/public/2021/10/22/1002052-virat-kohli.jpg'},
    {id:2,name:"Glenn Maxwell",country:"Australia",category:"LeftHand Batsman",image:'https://i.guim.co.uk/img/media/ed99d6654ae81fcce3d1d7fc921fd562d34e6d5c/0_51_4503_2702/master/4503.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=28edcc0820aaff16a87de2f86ff019c5'},
    {id:3,name:"KL Rahul",country:"India",category:"RightHand Batsman",image:'https://images.indianexpress.com/2021/09/kl-rahul-1-2.jpg'},
    {id:4,name:"Rohit Sharma",country:"India",category:"RightHand Batsman",image:'https://static.toiimg.com/thumb/msid-87217472,imgsize-70676,width-400,resizemode-4/87217472.jpg'},
    {id:4,name:"MS Dhoni",country:"India",category:"RightHand Batsman and Wicket keeper",image:'https://static.toiimg.com/thumb/msid-87217472,imgsize-70676,width-400,resizemode-4/87217472.jpg'}
];
const players=PlayersList.map(plr=>(
  <div class='row'>
  <Card style={{ width: '18rem' }}>
  <CardImg variant="top" src={plr.image} />
  <CardBody>
    <CardTitle>{plr.name}</CardTitle>
    <CardText>
     {plr.category} - {plr.country}
    </CardText>
    <Button variant="primary">about {plr.name}</Button>
  </CardBody>
</Card>
</div>
));
// class Counter extends Component{
    
//     constructor(props){
//      super(props);
//      this.state={
//          count:0
//      };
    
//     }
//     render(){
//         return (
//             <div>
//             <p> {players[this.state.count]} </p>
//            <button onClick={()=> this.setState({count:this.state.count+1})}>Next Player</button>
//             <button onClick={()=> this.setState({count:this.state.count-1} ) }>previous Player</button>
//         </div>
//         )       
//         }
// }
// export default Counter;
 
export default function Example(){
    return(
    <div >
      <h1> {players[0]}</h1>
      <h1> {players[1]}</h1>
      <h1> {players[2]}</h1>
      <h1> {players[3]}</h1>
      <h1> {players[4]}</h1>
    </div>
  )
}