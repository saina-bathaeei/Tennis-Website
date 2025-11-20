
import './header.css'
import NavBar from '../nav bar/nav'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import { useEffect, useState } from 'react'

function Header() {

    const {t} = useTranslation()

    const [direction,setDirection] = useState('')

    useEffect(() => {
        console.log(i18next.dir())

        setDirection(i18next.dir())

    },[i18next,i18next.language])
    
    return(
        <>
        <div className="header" style={direction === 'rtl' ? {backgroundImage: 'url(/hero-persian.jpg)'} : {backgroundImage: 'url(/pexels-cottonbro-5730454.jpg)'}}>
            <NavBar></NavBar>
            <div className="main-header">
               
                <div className="main-header-content">
                    <div className="title-header">
                        <h1 style={direction === 'rtl' ? {fontFamily:'Lvazir'} : {fontFamily: "Kanit"}}>{t("landingHome").title1}
                            <span>{t("landingHome").title2}</span>
                        </h1>
                    </div>
                    <div className="main-header-info">
                        <p>{t("landingHome").p}</p>
                    </div>
                    <button style={direction === 'rtl' ? {fontFamily:'Bvazir'} : {fontFamily: "Kanit"}} className="read-more">{t("landingHome").button}</button>
                </div>
                
            </div>
        </div>
        </>
        
    )
}

export default Header