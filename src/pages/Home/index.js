import React, { Component, useEffect } from 'react';
import ReactDOM from 'react-dom';
import api from '../../services/api'

import '../../assets/scss/export.scss'
import ListItem from '../Item'
import Box from '../Box'
import MsgAlert from '../MsgAlert'

import logo from '../../assets/img/LogoONovoFioEletricoB.png'
import searchImg from '../../assets/img/search.svg'
import squares from '../../assets/img/squares.svg'
import squaresB from '../../assets/img/squaresB.svg'
import userImg from '../../assets/img/user.png'
import plusImg from '../../assets/img/plus.svg'
import bookImg from '../../assets/img/book.svg'
import trash from '../../assets/img/trash.svg'
import trashR from '../../assets/img/trashR.svg'
import { red } from 'ansi-colors';

var trashImg = trash
var trashButton = '#282828'

export default class Home extends Component {
    state = {
        search: [],
        reset: false,
        deleteMode: false,
        fontColor: '#FFF'
    }
    changeMode = () => {
        if (this.state.deleteMode === true) {
            this.setState({ deleteMode: false })
            trashImg = trash
            trashButton = '#282828'
            this.setState({ fontColor: '#FFF' })
        } else if (this.state.deleteMode === false) {
            this.setState({ deleteMode: true })
            trashImg = trashR
            trashButton = '#330000'
            this.setState({ fontColor: '#CC0000' })
            document.querySelector('#getBox').style.display = 'block'
            document.querySelector('body').style.overflow = 'hidden'
            ReactDOM.render(
                <MsgAlert
                    msg={`MODO LIMPEZA ATIVADO, PARA DESATIVAR CLIQUE NO ICONE DA LIXEIRA NOVAMENTE`}
                    buttonN={1}
                    buttonLeft={'OK'}
                    bLeftClass={'alertBtnPrimaryLg'}
                />, document.getElementById('getBox'))
        }
    }
    openBox = (page, id) => {
        document.querySelector('#getBox').style.display = 'block'
        document.querySelector('body').style.overflow = 'hidden'
        ReactDOM.render(<Box page={page} id={id} />, document.getElementById('getBox'))
        console.log('clickado')
    }
    msgAlertDel = (id, nome) => {
        document.querySelector('#getBox').style.display = 'block'
        document.querySelector('body').style.overflow = 'hidden'
        ReactDOM.render(
            <MsgAlert
                click={() => this.deleteItem(id)}
                msg={`Deseja realmente excluir "${nome}" da lista?`}
                buttonN={2}
                buttonLeft={'CANCELAR'}
                buttonRight={'EXCLUIR'}
                bLeftClass={'blackBtnPrimaryLg'}
                bRightClass={'alertBtnPrimaryLg'}
            />, document.getElementById('getBox'))
    }
    deleteItem = async (id) => {
        await api.delete(`/itens/delete/${id}`)
        this.setState({ reset: true })
        this.setState({ reset: false })
        ReactDOM.unmountComponentAtNode(document.getElementById('getBox'))
        document.querySelector('#getBox').style.display = 'none'
        document.querySelector('body').style.overflow = 'auto'
    }
    render() {
        return (
            <>
                <div id="getBox" />
                <div id="container">
                    <div id="headerTop">
                        <img src={logo} id="logoImg" alt="O Novo Fio Eletrico"></img>
                        <input
                            className="inputSearch"
                            type="text"
                            onChange={e => this.setState({ search: e.target.value })}
                            style={{ backgroundImage: `url(${searchImg})` }}
                            placeholder="Digite aqui o nome do produto..." />
                        <div id="rightHeader">
                            <div id="userImg" style={{ backgroundImage: `url(${userImg})`, backgroundSize: 'cover' }} />
                            <img alt="apps" id="squares" src={squares} />
                        </div>
                        <div id="buttonSide">
                            <div className="buttonSide" onClick={() => this.openBox('add', '')} id="buttonPlus" style={{ backgroundImage: `url(${plusImg})` }} />
                            <div className="buttonSide" onClick={() => this.changeMode()} id="buttonBook" style={{ backgroundImage: `url(${trashImg})`, backgroundColor: trashButton }} />
                        </div>
                    </div>
                    <div id="itemList">
                        <ul>
                            <h1 style={{ width: '60%' }}>Nome do produto</h1>
                            <h1 style={{ width: '10%' }}>Qnt. estoque</h1>
                            <h1 style={{ width: '10%' }}>Un. Medida</h1>
                            <h1 style={{ width: '20%' }}>Preço</h1>
                        </ul>
                    </div>
                    <ListItem
                        search={this.state.search}
                        openBox={this.openBox}
                        msgAlertDel={this.msgAlertDel}
                        reset={this.state.reset}
                        deleteMode={this.state.deleteMode}
                        fontColor={this.state.fontColor}
                    />
                </div>
            </>
        )
    }
}