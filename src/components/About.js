// About.js
import React from 'react';
import '../Styles/About.css'; // Import the CSS file for styling


function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <h2>About Little Lemon Restaurant</h2>
        <p>Welcome to Little Lemon Restaurant, where culinary art meets warm ambiance.</p>
        <p>Our Story:</p>
        <p>
          Nestled in the heart of the city, Little Lemon Restaurant was founded in 2010 by our visionary head chef, Jane Smith. Drawing inspiration from her travels and experiences, Jane envisioned a dining establishment that would be a haven for food enthusiasts seeking authenticity and innovation.
        </p>
        <p>
          At Little Lemon, we embrace the essence of every ingredient, crafting each dish as a unique masterpiece. Our commitment to sustainability and locality ensures that every bite is not only delectable but also supports our community and environment.
        </p>
        <p>
          Step into our world and experience culinary excellence redefined. From our chef's table to our artisanal bar, we invite you to join us on a journey of flavors and sensations that will linger long after you leave.
        </p>
        <p>Come dine with us and let your senses be tantalized!</p>
      </div>
    </div>
  );
}

export default About;

