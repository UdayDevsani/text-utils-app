import React, { useState } from 'react';

function About() {
  const [mystyle, setmystyle] = useState({
    color: 'white',
    backgroundColor: 'black',
  });

  const handleDarkMode = () => {
    if (mystyle.color === 'white') {
      setmystyle({
        color: 'black',
        backgroundColor: 'white',
        border: '1px solid white'
      });
    } else {
      setmystyle({
        color: 'white',
        backgroundColor: 'black',
      });
    }
  };

  return (
    <>
      <div className="container" style={mystyle}>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                About Us
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>Welcome to TextUtils, your ultimate solution for all your text processing needs. Whether you are a student, a writer, or a professional, TextUtils is designed to make your text editing and analysis tasks effortless and efficient.</strong>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Our Mission
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                At TextUtils, our mission is to provide a powerful, easy-to-use platform that enhances your productivity and creativity. We understand the importance of having reliable tools to manage and manipulate text, and our goal is to offer features that simplify and streamline these processes.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Features
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <ul>
                  <li><strong>Text Analysis:</strong> Gain insights into your text with our analysis tools that provide word count, character count, and more.</li>
                  <li><strong>Text Formatting:</strong> Easily format your text with options to convert to uppercase, lowercase, and capitalize.</li>
                  <li><strong>Text Conversion:</strong> Convert text to various formats to meet your specific needs.</li>
                  <li><strong>Dark Mode:</strong> Switch between light and dark modes for a comfortable user experience, regardless of the time of day.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFour">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                Why Choose TextUtils?
              </button>
            </h2>
            <div
              id="collapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <ul>
                  <li><strong>User-Friendly Interface:</strong> Our intuitive design ensures that you can quickly access and utilize our tools without any hassle.</li>
                  <li><strong>Efficiency:</strong> Save time and effort with our quick and reliable text processing capabilities.</li>
                  <li><strong>Accessibility:</strong> TextUtils is accessible from any device with an internet connection, ensuring you can work on the go.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFive">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFive"
                aria-expanded="false"
                aria-controls="collapseFive"
              >
                Our Team
              </button>
            </h2>
            <div
              id="collapseFive"
              className="accordion-collapse collapse"
              aria-labelledby="headingFive"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                We are a dedicated team of developers and designers passionate about creating tools that make a difference. Our commitment to continuous improvement means that we are always working on new features and enhancements to serve you better.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingSix">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSix"
                aria-expanded="false"
                aria-controls="collapseSix"
              >
                Contact Us
              </button>
            </h2>
            <div
              id="collapseSix"
              className="accordion-collapse collapse"
              aria-labelledby="headingSix"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Have questions or feedback? We'd love to hear from you! Contact us at support@textutils.com or follow us on our social media channels for the latest updates.
                <br />
                Thank you for choosing TextUtils. We look forward to helping you achieve your text processing goals with ease and efficiency.
              </div>
            </div>
          </div>

        </div>
        {/* <div className="container">
          <button type="button" className="btn btn-primary" onClick={handleDarkMode}>
            Enable Dark Mode
          </button>
        </div> */}
      </div>
    </>
  );
}

export default About;
