"use client";
import React, { useState } from 'react';
import '../../../Styles/checkout.css';
import Image from 'next/image';
import Navbar from '@/src/components/ui/navbar';


export default function CheckoutPage() {
  const [showOtp, setShowOtp] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState(''); // Track selected payment method

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value); // Update the payment method when a radio button is selected
  };

  return (
   <>
    <Navbar/>
    <div className="checkout-container">
      <div className="checkout-content">
        {/* Left Column - Delivery Form */}
        <div className="form-section">
          <h2>Delivery Information</h2>
          <div className="form-grid">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <input type="email" placeholder="Email Address" className="full-width" />
            <input type="text" placeholder="Street" className="full-width" />
            <input type="text" placeholder="City" />
            <input type="text" placeholder="State" />
            <input type="text" placeholder="Zip Code" />
            <input type="text" placeholder="Country" />
            <input type="text" placeholder="Phone Number" className="full-width" />
          </div>

          {/* Payment Option */}
          <div className="payment-section">
            <p>Payment Option:</p>
            <label>
              <input
                type="radio"
                name="payment"
                value="card"
                checked={paymentMethod === 'card'}
                onChange={handlePaymentChange}
              />
              Card Payment
            </label>
            <label>
              <input
                type="radio"
                name="payment"
                value="cash"
                checked={paymentMethod === 'cash'}
                onChange={handlePaymentChange}
              />
              Cash on delivery
            </label>

            {/* Conditionally show Card Details */}
            {paymentMethod === 'card' && (
  <>
    <p><strong>Card Details</strong></p>

    {/* Card Type Selection */}
    <div className="card-type-options">
      <label>
        <input type="radio" name="cardType" value="visa" />
        <Image src="/assets/img/visa.png" alt="Visa" width={30} height={15}/>

      </label>
      <label>
        <input type="radio" name="cardType" value="mastercard" />
        <Image src="/assets/img/master.png" alt="mastercard" width={30} height={15}/>
      </label>
      <label>
        <input type="radio" name="cardType" value="paypal" />
        <Image src="/assets/img/paypal.png" alt="paypal" width={30} height={15}/>
      </label>
      <label>
        <input type="radio" name="cardType" value="skrill" />
        <Image src="/assets/img/skrill.png" alt="skrill" width={30} height={15}/>
      </label>
      <label>
        <input type="radio" name="cardType" value="klarna" />
        <Image src="/assets/img/klarna.png" alt="klarna" width={30} height={15}/>
      </label>
    </div>

    {/* Card Input Fields */}
    <div className="form-grid">
      <input type="text" placeholder="Card Number" />
      <input type="text" placeholder="CVV" />
      <input type="text" placeholder="Expiration" />
    </div>
    
  </>
)}

            <button className="submit-btn" onClick={() => setShowOtp(true)}>Submit</button>
            <p className="secure-text">Card details are secure and encrypted</p>
          </div>
        </div>

        {/* Right Column - Cart Summary */}
        <div className="cart-summary">
          <h2>Cart Totals</h2>
          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Galaxy A15</td>
                <td>$50.00</td>
                <td>2</td>
                <td>$100.00</td>
              </tr>
              <tr>
                <td>Samsung A2 Core</td>
                <td>$25.00</td>
                <td>1</td>
                <td>$25.00</td>
              </tr>
              <tr className="total-row">
                <td colSpan="3">Total</td>
                <td>$125.00</td>
              </tr>
            </tbody>
          </table>
          <button className="checkout-btn">CHECKOUT</button>
        </div>
      </div>
      
      {/* OTP Popup */}
      {showOtp && (
        <div className="otp-popup">
          <div className="otp-box">
            <p>Enter the OTP sent to your email</p>
            <input type="text" placeholder="Enter OTP" />
            <div className="otp-buttons">
              <button onClick={() => setShowOtp(false)}>CLOSE</button>
              <button onClick={() => alert('OTP Verified!')}>SUBMIT</button>
            </div>
          </div>
        </div>
      )}
    </div>
   </>
  );
}
