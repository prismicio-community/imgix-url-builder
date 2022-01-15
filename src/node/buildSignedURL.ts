import type { ImgixURLParams } from "../types.generated";
import { buildURL } from "../buildURL";
import { signURL } from "./signURL";

export const buildSignedURL = (
	url: string,
	secureURLToken: string,
	params: ImgixURLParams,
): string => {
	return signURL(buildURL(url, params), secureURLToken);
};
