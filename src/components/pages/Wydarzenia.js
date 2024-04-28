
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
  const [imgs2 , setImgs2] = useState('');
  const [imgs3 , setImgs3] = useState('');
  const [firestoreValues , setFirestoreValue] = useState('');

  const db = getFirestore();


  const showData = async () => {

    const querySnapShot = await getDocs(collection(db,"wydarzeniaPrzedszkola2024"));
    const temporaryBase = []
  

    querySnapShot.forEach( (doc) => {
      temporaryBase.push(doc.data())
    });
  
    setFirestoreValue(temporaryBase)
  }

  const handleUpload = (e) => {
  
    const imgs = ref(projectStorage , `wydarzenia_images/${v4()}`);
  
    uploadBytes(imgs,e.target.files[0]).then(data =>{
      getDownloadURL(data.ref).then(val =>{
        setImgs(val)
      })
    })
   
  }

  const handleUpload2 = (e) => {
  
    const imgs = ref(projectStorage , `wydarzenia_images/${v4()}`);
  
    uploadBytes(imgs,e.target.files[0]).then(data =>{
      getDownloadURL(data.ref).then(val =>{
        setImgs2(val)
      })
    })
   
  }

  const handleUpload3 = (e) => {
  
    const imgs = ref(projectStorage , `wydarzenia_images/${v4()}`);
  
    uploadBytes(imgs,e.target.files[0]).then(data =>{
      getDownloadURL(data.ref).then(val =>{
        setImgs3(val)
      })
    })
   
  }

  
  const saveData =  async () =>{
      const docRef = await addDoc(collection(db,'wydarzeniaPrzedszkola2024') ,
    {

      text :inputField1 ,
      imgUrl : imgs ,
      imgUrl2 : imgs2 ,
      imgUrl3 : imgs3 ,

    })

    alert('data base update')
  }

  const deleteData = (item) => {
    

  }

  const handleModal = (e) => {
   
    let el = e.target;
    el.classList.toggle('img-modal')
  
  }

  
  return (
    <div className='zdjecia_wydarzenia-container'>
        <h1>Wydarzenia w naszym przedszkolu</h1>

          <div className='zdjecia_wydarzenia_item'>
              {password ? 
              <>
                <input value={inputField1} placeholder='dodaj nagłówek' type="text" onChange={ (e) => setInputField1(e.target.value)}></input>

                <input placeholder='dodaj zdjecie' type='file' onChange={ (e) => handleUpload(e)} ></input>
                <input placeholder='dodaj zdjecie' type='file' onChange={ (e) => handleUpload2(e)}></input>
                <input placeholder='dodaj zdjecie' type='file' onChange={ (e) => handleUpload3(e)}></input>
            
                <button onClick={saveData}>Zapisz</button>
                <div>
                  <button onClick={showData}>Pokaz wydarzenia</button>
                </div>
                
              </>

              : ''
              
            }
          </div>

          <div className='wydarzenia-container'>

            {firestoreValues && firestoreValues.map( (item , index) => {

              return(
                <div className='wydarzenia-item'>

                  <h1>{item.text}</h1>

                    <div className='wydarzenia-galeria'>

                        <img src={item.imgUrl} alt={item.text} onClick={handleModal}></img>
                        <img src={item.imgUrl2} alt={item.text} onClick={handleModal}></img>
                        <img src={item.imgUrl3} alt={item.text} onClick={handleModal}></img>

                        <button onClick={deleteData}>Usuń</button>

                      </div>
                
                 
                </div>
              )
            })}

          </div>
    </div>
  )
}

export default Wydarzenia