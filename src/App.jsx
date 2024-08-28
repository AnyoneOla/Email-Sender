import { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import './App.css'
import DataTable from './components/TableRow'
import BEStatus from './components/BEStatus'
import TabBar from './components/TabBar'
import data from './assets/email.json'
import Topbar from './components/Topbar';
import FileUpload from './components/FileUpload';

function App() {
  const [status, setStatus] = useState('');
  const [active, setActive] = useState('Main');


  return (
    <>
    <Topbar />
    <BEStatus status={status} />
    <TabBar active={active} setActive={setActive} />

    {
      (active==='Main') && <>

        <div style={{display:'flex', justifyContent:'space-around', margin:'50px'}}>
            <TextField
              sx={{ m: 1, width: '35ch' }}
              disabled
              id="outlined-disabled"
              label="Source Email ID"
              defaultValue="anyone2000anyone@gmail.com"
            />
          <div style={{display:'flex', justifyContent:'center', alignItems:'center', width:'90px', border:'1px solid black', borderRadius:'10px', backgroundColor:'#27ae60', cursor:'pointer', margin:'10px'}}>
            <div style={{color:'white'}}>
              Start
            </div>
          </div>
        </div>
        <div>
          <DataTable />
        </div>
      </>
    }
    {
      (active==='Draft Email') && <>
        <div style={{display:'flex', justifyContent:'center', alignItems:'center', width:'100vw', marginTop:'50px'}}>
          <TextField
            id="filled-multiline-flexible"
            placeholder='Subject of the Email'
            label="Email Subject"
            sx={{width:'80%'}}
          />
        </div>
        <div style={{display:'flex', justifyContent:'center', alignItems:'center', width:'100vw', marginTop:'50px'}}>
          <TextField
            id="filled-multiline-flexible"
            placeholder={data.email}
            label="Email Body"
            sx={{width:'80%'}}
            multiline
          />
        </div>
      </>
    }

    {
      (active==='Update') && <>
        <FileUpload />
      </>
    }
    
    
    </>
  )
}

export default App
