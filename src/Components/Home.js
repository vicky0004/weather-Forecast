import React from 'react'
import Footer from "./Footer"


export default function Home(props) {
  return (
    <>
      <div className="d-flex justify-content-center bg-white content-container" style={{ height: "500px" }}>
        <div className="align-self-center " style={{ color: "black" }}>
          <h1 className="brand-font d-inline pr-3">Weather App</h1>
          <i className="fa fa-cloud fa-3x"></i>
          <p>Free Wheather App by vicky</p>

        </div>
      </div>
      <Footer/>
    </>
  );
}
