import { Component } from "./component";
import { ComponentConstructor } from "./world";

export class ComponentMap extends Map<ComponentConstructor, Component> {
  public add(...component: Component[]) {
    component.forEach((component) => {
      this.set(component.constructor as ComponentConstructor, component);
    });
  }

  public override delete(...componentConstructors: ComponentConstructor[]) {
    componentConstructors.map((componentConstructor) => {
      super.delete(componentConstructor);
    });

    return true;
  }

  public override has(...componentConstructors: ComponentConstructor[]) {
    return componentConstructors.every((componentConstructor) => {
      return super.has(componentConstructor);
    });
  }

  public override get<C extends Component>(
    componentConstructor: ComponentConstructor<C>,
  ): C | undefined {
    return super.get(componentConstructor) as C;
  }
}
