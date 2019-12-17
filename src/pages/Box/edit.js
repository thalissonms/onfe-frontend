import React, { useState, useEffect } from 'react'
import api from '../../services/api'

import './style.css'
import './register.css'

import loadingGif from '../../assets/loading.svg'

import earth from '../../assets/earth.svg'
import google from '../../assets/google.svg'
import folder from '../../assets/folder.svg'

export default function Register ({id, close}) {
    const [getItem, setGetItem] = useState()
    const [loading, setLoading] = useState(true)
    var   [imgUrl, setImgUrl] = useState(),
    update = false
    
    useEffect(() => {
        async function handleItem () {
            const response = await api.get(`/itens/get/${id}`)
            setGetItem(response.data)
            console.log(getItem)
            setLoading(false)
        }
        handleItem();
    }, [])

    async function sendItem () {
        const send = await api.put(`/itens/update/${id}`, {
            produto: getItem.produto.toUpperCase(),
            qnt: getItem.qnt,
            med: getItem.med,
            preçoClient: getItem.preçoClient
        })
        close();
        window.location = window.location.href +"/"+ produto
    }

    return (
        <>
        {loading === true ? <div id="loading"><img src={loadingGif} alt="Carregando..." /></div> : (
        <>
        <h1 id="titleBox">EDITAR ITEM</h1>
        <div id="boxImg">
            <img 
            src={getItem.img}
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
        id="inputBoxName" 
        onChange={e => getItem.produto = e.target.value}
        defaultValue={getItem.produto}
        style={{textTransform:'uppercase'}} 
        placeholder="NOME DO PRODUTO" />
        <div id="boxInfo">
            <div className="boxDiv" >
                <div className="boxDivLeft">
                    <h2>Preço</h2>
                </div>
                <div className="boxDivRight">
                    <h2>R$</h2>
                    <input 
                    className="inputBox" 
                    type="number" 
                    onChange={e => getItem.preçoClient = e.target.value}
                    defaultValue={getItem.preçoClient} 
                    placeholder="0,00" />
                </div>
            </div>

            <div className="boxDiv" >
                <div className="boxDivLeft">
                    <h2>Qnt. Estoque</h2>
                </div>
                <div className="boxDivRight">
                    <input 
                    className="inputBox"
                    onChange={e => getItem.qnt = e.target.value} 
                    defaultValue={getItem.qnt} 
                    style={{textAlign:'right'}} 
                    type="number" 
                    placeholder="00" />
                    <input 
                    className="inputBox" 
                    onChange={e => getItem.med = e.target.value}
                    defaultValue={getItem.med} 
                    maxLength="2" 
                    style={{textTransform:'uppercase'}} 
                    placeholder="UN" />
                </div>
            </div>
            <div className="boxDiv" >
                <div className="boxDivLeft">
                    <h2>Preço Forn.</h2>
                </div>
                <div className="boxDivRight">
                    <h2>R$</h2>
                    <input className="inputBox" defaultValue={getItem.preçoForn} type="number" placeholder="0,00" />
                </div>
            </div>
            <div className="boxDiv">
                <div id="date">
                    <h2>Reposição:</h2>
                    <input 
                    className="inputBox" 
                    defaultValue={getItem.dataRep}
                    style={{textTransform:'uppercase'}} 
                    type="date" />
                </div>
            </div>
        </div>
        <div id="saveCancel">
            <div className="saveCancel" onClick={() => sendItem()} id="saveButton"><p>SALVAR</p></div>
            <div className="saveCancel" onClick={() => close()} id="cancelButton"><p>CANCELAR</p></div>
        </div>
        </>
        )}
        </>
    )
}
