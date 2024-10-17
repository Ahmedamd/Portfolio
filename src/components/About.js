import * as React from "react"
import * as styles from "../components/index.module.css"


// AHMED HASSAN
// FRONT END DEVELOPER 
// passionate about building robust , ineteractive and accecible web applications
// currently building at ESDC 

  const About = () => (
    <>
<section className="about">

  <div className="intro-hello">
  <span>Hello!</span> <span className="emoji pointer">👋</span>
  </div>

  <div className="intro-content">
    I'm <strong>Ahmed Hassan,</strong> a front-end developer passionate
     about designing and building intuitive and efficient web applications 
  </div>

  <div className="intro-contact">
      <span>Get in touch</span>
      <span className="rightPointFinger">👉</span>
     <span>
      <a  className="highlight_link"  href="mailto:ahassan.a.md@gmail.com">ahassan.a.md@gmail.com </a> </span>

    </div>


  

</section>
    

    
    
    </>
    
  );

  export default About;