"use client";

import { useState } from "react";
import React, { useContext } from 'react'
import '../../../Styles/contactus.css';
import Navbar from "@/src/components/ui/navbar";

export default function ContactUsPage() {
 
  return (
  <>
  <Navbar/>
  <form className='contact-us'>
      <div className="contactus-left">
        <p className="title">Leave a message</p>
        <div className="fields">
          <input type="text" placeholder='Name'/><br/>
          <input type="email" placeholder='Email ' /><br/>
          <input type="text" placeholder='Message'/><br/>
          <button>Send Message </button>
        
    </div>
    </div>
    <div className="contactus-right">
    <h3 className="title">Contact Information</h3>
    <div className="info">
      <span>📍</span>
      <p>Negombo Road, Chilaw</p>
    </div>
    <div class="info">
      <span>📧</span>
      <p>ecompany@gmail.com</p>
    </div>
    <div class="info">
      <span>📞</span>
      <div>
        <p>+94 778 987 563</p>
        <p>+94 375 739 415</p>
      </div>
    </div>
  </div>
      
      

      
    </form>
  </>
    
  
  );
}