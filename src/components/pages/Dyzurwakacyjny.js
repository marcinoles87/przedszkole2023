import React from 'react'
import './styleGrup.css';

import kartaZapisu from '../doc/karta_zapisu.docX' ;
import rekNasi from '../doc/rek_wak_nasi.doc' ;
import rekInni from '../doc/rek_wak_inni.doc' ;
import deklaracjaWakacyjna from '../doc/deklaracja_wak_nasi_rodo.doc' ;

function Dyzurwakacyjny() {


  return (
    <div className='dyzur-container'>
      <h1>Informacje na temat dyżuru wakacyjnego 2024 w naszym przedszkolu</h1> 

    <div className='dyzur-link-container'>
      <h2>Karta zapisu dziecka na dyżur wakacyjny  <a href={kartaZapisu} >link</a></h2>
      <h2>Dyżur wakacyjny dla dzieci uczeszczających do naszego przedszkola <a href={rekNasi} >link</a></h2>
      <h2>Dyżur wakacyjny dla dzieci nieuczeszczających do naszego przedszkola <a href={rekInni} >link</a></h2>
      <h2>Deklaracja udziału dziecka w dyżurze wakacyjnym w przedszkolu samorządowym nr 111 "Pod Modrzewiem" w Krakowie <a href={deklaracjaWakacyjna} >link</a></h2>
    </div>
      
       </div>
  )
}

export default Dyzurwakacyjny