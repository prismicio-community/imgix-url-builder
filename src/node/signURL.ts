import { createHash } from "crypto";

export const signURL = (url: string, secureURLToken: string): string => {
	const instance = new URL(url);

	// If an `s` param is passed explicitly, it will be overridden. It must
	// also not be used when generating the signature.
	instance.searchParams.delete("s");

	// @see https://github.com/imgix/imgix-blueprint#securing-urls
	const signature = createHash("md5")
		.update(secureURLToken + instance.pathname + instance.search)
		.digest("hex");

	instance.searchParams.append("s", signature);

	return instance.toString();
};
