import * as React from "react"
import * as styles from "../components/index.module.css"


// AHMED HASSAN
// FRONT END DEVELOPER 
// passionate about building robust , ineteractive and accecible web applications
// currently building at ESDC 
import rightArrow from "../images/right-arrow-b.svg";

  const WorkExp = () => (
    

    <>
    

    
    
    <section className="work-experience">

    <div className="exp-header">

            <div className="about-title">Experience</div>
            <div className="line"></div>
    </div >
    
    
    <div className="work-title">
        <div className="title">Multimedia Technician - Learning Infrastructure team</div>
        <div className="title flex"> <a id= "workLink " className="highlight_link "  href="https://www.linkedin.com/company/esdcedsc/posts/?feedView=all">@ Employment Social Development Canada</a> <p className="date">November 2022 - Present</p></div>
        
    </div>
    
    <div className="points">

        <ul className="custom-bullet">

            <li className="point">
                
            	Developed and delivered robust web applications for multimedia and e-Learning projects,
                including Virtual Assistant Tool, System Simulations and an Image Optimizer Tool</li>

            <li className="point">


                Designed and developed a scalable JavaScript-based virtual assistant tool,
                achieving daily engagement from hundreds of users through an intuitive interface and ongoing feature enhancements.</li>

            <li className="point">
                        
            Designed and implemented multiple system simulation tools in HTML, CSS, and JavaScript that mirror existing departmental systems, strategically incorporating overlays for an interactive,
             step-by-step training. Systems utilized by 30+ users, enhancing departmental training efficiency.</li>

            <li className="point">Designed and developed an Image Cropper and Optimizer tool in JavaScript enabling users to modify images. Implemented
            a feature to accurately preview the appearance of modified images within the ADAPT authoring tool streamlining the design workflow process</li>

            <li className="point">Collaborated cross-functionally with course designers, 
                team leads, and developers to deliver solutions that met client 
                requirements and project timelines.</li>

          
        </ul>
    </div>
    <br></br><br></br><br></br><br></br><br></br>


<div className="pathtoImage " > 
    
   <a className="resume-Link" href="https://ahmedamd.github.io/Resume/">View My Resume </a> 
    <span> <img className="right-Arrow" src={rightArrow}  alt="right arrow" /></span> 
    
</div>
   
    

</section>
    
   
    


    
    
    
    </>
    
  );

  export default WorkExp;