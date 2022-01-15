import type { ImgixURLParams } from "../types.generated";
import { buildURL } from "../buildURL";
import { buildSignedURL } from "./buildSignedURL";
import { signURL } from "./signURL";

export type SecureClientOptions = {
	origin: string;
	secureURLToken: string;
};

export class SecureClient {
	origin: string;
	secureURLToken: string;

	constructor(options: SecureClientOptions) {
		this.origin = options.origin;
		this.secureURLToken = options.secureURLToken;
	}

	buildWebProxyURL(url: string, params: ImgixURLParams = {}): string {
		return this.buildSignedURLForPath(encodeURIComponent(url), params);
	}

	buildSignedURLForPath(path: string, params: ImgixURLParams = {}): string {
		return this.buildSignedURL(`${new URL(path, this.origin)}`, params);
	}

	buildURLForPath(path: string, params: ImgixURLParams = {}): string {
		return buildURL(`${new URL(path, this.origin)}`, params);
	}

	buildSignedURL(url: string, params: ImgixURLParams = {}): string {
		return buildSignedURL(url, this.secureURLToken, params);
	}

	signURL(url: string): string {
		return signURL(url, this.secureURLToken);
	}
}
