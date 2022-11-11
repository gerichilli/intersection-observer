import React, { useRef } from "react";
import "../styles/styles.scss";
import BoxGsap from "../components/BoxGsap";

const IntersectionPage = () => {
  const [kanji, setKanji] = React.useState([]);

  React.useEffect(() => {
    fetchKanji();
  }, []);

  async function fetchKanji() {
    const response = await fetch("https://kanjiapi.dev/v1/kanji/joyo");
    const data = await response.json();
    setKanji(data.slice(0, 50));
  }

  return (
    <main className="container">
      <h1>Gsap を使用したスクロール アニメーション</h1>
      <div className="row">
        <div className="col">
          {kanji &&
            kanji.length > 0 &&
            kanji.map((k, i) => <BoxGsap className="box" text={k} key={k} />)}
        </div>
      </div>
    </main>
  );
};

export default IntersectionPage;

export const Head = () => <title>Home Page</title>;
