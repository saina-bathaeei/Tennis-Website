import './About.css'
import React,{useState,useEffect} from 'react'
import NavBar from '../../components/nav bar/nav'
import Footer from '../../components/footer/footer'
import { Rating } from '@mui/material'
import styled from '@emotion/styled';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CircleIcon from '@mui/icons-material/Circle';
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'


export default function About() {

    const {t} = useTranslation()

    const [direction,setDirection] = useState('')
    const com = t("aboutusPage")

    useEffect(() => {
        console.log(i18next.dir())

        setDirection(i18next.dir())

    },[i18next,i18next.language])
  return (
    <>
        <div className="about-nav">
            <NavBar/>
        </div>
        <div className="about-heading-container">
            <div className="about-heading">
                <div className="about-heading-top">
                    <h1>{com.h1}</h1>
                    <p className={direction == 'rtl' ? 'persian-p-about' : ''}>{com.p}</p>
                </div>
                <div className="about-heading-center">
                    <img src="/about/about-heading.png" alt="" />
                </div>
                <div className={`about-heading-bottom ${direction === 'rtl' && 'persian-bottom-about' }`} >
                    <div className="about-heading-box">
                        <h1>15K+</h1>
                        <p>{com.aboutBoxTitle1}</p>
                    </div>

                    <div className="about-heading-box">
                        <h1>20</h1>
                        <p>{com.aboutBoxTitle2}</p>
                    </div>

                    <div className="about-heading-box">
                        <h1>98%</h1>
                        <p>{com.aboutBoxTitle3}</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="info-about">
            <div className="mession">
                <div className="info-about-box">
                    <div className="info-about-box-img">
                        <img src="/about/info-1.png" alt="" />
                    </div>
                    <div className="info-about-box-text">
                        <h1>{com.mession.title}</h1>
                        <p>{com.mession.p}</p>
                    </div>
                </div>
            </div>

            <div className="facility">
                <div className="info-about-box">   
                    <div className="info-about-box-text">
                        <h1>{com.Facilities.title}</h1>
                        
                        <h3>{com.Facilities.title2}
                        </h3>

                        <p>
                        <CircleIcon /> {com.Facilities.p1}
                        </p>

                        
                        <p>
                        <CircleIcon /> {com.Facilities.p2}
                        </p>
                        
                        <p>
                        <CircleIcon /> {com.Facilities.p3}
                        </p>

                        
                    </div>
                    <div className="info-about-box-img">
                        <img src="/about/info-2.png" alt="" />
                    </div>
                </div>
            </div>

            <div className="programs">
                <div className="info-about-box">
                    <div className="info-about-box-img">
                        <img src="/about/info-3.png" alt="" />
                    </div>
                    <div className="info-about-box-text">
                        <h1>{com.Programs.title}</h1>
                        
                            <h3>{com.Programs.title2}</h3>
                            <p>
                            <CircleIcon/> {com.Programs.p1}
                            </p>
                            <p>
                            <CircleIcon/> {com.Programs.p2}
                            </p>
                            <p>
                            <CircleIcon/> {com.Programs.p3}
                            </p>
                            <p>
                            <CircleIcon/> {com.Programs.p4}
                            </p>


                    </div>
                </div>
            </div>
        </div>

        <div className="about-reviews">
            <div className="left-arrow-about">
                <ArrowBackIcon/>
            </div>
            <div className="about-review">
                <div className="about-review-left">
                </div>
                <div className="about-review-right">
                    <div className="about-review-right-child">
                        <div className="review-stars">
                            <Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly />
                        </div>
                        <h2>{com.review.title}</h2>
                        <p>“{com.review.p}”</p>
                        <span>{com.review.name}</span>
                    </div>
                </div>
            </div>
            <div className="right-arrow-about">
                <ArrowForwardIcon/>
            </div>
        </div>
        <Footer/>
    </>
  )
}
