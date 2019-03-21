import React from "react";
import ReactDOM from "react-dom";
import ProfileCard from "./ProfileCard";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ProfileCard />, div);
  ReactDOM.unmountComponentAtNode(div);
});
