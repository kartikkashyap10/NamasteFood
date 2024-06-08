import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Welcome to Namaste React🚀"
);

console.log(heading);

// JSX Element
const jsxHeading = (
  <h1 id="heading" className="heading">
    Bonjour to Namaste React (JSX)🚀
  </h1>
);
console.log(jsxHeading);

// React functional component : a function returning jsx
// Babel transpiles the jsx code into valid react js code to create an element
const HeadingComponent = () => {
  // return keyword is optional
  return (
    <div>
      {/* component composition */}
      <Title />
      <h1 className="heading">Heading Functional Component</h1>
    </div>
  );
};

const Title = () => (
  <h1 className="title">Title Functional Component</h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);
root.render(<HeadingComponent />);
