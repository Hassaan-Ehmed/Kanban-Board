import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import SendIcon from "@mui/icons-material/Send";
import AddIcon from '@mui/icons-material/Add';
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { _addTask } from "../../redux/slices/kanban-board";

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

export default function Formm({ buttonTxt }: any) {
  
const dispatch = useAppDispatch();
const storeState = useAppSelector( state => state.kanban );

    const [fieldsError, setFieldsError] = React.useReducer(

    (state: any, newState: any) => ({ ...state, ...newState }) ,

    { titleError: false, descError: false, nameError: false, }
 
    );

const [inputTexts,setInputTexts] = React.useReducer(
    
    (state:any,newState:any) => ({...state,...newState}),
    
    {title:"",desc:"",name:""}
)

// const [tasks,setTasks] = React.useState<any>([]);


// React.useEffect(()=>{

//     if(!inputTexts.title.trim()){

//         setFieldsError({titleError:true})
//     }else{
        
//         setFieldsError({titleError:false})
//     }


// },[inputTexts.title, inputTexts.desc, inputTexts.name])


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    inputTexts.title === "" ? setFieldsError({titleError:true}) : setFieldsError({titleError:false})
    inputTexts.desc === "" ? setFieldsError({descError:true}) : setFieldsError({descError:false})
    inputTexts.name === "" ? setFieldsError({nameError:true}) : setFieldsError({nameError:false})
    

if(inputTexts.title && inputTexts.desc && inputTexts.name){

  dispatch(_addTask(inputTexts));
  
    setInputTexts({title:"",desc:"",name:""});

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
            value={inputTexts.title}
              margin="normal"
              required
              fullWidth
              id="title"
              label="Title"
              name="title"
              autoFocus
             error={fieldsError.titleError ? true : false}
              helperText={fieldsError.titleError && "Field should not be empty"}
              onChange={e => setInputTexts({title:e.target.value})}
            />
            <TextField
            value={inputTexts.desc}
              margin="normal"
              required
              fullWidth
              id="desc"
              label="Description"
              name="desc"
              autoFocus
           
              error={ fieldsError.descError ? true : false}
                
              helperText={ fieldsError.descError && "Field should not be empty" }
           
           onChange={ e => setInputTexts( { desc: e.target.value } ) }

           />
            <TextField
            value={inputTexts.name}
              margin="normal"
              required
              fullWidth
              id="  "
              label="Created by"
              name="uname"
              autoFocus
  
              error={ fieldsError.nameError ? true : false}
              helperText={ fieldsError.nameError && "Field should not be empty"}

              onChange={ e => setInputTexts( { name: e.target.value } ) }
            />

            <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
              {buttonTxt}
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
