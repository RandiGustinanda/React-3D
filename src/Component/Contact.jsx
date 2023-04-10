import { Canvas } from "@react-three/fiber";
import React from "react";
import styled from "styled-components";
import { OrbitControls, Stage } from "@react-three/drei";
import Atlas from "./Atlas";
import ProjectCard from "./Card";
import C from "./C";
import Re from "./React";
import Tml from "./Html";
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
      <Canvas>
      <Lighting/>
      <pointLight position={[10, 10, 10]} intensity={100} />
      <Tml/>
      <OrbitControls enableZoom={false}/>
      </Canvas>
    </Section>
    );
}

export default Contact ;