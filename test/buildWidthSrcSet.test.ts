import test from "ava";

import { buildWidthSrcSet } from "../src";

test("builds width srcset", (t) => {
	const source = "https://example.com/image.png";
	const actual = buildWidthSrcSet(source, {
		widths: [400, 800, 1600],
	});
	const expected =
		"https://example.com/image.png?width=400 400w, " +
		"https://example.com/image.png?width=800 800w, " +
		"https://example.com/image.png?width=1600 1600w";

	t.is(actual, expected);
});

test("applies URL parameters if given", (t) => {
	const source = "https://example.com/image.png";
	const actual = buildWidthSrcSet(source, {
		widths: [400, 800, 1600],
		sat: 100,
	});
	const expected =
		"https://example.com/image.png?sat=100&width=400 400w, " +
		"https://example.com/image.png?sat=100&width=800 800w, " +
		"https://example.com/image.png?sat=100&width=1600 1600w";

	t.is(actual, expected);
});

test("ignores width and height related parameters", (t) => {
	const source = "https://example.com/image.png";
	const actual = buildWidthSrcSet(source, {
		widths: [400, 800, 1600],
		// @ts-expect-error - testing invalid params
		width: 200,
		w: 300,
		height: 400,
		h: 500,
	});
	const expected =
		"https://example.com/image.png?width=400 400w, " +
		"https://example.com/image.png?width=800 800w, " +
		"https://example.com/image.png?width=1600 1600w";

	t.is(actual, expected);
});
