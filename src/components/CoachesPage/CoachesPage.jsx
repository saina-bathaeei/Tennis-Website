import './CoachesPage.css'
import React, { useState } from 'react'
import CheckIcon from '@mui/icons-material/Check';
import { Rating } from '@mui/material';
import { Link } from 'react-router-dom';


export default function CoachesPage(props) {

    const [isHovered,setIsHovered] = useState(false)


    const onEnter = () => {
        setIsHovered(true)
    }

    const onLeave = () => {
        setIsHovered(false)
    }

  return (
    <div className='coach-box-page'>
        <Link to='/coache'>
            <div className="coach-box-page-img" style={{backgroundImage:`url(${props.img})`}} onMouseEnter={() => onEnter()} onMouseLeave={() => onLeave()}>
                <h1 className='coach-name-up-hover' style={isHovered ? {display:'none'} : {display:'block'}}>{props.name}</h1>
                <div className="coach-box-hover" style={isHovered ? {display:'block'} : {display:'none'}}>
                    <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                    <h1>{props.name}</h1>
                    <div className="ratin-coach">{props.exprience} {props.years}</div>
                </div>
            </div>
        </Link>
        
    </div>
  )
}
