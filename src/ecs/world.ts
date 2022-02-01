import { Component } from "./component";

// | EntityId | Position | Color  | Component N ... |
// | -------- | -------- | ------ | --------------- |
// | 1        | {x, y}   | 'red'  |
// | 2        | {x, y}   | 'blue' |

export type ComponentConstructor<T extends Component = Component> = new (
  ...args: any[]
) => T;
