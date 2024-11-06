import * as React from "react"
import * as styles from "../components/index.module.css";
import MyImageComponent from "./imageComponent";


// AHMED HASSAN
// FRONT END DEVELOPER 
// passionate about building robust , ineteractive and accecible web applications
// currently building at ESDC 

  const Background = () => (
    

    
    <>

    <section className="background">
          <div className="about-header">

            <div className="about-title">About Me </div>
            <div className="line"></div>
          </div >
          <br></br>
          <br></br>


        <div className="about-container ">
            <div className="about-content"> 
                      <p>
                      I'm a front-end developer at <strong className="dept">Employment and Social Development Canada</strong> and I'm passionate about building intuitive and efficient web applications. 
                      During my time with the Learning Infrastructure team, I designed and developed various web applications to support multimedia and e-learning initiatives, focusing on creating user-friendly and accessible interfaces while solving complex problems.
                      I strive to write clean and efficient code, ensuring that applications are scalable and maintainable.
                    </p> 

                      <p>
                      My career objective is to apply my problem solving skills and web development expertise to create scalable and user friendly applicatons. 
                      I utilize my free time to improve my programming skills, explore new technologies,
                      and to work on projects that fuel my creativity. 
                      </p>


                     <p>Here are technologies that I have worked with recently:</p> 

                     <p className="tech-stack" >
                      <ul className="custom-bullet">
                          <li> JavaScript</li>
                          <li> React.js</li>
                          <li> Node.js</li>
                      
                      
                      </ul>

                      <ul className="custom-bullet">
                          <li> Gatsby</li>
                          <li> MongoDB</li>
                          <li> Git</li>
                      
                      
                      </ul>
                     </p>


              </div>
        
          

              <div className="about-image">

                        < MyImageComponent/>
                    
              </div>
              
        </div>

  

    </section>
    
  

    


    
    
    
    </>
    
  );

  export default Background;