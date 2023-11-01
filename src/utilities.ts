import p5 from "p5";

export function push<T>(p: p5, fn: () => T) {
	p.push();

	const r = fn();

	p.pop();

	return r;
}