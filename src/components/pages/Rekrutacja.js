import React from 'react'
import './styleGrup.css'
import doc from '../doc/rek2025.docx'

function Rekrutacja() {
  return (
    <div className='rekrutacja-container'>
       

<div className='rekrutacja-info'>

    <h1>Rekrutacja na rok szkolny 2025/2026</h1>

    <h2>Dzieci kontynuujące korzystanie</h2>

    <p>Rodzice, których dzieci uczęszczają obecnie do przedszkola oraz będą <b>nadal uczęszczać</b>  od
      1 września 2025 r. proszeni są o złożenie deklaracji o kontynuowaniu wychowania
      przedszkolnego.
      Deklaracje w wersji papierowej będą dostępne u osoby pełniącej dyżur w szatni  <b>od 20 do 28
      lutego 2025 r.</b> lub w wersji elektronicznej <a href={doc}>Link</a> .
      Niezłożenie deklaracji w ustalonym terminie jest równoznaczne z rezygnacją z miejsca w
      przedszkolu na nowy rok szkolny.
      </p>

      <h2>Dzieci nowe</h2>
      <p>Rekrutacja do przedszkola dla dzieci nowych będzie trwać od <b>3 do 31 marca 2025 r.</b>  Informacje
    dotyczące zasad rekrutacji są zamieszczone na <u>Portalu Edukacyjnym Miasta Krakowa.</u>
    Kryteria naboru do krakowskich przedszkoli samorządowych określa <u>art. 131 ust. 2 ustawy z dnia
    14 grudnia 2016 r. Prawo oświatowe (Dz. U. z 2024 r. poz. 737 z późn. zm.) uchwała nr
    LXVI/1650/17 Rady Miasta Krakowa z dnia 15 marca 2017 r. w sprawie określenia kryteriów naboru do
    samorządowych przedszkoli na drugim etapie postępowania rekrutacyjnego oraz dokumentów niezbędnych do
    potwierdzania tych kryteriów (ze zm.).</u>
    Wypełnione i podpisane wnioski można będzie składać w kancelarii Przedszkola codziennie w
    godz. 7:00 do 15:00. Kolejność składania wniosków nie ma znaczenia.
    </p>



 

</div>

        
    </div>
  )
}

export default Rekrutacja