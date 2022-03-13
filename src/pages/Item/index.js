import React, { useState, useEffect } from 'react';
import api from '../../services/api'

import loadingGif from '../../assets/img/loading.svg'
import './style.css'

import Item from './item'

export default function ListItem({ search, openBox, msgAlertDel, deleteMode, fontColor, reset }) {
    function textReplace(text) {
        text = text.toLowerCase();
        text = text.replace(new RegExp('[ÁÀÂÃ]', 'gi'), 'a');
        text = text.replace(new RegExp('[ÉÈÊ]', 'gi'), 'e');
        text = text.replace(new RegExp('[ÍÌÎ]', 'gi'), 'i');
        text = text.replace(new RegExp('[ÓÒÔÕ]', 'gi'), 'o');
        text = text.replace(new RegExp('[ÚÙÛ]', 'gi'), 'u');
        text = text.replace(new RegExp('[Ç]', 'gi'), 'c');
        return text;
    }
    const [info, setInfo] = useState([])
    const [newItem, setNewItem] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        async function getItens() {
            setLoading(true)
            const response = await api.get('/itens/get/all')
            setInfo(response.data.sort((a, b) => (textReplace(a.produto) > textReplace(b.produto)) ? 1 : -1))
            setLoading(false)
        }
        getItens()
    }, [reset])
    const filter = info.filter((item) => {
        return textReplace(item.produto).includes(search)
    })
    function updateItem(getId) {
        const itemUpdated = info.filter((item) => {
            item._id.includes(getId)
        })
        return itemUpdated
    }
    return (
        <>
            {loading === true ? <div id="loading"><img src={loadingGif} alt="carregando" /></div> : (filter.map((info) => (
                <Item
                    key={info._id}
                    id={info._id}
                    nome={info.produto}
                    quantidade={info.qnt}
                    unidade={info.med}
                    preço={info.preçoClient}
                    openBox={openBox}
                    msgAlertDel={msgAlertDel}
                    deleteMode={deleteMode}
                    fontColor={fontColor}
                />
            )))}
            {
                console.log(updateItem('5d8cc1a6964888213c34fb4c'))
            }
        </>
    )
}