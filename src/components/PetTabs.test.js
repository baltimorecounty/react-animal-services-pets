import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import PetTabs from "./PetTabs";

const mockProps = {
  match: {
    params: {}
  }
};

it("renders without crashing", () => {
  const div = document.createElement("div");
  act(() => {
    ReactDOM.render(<PetTabs {...mockProps} />, div);
  });
  ReactDOM.unmountComponentAtNode(div);
});
