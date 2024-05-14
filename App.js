import React from "react";
import ReactDOM from "react-dom/client"

const heading = React.createElement(
    "h1",
    { id: "heading" },
    "Welcome to Namaste React🚀"
);

console.log(heading);

const jsxHeading = <h1 id="heading">Bonjour to Namaste React🚀</h1>;
console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);