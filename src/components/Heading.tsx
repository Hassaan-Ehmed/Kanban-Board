import React from 'react'
import Tooltipp from './MUI/Tooltip'
import Dialogg from './MUI/Dialog'

export default function Heading({ text }:any) {
  return (
    <div className='head-box'>

<Dialogg/>
      <Tooltipp text={text}/>
    </div>
  )
}
