import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
import "./index.css";
import News from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <News
      title="Annual Planting"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus imperdiet sagittis metus, eget dapibus risus laoreet sed. Praesent ante magna ..."
      image="https://picsum.photos/id/239/800/600"
      isFeatured={true}
      tags={["plant", "nature", 1]}
      bookmark={() => alert("Bookmarked!")}
      style={{
        // ini opsional
        width: 300,
        border: "1px solid black",
        margin: "0 auto",
        padding: 16,
        borderRadius: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "left",
      }}
    />
  </React.StrictMode>
);

