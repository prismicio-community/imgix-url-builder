import { paramCase } from "param-case";

import type { ImgixURLParams } from "./types.generated";

export const buildURL = (url: string, params: ImgixURLParams): string => {
	const instance = new URL(url);

	for (const camelCasedParamKey in params) {
		const paramKey = paramCase(camelCasedParamKey);
		const paramValue = params[camelCasedParamKey as keyof typeof params];

		if (typeof paramValue === "undefined") {
			instance.searchParams.delete(paramKey);
		} else if (Array.isArray(paramValue)) {
			instance.searchParams.set(paramKey, paramValue.join(","));
		} else {
			instance.searchParams.set(paramKey, `${paramValue}`);
		}
	}

	// Ensure the `s` parameter is the last parameter, if it exists.
	// @see https://github.com/imgix/imgix-blueprint#securing-urls
	const s = instance.searchParams.get("s");
	if (s) {
		instance.searchParams.delete("s");
		instance.searchParams.append("s", s);
	}

	return instance.toString();
};
