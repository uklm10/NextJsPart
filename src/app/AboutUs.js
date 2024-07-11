import React from 'react';

const AboutUs = () => {
  return (
    <section className="about-us" id="about">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="lg:col-span-1">
            <div className="about-us-img" data-aos="fade-in">
              <div className="exercise-text">
                <h2>22+</h2>
                <p>Years Of Experience</p>
              </div>
              <img src="/assets/img/v1/about-us.png" alt="about" />
              <div className="arrow-img">
                <img src="/assets/img/v1/about-us-arrow.png" alt="about us arrow" />
              </div>
            </div>
          </div>
          <div className="lg:col-span-1 about-us-text">
            <span className="span-with-icon" data-aos="fade-up">About Us</span>
            <h2 data-aos="fade-up" data-aos-delay="100">
              "Crafting enjoyable <span className="red-text">digital</span> solutions from business ideas."
            </h2>
            <p data-aos="fade-up" data-aos-delay="200">
              "I specialize in interface, digital product & user experience design, focusing on building products, brands, and websites."
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 about-us-lists" data-aos="fade-up" data-aos-delay="300">
              <div className="about-us-list">
                <p>Avoid These Mistakes</p>
                <p>Your New Venture</p>
                <p>New Fonts</p>
              </div>
              <div className="about-us-list">
                <p>Beyond the Norm</p>
                <p>Forge Destiny</p>
                <p>Dare to be Different</p>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="400">
              <a href="#" className="primary-custom-button">
                <span>
                  <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M8.36069 19.9903C6.02761 19.4623 4.11585 18.2703 2.6254 11.3116C5.21317 11.5078 5.40935 11.6056 5.65185 11.6049 5.94068V11.1773Z"
                      fill="#FA614F"
                    />
                  </svg>
                </span>
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
