import { Component } from "./component";
import { ComponentConstructor } from "./world";

export class ComponentMap extends Map<ComponentConstructor, Component> {
  public add(...component: Component[]) {
    component.forEach((component) => {
      this.set(component.constructor as ComponentConstructor, component);
    });
  }
}
