import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import SendIcon from "@mui/icons-material/Send";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { _addTaskInBacklog } from "../../redux/slices/kanban-board";
import {  getCurrentTimeStamp } from "../../utils/helperFunctions";
import { Divider } from "@mui/material";


// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();
//     palette:{
//         primary:{
//             main:"#ffffff"
//             },
//              secondary:{
//                 main:"#aaaaaa"
//              }

//     }

// });

export default function Formm({ buttonTxt,onClose }: any) {
  
const dispatch = useAppDispatch();
const storeState = useAppSelector( state => state.kanban );

    const [fieldsError, setFieldsError] = React.useReducer(

    (state: any, newState: any) => ({ ...state, ...newState }) ,

    { titleError: false, descError: false, nameError: false, }
 
    );

const [formData,setFormData] = React.useReducer(
    
    (state:any,newState:any) => ({...state,...newState}),
    
    {title:"",desc:"",name:""}
)



// React.useEffect(()=>{

//     if(!formData.title.trim()){

//         setFieldsError({titleError:true})
//     }else{
        
//         setFieldsError({titleError:false})
//     }


// },[formData.title, formData.desc, formData.name])


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    formData.title === "" ? setFieldsError({titleError:true}) : setFieldsError({titleError:false})
    formData.desc === "" ? setFieldsError({descError:true}) : setFieldsError({descError:false})
    formData.name === "" ? setFieldsError({nameError:true}) : setFieldsError({nameError:false})
    

if(formData.title && formData.desc && formData.name){

  let timeStamp  = getCurrentTimeStamp();

const updatedFormData = {
  ...formData,
  timeStamp:timeStamp
}

dispatch(_addTaskInBacklog(updatedFormData as any))

    setFormData({title:"",desc:"",name:""});
    onClose();

  }


};

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs" >
        <CssBaseline />
        <Box
        
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5"  sx={{pt:2}}>
           Add Task
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
            value={formData.title}
              margin="normal"
              required
              fullWidth
              id="title"
              label="Title"
              name="title"
              autoFocus
             error={fieldsError.titleError ? true : false}
              helperText={fieldsError.titleError && "Field should not be empty"}
              onChange={e => setFormData({title:e.target.value})}
            />
            <TextField
            value={formData.desc}
              margin="normal"
              required
              fullWidth
              id="desc"
              label="Description"
              name="desc"
              autoFocus
           
              error={ fieldsError.descError ? true : false}
                
              helperText={ fieldsError.descError && "Field should not be empty" }
           
           onChange={ e => setFormData( { desc: e.target.value } ) }

           />
            <TextField
            value={formData.name}
              margin="normal"
              required
              fullWidth
              id="name"
              label="Created by"
              name="uname"
              autoFocus
  
              error={ fieldsError.nameError ? true : false}
              helperText={ fieldsError.nameError && "Field should not be empty"}

              onChange={ e => setFormData( { name: e.target.value } ) }
            />

<Divider sx={{marginTop:"10px"}}/>
            <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
              {buttonTxt}
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
