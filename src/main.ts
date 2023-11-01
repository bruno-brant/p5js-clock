import p5 from 'p5'
import { Clock } from './Clock';
import { World2d } from './BaseObject';

const WIDTH = 500
const HEIGHT = 500

new p5((p: p5) => {
  const world = new World2d([
    new Clock(100),
  ]);

  p.setup = () => {
    p.createCanvas(WIDTH, HEIGHT);
    p.background("white");
  };

  p.draw = () => {
    p.background("white");

    world.render(p);
  };
});
