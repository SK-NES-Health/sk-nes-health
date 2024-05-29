import CardInfo from "./CardInfo"
import img1 from "./ESR-01.jpg"
import img2 from "./ESR-02.jpg"
import img3 from "./Chill.jpg"
import img4 from "./ColdFluImmunity.jpg"
import img5 from "./Day.jpg"
import img6 from "./EMF.jpg"
import img7 from "./Energy.jpg"
import img8 from "./FatMetabolism.jpg"
import img9 from "./Female.jpg"
import img10 from "./HeartDriver-ED6.jpg"
import img11 from "./HeartImprinter-ED2.jpg"
import herosplash1 from "./herosplash1.jpg"
import React, { useState } from "react"

import Navside from "./Navside"

function Home() {
  return (
    <>
      <div className="navbar">
        <div className="logoside">NES Health Info & Support</div>
        {/* <div className="navside">
          <Link to="/">
            <button className="navside-btn">Infoceuticals</button>
          </Link>
          <Link to="/mihealth-guide">
            <button className="navside-btn">miHealth Guide</button>
          </Link>
          <Link to="/contact">
            <button className="navside-btn">Contact</button>
          </Link>
        </div> */}
        <Navside />
      </div>
      <div className="herosplash">
        <div className="splash-container">
          <h2>Join a seminar.</h2>
          <p>Learn about the latest in bioenergetics and how it can help you.</p>
          <button className="hero-btn">Register</button>
        </div>
      </div>
      <div className="infodisplay">
        <CardInfo imgSrc={img1} />
        <CardInfo imgSrc={img2} />
        <CardInfo imgSrc={img3} />
        <CardInfo imgSrc={img4} />
        <CardInfo imgSrc={img5} />
        <CardInfo imgSrc={img6} />
        <CardInfo imgSrc={img7} />
        <CardInfo imgSrc={img8} />
        <CardInfo imgSrc={img9} />
        <CardInfo imgSrc={img10} />
        <CardInfo imgSrc={img11} />
      </div>
    </>
  )
}

export default Home
