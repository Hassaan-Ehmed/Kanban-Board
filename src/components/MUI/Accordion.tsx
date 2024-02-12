import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

export default function Accordionn() {
  return (
    <div style={{width:"100%",borderColor:"red"}}>
      <Accordion sx={{
        boxShadow:"0",
        paddingTop:0,
        paddingBottom:0,
        marginTop:0,
        marginBottom:0,
        "& .MuiListItemText-root ":{
            marginTop:0,
            marginBottom:0
            }
      }}>
        <AccordionSummary
       
     sx={{
        marginTop:0,
        marginBottom:0
       , "& .MuiListItemText-root ":{
        marginTop:0,
        marginBottom:0
        }
     }}
     
          aria-controls="panel1-content"
          id="panel1-header"
        >
     <strong>Desc: </strong>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
   
    </div>
  );
}