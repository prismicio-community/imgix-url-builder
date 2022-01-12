import test from "ava";

import * as lib from "../src";

test("exports something", (t) => {
	t.log(lib.generateUrlParamsTypes());
});
