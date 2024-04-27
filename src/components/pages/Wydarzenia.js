
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
  const [imgs , setImgs] = useState('');

  const db = getFirestore();

  console.log(db)

  console.log(inputField1)

  const handleUpload = (e) => {
  
    const imgs = ref(projectStorage , `wydarzeniaPrzedszkola2024/${v4()}`);
  
    uploadBytes(imgs,e.target.files[0]).then(data =>{
      getDownloadURL(data.ref).then(val =>{
        setImgs(val)
      })
    })
  }

  
  

  const saveData =  async () =>{
      const docRef = await addDoc(collection(db,'wydarzeniaPrzedszkola2024') ,
    {

      text :inputField1 ,
      imgUrl : imgs

    })
  }

  
  return (
    <div className='zdjecia_wydarzenia-container'>
        <h1>Wydarzenia w naszym przedszkolu</h1>
          <div className='zdjecia_wydarzenia_item'>
              {password ? 
              <>
                <input value={inputField1} placeholder='dodaj nagłówek' type="text" onChange={ (e) => setInputField1(e.target.value)}></input>

                <input placeholder='dodaj zdjecie' type='file' onChange={ (e) => handleUpload(e)}></input>
            
                <button onClick={saveData}>Zapisz</button>
                
              </>

              : ''
              
            }
          </div>
    </div>
  )
}

export default Wydarzenia