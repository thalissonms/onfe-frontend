import React, { useState } from 'react'
import api from '../../services/api'

import './style.css'
import './register.css'

import earth from '../../assets/img/earth.svg'
import google from '../../assets/img/google.svg'
import folder from '../../assets/img/folder.svg'

export default function Register ({close}) {

    const [item, setItem] = useState({
        produto:'',
        qnt:'',
        med:'',
        preçoClient:''
    })

    async function sendItem () {
        const send = await api.post('/itens', {
            produto: item.produto.toUpperCase(),
            qnt: item.qnt,
            med: item.med,
            preçoClient: item.preçoClient
        })
        console.log(send)
        close();
        window.location.reload()
    }

    return (
        <>
        <h1 id="titleBox">CADASTRAR NOVO ITEM</h1>
        <div id="boxImg">
            <img 
            src="https://images.wallpaperscraft.com/image/bird_silhouette_vector_134154_1920x1080.jpg" 
            id="imgBox"
            alt="imagem do item " 
            />
            <div id="imgSelect">
                <div className="buttonImg">
                    <img alt="PC" className="icoButton" src={folder}></img>
                </div>
                <div className="buttonImg">
                    <img alt="Google" className="icoButton" src={google}></img>
                </div>
                <div className="buttonImg">
                    <img alt="Url" className="icoButton" src={earth}></img>
                </div>
            </div>
        </div>
        <input 
        className="inputBox"
        onChange={e => {item.produto = e.target.value}} 
        id="inputBoxName"
        style={{textTransform:'uppercase'}}
        placeholder="NOME DO PRODUTO" />
        <div id="boxInfo">
            <div className="boxDiv" >
                <div className="boxDivLeft">
                    <h2>Preço</h2>
                </div>
                <div className="boxDivRight">
                    <h2>R$</h2>
                    <input className="inputBox" type="number" placeholder="0,00" />
                </div>
            </div>

            <div className="boxDiv" >
                <div className="boxDivLeft">
                    <h2>Qnt. Estoque</h2>
                </div>
                <div className="boxDivRight">
                    <input className="inputBox" style={{textAlign:'right'}} type="number" placeholder="00" />
                    <input className="inputBox" maxLength="2" style={{textTransform:'uppercase'}} placeholder="UN" />
                </div>
            </div>
            <div className="boxDiv" >
                <div className="boxDivLeft">
                    <h2>Preço Forn.</h2>
                </div>
                <div className="boxDivRight">
                    <h2>R$</h2>
                    <input className="inputBox" type="number" placeholder="0,00" />
                </div>
            </div>
            <div className="boxDiv">
                <div id="date">
                    <h2>Reposição:</h2>
                    <input className="inputBox" style={{textTransform:'uppercase'}} defaultValue="1999-12-18" type="date" />
                </div>
            </div>
        </div>
        <div id="saveCancel">
            <div className="saveCancel" onClick={() => sendItem()} id="saveButton"><p>SALVAR</p></div>
            <div className="saveCancel" id="cancelButton"><p>CANCELAR</p></div>
        </div>
        </>
    )
}