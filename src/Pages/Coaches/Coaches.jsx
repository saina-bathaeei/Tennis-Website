import './Coaches.css'
import React,{ useState } from 'react'
import NavBar from '../../components/nav bar/nav'
import Footer from '../../components/footer/footer'
import CoachesPage from '../../components/CoachesPage/CoachesPage'
import { useTranslation } from 'react-i18next'

export default function Coaches() {

    const {t} = useTranslation()

    const [coachInfo,setCoachInfo] = useState([
        {name: t("hirePage").coach1 ,star:'5',exprience:'7',benefit1:'A technically sound swing that holds up under pressure.',benefit2:'The strategic IQ to outthink any opponent.',benefit3:'Unshakable mental toughness for the crucial points.' ,img:'/coach/coach-1.jpg',years: t("hirePage").year},
        {name: t("hirePage").coach2 ,star:'4.5',exprience:'5',benefit1:'A personalized plan tailored to your specific goals.',benefit2:'Video analysis to see and correct flaws you cant feel.',benefit3:'Drills that transform your weaknesses into strengths.' ,img:'/coach/coach-2.jpg',years: t("hirePage").year},
        {name: t("hirePage").coach3 ,star:'4.1',exprience:'3',benefit1:'GIves you The confidence to trust your shots.',benefit2:'A competitive mindset that embraces the fight.',benefit3:'physical excercies for tennis-specific movement.' ,img:'/coach/coach-3.jpg',years: t("hirePage").year},
        {name: t("hirePage").coach4 ,star:'4.7',exprience:'6',benefit1:'Faster footwork and explosive court coverage.',benefit2:'A reliable second serve that wont break down.',benefit3:'The ability to quickly analyze opponents game.' ,img:'/coach/coach-4.jpg',years: t("hirePage").year},
        {name: t("hirePage").coach5 ,star:'3.9',exprience:'10',benefit1:'A consistent pre-point routine to maximize focus.',benefit2:'Expert guidance on equipment choice for you.',benefit3:'improve your reaction time at the net.' ,img:'/coach/coach-5.jpg',years: t("hirePage").year},
    ])

  return (
    <>
        <div className="about-nav">
            <NavBar/>
        </div>
        <div className="coach-landing">
            <div className="coach-landing-info">
                <h1>{t("hirePage").title}</h1>
                <p>{t("hirePage").p}</p>
            </div>
            <div className="coach-landing-img">
                <img src="/about/contact-heading.png" alt="" />
            </div>
        </div>

        <div className="coach-container">
            {
                coachInfo.map((e) => (
                    <CoachesPage {...e}/>
                ))
            }
        </div>

        <Footer/>

    </>
  )
}
