import { ComponentMap } from "./component-map";
import { Component } from "./component";

class Color extends Component {
  protected __component = Color.name;

  constructor(public color = "black") {
    super();
  }
}

class Position extends Component {
  protected __component = Position.name;

  constructor(public x = 0, public y = 0) {
    super();
  }
}

describe("ComponentMap", () => {
  it("should support adding components", () => {
    const componentMap = new ComponentMap();
    const red = new Color("red");
    const startingPosition = new Position();

    componentMap.add(red, startingPosition);

    expect(componentMap.get(Color)).toEqual(red);
    expect(componentMap.get(Position)).toEqual(startingPosition);
  });

  it("should support removing components", () => {
    const componentMap = new ComponentMap();

    componentMap.add(new Color(), new Position());
    componentMap.delete(Color, Position);

    expect(componentMap.has(Color)).toEqual(false);
    expect(componentMap.has(Position)).toEqual(false);
  });

  it("should support checking multiple components", () => {
    const componentMap = new ComponentMap();
    const red = new Color("red");
    const startingPosition = new Position();

    componentMap.add(red, startingPosition);

    expect(componentMap.has(Color, Position)).toEqual(true);
  });
});

const componentMap = new ComponentMap();
componentMap.add(new Color(), new Position());

// TODO: Make it safer!
componentMap.get(Color)?.color;
