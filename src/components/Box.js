import React from "react";
import "../styles/styles.scss";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

function Box({ text }) {
  const [containerRef, isIntersecting] = useIntersectionObserver();

  return (
    <div className={`box ${isIntersecting ? "is-show" : ""}`} ref={containerRef}>
      <p>{text}</p>
    </div>
  );
}

export default Box;
