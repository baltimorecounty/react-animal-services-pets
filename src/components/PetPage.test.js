import React from "react";
import ReactDOM from "react-dom";
import PetPage from "./PetPage";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<PetPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
