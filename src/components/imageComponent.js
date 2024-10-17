import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import ProfilePic from "../images/displayPic.jpeg";

const MyImageComponent = ({ data }) => {
  // Get the optimized image data
//   const image = getImage(data.file.childImageSharp);

  return (
    <div>
      

      <img src={ProfilePic} alt="Profile" style={{ width: "300px", border: "solid 2px maroon ", borderRadius: ".5rem" , 
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.4)"}} />
    </div>
  );
};

// GraphQL query to fetch the image data
export const query = graphql`
  query {
    file(relativePath: { eq: "displayPic.jpeg" }) {
      childImageSharp {
        gatsbyImageData(width: 600, layout: CONSTRAINED)
      }
    }
  }
`;

export default MyImageComponent;
