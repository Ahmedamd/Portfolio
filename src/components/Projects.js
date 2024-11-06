import * as React from "react"
import * as styles from "../components/index.module.css"


import githubImg from "../images/github-mark.png";
import expandIcon from "../images/scale.png";
import projectOne from "../images/Ay.png";
import projectTwo from "../images/Travel.png";





  const Projects = () => (
    
    <>

   

    <section className="Project-Section">

        <div className="proj-header">

            <div className="proj-title">Projects </div>
            <div className="line"></div>
        </div >

        <br></br>
        <br></br>

        <div className="container">
            <img src={projectOne} alt="Project 1" class="project-image" style={{  border: "solid 2px maroon ", borderRadius: ".5rem" , 
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.4)", marginRight:"2rem"}}  ></img>
            
     
                <div class="project-content">
                    
                    <div className="project-title" style={{ fontWeight: "bold", fontSize: '1.3rem'}}  >Accessibility Checker</div>
                    <p class="project-description">An accessibility reporting app that generates comprehensive reports based on user-provided URLs using the Pa11y API. </p>
                    <article class="proj-tech">

                        <div className="tech"> React.js</div>
                        <div className="tech"> Node.js</div>
                        <div className="tech"> CSS</div>
                        <div className="tech"> Express.js</div>
                     
                    </article>
                    <div class="project-links">
                      
                        <a href="https://github.com/Ahmedamd/Accessibility-Checker" target="_blank" > <img class="btn" src={githubImg}></img> </a>
                        <a href="" target="_blank" > <img class="btn" src={expandIcon}></img>   </a>
                    </div>
                    
                </div>
        </div>
 
        <div className="container">
            <img src={projectTwo} alt="Project 1" class="project-image" style={{  border: "solid 2px maroon ", borderRadius: ".5rem" , 
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.4)", marginRight:"2rem"}}  ></img>
            
     
                <div class="project-content">
                    
                    <div className="project-title" style={{ fontWeight: "bold", fontSize: '1.3rem'}}  >Travel Cost Estimator</div>
                    <p class="project-description"> A travel cost estimator app that calculates estimated expenses, 
                        including flights, hotels, and food, based on user-inputted city data. Integrated external APIs for accurate cost comparisons and nearby city suggestions. </p>
                    <article class="proj-tech">

                        <div className="tech"> React.js</div>
                        <div className="tech"> Node.js</div>
                        <div className="tech"> CSS</div>
                        <div className="tech"> Express.js</div>
                     
                    </article>
                    <div class="project-links">
                      
                        <a href="https://github.com/Ahmedamd/Travel-Cost-Estimator" target="_blank" > <img class="btn" src={githubImg}></img> </a>
                        <a href="" target="_blank" > <img class="btn" src={expandIcon}></img>   </a>
                    </div>
                    
                </div>
        </div>
        

    </section>
    
    
    </>
    
  );

  export default Projects;