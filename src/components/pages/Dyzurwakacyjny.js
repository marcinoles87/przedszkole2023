import React from 'react'
import './styleGrup.css';

import kartaZapisu from '../doc/karta_zapisu.docX' ;
import deklaracjaWakacyjna from '../doc/deklaracja_wak_nasi_rodo.doc' ;

function Dyzurwakacyjny() {


  return (
    <div className='dyzur-container'>
      <h1>Informacje na temat dyżuru wakacyjnego 2024 w naszym przedszkolu</h1> 

    <div className='dyzur-link-container'>
      <h2>Karta zapisu dziecka na dyżur wakacyjny  <a href={kartaZapisu} >link</a></h2>
      <h2>Deklaracja udziału dziecka w dyżurze wakacyjnym w przedszkolu samorządowym nr 111 "Pod Modrzewiem" w Krakowie <a href={deklaracjaWakacyjna} >link</a></h2>
    </div>

    <div className='dyzur-info'>
    <h3>
        DYŻUR WAKACYJNY 2024 DLA DZIECI  UCZĘSZCZAJĄCYCH do Przedszkola nr 111 „Pod Modrzewiem”  
    </h3>
    
    <p>
      W dniach  <b>od 20 do 27 marca 2024 r.</b> będzie można zapisać dziecko na dyżur wakacyjny do naszego przedszkola. <br></br>
      Dyżur w tym roku będzie odbywał się w <b>sierpniu</b>. <br></br> Rodzice dzieci chętnych na dyżur w naszej placówce wypełniają deklarację. <br></br>
      Rodzice dzieci chętnych na dyżur w innym przedszkolu wypełniają kartę zapisu, podbijają ją pieczątką naszej placówki i zanoszą do przedszkola, którym są zainteresowani. 
      Deklaracje i karty zapisu w wersji papierowej będą dostępne w szatni  <b>od 20 marca 2024 r. </b> <br></br>
      Wypełnioną i podpisaną deklarację prosimy o złożenie u osoby pełniącej dyżur w szatni lub bezpośrednio w kancelarii przedszkola, czynnej w godzinach od 7:00 do 15:00 
    </p>


    </div>

      <div className='dyzur-info'>
      <h3>DYŻUR WAKACYJNY 2024 DLA DZIECI  NIEUCZĘSZCZAJĄCYCH  do Przedszkola nr 111 „Pod Modrzewiem”</h3>  

<p>W dniach <b>od 2 do 5 kwietnia 2024 r.</b>  będzie można zapisać dziecko, które
nie uczęszczało do naszego przedszkola na dyżur wakacyjny, który będzie odbywał się w naszym przedszkolu w sierpniu.

W pierwszej kolejności będą przyjmowane: <br></br>
1.	Dzieci, które uczęszczały do przedszkoli zamkniętych na dwa miesiące na terenie naszej dzielnicy.<br></br>
2.	Dzieci, których rodzeństwo uczęszcza do naszej placówki.<br></br>
3.	Dzieci, które uczęszczały do przedszkoli zamkniętych na dwa miesiące na terenie Krakowa.<br></br>
4.	Pozostałe dzieci – decyduje kolejność zgłoszeń.<br></br>

Rodzice dzieci, które nie uczęszczały do naszego przedszkola chętnych na dyżur w naszej placówce wypełniają kartę zapisu pobraną ze swojej placówki, podbijają ją pieczątką swojej placówki i przynoszą do naszego przedszkola. 
</p>
      </div>

     
      
       </div>
  )
}

export default Dyzurwakacyjny