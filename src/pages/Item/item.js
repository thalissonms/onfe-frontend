import React from 'react';

import './style.css'
import { red } from 'ansi-colors';

export default function Item ({id, nome, quantidade, unidade, preço, openBox, msgAlertDel, deleteMode, fontColor}) {
            function delEdit () {
                if (deleteMode === true){
                    msgAlertDel(id, nome)
                } else {
                    openBox('edit', id)
                }
            }
        return(
            <>
            <div onClick={() => delEdit()} className="itemInfo" id={nome}>
                 <ul cellSpacing='0' cellPadding='0' >                 
                        <li style={{width:'60%', borderLeft:'none', justifyContent:'left'}}>
                            <span style={{marginLeft:15, color:fontColor}}>{nome}</span>
                        </li>
                        <li style={{width:'10%'}}>
                            <span style={{color:fontColor}}>{quantidade}</span>
                        </li>
                        <li style={{width:'10%'}}>
                            <span style={{color:fontColor}}>{unidade}</span>
                        </li>
                        <li style={{width:'20%'}}>
                            <span style={{color:fontColor}}>R$ {preço}</span>
                        </li>   
                </ul>
           </div>
            </>


        )
}
