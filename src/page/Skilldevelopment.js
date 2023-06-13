import React from "react";
import "../css/style.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
function skilldevelopment() {
  return (
    <div>
      <marquee>Welcome To Our Skill Development courses</marquee>
      <div class="banner4">
        <Navbar />
        <div>
          <div class="navbar4">
            <img src="" class="skill" />
            <ul>
              <li>
                <a href="skilldevelopmentplaylist">Skill Development</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="content">
          <h1></h1>
          <p>
            Subscribe Easy Tutorials YouTube Channel to watch more videos,
            <br />
            press the bell icon to get latest updates.
          </p>
          <div>
            <button type="button">
              <span></span>WATCH MORE
            </button>
            <button type="button">
              <span></span>SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default skilldevelopment;
