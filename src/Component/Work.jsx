import { Canvas } from "@react-three/fiber";
import React from "react";
import styled from "styled-components";
import { OrbitControls, Stage } from "@react-three/drei";

const Section = styled.div`
  height: 100vh;
  background-color : black;
  scroll-snap-align: center;
`;

const Work = () =>{
return(
  <Section>
      <Canvas>
              <mesh>
                <boxGeometry args={[2,2,2]}/>
              </mesh>      
        <OrbitControls enableZoom={false}/>
      </Canvas>
      </Section>
)
}
export default Work