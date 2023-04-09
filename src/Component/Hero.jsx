import React ,{ useState, useEffect }  from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import { Canvas } from "@react-three/fiber";
import Statue from "./Statue";
import {OrbitControls, Stage,Shadow} from "@react-three/drei";
import { TypeAnimation } from "react-type-animation";

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

align-items:center;
display:flex;
`;
const Title = styled.h1`
  
`;
const Sub = styled.h3`
 
`;
const Button = styled.button`
  margin-top:100px;
  margin-left:200px;
  width:100px;
  height:50px;
  border-radius:7px;
  background-color:black;
  color:white;
`;
const Span = styled.span`
 
`;

const Gambar = styled.img`
  width:340px;
  height:340px;
`;
const Line = styled.div`
  height: 50%;
  width: 1px;
  background-color: black;
  
  left: 50%;
  transform: translateX(-50%);
`;

const Circle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: black;
  
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const Box = styled.div`
  height:400px;
  width:500px;
`;
const Lighting = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
    </>
  );
};
const AnimatedText = ({ text }) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      setDisplayText(text.slice(0, i));
      i++;
      if (i > text.length) {
        clearInterval(typingInterval);
      }
    }, 100);
    return () => clearInterval(typingInterval);
  }, [text]);

  return <>{displayText}</>;
};

const Hero = () => {
    return(
       <Section>
         <Navbar/>
         <Container>
          <Kiri> 
            <Canvas style={{ width: "70%", height: "80%" }} 
                shadowMap>
                <Lighting/>
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} castShadow />
                <Statue /> 
              <OrbitControls enableZoom={false}/>
              <Shadow opacity={0.5} />
            </Canvas>   
          </Kiri>
          <Kanan>
             <Line />
             <Circle />
             <Box>
                <Title>Randi</Title>
                <Sub>I'm Devloper</Sub>
                <Span>asdkaskdajk ajksdh asdk asdjkas djkas kas djkas dasd ashd jkashd ajksdhah sd akj sdkahsdjk hasjkdh kasjhdjk hj  hjfgsadjf gsjdgf jsahd fhjsgf hjs g</Span><br/>
                <Button>ASD</Button>
             </Box>
          </Kanan>
         </Container>
       </Section>
    );
}
export default Hero