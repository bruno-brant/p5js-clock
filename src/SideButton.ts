import p5 from "p5";
import { WorldObject } from "./World";

export class SideButton extends WorldObject {
	private width: number;
	private height: number;

	constructor(private radius: number) { 
		super()
		this.width = this.radius * .2
		this.height = this.radius * .2
		this.position = { x: this.radius * .9, y: 0 }
	}

	public override render(p: p5): void {
		p.fill("silver")
		p.stroke("silver")
		p.strokeWeight(2)
		p.strokeCap(p.ROUND)
		p.strokeJoin(p.BEVEL)
		p.rect(0, -this.width / 2, this.width, this.height)
	}
}