import React from "react";
import logo from "../img/logo2.png";
function Navbar() {
  return (
    <div>
      <div class="">
        <div class="navbar">
          <img src={logo} class="logo" />
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/academicourse">Academic Course</a>
            </li>
            <li>
              <a href="skilldevelopment">Skill Development</a>
            </li>
            <li>
              <a href="motivation">Motivation</a>
            </li>
            <li>
              <a href="universitylevel">University Level Courses</a>
            </li>
          </ul>
          <div>
            <form class="example" action="home">
              <div id="search">
                <input type="text" placeholder="Search.." name="search2" />
                <input id="sub" type="submit" name="" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
