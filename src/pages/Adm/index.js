import React from 'react'
import ReactDOM from 'react-dom'

export default function Adm() {

  return (
    <>
      <button className="defaultEffectBtn defaultBtnPrimaryLg">
        BOTÃO
      </button>
      <button className="defaultEffectBtn alertBtnPrimaryLg">
        BOTÃO
      </button>
      <button className="defaultEffectBtn saveBtnPrimaryLg">
        BOTÃO
      </button>
      <button className="defaultEffectBtn warningBtnPrimaryLg">
        BOTÃO
      </button>
      <button className="defaultEffectBtn blackBtnPrimaryLg">
        BOTÃO
      </button>
      <button className="defaultEffectBtn defaultBtnSecondaryLg">
        BOTÃO
      </button>
      <p className="defaultTinySistemTxt">Lorem, ipsum</p>
      <p className="defaultMediumSistemTxt">Lorem, ipsum</p>
      <p className="defaultLargeSistemTxt">Lorem, ipsum</p>

      <br />
      <div className="alertBoxDefault defaultTinySistemTxt">
        <p className="defaultMediumSistemTxt" >Alerta!</p>
        <p className="alertBoxText">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Integer vitae erat metus.
        Proin nec consectetur lorem.
        Nam semper laoreet purus, non ultricies libero viverra commodo.</p>
        <div className="alertBoxButtons">
          <button className="defaultEffectBtn saveBtnPrimaryLg">Sim</button>
          <button className="defaultEffectBtn defaultBtnSecondaryLg">Não</button>
        </div>
      </div>
      <div className="grid-item">
        <div className="grid-item-code" >
          <p>Cod.</p> 000000
        </div>
      </div>
    </>
  )
}