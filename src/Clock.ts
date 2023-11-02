import { WorldObject } from './World';
import { Hands } from './Hand';
import { Body } from './Body';
import { SideButton } from './SideButton';
import { DayDisplay } from './DayDisplay';

export class Clock extends WorldObject {
  constructor(radius: number) {
    super(
      new SideButton(radius),
      new Body(radius),
      new DayDisplay(radius),
      new Hands(radius),
    );
  }

  public render(p: import("p5")): void {
  }
}
