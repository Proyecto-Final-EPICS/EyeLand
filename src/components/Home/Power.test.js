import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Power from "./Power";

describe("Power", () => {
  it("renders the power component with the correct title, description, and image", () => {
    // Arrange
    const title = "Power 1";
    const description = "This is the first power";
    const img = "/path/to/image.jpg";

    // Act
    const { getByText, getByAltText } = render(
      <Power title={title} description={description} img={img} />
    );

    // Assert
    expect(getByText(title)).toBeInTheDocument();
    expect(getByText(description)).toBeInTheDocument();
    expect(getByAltText(title)).toHaveAttribute("src", img);
  });

  it("calls setClassPowerD and setCounter with the correct arguments when the div element is hovered", () => {
    // Arrange
    const classPowerD = "opacity-0";
    const index = 1;
    const setClassPowerD = jest.fn();
    const setCounter = jest.fn();

    // Act
    const { container } = render(
      <Power
        classPowerD={classPowerD}
        index={index}
        setClassPowerD={setClassPowerD}
        setCounter={setCounter}
      />
    );

    fireEvent.mouseEnter(container.firstChild);

    // Assert
    expect(setClassPowerD).toHaveBeenCalledWith("opacity-100");
    expect(setCounter).toHaveBeenCalledWith(index);
  });
});
