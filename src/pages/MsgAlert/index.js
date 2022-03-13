import React from 'react'
import ReactDOM from 'react-dom'

import './style.css'

export default function MsgAlert({ msg, buttonN, buttonLeft, buttonRight, bLeftClass, bRightClass, click }) {
    function close() {
        ReactDOM.unmountComponentAtNode(document.getElementById('getBox'))
        document.querySelector('#getBox').style.display = 'none'
        document.querySelector('body').style.overflow = 'auto'
    }
    return (
        <div id="all">
            <div className="alertBoxDefault defaultTinySistemTxt">
                <p className="defaultMediumSistemTxt" >Alerta!</p>
                <p className="alertBoxText">{msg}</p>
                <div className="alertBoxButtons">
                    <button onClick={() => close()} className={'defaultEffectBtn ' + bLeftClass}>{buttonLeft}</button>
                    {buttonN === 2 &&
                        <button onClick={click} className={'defaultEffectBtn ' + bRightClass} >{buttonRight}</button>
                    }
                </div>
            </div>
        </div>
    )
}