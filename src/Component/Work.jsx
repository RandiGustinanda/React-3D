import { Canvas } from "@react-three/fiber";
import React from "react";
import styled from "styled-components";
import { OrbitControls, Stage } from "@react-three/drei";
import Atlas from "./Atlas";
import ProjectCard from "./Card";
import C from "./C";
import Re from "./React";
import Tml from "./Html";
import Sharp from "./Sharp";

const Section = styled.div`
  height: 100vh;
  background-color : black;
  scroll-snap-align: center;
  display:flex;
  justify-content: center;
`;

const Container = styled.div`
height: 100vh;
scroll-snap-align: center;
display: flex;
flex-direction: column; /* Tambahkan properti flex-direction: column */
justify-content: center;
color: white;
`;
const Title = styled.div`
  display: flex;
  justify-content: center;
  color:white;
  margin-top:4px;
  margin-bottom:5px;
`;
const TopContainer = styled.div`
  display: flex;
  flex: 1; /* Tambahkan properti flex: 1 */
  justify-content: center;
  align-items: center;
  color:white;
  border-bottom: 1px solid white; /
`;
const BottomContainer = styled.div`
  display: flex;
  flex: 0.5; /* Tambahkan properti flex: 0.5 */
  justify-content: center;
  align-items: center;
`;


const Lighting = () => {
  return (
    <>
      <ambientLight intensity={1} />
      <pointLight position={[10, 10, 10]} intensity={1} />
    </>
  );
};
const Work = () =>{
return(
  <Section>
        <Container>
         <Title><h1>My Project</h1></Title>
        <TopContainer>
          <ProjectCard title="Momoshusi Admin" image="/logo192.png" description="admin momoshusi menggunakan react js" />
          <ProjectCard title="Momoshusi Kasir" image="/logo192.png" description="kasir momoshusi menggunakan react js" />
          <ProjectCard title="Momoshusi App" image="/logo192.png" description="mobile app dengan menggunakan react native" />
        </TopContainer>
        <BottomContainer>
          <Canvas>
            <Lighting/>
            <C/>
            <OrbitControls enableZoom={false}/>
          </Canvas>
          <Canvas>
            <Lighting/>
            <Re/>
            <OrbitControls enableZoom={false}/>
          </Canvas>
          <Canvas>
            <Lighting/>
            <Re/>
            <OrbitControls enableZoom={false}/>
          </Canvas>
          <Canvas>
            <Lighting/>
            <Sharp/>
            <OrbitControls enableZoom={false}/>
          </Canvas>
          <Canvas>
            <Lighting/>
            <Re/>
            <OrbitControls enableZoom={false}/>
          </Canvas>
        </BottomContainer>
        
        </Container>
        
      
     
      </Section>
)
}
export default Work