import axios from 'axios'
import './App.css'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Tab from './components/Tabs/Tab'
import Player from './components/Playears/Player'
import { Suspense, useState } from 'react'
import settle from './../node_modules/axios/lib/core/settle';
import Selected from './components/Selected]/Selected'
import { ToastContainer } from 'react-toastify'
const data = axios.get("/player.json")


function App() {
  const [coin, setCoin] = useState(600000000)
  const [tog, setTog] = useState(true)
  const [select, setSelect] = useState([])


  return (
    <>
      <Navbar coin={coin} ></Navbar>
      <Hero></Hero>
      <Tab tog={tog} setTog={setTog} select={select}></Tab>
      {
        tog?<Suspense>
        <Player data={data} select={select} setSelect={setSelect} coin={coin} setCoin={setCoin} ></Player>
      </Suspense>:
      <Selected select={select} setSelect={setSelect} coin={coin} setCoin={setCoin}></Selected>
      }
      
      <ToastContainer></ToastContainer>
      
    </>
  )
}

export default App
