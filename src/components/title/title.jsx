import './title.css'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import { useEffect, useState } from 'react'

function Title ({title,mainTitle}) {

    const [direction,setDirection] = useState('')

    useEffect(() => {
        console.log(i18next.dir())

        setDirection(i18next.dir())

    },[i18next,i18next.language])

    return(
        <div>
            <div className="services-title">
                <div className="absolute-services-title">
                    <h1 style={direction === 'rtl' ? {fontFamily:'Bvazir'} : {fontFamily: "Kanit"}}>{title}</h1>
                </div>
                <div className="main-services-title">
                    <h1 style={direction === 'rtl' ? {fontFamily:'Bvazir'} : {fontFamily: "Kanit"}}>{mainTitle}</h1>
                </div>
            </div>
        </div>
    )
}

export default Title