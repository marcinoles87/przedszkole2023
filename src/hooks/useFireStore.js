import React, { useState } from 'react'
import { projectFirestore } from '../firebase/config'

function useFireStore() {

const [docs , setDocs] = useState('');



  return (
    <div>useFireStore</div>
  )
}

export default useFireStore