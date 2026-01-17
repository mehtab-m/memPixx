import { useState } from 'react'
import './App.css'
import WelcomeScreen from './components/WelcomeScreen'
import UploadScreen from './components/UploadScreen'
import EditScreen from './components/EditScreen'
import PaymentScreen from './components/PaymentScreen'
import PrintScreen from './components/PrintScreen'

function App() {
  const [currentScreen, setCurrentScreen] = useState(1)

  const handleNext = () => {
    setCurrentScreen(prev => Math.min(prev + 1, 5))
  }

  const handleBack = () => {
    setCurrentScreen(prev => Math.max(prev - 1, 1))
  }

  return (
    <div className="app">
      {currentScreen === 1 && <WelcomeScreen onNext={handleNext} />}
      {currentScreen === 2 && <UploadScreen onNext={handleNext} onBack={handleBack} />}
      {currentScreen === 3 && <EditScreen onNext={handleNext} onBack={handleBack} />}
      {currentScreen === 4 && <PaymentScreen onNext={handleNext} onBack={handleBack} />}
      {currentScreen === 5 && <PrintScreen onBack={handleBack} />}
    </div>
  )
}

export default App
