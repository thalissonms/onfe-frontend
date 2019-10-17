import React from 'react';
import ReactDOM from 'react-dom';
import Register from './register'
import Edit from './edit'
import './style.css'
var Nova = ''



export default function Box ({page, id}) {
    function closeBox () {
        ReactDOM.unmountComponentAtNode(document.getElementById('getBox'))
        document.querySelector('#getBox').style.display = 'none'
        document.querySelector('body').style.overflow = 'auto'
    }
    if (page === 'add'){
        Nova = Register
    } else if (page === 'edit') {
        Nova = Edit
    }
     return (
        <div id="all">
            <div id="box">
                <h1 id="close" onClick={() => closeBox()}>X</h1>
                <Nova id={id} close={closeBox} />
            </div>
        </div>
        )
 }
 