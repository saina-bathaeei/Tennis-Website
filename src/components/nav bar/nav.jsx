import { changeLanguage } from 'i18next'
import './nav.css'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import i18next from 'i18next'

function NavBar(){

    const [direction,setDirection] = useState()
    const [hamburgerDisplay,setHamburgerDisplay] = useState(false)

    useEffect(() => {
        document.body.dir = i18next.dir()
        console.log(i18next.dir())

        setDirection(i18next.dir())

        if(i18next.dir() === 'ltr'){
            document.body.style.fontFamily = "Kanit"
        }else{
            document.body.style.fontFamily = "vazir"
        }

    },[i18next,i18next.language])

    const {t} = useTranslation()
    const [lang,setLang] = useState('en')

    const changeLang = (e) => {
        
        changeLanguage(e.target.innerHTML)

        if(lang === 'en'){
            setLang('fa')
        }else{
            setLang('en')
        }
    }

    const hamburgerClicked = () => {
        setHamburgerDisplay(prev => !prev)
        console.log('hellooo')
    }
    return(
        <div className='contain-header'>
            <div className="header-up">
                <div className="logo" style={direction === 'rtl' ? {marginLeft: '0px',marginRight: '0px'} : {marginRight: '130px',marginLeft: '0px'}}>
                    <img  src="logo.png" alt=""/>
                </div>

                

                <div className="header-up-info">
                    <ul className='glassy'>
                        <Link to={'/'}><li>{t('navbar').home}</li></Link>
                        <Link to={'/about'}><li>{t('navbar').aboutus}</li></Link>
                        <Link to={'/shop'}><li>{t('navbar').shop}</li></Link>
                        <Link to={'/coach'}><li>{t('navbar').hire}</li></Link>
                        <Link to={'/contact'}><li>{t('navbar').contact}</li></Link>                       
                    </ul>
                </div>

                <div className="person">
                    <img src="/pexels-cottonbro-5741050.jpg" style={{width: '45px',height: '45px',borderRadius: '100%'}} alt=""/>
                    <button onClick={(e) => changeLang(e)}>{lang}</button>
                </div>
                <div className="hamburger" onClick={() => hamburgerClicked()}>
                    <img src="/ci--hamburger-lg.svg" alt="" />
                    <div  className="hamburger-box" style={hamburgerDisplay ? {display: 'block'} : {display: 'none'}}>
                        <ul className='hamburger-ul'>
                            <Link to={'/'}><li>{t('navbar').home}</li></Link>
                            <Link to={'/about'}><li>{t('navbar').aboutus}</li></Link>
                            <Link to={'/shop'}><li>{t('navbar').shop}</li></Link>
                            <Link to={'/coach'}><li>{t('navbar').hire}</li></Link>
                            <Link style={{border: 'none'}} to={'/contact'}><li>{t('navbar').contact}</li></Link>                       
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default NavBar