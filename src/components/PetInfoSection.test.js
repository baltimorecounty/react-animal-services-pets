import React from "react";
import ReactDOM from "react-dom";
import PetInfoSection from "./PetInfoSection";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<PetInfoSection label="test" value={15} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
