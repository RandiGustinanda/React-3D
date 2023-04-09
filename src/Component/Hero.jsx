import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import { Canvas } from "@react-three/fiber";
import Statue from "./Statue";
import {OrbitControls, Stage,Shadow} from "@react-three/drei";


const Section = styled.div`
  height: 100vh;
  background-color:white;
  display:flex;
  scroll-snap-align: center;
  align-items:center;
  flex-direction:column;
  justify-content: space-between;
`;
const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display:flex;
  width:1400px;
  justify-content:space-beetwen;
  color:black;
`;
const Kiri = styled.div`
  width:700px;
  display:flex;
  align-items:center;
  justify-content:center
`;
const Kanan = styled.div`
width:600px;
justify-content:center;
align-items:center;
display:flex;
`;
const Title = styled.h1`
  
`;
const Sub = styled.h2`
 
`;
const Button = styled.button`
 
`;
const TitleContainer = styled.div`
  
`;
const Gambar = styled.img`
  width:340px;
  height:340px;
`;
const Lighting = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
    </>
  );
};
const Hero = () => {
    return(
       <Section>
         <Navbar/>
         <Container>
          <Kiri> 
            <Canvas style={{ width: "50%", height: "50%" }} 
                shadowMap>
                <Lighting/>
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} castShadow />
                <Statue /> 
              <OrbitControls enableZoom={false}/>
              <Shadow opacity={0.5} />
            </Canvas>   
          </Kiri>
          <Kanan>
            <TitleContainer>
              <Title>Hello</Title>
              </TitleContainer>
            <Sub></Sub>
          </Kanan>
         </Container>
       </Section>
    );
}
export default Hero