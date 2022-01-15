import test from "ava";

import { buildURL as nodeBuildURL } from "../src/node";
import { buildURL as rootBuildURL } from "../src/node";

test("the node entry's buildURL is an alias for the root entry's buildURL", (t) => {
	t.is(nodeBuildURL, rootBuildURL);
});
