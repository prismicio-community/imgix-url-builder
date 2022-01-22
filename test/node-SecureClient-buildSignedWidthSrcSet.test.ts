import test from "ava";

import { SecureClient } from "../src/node";

test("builds a signed width srcset", (t) => {
	const client = new SecureClient({
		baseURL: "https://example.com",
		secureURLToken: "token",
	});

	const actual = client.buildSignedWidthSrcSet(
		"https://example.com/image.png",
		{
			widths: [400, 800, 1600],
		},
	);
	const expected =
		"https://example.com/image.png?width=400&s=72d5ac8cf655aec51fc58ff075161440 400w, " +
		"https://example.com/image.png?width=800&s=3c7d28674439ec4f476e7f5711f40ba3 800w, " +
		"https://example.com/image.png?width=1600&s=1d47dc15e145bd0defbed452cf1dc68e 1600w";

	t.is(actual, expected);
});

test("builds a signed width srcset with params", (t) => {
	const client = new SecureClient({
		baseURL: "https://example.com",
		secureURLToken: "token",
	});

	const actual = client.buildSignedWidthSrcSet(
		"https://example.com/image.png",
		{
			widths: [400, 800, 1600],
			sat: 100,
		},
	);
	const expected =
		"https://example.com/image.png?sat=100&width=400&s=fab9e1f238415df345833e494fcf410c 400w, " +
		"https://example.com/image.png?sat=100&width=800&s=e5f90ce0ec813ac1dc3bb210252794c2 800w, " +
		"https://example.com/image.png?sat=100&width=1600&s=00b2cdbb4ac50829a9752af679d3ebba 1600w";

	t.is(actual, expected);
});
