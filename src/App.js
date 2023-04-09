import logo from './logo.svg';
import './App.css';

import Hero from './Component/Hero';
import Contact from './Component/Contact';
import Footer from './Component/Footer';
import Work from './Component/Work';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  color : white ;
  &::-webkit-scrollbar{
    display: none;
  }
`;

function App() {
  return (
    <Container>
     <Hero/>
     <Work/>
     <Contact/>
     <Footer/>
    </Container>
  );
}

export default App;
