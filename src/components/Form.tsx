import React from 'react'
import '../App.css'
import SignIn from './MUI/FormTemplate'
import Formm from './MUI/FormTemplate'


export default function Form({onClose}:any) {
  return (
    <div className='form-box'>

<Formm  buttonTxt={"Add"} onClose={onClose}  />

    </div>
  )
}
