import './SingleCoach.css'
import React from 'react'
import NavBar from '../../components/nav bar/nav'
import Footer from '../../components/footer/footer'
import LocationPinIcon from '@mui/icons-material/LocationPin';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import { useTranslation } from 'react-i18next';

export default function SingleCoach() {

    const {t} = useTranslation()

    const com = t('singleCoachPage')
  return (
    <>
    <div className="about-nav">
        <NavBar/>
    </div>
        <div className="single-coach">
            <div className="single-coach-landing">
                <div className="single-coach-left">
                    <h1>{com.name}</h1>
                    <span>--{com.pro}--</span>
                    <p>{com.p1}</p>
                    <div className="landing-coach-btn">
                        <button className='book-se'>{com.button1}</button>
                        <button className='landing-learn-more'>{com.button2}</button>
                    </div>
                </div>
                <div className="single-coach-right">
                    <div className="single-coach-landing-img"></div>
                </div>
            </div>
            <div className="single-coach-perfect">
                <div className="single-coach-perfect-box" style={{backgroundImage:'url(/coach/perfect-1.png)'}}>
                    <h1>{com.boxes.title1}</h1>
                    <span>{com.boxes.p1}</span>
                </div>

                <div className="single-coach-perfect-box" style={{backgroundImage:'url(/coach/perfect-2.png)'}}>
                    <h1>{com.boxes.title2}</h1>
                    <span>{com.boxes.p2}</span>
                </div>

                <div className="single-coach-perfect-box" style={{backgroundImage:'url(/coach/perfect-3.png)'}}>
                    <h1>{com.boxes.title3}</h1>
                    <span>{com.boxes.p3}</span>
                </div>

                <div className="single-coach-perfect-box" style={{backgroundImage:'url(/coach/perfect-4.png)'}}>
                    <h1>{com.boxes.title4}</h1>
                    <span>{com.boxes.p4}</span>
                </div>
            </div>
            <div className="coach-single-speech">
                <div className="coach-speech-left">
                    <img src="/coach/speech.jpg" alt="" />
                </div>
                <div className="coach-speech-right">
                    <h1>{com.speechTitle}</h1>
                    <p>{com.speechp}</p>
                </div>
            </div>
            <div className="coach-contact">
                <h1>{com.contactTitle}</h1>
                <div className="coach-contact-container">
                    <div className="contact-coach-box">
                        <div className="contact-coach-img">
                            <PhoneIcon/>
                        </div>
                        <div className="contact-coach-info">
                            <span>{com.address1}</span>
                            <h2>09125436945</h2>
                        </div>
                    </div>

                    <div className="contact-coach-box">
                        <div className="contact-coach-img">
                            <MailOutlineIcon/>
                        </div>
                        <div className="contact-coach-info">
                            <span>{com.address2}</span>
                            <h2>sbathaei@gmail.com</h2>
                        </div>
                        
                    </div>

                    <div className="contact-coach-box">
                        <div className="contact-coach-img">
                            <LocationPinIcon/>
                        </div>
                        <div className="contact-coach-info">
                            <span>{com.address3}</span>
                            <h2>Zanjan</h2>
                        </div>
                        
                    </div>

                    <div className="contact-coach-box">
                        <div className="contact-coach-img">
                            <CalendarTodayIcon/>
                        </div>
                        <div className="contact-coach-info">
                            <span>{com.address4}</span>
                            <h2>Mon-Sat, 6AM-8PM</h2>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </>
  )
}
