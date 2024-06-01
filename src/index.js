import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import StarRating from "./StarRating";
// import TextExpander from "./TextExpander";
// function Test() {
//   const [onMovieRated, setOnMovieRated] = useState(0);
//   return (
//     <div>
//       <StarRating color="red" setOnMovieRated={setOnMovieRated} />
//       <p> This movie was rated {onMovieRated} star</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      message={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <StarRating maxRating={5} color="blue" size={23} defaultRating={3} />
    <Test />

    <TextExpander>
      By now, the woodcutter had come near the ugly tree. He had just raised his
      axe when suddenly he noticed how crooked the tree was. Hmm! This crooked
      tree seems to be useless to me. I cannot make long straight logs of this
      ugly tree, he thought. And he moved towards another beautiful tree. The
      ugly tree heaved a huge sigh of relief. The tree realised that by making
      it unattractive, God had actually given it a boon.
    </TextExpander>
    <TextExpander
      collapsedNumWords={12}
      expandButtonText="Show text"
      collapseButtonText="Collapse text"
      buttonColor="#ff6622"
    >
      The main character of this story is the tree with crooked branches and a
      bent trunk. It used to hate itself for its ugly look, but this appearance
      helped it to overcome a difficult situation. The other characters of the
      story are the rest of the beautiful and tall trees, who were very proud of
      their appearance and often made fun of the crooked tree. In the end, they
      learnt a lesson of insulting others as the woodcutter cut them down and
      didnt touch the ugly tree. Another crucial character of the tale is the
      woodcutter, who made the crooked tree realise that God had actually helped
      it by creating it a certain way.
    </TextExpander>
    <TextExpander
      collapsedNumWords={12}
      expandButtonText="Show text"
      collapseButtonText="Collapse text"
      buttonColor="#ff6622"
      expanded={true}
    >
      The main character of this story is the tree with crooked branches and a
      bent trunk. It used to hate itself for its ugly look, but this appearance
      helped it to overcome a difficult situation. The other characters of the
      story are the rest of the beautiful and tall trees, who were very proud of
      their appearance and often made fun of the crooked tree. In the end, they
      learnt a lesson of insulting others as the woodcutter cut them down and
      didnt touch the ugly tree. Another crucial character of the tale is the
      woodcutter, who made the crooked tree realise that God had actually helped
      it by creating it a certain way.
    </TextExpander> */}
  </React.StrictMode>
);
