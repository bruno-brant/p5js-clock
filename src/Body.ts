import p5 from 'p5';
import { WorldObject } from './BaseObject';
import { push } from './utilities';

const d90 = Math.PI * 2 / 12;

export class Body extends WorldObject {
  constructor(private radius: number) {
    super();
  }

  render(p: p5) {
    p.fill("black");
    p.stroke("silver");
    p.strokeWeight(this.radius / 30);
    p.circle(0, 0, this.radius * 2);

    // draw numbers
    p.strokeWeight(0);
    p.fill("white");
    p.textSize(this.radius / 10);
    p.textAlign(p.CENTER, p.CENTER);

    // draw numbers
    for (let i = 1; i <= 12; i++) {
      push(p, () => {
        const x = p.sin(d90 * i) * this.radius * .9;
        const y = -p.cos(d90 * i) * this.radius * .9;

        p.translate(x, y);
        p.text(i, 0, 0);
      });
    }
  }
}
