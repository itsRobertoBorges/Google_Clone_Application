import React, { useEffect, useState } from 'react';
import { Navbar } from 'react-bootstrap';
import '../App.css';


const Footer = () => {
  const [country, setCountry] = useState('');

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await fetch('http://api.ipstack.com/check?access_key=a05137fbabd3dbe443b4d076ec642ea4');
        if (response.ok) {
          const data = await response.json();
          setCountry(data.country_name);
        }
      } catch (error) {
        console.error('Error fetching country:', error);
      }
    };

    fetchCountry();
  }, []); // Remove the dependency array

  return (
    <Navbar bg="black" variant="dark" className="custom-footer d-flex justify-content">
      <Navbar.Text style={{ position: 'relative', left: '10px' }}>
        {country}
      </Navbar.Text>
    </Navbar>
  );
};

export default Footer;


