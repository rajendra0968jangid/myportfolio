import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <div className="mainNavbar">
        <div className="firstNavbar">
          <a href="">Hello</a>
        </div>
        <div className="secondNavbar">
          <nav>
            <a href="">HOME</a>
            <a href="">ABOUT</a>
            <a href="">SERVICES</a>
            <a href="">WORK</a>
            <a href="">BLOG</a>
            <a href="">DOWN DROP</a>
            <a href="">CONTACT</a>
          </nav>
        </div>
      </div>
      <div>
        <img
          src="data:image/jpeg;base64,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"
          alt=""
          width={"100%"}
        />
      </div>
      <div className="mainAbout">
        <div className="subMainAbout">
          <div className="firstAbout">
            <div className="subFirstAbout">
              <div className="imageAbout">
                <img
                style={{borderRadius:'10px'}}
                  src="http://127.0.0.1:5500/assets/img/testimonial-2.jpg"
                  alt=""
                />
              </div>
              <div className="firstSpanAbout">
                <span className="boldSpanAbout">Name:</span>
                <span>hello</span>
                <br />
                <span className="boldSpanAbout">Email:</span>
                <span>hello@gmail.com</span>
                <br />
                <span className="boldSpanAbout">Profile:</span>
                <span >full stack developer</span>
                <br />
                <span className="boldSpanAbout">Phone:</span>
                <span>0000000000</span>
                <br />
              </div>
            </div>
            <div className="skillsAbout">
              <span>Skills</span>
              <br />
              <span>HTML 85%</span>
              <div
                style={{
                  backgroundColor: "blue",
                  height: "15px",
                  width: "170px",
                }}
              ></div>
              <span>HTML 85%</span>
              <div
                style={{
                  backgroundColor: "blue",
                  height: "15px",
                  width: "170px",
                }}
              ></div>
              <span>javascript 50%</span>
              <div
                style={{
                  backgroundColor: "blue",
                  height: "15px",
                  width: "100px",
                }}
              ></div>
              <span>HTML 85%</span>
              <div
                style={{
                  backgroundColor: "blue",
                  height: "15px",
                  width: "170px",
                }}
              ></div>
            </div>
          </div>
          <div className="secondAbout">
            <span style={{fontSize:'50px'}}>About me</span>
            <p>
              Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
              Praesent sapien massa, convallis a pellentesque nec, egestas non
              nisi. Nulla porttitor accumsan tincidunt.
            </p>
            <p>
              Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
              Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum
              ac diam sit amet quam vehicula elementum sed sit amet dui.
              porttitor at sem.
            </p>

            <p>
              Nulla porttitor accumsan tincidunt. Quisque velit nisi, pretium ut
              lacinia in, elementum id enim. Nulla porttitor accumsan tincidunt.
              Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
