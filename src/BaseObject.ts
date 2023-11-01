import p5 from 'p5';
import { push } from './utilities';

/**
 * A 2D world that contains objects.
 */
export class World2d {

	constructor(private children: WorldObject[]) { }

	/**
	 * Adds a new object to the world.
	 * @param objects The objects to be added.
	 */
	add(child: WorldObject) {
		this.children.push(child);
	}

	/**
	 * Removes an object from the world.
	 * @param object The object to be removed.
	 */
	remove(object: WorldObject) {
		this.children = this.children.filter(o => o !== object);
	}
	
	time = 0;

	/**
	 * Renders the world.
	 * @param p The p5 instance.
	 */
	render(p: p5) {
		p.translate(p.width / 2, p.height / 2);
		this.time += p.deltaTime

		for (const object of this.children) {
			this.renderObject(p, object)
		}
	}

	renderObject(p: p5, object: WorldObject) {
		push(p, () => {
			p.translate(object.position.x, object.position.y);
			p.rotate(object.rotation);
			object.render(p);

			for (const child of object.children) {
				this.renderObject(p, child);
			}
		});
	}
}

export abstract class WorldObject {
	public position = { x: 0, y: 0 };
	public rotation = 0;
	children: WorldObject[];

	constructor(...children: WorldObject[]) {
		this.children = children || [];
	}

	public render(_p: p5) { };
}
