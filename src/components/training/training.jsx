import './training.css'
import React, { Component } from 'react'
import Coperating from './coperating/coperating'
import Wearing from './wearing/wearing'
import HeadTraining from './head training/headTraining'

export default class Training extends Component {

    constructor(props){
        super(props)
        this.state = {
            coperating : [
                {img:"/home/partner-01.png"},
                {img:"/home/partner-02.png"},
                {img:"/home/partner-03.png"},
                {img:"/home/partner-04.png"},
                {img:"/home/partner-05.png"},
                {img:"/home/partner-06.png"}
            ]
        }
    }

  render() {
    return (
        <div class="training">
            <div class="coperating">
                <div class="coperating-content">
                    {
                        this.state.coperating.map((img)=> (
                            <Coperating {...img} />
                        ))
                    }
                </div>
            </div>
            <Wearing />
        </div>
    )
  }
}
