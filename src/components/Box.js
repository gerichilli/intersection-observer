import React from "react";
import "../styles/styles.scss";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

function Box({ index, col }) {
  const [containerRef, isIntersecting] = useIntersectionObserver();

  return (
    <div className={`box ${isIntersecting ? "is-show" : ""}`} ref={containerRef}>
      <p>
        Box {index} - Col {col}
      </p>
      {isIntersecting && <p>isIntersecting: True</p>}
    </div>
  );
}

export default Box;
