import React from "react";
import ReactDOM from "react-dom";
import PetDetails from "./PetDetails";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<PetDetails />, div);
  ReactDOM.unmountComponentAtNode(div);
});
