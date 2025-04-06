"use client";

import { useState } from "react";
import React, { useContext } from 'react'
import '../../../Styles/orderconfirmation.css';
import Navbar from "@/src/components/ui/navbar";

export default function OrderConfirmationPage() {
 
  return (
    <>
        <Navbar/>
        <div class="order-confirmation">
  <h2 class="thank-you">✔️ Thank You for your order</h2>
  <h3 class="order-id">Your Order ID:- <span>A123</span></h3>

  <div class="order-details-container">
    <div class="order-details">
      <h4>Order Details</h4>
      <div className="order-data">
        <p>Estimate Delivery Date: 2025/06/02</p>
        <p>Purchased Items: Galaxy A15, Samsung A2 Core</p>
        <p>Quantity: 3</p>
        <p>Total Price:$125.00</p>
      </div>
    </div>

    <div class="customer-details">
      <h4 >Customer Details</h4>
      <div className="customer-data">
        <p>Shipping Address: No.2/A, Kandy Road, Kurunegala</p>
        <p>Payment Method: Card Payment</p>
      </div>
    </div>
  </div>

  <button class="shop-btn">SHOP</button>
</div>
    </>

  );
} 