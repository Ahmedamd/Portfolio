import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
 import Header from "../components/header";
 import About from "../components/About";
 import Background  from "../components/Background";
 import Projects from "../components/Projects";
 import Footer from "../components/Footer"
 import WorkExp from "../components/WorkExp";
 import Bottom  from "../components/bottom";

import Layout from "../components/layout"
import Seo from "../components/seo"
import AnimatedSection from "../components/animation";
import * as styles from "../components/index.module.css"





const IndexPage = () => (

  
  <Layout>
    
   {/* <Header/> */}
   <AnimatedSection>
      <About/>
   </AnimatedSection>
  
   <AnimatedSection>
        <Background/>
   </AnimatedSection>

     
   <AnimatedSection>
        <WorkExp/>
   </AnimatedSection>

     
   <AnimatedSection>
        <Projects/>
   </AnimatedSection>
  

  
 
<AnimatedSection>
    <Footer/>
</AnimatedSection>
 
  <Bottom/>
  
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="" />

export default IndexPage
