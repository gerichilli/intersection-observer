import * as React from "react";
import "../styles/styles.scss";
import Box from "../components/Box";

const IntersectionPage = () => {
  return (
    <main className="vanilajs-container">
      <h1>IntersectionObserver を使用したスクロール アニメーション</h1>
      <div className="row">
        {[1, 2, 3].map((item, index) => (
          <div className="col" key={index}>
            {new Array(20).fill(Math.floor(Math.random)).map((item, i) => (
              <Box className="box" key={i} index={i + 1} col={index + 1} />
            ))}
          </div>
        ))}
      </div>
    </main>
  );
};

export default IntersectionPage;

export const Head = () => <title>Home Page</title>;
