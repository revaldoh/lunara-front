import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Header from "./components/Navbar/index";
import Banner from './components/Banner/Banner';
import Hero from "./components/Hero/Hero";
import Content from "./components/Content/content";
import Footer from './components/Footer/Footer';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Header/>
  <Banner/>
  <Hero/>
  <Content/>
  <Footer/>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
