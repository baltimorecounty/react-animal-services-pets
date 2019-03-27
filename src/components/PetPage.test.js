import React from "react";
import ReactDOM from "react-dom";
import PetPage from "./PetPage";

const mockProps = {
  match: {
    params: {}
  }
};

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<PetPage {...mockProps} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
