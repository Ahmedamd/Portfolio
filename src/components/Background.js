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
                      I'm a front-end developer <strong className="dept">Employment and Social Development Canada</strong> and I'm passionate about building intuitive and efficient web applications. 
                      During my time with the Learning Infrastructure team, I designed and developed various web applications to support multimedia and e-learning initiatives, focusing on creating user-friendly and accecible interfaces and solving complex problems.
                      I strive to write clean and efficient code, ensuring that applications are scalable and maintainable.
                    </p> 

                      <p>
                      My career objective is to work on projects creating accessible, user freindly that have a meaningful impact. 
                      In my free time, I’m dedicated to improving my programming skills, exploring new technologies,
                      and working on side projects that fuel my creativity. 
                      </p>


                     <p>Here are technologies that I have worked with recently:</p> 

                     <p className="tech-stack" >
                      <ul>
                          <li> JavaScript</li>
                          <li> React.js</li>
                          <li> Node.js</li>
                      
                      
                      </ul>

                      <ul>
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