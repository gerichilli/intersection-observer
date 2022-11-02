import * as React from "react";
import "../styles/styles.scss";
import { Link } from "gatsby";

const IndexPage = () => {
  return (
    <main>
      <div className="index-container">
        <Link to="/vanilajs" className="page-link">
          IntersectionObserver を使用したスクロール アニメーションのページへ
        </Link>
        <Link to="/gsap" className="page-link">
          Gsap の ScrollTrigger を使用したスクロール アニメーションのページへ
        </Link>
      </div>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
