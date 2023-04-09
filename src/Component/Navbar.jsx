import React from "react";
import styled from "styled-components";

const Section = styled.div`
    display:flex;
    justify-content : center;
`;

const Container = styled.div`
    width: 1400px;
    justify-content: space-between;
    display:flex;
    padding-top:10px;
`;
const Link = styled.div`
    display:flex;
    align-items:center;
    gap:410px;
     
`;

const Logo = styled.h1`
    color:black;
    
    font-size : 20px;
`;

const But = styled.div`
   
   display:flex;
   align-items:center;
    
`;

const Button = styled.button`
   
  width:100px;
  padding:10px;
  background-color:black;
  color:white;
  border:none;
  border-radius:5px;
  cursor:pointer;
`;

const List = styled.ul`
    
    display:flex;
    gap:100px;
    list-style:none;
   
`;
const ListItem = styled.li`
    
    color:black;
    
`;


const Navbar = () =>{
    return(
    <Section>
        <Container>
            <Link>
            <Logo>Randi</Logo>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Work</ListItem>
                <ListItem>Contact</ListItem>
            </List>
            </Link>
            <But>
                <Button>Download Cv</Button>
            </But>
        </Container>
    </Section>
    );
}

export default Navbar;