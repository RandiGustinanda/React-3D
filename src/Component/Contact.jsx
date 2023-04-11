
import React from "react";
import styled from "styled-components";



const Section = styled.div`
  height: 100vh;
  background-color : white;
  scroll-snap-align: center;
`;
const Lighting = () => {
  return (
    <>
      <ambientLight intensity={1} />
      <pointLight position={[10, 10, 10]} intensity={1} />
    </>
  );
};
const Contact = () =>{
    return(
      <Section>
  
     </Section>
    );
}

export default Contact ;