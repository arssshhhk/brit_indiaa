import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ScriptTag from 'react-script-tag';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Scripts from './scripts';
import './App.css'; // Import your CSS here
import pic1 from "./assets/638bcfcc679b621e40196fea_Fashion20dekstop-p-500.webp";
import pic2 from "./assets/638bcfcd1f96ab70fb516227_martin20case.webp";
import pic4 from "./assets/638bcfcd6a8a276a6b979edd_Photographer-1-p-500.webp";
import pic5 from "./assets/638bcfcd8563251051ea7936_Photographer-2-p-500.webp";
import pic7 from "./assets/FixPapa_logo.png";
import pic8 from "./assets/ImagineXP_logo.png";
import pic9 from "./assets/Interview 2.svg";
import pic10 from "./assets/K-Lab Website Design.svg";
import pic11 from "./assets/LMD_logo.png";
import pic12 from "./assets/Patric Demarchelier.svg";
import pic13 from "./assets/RenoQuotes_logo.png";
import pic14 from "./assets/S4_logo.png";
import pic15 from "./assets/Smart Irrigation Systems Landing Page.svg";
import pic16 from "./assets/Spoyl.svg";
import pic17 from "./assets/Top Ten Web Design Trends for 2024.jpeg";
import pic18 from "./assets/Winter Holidays Booking Webdesign.svg";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  <ScriptTag type="text/javascript" src={Scripts} />
  return (

    <div>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet"/>
        <header>
          <nav className="flex-space-between">
            <a href>BRIT INDIA</a>
            <a href>INNOVATION</a>
          </nav>
        </header>
        <section id="home1">
          <h2>Design is not just what it looks like and feels like. Design is how it works.</h2>
          <p>Our designs drive your business forward, blending beauty with functionality.</p>
          <div className="scroller">
            <div className="scroller-inner">
              <div>
                <img src={pic8} alt="Logo 1" className="gray-logo" />
              </div>
              <div>
                <img src={pic7} alt="Logo 2" className="gray-logo" />
              </div>
              <div>
                <img src={pic11} alt="Logo 3" className="gray-logo" />
              </div>
              {/* <div>
                    <img src="./assets/pics/logo-en.webp" alt="Logo 4" class="gray-logo">
                </div> */}
              <div>
                <img src={pic13} alt="Logo 5" className="gray-logo" />
              </div>
              <div>
                <img src={pic14} alt="Logo 6" className="gray-logo" />
              </div>
              <div>
                <img src={pic8} alt="Logo 1" className="gray-logo" />
              </div>
              <div>
                <img src={pic7} alt="Logo 2" className="gray-logo" />
              </div>
              <div>
                <img src={pic11} alt="Logo 3" className="gray-logo" />
              </div>
              {/* <div>
                    <img src="./assets/pics/logo-en.webp" alt="Logo 4" class="gray-logo">
                </div> */}
              <div>
                <img src={pic13} alt="Logo 5" className="gray-logo" />
              </div>
              <div>
                <img src={pic14} alt="Logo 6" className="gray-logo" />
              </div>
            </div>
          </div>
          {/* <br>
        <br>
        <marquee behavior="scroll" direction="left" scrollamount="5">
            <img src="/assets/pics/Saaskart.png" width="120" height="80" alt="Natural" />
            <img src="/assets/pics/Fine Design.png" width="120" height="80" alt="Natural" />
            <img src="/assets/pics/fixpapa.png" width="120" height="80" alt="Natural" />
            <img src="/assets/pics/picXP.png" width="120" height="80" alt="Natural" />
            <img src="/assets/pics/S4.png" width="120" height="80" alt="Natural" />
            <img src="/assets/pics/Logo.png" width="120" height="80" alt="Natural" />
          </marquee> */}
        </section>
        <section id="explore">
          <div className="background">
            <div className="scroll-container" id="scroll1">
              <div className="scroll-item"><img src={pic4} alt="pic 4" /></div>
              <div className="scroll-item"><img src={pic2} alt="pic 8" /></div>
              <div className="scroll-item"><img src={pic1} alt="pic 3" /></div>
              <div className="scroll-item"><img src={pic4} alt="pic 4" /></div>
              <div className="scroll-item"><img src={pic2} alt="pic 8" /></div>
              <div className="scroll-item"><img src={pic1} alt="pic 3" /></div>
            </div>
            <div className="reverse" id="scroll2">
              <div className="scroll-item"><img src={pic4} alt="pic 4" /></div>
              <div className="scroll-item"><img src={pic2} alt="pic 8" /></div>
              <div className="scroll-item"><img src={pic1} alt="pic 3" /></div>
              <div className="scroll-item"><img src={pic4} alt="pic 4" /></div>
              <div className="scroll-item"><img src={pic2} alt="pic 8" /></div>
              <div className="scroll-item"><img src={pic1} alt="pic 3" /></div>
            </div>
            <div className="scroll-container" id="scroll3">
              <div className="scroll-item"><img src={pic4} alt="pic 4" /></div>
              <div className="scroll-item"><img src={pic2} alt="pic 8" /></div>
              <div className="scroll-item"><img src={pic1} alt="pic 3" /></div>
              <div className="scroll-item"><img src={pic4} alt="pic 4" /></div>
              <div className="scroll-item"><img src={pic2} alt="pic 8" /></div>
              <div className="scroll-item"><img src={pic1} alt="pic 3" /></div>
            </div>
          </div>
          <div className="foreground">
            <h1>EXPLORE THE ARCHIVES</h1>
          </div>
        </section>
        <section id="home4" className=" flex-space-between">
          <div className="home-content flex-space-between">
            <div className="left-side flex-space-between">
              <div>
              </div>
              <div>
              </div>
            </div>
            <div className="content flex-space-between">
              <div className="top-content">
                <div className="left">
                  <div>
                    <h2>
                      Web Design and Development
                    </h2>
                  </div>
                  <div>
                    <p>
                      Our web design and development services are crafted to create visually stunning and
                      highly functional websites. We focus on user experience, ensuring your website is not
                      only attractive but also easy to navigate. Our team uses the latest technologies and
                      design trends to build websites that are fast, secure, and responsive on all devices.
                      From custom designs to template-based solutions, we cater to all your web development
                      needs.
                    </p>
                  </div>
                </div>
                <div className="right flex-space-between">
                  <h5>Services</h5>
                  <div className="img-div">
                    <img src={pic10} alt="" />
                  </div>
                </div>
              </div>
              <div className="bottom-content">
                <div className="img-div">
                  <img src={pic16} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="home-content flex-space-between">
            <div className="left-side flex-space-between">
              <div>
              </div>
              <div>
              </div>
            </div>
            <div className="content flex-space-between">
              <div className="top-content">
                <div className="left">
                  <h2>
                    Digital Marketing
                  </h2>
                  <p>
                    We offer comprehensive digital marketing services designed to increase your online
                    visibility and drive more traffic to your website. Our SEO services ensure your website
                    ranks high on search engines, while our SMO services enhance your social media presence. We
                    also manage paid ad campaigns on Google and social media platforms, optimizing them for
                    maximum ROI. Let us help you build a strong online presence and reach your target audience
                    effectively.
                  </p>
                </div>
                <div className="right flex-space-between">
                  <h5>Services</h5>
                  <div className="img-div">
                    <img src={pic9} alt="" />
                  </div>
                </div>
              </div>
              <div className="bottom-content">
                <div className="img-div">
                  <img src={pic12}alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="home-content flex-space-between">
            <div className="left-side flex-space-between">
              <div>
              </div>
              <div>
              </div>
            </div>
            <div className="content flex-space-between">
              <div className="top-content">
                <div className="left">
                  <h2>
                    Ecommerce Solutions
                  </h2>
                  <p>
                    Transform your business with our robust ecommerce solutions. We develop ecommerce websites
                    that are secure, scalable, and user-friendly, providing your customers with a seamless
                    shopping experience. Our solutions include custom ecommerce platform development,
                    integration with popular ecommerce systems, and the implementation of advanced features like
                    payment gateways, inventory management, and customer relationship management tools.
                  </p>
                </div>
                <div className="right flex-space-between">
                  <h5>Services</h5>
                  <div className="img-div">
                    <img src={pic15} alt="" />
                  </div>
                </div>
              </div>
              <div className="bottom-content">
                <div className="img-div">
                  <img src={pic18} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="home-content flex-space-between">
            <div className="left-side flex-space-between">
              <div>
              </div>
              <div>
              </div>
            </div>
            <div className="content flex-space-between">
              <div className="top-content">
                <div className="left">
                  <h2>
                    ERP Development </h2>
                  <p>
                    Streamline your business processes with our custom ERP development services. We build ERP
                    systems tailored to your specific needs, helping you manage and automate core business
                    functions such as inventory, finance, HR, and customer relations. Our ERP solutions are
                    designed to improve efficiency, reduce costs, and provide you with real-time insights into
                    your business operations.
                  </p>
                </div>
                <div className="right flex-space-between">
                  <h5>Services</h5>
                  <div className="img-div">
                    <img src={pic4} alt="" />
                  </div>
                </div>
              </div>
              <div className="bottom-content">
                <div className="img-div">
                  <img src={pic2} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="home-content flex-space-between">
            <div className="left-side flex-space-between">
              <div>
              </div>
              <div>
              </div>
            </div>
            <div className="content flex-space-between">
              <div className="top-content">
                <div className="left">
                  <h2>
                    AI Chatbot Implementation
                  </h2>
                  <p>
                    Enhance customer engagement and support with our AI chatbot implementation services. We
                    develop intelligent chatbots that can handle customer queries, provide personalized
                    recommendations, and automate routine tasks. Our chatbots are designed to improve customer
                    satisfaction, reduce response times, and free up your staff to focus on more complex issues.
                    Integrate our AI chatbots into your website, mobile app, or social media platforms for a
                    smarter customer interaction experience.
                  </p>
                </div>
                <div className="right flex-space-between">
                  <h5>Services</h5>
                  <div className="img-div">
                    <img src={pic4} alt="" />
                  </div>
                </div>
              </div>
              <div className="bottom-content">
                <div className="img-div">
                  <img src={pic5} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="home-content flex-space-between">
            <div className="left-side flex-space-between">
              <div>
              </div>
              <div>
              </div>
            </div>
            <div className="content flex-space-between">
              <div className="top-content">
                <div className="left">
                  <h2>
                    Mobile App Development
                  </h2>
                  <p>
                    Stay ahead in the mobile-first world with our mobile app development services. We create
                    intuitive and engaging mobile apps for both iOS and Android platforms. Our team specializes
                    in developing apps that are not only visually appealing but also offer a seamless user
                    experience. Whether you need a business app, a gaming app, or a utility app, we have the
                    expertise to bring your idea to life.
                  </p>
                </div>
                <div className="right flex-space-between">
                  <h5>Services</h5>
                  <div className="img-div">
                    <img src={pic17} alt="" />
                  </div>
                </div>
              </div>
              <div className="bottom-content">
                <div className="img-div">
                  <img src={pic1} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="faq">
          <h2>Frequently Asked Questions</h2>
          <div className="questions-container">
            <div className="item">
              <div className="question" onclick="toggleFAQ(0)">
                <h4>What's the typical cost for web development at Brit India Tech?</h4>
                <h4 className="plusIcon">+</h4>
              </div>
              <div className="answer" id="answer-0">
                <p>Costs at Brit India Tech vary based on your project's complexity, features, and design needs. We
                  offer personalized pricing options and a detailed budget estimate after an initial consultation.
                  High-quality, affordable solutions with post-delivery support – that's our promise.</p>
              </div>
            </div>
            <div className="item">
              <div className="question" onclick="toggleFAQ(1)">
                <h4>How does Brit India Tech handle mobile development with tight deadlines?</h4>
                <h4 className="plusIcon">+</h4>
              </div>
              <div className="answer" id="answer-1">
                <p>Deadlines? We love them! With our agile approach, we manage timelines and resources like pros.
                  Regular updates and close communication keep us on track, delivering top-notch mobile solutions
                  without breaking a sweat.</p>
              </div>
            </div>
            <div className="item">
              <div className="question" onclick="toggleFAQ(2)">
                <h4>What kind of post-delivery support does Brit India Tech offer for digital marketing?</h4>
                <h4 className="plusIcon">+</h4>
              </div>
              <div className="answer" id="answer-2">
                <p>Our support doesn't stop at delivery. For digital marketing, we provide ongoing performance
                  monitoring, strategy tweaks, and regular reports. We’re here to optimize your campaigns and
                  ensure continuous growth and success.</p>
              </div>
            </div>
            <div className="item">
              <div className="question" onclick="toggleFAQ(3)">
                <h4>How does Brit India Tech ensure quality and functionality post-launch for web and mobile apps?
                </h4>
                <h4 className="plusIcon">+</h4>
              </div>
              <div className="answer" id="answer-3">
                <p>Post-launch, we’ve got you covered. We provide regular updates, security checks, and performance
                  optimizations. Plus, our prompt support team is ready to tackle any issues, ensuring your
                  applications run smoothly 24/7.</p>
              </div>
            </div>
            <div className="item">
              <div className="question" onclick="toggleFAQ(4)">
                <h4>Can Brit India Tech work within my budget for a digital marketing campaign?</h4>
                <h4 className="plusIcon">+</h4>
              </div>
              <div className="answer" id="answer-4">
                <p>Absolutely! We offer flexible pricing plans to fit your budget. During our initial chat, we’ll
                  discuss your financial constraints and craft a strategy that maximizes your ROI without breaking
                  the bank.</p>
              </div>
            </div>
            <div className="item">
              <div className="question" onclick="toggleFAQ(5)">
                <h4>How does Brit India Tech incorporate design feedback during development?</h4>
                <h4 className="plusIcon">+</h4>
              </div>
              <div className="answer" id="answer-5">
                <p>Your feedback is gold to us. Throughout the development process, we keep the communication lines
                  open, seeking your input on design elements. We ensure the final product reflects your vision
                  and meets your expectations, delivering a brand-aligned masterpiece.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="interestedIn">
          <h2>Interested in work together ?</h2>
          <form className="form flex-space-between">
            <div className="emailName">
              <input type="text" placeholder="What is your name ?" />
              <input type="text" placeholder="What is your email ?" />
            </div>
            <div className="aboutBuisness">
              <input type="text" placeholder="Tell us about your buisness and scope of the project." />
            </div>
            <div className="buttonDiv">
              <button className="submit">Get In Touch</button>
            </div>
          </form>
        </section>
        <section id="contact">
          <h2>Contact Us</h2>
          <h1>hello@thebritindia.co.uk</h1>
          <div className="hyperlinks">
            <div className="top-content">
              {/* <div class="careers">
                    <div class="icon">
                        <img src="/assets/pics/white-career.png" alt="">
                    </div>
                    <div class="description">
                        <h5>Careers</h5>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div> */}
              <div className="love">
                <div className="icon">
                  <img src="/assets/pics/white-heart.png" alt="" />
                </div>
                <div className="description">Teamwork Makes The Dream Work </div>
              </div>
              <div className="contact">
                <div className="icon">
                  <img src="/assets/pics/white-mail.png" alt="" />
                </div>
                <div className="description">
                  <h5>Contact</h5>
                  <p>hello@thebritindia.co.uk</p>
                </div>
              </div>
            </div>
            <div className="location">
              <div className="icon"><img src="location.png" alt="" /></div>
              <div className="description">
                1-3 St Nicholas Street, <br />Worcester WR1 1UW, <br />United Kingdom, <br />
                Phone: +44 7470994018
              </div>
            </div>
            <div className="copyright">
              <p>© 2024 BRIT INDIA TECH LTD</p>
            </div>
          </div>
        </section>
      </div>
  );
}


export default App;
