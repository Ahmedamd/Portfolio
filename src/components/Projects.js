import * as React from "react"
import * as styles from "../components/index.module.css"


import githubImg from "../images/github-mark.png";
import expandIcon from "../images/scale.png";





  const Projects = () => (
    
    <>

   

    <section className="Project-Section">

        <div className="proj-header">

            <div className="proj-title">Projects </div>
            <div className="line"></div>
        </div >

        <div className="container">
            <img src="project1-image.jpg" alt="Project 1" class="project-image"></img>
            
     
                <div class="project-content">
                    
                    <div className="project-title">Project 1 Title</div>
                    <p class="project-description">A brief description of the project goes here, explaining the key features and purpose.</p>
                    <article class="proj-tech">

                        <div className="tech"> JavaScript</div>
                        <div className="tech"> HTML</div>
                        <div className="tech"> CSS</div>
                        <div className="tech"> Express.js</div>
                     
                    </article>
                    <div class="project-links">
                      
                        <a href="" target="_blank" > <img class="btn" src={githubImg}></img> </a>
                        <a href="" target="_blank" > <img class="btn" src={expandIcon}></img>   </a>
                    </div>
                    
                </div>
        </div>
 

        <div className="container">
            <img src="project1-image.jpg" alt="Project 1" class="project-image"></img>
            
       
                <div class="project-content">
                    
                    <div className="project-title">Project 1 Title</div>
                    <p class="project-description">A brief description of the project goes here, explaining the key features and purpose.</p>
                    <article class="proj-tech">

                        <div className="tech"> JavaScript</div>
                        <div className="tech"> HTML</div>
                        <div className="tech"> CSS</div>
                        <div className="tech"> Express.js</div>
                     
                    </article>
                    <div class="project-links">
                      
                        <a className="icon-projects" href="" target="_blank" > <img class="btn" src={githubImg}></img> </a>
                        <a className="icon-projects" href="" target="_blank" > <img class="btn" src={expandIcon}></img>   </a>
                    </div>
                    
                </div>
        </div>
 
        

    </section>
    
    
    </>
    
  );

  export default Projects;