
import './App.css';
import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";
import WaterDropIcon from '@mui/icons-material/WaterDrop';


function App() {
  const [city,setCity]=useState('')
  const [img,setImg]=useState('')
  const [text,setText]=useState('')
  const [weather,setWeather]=useState({}) 
  const [temperature,setTemperature]=useState('')
  const [humidity,setHumidity]=useState('')
  
    const handleSearch=async()=>
    {
      // const data = fetch(`http://api.weatherapi.com/v1/current.json?key=4e2e93ca09054d7595292317230805&q=${city}&aqi=no`)
      // .then(response => response.json())
      // .then(json => 
      //   setDat(json)
      //   )

      //   console.log("data",dat);
      alert(city)
      const url = `http://api.weatherapi.com/v1/current.json?key=4e2e93ca09054d7595292317230805&q=${city}&aqi=no`;
         try{
            const response = await fetch (url);
            const data =await response.json();
            setImg(data.current.condition.icon)
            setText(data.current.condition.text)
            setTemperature(data.current.feelslike_c)
            setHumidity(data.current.humidity)
            setWeather(data);
         }catch(err){
            console.log(err);
         }
      console.log(weather);
    }

    const SearchBox=()=>{
      return(
        <>
        <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Google Maps"
        inputProps={{ 'aria-label': 'search google maps' }}
        onChange={(e)=>setCity(e.target.value)}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={handleSearch}>
        <SearchIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
    </Paper>
        </>
      )
    }
  return (
    <>
      <div style={{width:'100%',height:'20vh',backgroundColor:'black',display:'flex',justifyContent:'center',alignItems:'center'}}>
        <div style={{margin:20}}>
          {/* <SearchBox/> */}
          {SearchBox()}
        </div>
      </div>
      <div style={{width:'100%',height:'100vh',backgroundColor:'#0f2a4d'}}>
          <div className='container' style={{display:'flex',flexWrap:'wrap',justifyContent:'space-around'}}>
              <div style={{width:'200px',height:'200px',margin:'20px',alignItems:'center'}}>
                <div>
                  <img src={img} width={'150px'} style={{paddingLeft:20}}/>  
                </div>
                <div style={{color:'white',textAlign:'center',fontWeight:'bold',fontSize:40}}>
                  {text}
                </div>
              </div>
              <div style={{width:'200px',color:'white',height:'100px',margin:'20px',textAlign:'center',fontSize:40,display:'flex',alignItems:'center'}}>
                {temperature} &#8451;
              </div>
              <div style={{width:'200px',color:'white',height:'100px',margin:'20px',textAlign:'center',fontSize:40,display:'flex',alignItems:'center'}}>
                {humidity }<WaterDropIcon/>
              </div>
          </div>
      </div>
    </>
  );
}

export default App;
