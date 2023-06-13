import React from "react";
import "../css/style.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
function home() {
  return (
    <div>
      <div className="banner">
        <marquee>Welcome To Our Website</marquee>
        <Navbar />
        <div className="content">
          <h1>Design Our E-Learning System</h1>
          <p>
            Subscribe Easy Tutorials YouTube Channel to watch more videos,
            <br /> press the bell icon to get latest updates.
          </p>
          <div>
            <button type="button">WATCH MORE</button>
            <button type="button">SUBSCRIBE</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default home