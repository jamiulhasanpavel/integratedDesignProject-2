import React from 'react'
import "../css/style.css"
import Navbar from "../components/Navbar"

function Academic_Course() {
  return (
    <div class="banner1">
         <marquee>Welcome To Our Academic courses</marquee>
         <Navbar />
    <div>
        <div class="navbar1">
            <img src="" class="sclg"/>
        <ul>
            <li><a href="primary">Primary School Level</a></li>
            <li><a href="secondary">Secondary School Level</a></li>
            <li><a href="highersec">Higher Secondary Level</a></li>

        </ul>
       
    </div>
</div>
<div class="content">
    <h1></h1>
<p>Subscribe Easy Tutorials YouTube Channel to watch more videos,<br/>press the bell icon to get latest updates.</p>
<div>
    
    <button type="button"><span></span>WATCH MORE</button>
    <button type="button"><span></span>SUBSCRIBE</button>
</div>
</div>
    </div>
  )
}

export default Academic_Course;