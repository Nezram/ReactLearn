import React from "react";
const images = [
    'https://cdn.pixabay.com/photo/2019/10/15/13/40/winter-4551699_960_720.jpg',
    'https://cdn.pixabay.com/photo/2021/04/22/06/40/duck-6198196_960_720.jpg',
    'https://cdn.pixabay.com/photo/2021/04/17/23/58/bunny-6187026_960_720.jpg',
    'https://cdn.pixabay.com/photo/2020/09/18/21/16/child-5582985_960_720.jpg'
]
let nimber = 0
class MoveImg extends React.Component {
 constructor(props){
     super(props)
     this.state = {srcImg: props.srcImg}
     this.clickSrc = this.clickSrc.bind(this)
 }
 clickSrc(){
     nimber += 1
     if(nimber + 1 > images.length){
         nimber = 0
     }
    this.setState({srcImg:images[nimber]})
    console.log(this.state.srcImg,nimber)
 }
 render(){
     return (
         <div>
             <img src={this.state.srcImg} onClick = {this.clickSrc} alt="" />
         </div>
     )
 }
 
}

export default MoveImg;
