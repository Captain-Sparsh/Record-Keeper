import "./App.css";
import Header from "./components/jsx_files/Header";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';

import { useState } from "react";

function App() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);



  const addData = ()=>{
    if(name!=="" && email!==""){
    setData([...data, {name,email}]);
    setName("");
    setEmail("");
    }

    else{
      window.alert("Fill all the boxes first");
    }
  }
  
  const revData=(index)=>{
    let arr = data;
    data.splice(index,1);
    setData([...arr]);

  }

  
  return (
    <div className="App">
      <Header />

      {/* FORM */}
      <div className="form">
        <Stack direction="row" spacing={3}>
          <TextField id="outlined-basic" label="Name" variant="outlined" value={name} onChange={(event) => setName(event.target.value)}  />
          <TextField id="outlined-basic" label="Email" variant="outlined" value={email} onChange={(event) => setEmail(event.target.value)} />
          <Button variant="contained" color="success" onClick= {addData}>
            <PersonAddAlt1Icon />
          </Button>
        </Stack>
      </div>

      {/* DATA  */}
      <div className="data">
        <div className="itemsHead">
          <h2>Name</h2>
          <h2>Email</h2>
          <h2>Remove</h2>
        </div>

        {
          data.map((element,index)=>{
              return(
                <div key = {index} className="items">
                    <h3>{element.name}</h3>
                    <h3>{element.email}</h3>
                    <Stack>
                      <Button variant="contained" color="error" onClick= {revData}>
                        <DeleteRoundedIcon/>
                      </Button>
                    </Stack>
                </div>
              )
          })
        }

      </div>
    </div>
  );
}

export default App;
