import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.css";
import "tailwindcss/dist/tailwind.min.css";
// import Navbar from './components/Navbar';
import Navbar2 from './components/Navbar2';
import Section from './components/Section';
import Cards from './components/Cards';
import AfterCards from './components/AfterCards';
import BeforeTestimonial from './components/BeforeTestimonial';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer'
import Bottom from './components/Bottom';

ReactDOM.render(
  <React.StrictMode>
    {/* <Navbar></Navbar> */}
    <Navbar2></Navbar2>
    <Section></Section>
    <Cards></Cards>
    <AfterCards></AfterCards>
    <BeforeTestimonial></BeforeTestimonial>
    <Testimonial></Testimonial>
    <Bottom></Bottom>
    <Footer></Footer>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
