import './ProgressBar.css'

function ProgressBar({ currentStep }) {
  const steps = ['UPLOAD', 'EDIT', 'PAY', 'PRINT']
  
  return (
    <div className="progress-bar">
      {steps.map((step, index) => {
        const stepNumber = index + 1
        const isActive = stepNumber === currentStep
        const isCompleted = stepNumber < currentStep
        
        return (
          <div key={step} className="progress-step">
            <div className={`step-circle ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`}>
              {isCompleted && (
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6L5 9L10 2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </div>
            {index < steps.length - 1 && (
              <div className={`step-line ${isCompleted ? 'completed' : ''}`}></div>
            )}
          </div>
        )
      })}
      <div className="progress-labels">
        {steps.map((step) => (
          <span key={step} className="step-label">{step}</span>
        ))}
      </div>
    </div>
  )
}

export default ProgressBar

