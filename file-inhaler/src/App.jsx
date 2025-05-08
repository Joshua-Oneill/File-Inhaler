import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PhotoCard from './components/photocard'

function App() {
  return(
    <>
      <PhotoCard photoData={{title: "AWesome photo", date: "yesterday cunt", picture: '\assets\wacth4.jpg'}} />
    </>
  )
}

export default App;