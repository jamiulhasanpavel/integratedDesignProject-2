import React from "react";

import "../css/style.css";
import Navbar from "../components/Navbar";

function motivation() {
  return (
    <div>
      <marquee>Welcome To Our Motivation Courses</marquee>
      <div class="banner3">
        <Navbar />
        <div>
          <div class="navbar3">
            <img src="" class="mtv" />
            <ul>
              <li>
                <a href="motivationplaylist">Motivation Course</a>
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

export default motivation;
