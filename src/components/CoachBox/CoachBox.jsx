import './CoachBox.css'
import React from 'react'
import CheckIcon from '@mui/icons-material/Check';
import { useTranslation } from 'react-i18next';

export default function CoachBox(props) {

    const {t} = useTranslation()

  return (
    <div className='coach-box'>
        <div className="coach-img" style={{backgroundImage:`url(${props.img})`}}>
            <div className="rating-coach">
                {props.star}
            </div>
            <div className="coach-base-info glassy">
                <div className="coach-name">
                    <h2>{props.name}</h2>
                    <span>{props.exprience}</span>
                </div>
                <button>{t("coachHome").button1}</button>
            </div>
        </div>
        <div className="coach-info-i">
            <div className="coach-benefit">
                <span><CheckIcon />{props.benefit1}</span>
                <span><CheckIcon />{props.benefit2}</span>
                <span><CheckIcon />{props.benefit3}</span>
            </div>
            <div className="coach-speech"></div>
            <button>{t("coachHome").button2}</button>
        </div>
    </div>

  )
}
