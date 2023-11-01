import p5 from 'p5';
import { WorldObject } from './BaseObject';
import { SColor } from './Color';

abstract class Hand extends WorldObject {
  constructor(
    private color: SColor,
    private weight: number,
    private length: number
  ) {
    super();
  }

  protected abstract getAngle(): number;

  public override render(p: p5) {
    p.fill(this.color);
    p.circle(0, 0, 5);
    p.rotate(this.getAngle());
    p.stroke(this.color);
    p.strokeWeight(this.weight);
    p.line(0, 0, this.length, 0);
  }
}

class HourHand extends Hand {
  constructor(radius: number) {
    super("white", 3, radius * .6);
  }

  override getAngle() {
    const hours = new Date().getHours();
    return -(Math.PI / 2) + (hours * Math.PI * 2 / 12);
  }
}

class MinuteHand extends Hand {
  constructor(radius: number) {
    super("white", 1, radius * .8);
  }

  override getAngle() {
    const minutes = new Date().getMinutes();
    return -(Math.PI / 2) + (minutes * Math.PI * 2 / 60);
  }
}

class SecondHand extends Hand {
  constructor(radius: number) {
    super("red", 1, radius * .9);
  }

  override getAngle() {
    const seconds = new Date().getSeconds();
    return -(Math.PI / 2) + (seconds * Math.PI * 2 / 60);
  }
}

export class Hands extends WorldObject {
  constructor(radius: number) {
    super(
      new HourHand(radius),
      new MinuteHand(radius),
      new SecondHand(radius)
    );
  }
}
