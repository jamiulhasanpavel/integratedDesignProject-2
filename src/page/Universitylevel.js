import React from "react";
import Navbar from "../components/Navbar";

function universitylevel() {
  return (
    <div>
      <marquee>Welcome To Our University Level Courses </marquee>
      <div class="banner2">
        <Navbar />
        <div>
          <div class="navbar2">
            <img src="" class="gub" />
            <ul>
              <li>
                <a href="uniplaylist">
                  university level courses
                </a>
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

export default universitylevel;
