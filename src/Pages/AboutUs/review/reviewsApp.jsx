
import React, { Component } from 'react'
import TextEditor from '../../components/contextMenu/context'
import Review from '../../components/review/review'
import './reviews.css'

export default class ReviewsApp extends Component {

  constructor(props){
    super(props)
    this.state = {
      reviews:[
        {img:'/home/testimonials-image4-copyright-120x120.jpg' , name: 'James Parker' , location: 'Edison, NJ',info:'Consectetur adipiscing elit, sed do eiusm onsectetur adipiscing elit, sed do eiusm od tempor incididunt ut labore. Consectetur adipiscing elit, sed do eiusm onsectetur adipiscing elit, sed do eiusm unde.'},
        {img:'/home/testimonials-image5-copyright-120x120.jpg' , name: 'James Parker' , location: 'Edison, NJ',info:'Consectetur adipiscing elit, sed do eiusm onsectetur adipiscing elit, sed do eiusm od tempor incididunt ut labore. Consectetur adipiscing elit, sed do eiusm onsectetur adipiscing elit, sed do eiusm unde.'},
        {img:'/home/testimonials-image6-copyright-120x120.jpg' , name: 'James Parker' , location: 'Edison, NJ',info:'Consectetur adipiscing elit, sed do eiusm onsectetur adipiscing elit, sed do eiusm od tempor incididunt ut labore. Consectetur adipiscing elit, sed do eiusm onsectetur adipiscing elit, sed do eiusm unde.'},
      ],
      clicked: false
    }
  }

  addRev(){
    let myRev = {
      img:'/home/testimonials-11-300x300.jpg' , name: 'Sayna Bathaei' , location: 'Edison, NJ , ' , info : 'ehwofhhiqhfkskjdlksjlkjdiojfofihweoieewfoiewjfoiwfoiwejdjmke'
    }
    this.setState(prevState => ({
      reviews: [...prevState.reviews, myRev],
    }));
  }

  render() {
    return (
      <>
      <div className='contain-rev'>
        {
          this.state.reviews.map((i) => (
            <Review {...i}  />
          ))
        }
      </div>
      
      <TextEditor onAdd={this.addRev.bind(this)} />
      </>
    )
  }
}

