import './UploadScreen.css'
import ProgressBar from './ProgressBar'
import logo from "../assets/logo.png"

function UploadScreen({ onNext, onBack }) {
  return (
    <div className="upload-screen gradient-main">

      <ProgressBar currentStep={1} />
      
      <div className="upload-content">
      <div className="logo-container">
          <img src={logo} alt="logo" className="logo" width={"300px"}/>
        </div>

        <div className="upload-buttons">
          <button className="btn-upload" onClick={onNext}>
            <svg className="upload-icon" viewBox="0 0 24 24" fill="none" stroke="#4DD0E1" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="17 8 12 3 7 8"/>
              <line x1="12" y1="3" x2="12" y2="15"/>
            </svg>
            Upload Photos
          </button>
          <button className="btn-camera" onClick={onNext}>
            <svg className="camera-icon" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
              <circle cx="12" cy="13" r="4"/>
            </svg>
            Take a Photo
          </button>
        </div>
      </div>
    </div>
  )
}

export default UploadScreen

