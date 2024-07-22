import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Scripts = () => {
  const scrollerInnerRef = useRef(null);
  const h2Ref = useRef(null);
  const pRef = useRef(null);

  useEffect(() => {
    // Header animation
    gsap.from("header", { duration: 1, y: -100, opacity: 0 });

    // Clone images
    const scrollerInner = scrollerInnerRef.current;
    if (scrollerInner) {
      const images = scrollerInner.querySelectorAll("img");
      images.forEach((img) => {
        const clone = img.cloneNode(true);
        scrollerInner.appendChild(clone);
      });
    }

    // Accordion functionality
    document.querySelectorAll(".item").forEach((item) => {
      const question = item.querySelector(".question");
      const answer = item.querySelector(".answer");

      if (question && answer) {
        question.addEventListener("click", () => {
          const isActive = answer.classList.contains("active");

          document.querySelectorAll(".answer").forEach((answer) => {
            answer.classList.remove("active");
            const plusIcon = answer.previousElementSibling?.querySelector(".plusIcon");
            if (plusIcon) {
              plusIcon.style.transform = "rotate(0deg)";
            }
          });

          if (!isActive) {
            answer.classList.add("active");
            if (question.querySelector(".plusIcon")) {
              question.querySelector(".plusIcon").style.transform = "rotate(45deg)";
            }
          }
        });
      }
    });

    // Wrap characters
    const wrapCharacters = (element) => {
      if (element) {
        const text = element.textContent.trim();
        const wrappedText = text
          .split("")
          .map((char) => `<span>${char}</span>`)
          .join("");
        element.innerHTML = wrappedText;
      }
    };

    // Wrap characters in h2 and p
    wrapCharacters(h2Ref.current);
    wrapCharacters(pRef.current);

    // Animate characters
    const animateCharacters = (element) => {
      if (element) {
        gsap.from(element.querySelectorAll("span"), {
          opacity: 0,
          y: 20,
          duration: 0.5,
          stagger: 0.05,
          ease: "power1.inOut",
        });
      }
    };

    animateCharacters(h2Ref.current);
    animateCharacters(pRef.current);

    // Home content animation
    const homeArray = document.querySelectorAll("#home4 .home-content");
    if (window.innerWidth >= 480) {
      homeArray.forEach((element) => {
        gsap.to(element, {
          scale: 0.98,
          scrollTrigger: {
            trigger: element,
            start: "top 12%",
            endTrigger: "#home4",
            end: "bottom bottom",
            pin: true,
            pinSpacing: true, // Ensure space is maintained
            scrub: 1,
            onUpdate: (self) => {
              // Optional: Debug output
              console.log(`Scroll progress: ${self.progress.toFixed(2)}`);
            }
          },
        });
      });
    }

    // FAQ animation
    const faqArray = document.querySelectorAll(".faq .questions-container .item");
    faqArray.forEach((element) => {
      gsap.from(element, {
        opacity: 0,
        y: 100,
        duration: 0.3,
        scrollTrigger: {
          trigger: element,
          scroller: "body",
          start: "top 95%",
          end: "bottom bottom",
          scrub: 2,
        },
      });
    });

  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <div>
      <header>Header Content</header>
      <div ref={scrollerInnerRef} className="scroller-inner">
        {/* Your images */}
      </div>
      <section id="home1">
        <h2 ref={h2Ref}>Your H2 Text</h2>
        <p ref={pRef}>Your P Text</p>
      </section>
      <section id="home4">
        {/* Your home content */}
      </section>
      <section className="faq">
        <div className="questions-container">
          {/* FAQ items */}
        </div>
      </section>
    </div>
  );
};

export default Scripts;
