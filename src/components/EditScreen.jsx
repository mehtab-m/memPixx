import { useState } from 'react'
import './EditScreen.css'
import ProgressBar from './ProgressBar'

function EditScreen({ onNext, onBack }) {
  const [selectedFrame, setSelectedFrame] = useState('no-frame')
  const [customText, setCustomText] = useState('')
  const [addDate, setAddDate] = useState(true)

  return (
    <div className="edit-screen gradient-edit">
      <div className="background-circles">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
        <div className="circle circle-4"></div>
        <div className="circle circle-5"></div>
        <div className="circle circle-6"></div>
        <div className="circle circle-7"></div>
        <div className="circle circle-8"></div>
      </div>
 
      <ProgressBar currentStep={2} />
      
      <div className="edit-content">
        <div className="image-selection">
          <div className="thumbnail-row">
            <div className="thumbnail">
              <div className="thumbnail-image">
                <svg viewBox="0 0 100 100" fill="#4DD0E1">
                  <path d="M20 30 L50 10 L80 30 L80 70 L50 90 L20 70 Z"/>
                  <circle cx="50" cy="50" r="15" fill="#4DD0E1"/>
                </svg>
              </div>
              <button className="remove-thumbnail">×</button>
            </div>
            <div className="thumbnail">
              <div className="thumbnail-image">
                <svg viewBox="0 0 100 100" fill="#4DD0E1">
                  <path d="M20 30 L50 10 L80 30 L80 70 L50 90 L20 70 Z"/>
                  <circle cx="50" cy="50" r="15" fill="#4DD0E1"/>
                </svg>
              </div>
              <button className="remove-thumbnail">×</button>
            </div>
            <div className="thumbnail">
              <div className="thumbnail-image">
                <svg viewBox="0 0 100 100" fill="#4DD0E1">
                  <path d="M20 30 L50 10 L80 30 L80 70 L50 90 L20 70 Z"/>
                  <circle cx="50" cy="50" r="15" fill="#4DD0E1"/>
                </svg>
              </div>
              <button className="remove-thumbnail">×</button>
            </div>
            <button className="add-thumbnail">
              <span className="plus-icon">+</span>
            </button>
          </div>
          
          <div className="mainPreviewContainer"><div className="main-preview">
            <div className="preview-image">
              <svg viewBox="0 0 200 150" fill="#4DD0E1">
                <path d="M20 30 L100 10 L180 30 L180 120 L100 140 L20 120 Z"/>
                <circle cx="100" cy="75" r="25" fill="#4DD0E1"/>
              </svg>
            </div>
            <button className="remove-preview">×</button>
          </div></div>
          <div className="titleContainer"><h3 className="section-title">Choose your frame</h3></div>
        </div>

        <div className="frame-selection">
         
          <div className="frame-options">
            <div 
              className={`frame-option ${selectedFrame === 'no-frame' ? 'selected' : ''}`}
              onClick={() => setSelectedFrame('no-frame')}
            >
              <div className="frame-preview no-frame">
                <div className="frame-image-placeholder"></div>
              </div>
              <span className="frame-label">No Frame</span>
            </div>
            <div 
              className={`frame-option ${selectedFrame === 'colorful' ? 'selected' : ''}`}
              onClick={() => setSelectedFrame('colorful')}
            >
              <div className="frame-preview colorful-frame">
                <div className="frame-image-placeholder"></div>
                <div className="colorful-border"></div>
              </div>
              <span className="frame-label">Colorful</span>
            </div>
            <div 
              className={`frame-option ${selectedFrame === 'classic' ? 'selected' : ''}`}
              onClick={() => setSelectedFrame('classic')}
            >
              <div className="frame-preview classic-frame">
                <div className="frame-image-placeholder"></div>
                <div className="classic-border"></div>
              </div>
              <span className="frame-label">Clasic</span>
            </div>
          </div>
        </div>

        <div className="text-section">
          <h3 className="section-title">Add your text</h3>
          <input
            type="text"
            className="text-input"
            placeholder="Type here"
            value={customText}
            onChange={(e) => setCustomText(e.target.value)}
          />
          <div className="date-toggle">
            <label className="toggle-label">
              <input
                type="checkbox"
                checked={addDate}
                onChange={(e) => setAddDate(e.target.checked)}
                className="toggle-checkbox"
              />
              <span className="toggle-slider"></span>
            </label>
            <span className="toggle-text">Add today's date</span>
          </div>
        </div>
       <div className="nextbtncontainer"><button className="btn-next" onClick={onNext}>
          Next
          <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button></div>
       
      </div>
    </div>
  )
}

export default EditScreen

