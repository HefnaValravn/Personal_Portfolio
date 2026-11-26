import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import pfp from '../assets/images/pfp.jpg';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={pfp} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/hefnavalravn" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/nicolasbenedettigonzalez/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
          </div>
          <h1>Nicolás Benedetti González</h1>
          <p>Student & Game Developer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/hefnavalravn" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/nicolasbenedettigonzalez/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
