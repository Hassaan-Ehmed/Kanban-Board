import * as React from 'react';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Fade from '@mui/material/Fade';
import Zoom from '@mui/material/Zoom';
import '../../App.css'

export default function Tooltipp({text}:any) {
  return (
    <div className="tooltip-div">
      
      <Tooltip TransitionComponent={Zoom} title="A Tool Where You Track Your Tasks.">
      <h1>{text}</h1>
      </Tooltip>
    </div>
  );
}