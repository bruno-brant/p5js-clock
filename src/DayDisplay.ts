import { WorldObject } from "./World";

export class DayDisplay extends WorldObject {
	width: number;
	height: number;

	constructor(radius: number) {
		super()
		this.position = { x: -radius * .5, y: 0 }
		this.width = radius * 0.2;
		this.height = radius * 0.15;
	}

	public render(p: import("p5")): void {
		// box
		p.strokeWeight(2);
		p.stroke("silver");
		p.fill("white")
		p.rect(-this.width / 2, -this.height / 2, this.width, this.height);

		// text
		p.fill("black");
		p.textSize(this.height * .8);
		p.textAlign(p.CENTER, p.CENTER);
		
		const text = new Date().getDay().toString().padStart(2, "0");
		p.text(text, 0, 0);
	}
}