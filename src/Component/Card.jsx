import React from "react";
import styled from "styled-components";

const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 30px;
  margin-bottom: 20px;
  margin-left:10px;
  margin-right:10px;
  background-color: black;
  height:300px;
  width:300px
`;

const Title = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const ImageWrapper = styled.div`
  height: 200px;
  margin-bottom: 10px;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const Description = styled.p`
  font-size: 1rem;
`;

const ProjectCard = ({ title, image, description }) => {
  return (
    <Card>
      <Title>{title}</Title>
      <ImageWrapper>
        <Image src={image} alt={title} />
      </ImageWrapper>
      <Description>{description}</Description>
    </Card>
  );
};

export default ProjectCard;
   // "predeploy":"npm run build",
    // "deploy" :"gh-pages -d build"
    // "homepage": "http://RandiGustinanda.github.io/React-3D",