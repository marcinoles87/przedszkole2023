
import React, { useState } from 'react';
import './styleGrup.css';
import { Link } from 'react-router-dom';
import { getFirestore  , collection, addDoc ,  getDocs } from 'firebase/firestore';
import { projectStorage } from '../../firebase/config';
import  {v4} from 'uuid'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

function Wydarzenia() {

  const [password , setPassword] = useState(true);
  const [inputField1 , setInputField1] = useState('');

  console.log(inputField1)

  const saveDataToFireStore = () =>{

  }
  return (
    <div className='zdjecia_wydarzenia-container'>
        <h1>Wydarzenia w naszym przedszkolu</h1>
          <div className='zdjecia_wydarzenia_item'>
              {password ? 
              <>
                <input value={inputField1} placeholder='dodaj nagłówek' type="text" onChange={ (e) => setInputField1(e.target.value)}></input>
                <input placeholder='dodaj zdjecie' type='file'></input>
                <input placeholder='dodaj zdjecie' type='file'></input>
                <input placeholder='dodaj zdjecie' type='file'></input>
                <button onClick={saveDataToFireStore}>Zapisz</button>
                
              </>

              : ''
              
            }
          </div>
    </div>
  )
}

export default Wydarzenia