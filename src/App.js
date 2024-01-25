import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Home = () => <div>Home Page</div>;
const About = () => <div>About Us</div>;
const Services = () => <div>Services</div>;
const Contact = () => <div>Contact</div>;
const ContactUs = () => <div>Contact US</div>;
const ContactPl = () => <div>Contact PL</div>;
const ContactDe = () => <div>Contact DE</div>;
const NotFound = () => <div>Page Not Found</div>;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact/us" element={<ContactUs />} />
        <Route path="/contact/pl" element={<ContactPl />} />
        <Route path="/contact/de" element={<ContactDe />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;