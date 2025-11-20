import './sport-club-box.css'

import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import { useEffect, useState } from 'react'

function SportClubBox({bigImage,smallImage,title,info}) {

    const [direction,setDirection] = useState('')

    useEffect(() => {
        console.log(i18next.dir())

        setDirection(i18next.dir())

    },[i18next,i18next.language])

    return(
        <div class="services-box">
                    <div className="image-services">
                        <img src={smallImage} alt="" />
                    </div>
                    <div className="services-box-info">
                        <h1 style={direction === 'rtl' ? {fontFamily:'Bvazir',fontStyle: 'normal',marginBottom: '10px'} : {fontFamily: "Kanit",fontStyle: 'italic'}}>{title}</h1>
                        <p>{info}</p>
                    </div>
                    <img className="img-serv" src={bigImage} alt="" />
                </div>
    )
}

export default SportClubBox