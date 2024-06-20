import logo from './logo.svg';
import './App.css';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Button, Grid } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import { useState } from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';



function App() {

  const [slideValue, setSlideValue] = useState()
  const [uppercase, setUppercase] = useState(true)
  const[lowercase , setLowercase] = useState(true)
  const [number , setNumber] = useState(false)
  const [symbol ,setSymbol] =useState(false)
  const [passwords , setPasswords] = useState('')

  const handleSlideValue = (value) => {
    setSlideValue(value)
    return `${value}`;
  }

  const handleUppercase = (event) => {
    setUppercase(event.target.checked)
  }
  const handleLowercase=(event)=>{
    setLowercase(event.target.checked)
  }
  const handleNumber=(event)=>{
    setNumber(event.target.checked)
  }
  const handleSymbols=(event)=>{
      setSymbol(event.target.checked)
  }

  const generateRandomPassword=()=>{
    let charset=''
    // if(uppercase && lowercase && number && symbol){
    //     charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=<>?"
    // }
    // else if(uppercase && lowercase && number){
    //   charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    // }
    // else if(uppercase && lowercase && symbol){
    //   charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    // }
    if(uppercase){
      charset = charset.concat('ABCDEFGHIJKLMNOPQRSTUVWXYZ')
    }
    if(lowercase){
      charset = charset.concat('abcdefghijklmnopqrstuvwxyz')
    }
    if(number){
      charset = charset.concat('0123456789')
    }
    if(symbol){
      charset = charset.concat('!@#$%^&*()_-+=<>?')
    }

    let password = "";
    for (let i = 0; i < slideValue; ++i) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset.charAt(randomIndex);
    }
    setPasswords(password)


    // console.log('password' , password)
  }

  const handleCopy=()=>{
    navigator.clipboard.writeText(passwords)
    alert('Password copy')
  }

  return (
    <div style={{ backgroundColor: '#4158D0', backgroundImage: 'linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)', height: '100vh' }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: "center", paddingTop: 10 }}>
        <Card sx={{ width: '500px', background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', backdropFilter: 'blur(10px)', boxShadow: '0 0 10px rgba(0, 0, 0, 0.15)', border: "2px solid rgb(211 204 204)" }} >
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <span style={{color: "white", fontSize: 18}}>{passwords}</span>
                <span style={{ float: 'right' }}><IconButton aria-label="Copy" size="large" sx={{ color: 'white' }} onClick={handleCopy}><ContentCopyIcon /></IconButton></span>
              </Grid>
              <Grid item xs={12}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', color: "white", fontSize: 18 }}>
                  <Box>
                    Charater Length
                  </Box>
                  <Box>
                    {slideValue}
                  </Box>
                </Box>
                <Box>
                  <Slider
                    aria-label="charater length"
                    defaultValue={8}
                    getAriaValueText={handleSlideValue}
                    valueLabelDisplay="auto"
                    shiftStep={30}
                    step={1}
                    marks
                    min={5}
                    max={20}
                    style={{ color: 'white' }}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControlLabel
                  sx={{ color: 'white', fontSize: 14 }}
                  control={
                    <Checkbox
                      checked={uppercase}
                      onChange={handleUppercase}
                      sx={{ color: 'white', '&.Mui-checked': { color: 'white' } }} />}
                  label="Include Uppercase Letters" />
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControlLabel
                  sx={{ color: 'white', fontSize: 14 }}
                  control={
                    <Checkbox
                      checked={lowercase}
                      onChange={handleLowercase}
                      sx={{ color: 'white', '&.Mui-checked': { color: 'white' } }} />}
                  label="Include Lowercase Letters" />
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControlLabel
                  sx={{ color: 'white', fontSize: 14 }}
                  control={
                    <Checkbox
                      checked={number}
                      onChange={handleNumber}
                      sx={{ color: 'white', '&.Mui-checked': { color: 'white' } }} />}
                  label="Include Number" />
              </Grid>
              <Grid item xs={12} md={6}>
              <FormControlLabel
                  sx={{ color: 'white', fontSize: 14 }}
                  control={
                    <Checkbox
                      checked={symbol}
                      onChange={handleSymbols}
                      sx={{ color: 'white', '&.Mui-checked': { color: 'white' } }} />}
                  label="Include Symbols" />
              </Grid>
              <Grid item xs={12} md={12}>
                    <Button variant='outlined' fullWidth sx={{color:'white',borderColor:'white'}} onClick={generateRandomPassword}>
                      generate password
                    </Button>
              </Grid>

            </Grid>
          </CardContent>
        </Card>
      </Box>

    </div>
  );
}

export default App;
