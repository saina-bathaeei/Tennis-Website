import React, { Component } from 'react'
import './footer.css'
import DownFooter from './down-footer/downFooter'
import UpFooter from './up-footer/upFooter'

export default function Footer () {
    return (
        <>
        <UpFooter></UpFooter>
        <DownFooter></DownFooter>
        </>
    )
}
