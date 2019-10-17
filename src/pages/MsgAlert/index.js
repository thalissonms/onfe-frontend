import React from 'react'
import ReactDOM from 'react-dom'

import './style.css'

export default function MsgAlert ({msg, buttonN, buttonLeft, buttonRight, bLeftColor, bRightColor, click}) {
    function close () {
        ReactDOM.unmountComponentAtNode(document.getElementById('getBox'))
        document.querySelector('#getBox').style.display = 'none'
        document.querySelector('body').style.overflow = 'auto'
    }
    return (
        <div id="all">
            <div id="msgBox">
                <p id="msgText">{msg}</p>
                <div id="buttonsAlert">
                    <div className="twoButtons">
                        <div onClick={() => close()} className="buttonMsgAlert" style={{backgroundColor:bLeftColor}}>{buttonLeft}</div>
                    </div>
                    {buttonN === 2 &&
                    <div className="twoButtons">
                        <div onClick={click} className="buttonMsgAlert" style={{backgroundColor:bRightColor}}>{buttonRight}</div>
                    </div>}
                </div>
            </div>
        </div>
    )
}