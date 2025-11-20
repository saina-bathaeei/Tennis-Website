import { changeLanguage } from 'i18next'
import React,{ useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function LanguagePage() {

    const [lenTest,setLenTest] = useState([
        {id: 1, text: useTranslation().i18n.language == 'fa' ? 'hello' : 'سلام'}
    ])

    if (useTranslation().i18n.language == 'fa'){
        console.log('hellllllllllllllllllllllllll')
    }
    const {t} = useTranslation()

    console.log(useTranslation())
    const languages = [
        {code: 'en',lang:'english'},
        {code: 'fa',lang:'farsi'},
    ]

    const changeLang = (e) => {
        changeLanguage(e.target.innerHTML)
        console.log(e.target.innerHTML)
    }

  return (
    <>
    {
        languages.map(i => (
            <button key={i.code} onClick={(e) => changeLang(e)}>{i.code}</button>
        ))
    }
    <div>{t('greeting')}</div>
    </>
  )
}
