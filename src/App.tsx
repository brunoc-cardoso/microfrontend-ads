import React from 'react'
import './styles/global.css'
import { useAds } from './useCase/useAds'

function App() {
  const { ad } = useAds()

  return (
    <div className="w-full">
      <img className="w-full h-56 bg-lime-700 flex" src={ad.image} alt="" />
    </div>
  )
}

export default App
