import React from "react";
import videoHomePage from "../../assets/video-homepage.mp4";
function HomePage(props) {
  return (
    <div className="homepage-container">
      <video>
        <source src={videoHomePage} type="video/mp4" />
      </video>
    </div>
  );
}

export default HomePage;