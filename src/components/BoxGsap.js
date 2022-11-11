import React, { useRef, useEffect } from "react";
import "../styles/styles.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function BoxGsap({ text }) {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    gsap.to(element, {
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        end: "bottom bottom",
        once: true,
        scrub: true,
        toggleClass: "is-show",
      },
    });
  }, []);

  return (
    <div className="box" ref={ref}>
      <p>{text}</p>
    </div>
  );
}

export default BoxGsap;
