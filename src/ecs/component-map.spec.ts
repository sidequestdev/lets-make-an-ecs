import { ComponentMap } from "./component-map";
import { Component } from "./component";

class Color extends Component {
  protected __component = Color.name;

  constructor(public color = "black") {
    super();
  }
}

class Position extends Component {
  protected __component = Color.name;

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
  });

  it.todo("should support removing components");

  it.todo("should support clearing components");

  it.todo("should support getting a component");
});
