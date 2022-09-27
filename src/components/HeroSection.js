import React from "react";
import "../App.css"
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/vedeo/video-2.mp4" autoPlay loop muted />
      <h1 style={{color:"rgb(79,26,139)",marginBottom:"8px", marginTop:""}}>ADVENTUTER AWAITS🤞</h1>
      <p style={{color:"white", marginTop:""}}>what are you waiting for😎 </p>
      <div className="hero--btns">
        <Button style={{ marginBottom:"18px"}}
          className="btn"
          buttonStyle="btn--outline"
          buttonSizes="btn--large"
        >
          GET STARTED 
        </Button>
        <Button
         style={{ marginBottom:"18px"}}
          className="btn"
          buttonStyle="btn--primary"
          buttonSizes="btn--large"
        >
          Watch trailer <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
