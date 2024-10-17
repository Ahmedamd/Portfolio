import * as React from "react"
import * as styles from "../components/index.module.css"


import githubImg from "../images/github.png";
import expandIcon from "../images/scale.png";





  const Footer = () => (
    
    <>

   

    <section className="footer-section ">

        <div className="proj-header">

            <div className="proj-title">Get In Touch</div>
          
        </div >

        <p className="footer-paragraph"> Please reach out if you have any questions! would love to hear from you via <span  id= "workLink"  href="mailto:ahassan.a.md@gmail.com" className="highlight_link">Email</span> </p>
        
        <p className="footer-paragraph"> You can also follow me on <span  id= "workLink"  href="https://www.linkedin.com/in/ahassanamd/" className="highlight_link">LinkedIn</span> and <span  id= "workLink"  href="https://github.com/Ahmedamd" className="highlight_link">Github</span> </p>
     
         
     
                    
            
              
          

       
        {/* <div className="footer">
            <div>Designed and built by Ahmed A Hassan</div>
        </div> */}
   


    </section>
    
    
    </>
    
  );

  export default Footer;