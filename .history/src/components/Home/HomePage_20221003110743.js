import React from "react";
import videoHomePage from "../../assets/video-homepage.mp4";
function HomePage(props) {
  return (
    <div className="homepage-container">
      <video autoPlay muted loop>
        <source src={videoHomePage} type="video/mp4" />
      </video>
      <div className="homepage-content"></div>
      <div>There's a better way to ask</div>
      <div></div>
      <div></div>
    </div>
  );
}

export default HomePage;
