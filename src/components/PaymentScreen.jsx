import { useState } from 'react'
import './PaymentScreen.css'
import ProgressBar from './ProgressBar'

function PaymentScreen({ onNext, onBack }) {
  const [items, setItems] = useState([
    { id: 1, quantity: 1, price: 4.90 },
    { id: 2, quantity: 1, price: 4.90 },
    { id: 3, quantity: 1, price: 4.90 }
  ])

  const updateQuantity = (id, delta) => {
    setItems(items.map(item => 
      item.id === id 
        ? { ...item, quantity: Math.max(1, item.quantity + delta) }
        : item
    ))
  }

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id))
  }

  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0)

  return (
    <div className="payment-screen gradient-main">
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
  
      <ProgressBar currentStep={3} />
      
      <div className="payment-content">
        <div className="items-list">
          {items.map((item) => (
            <div key={item.id} className="item-card">
              <div className="item-image-container">
                <div className="item-image">
                  <svg viewBox="0 0 100 100" fill="#4DD0E1">
                    <path d="M20 30 L50 10 L80 30 L80 70 L50 90 L20 70 Z"/>
                    <circle cx="50" cy="50" r="15" fill="#4DD0E1"/>
                  </svg>
                </div>
                <button className="remove-item" onClick={() => removeItem(item.id)}>×</button>
              </div>
              
              <div className="item-details">
                <div className="item-price">${item.price.toFixed(2)}</div>
                
                <div className="item-controls">
                  <div className="quantity-selector">
                    <button 
                      className="qty-btn"
                      onClick={() => updateQuantity(item.id, -1)}
                    >−</button>
                    <span className="qty-value">{item.quantity}</span>
                    <button 
                      className="qty-btn"
                      onClick={() => updateQuantity(item.id, 1)}
                    >+</button>
                  </div>
                  <div className="item-total">Item total: ${(item.price * item.quantity).toFixed(2)}</div>
                </div>
                
                <button className="discount-btn">Add another copy for 20% off</button>
              </div>
            </div>
          ))}
        </div>

        <div className="total-bar">
          <span className="total-label">Total:${total.toFixed(2)}</span>
    
        </div>

        <div className="payment-options">
          <div className="onlinePaycontainer"><button className="btn-google-pay" onClick={onNext}>
            <svg className="google-pay-icon" viewBox="0 0 24 24" width="24" height="24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <span>Pay</span>
          </button>
          
          <button className="btn-apple-pay" onClick={onNext}>
            <svg className="apple-pay-icon" viewBox="0 0 24 24" width="24" height="24" fill="white">
              <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
            </svg>
            <span>Pay</span>
          </button></div>
          
          
          <button className="btn-card" onClick={onNext}>
            Pay with card
          </button>
          
          <div className="secure-payment">
            <svg className="lock-icon" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
            </svg>
            <span>Secure payment</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentScreen

