import { buildURL } from "./buildURL";
import { ImgixURLParams } from "./types.generated";

/**
 * Options to instantiate a new client.
 */
export type ClientOptions = {
	/**
	 * The base URL used to construct image URLs from a path. The base URL must
	 * include the protocol, domain, and optionally a path.
	 *
	 * @example `https://example.imgix.net`
	 *
	 * @example `https://example.imgix.net/folder`
	 */
	baseURL: string;
};

/**
 * An Imgix Rendering API client. A client is paired to a single Imgix domain.
 */
export class Client {
	baseURL: string;

	/**
	 * Creates a new `Client` instance for an Imgix domain.
	 *
	 * @param options - Options to instantiate a new client.
	 *
	 * @returns A `Client` instance for the given Imgix domain.
	 */
	constructor(options: ClientOptions) {
		this.baseURL = options.baseURL;
	}

	/**
	 * Builds a URL to an Imgix image with Imgix URL API parameters for the
	 * client's base URL.
	 *
	 * @example
	 *
	 * ```ts
	 * const client = new Client({ baseURL: "https://example.imgix.net" });
	 * const url = client.buildURLForPath("/image.png", { width: 400 });
	 * // => https://example.imgix.net/image.png?width=400
	 * ```
	 *
	 * @example
	 *
	 * ```ts
	 * const client = new Client({
	 * 	baseURL: "https://example.imgix.net/folder",
	 * });
	 * const url = client.buildURLForPath("./image.png", { width: 400 });
	 * // => https://example.imgix.net/folder/image.png?width=400
	 * ```
	 *
	 * @param path - Path to the image relative to the client's base URL.
	 * @param params - An object of Imgix URL API parameters.
	 *
	 * @returns The full absolute URL to the image with the given Imgix URL API
	 *   parameters applied.
	 */
	buildURLForPath(path: string, params: ImgixURLParams = {}) {
		return buildURL(new URL(path, this.baseURL).toString(), params);
	}
}
