import { buildURL } from "./buildURL";
import { ImgixURLParams } from "./types.generated";

export type ClientOptions = {
	origin: string;
};

export class Client {
	origin: string;

	constructor(options: ClientOptions) {
		this.origin = options.origin;
	}

	buildURLForPath(path: string, params: ImgixURLParams = {}) {
		return buildURL(new URL(path, this.origin).toString(), params);
	}
}
