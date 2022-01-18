import type { ImgixURLParams } from "../types.generated";
import { buildURL } from "../buildURL";
import { buildSignedURL } from "./buildSignedURL";
import { signURL } from "./signURL";

/**
 * Options to instantiate a new secure client.
 */
export type SecureClientOptions = {
	/**
	 * The base URL used to construct image URLs from a path. The base URL must
	 * include the protocol, domain, and optionally a path.
	 *
	 * @example `https://example.imgix.net`
	 *
	 * @example `https://example.imgix.net/folder`
	 */
	baseURL: string;

	/**
	 * The secret secure URL token for the configured Imgix domain.
	 *
	 * @see How to get a token: https://docs.imgix.com/setup/securing-images
	 */
	secureURLToken: string;
};

/**
 * An Imgix Rendering API client with automatic URL signing. A client is paired
 * to a single Imgix domain and secure URL token.
 *
 * **Important**: This client should only be used in a trusted environment and
 * never in a browser. The `secureURLToken` parameter is a secret and should not
 * be exposed to the public.
 */
export class SecureClient {
	/**
	 * The base URL used to construct image URLs from a path. The base URL must
	 * include the protocol, domain, and optionally a path.
	 */
	baseURL: string;

	/**
	 * The secret secure URL token for the configured Imgix domain.
	 */
	secureURLToken: string;

	/**
	 * Creates a new `SecureClient` instance for an Imgix domain.
	 *
	 * @param options - Options to instantiate a new client.
	 *
	 * @returns A `SecureClient` instance for the given Imgix domain.
	 */
	constructor(options: SecureClientOptions) {
		this.baseURL = options.baseURL;
		this.secureURLToken = options.secureURLToken;
	}

	/**
	 * Builds a Web Proxy URL that proxies a non-Imgix URL to Imgix. The client's
	 * Imgix domain must be configured as a Web Proxy source. All Web Proxy URLs
	 * will be signed automatically.
	 *
	 * **Important**: The given URL must not be URI encoded. If it is, decode it
	 * before passing it to `buildWebProxyURL()`.
	 *
	 * @example
	 *
	 * ```ts
	 * const client = new SecureClient({
	 * 	baseURL: "https://example.imgix.net",
	 * 	secureURLToken: "example-token",
	 * });
	 * const url = client.buildWebProxyURL("https://www.this.com/pic.jpg", {
	 * 	width: 400,
	 * });
	 * // => https://example.imgix.net/https%3A%2F%2Fwww.this.com%2Fpic.jpg?width=400&s=def3e221c3f4c4debda091b8e49420ea
	 * ```
	 *
	 * @param url - Full absolute URL to the source image to proxy.
	 * @param params - An object of Imgix URL API parameters.
	 *
	 * @returns An Imgix url proxying `url` to the client's Imgix domain.
	 */
	buildWebProxyURL(url: string, params: ImgixURLParams = {}): string {
		return this.buildSignedURLForPath(encodeURIComponent(url), params);
	}

	/**
	 * Builds a URL to an Imgix image with Imgix URL API parameters for the
	 * client's base URL.
	 *
	 * @example
	 *
	 * ```ts
	 * const client = new SecureClient({
	 * 	baseURL: "https://example.imgix.net",
	 * 	secureURLToken: "example-token",
	 * });
	 * const url = client.buildURLForPath("/image.png", { width: 400 });
	 * // => https://example.imgix.net/image.png?width=400&s=def3e221c3f4c4debda091b8e49420ea
	 * ```
	 *
	 * @example
	 *
	 * ```ts
	 * const client = new SecureClient({
	 * 	baseURL: "https://example.imgix.net/folder",
	 * 	secureURLToken: "example-token",
	 * });
	 * const url = client.buildURLForPath("./image.png", { width: 400 });
	 * // => https://example.imgix.net/folder/image.png?width=400&s=f12c7c39333410c10c2930b57116a943
	 * ```
	 *
	 * @param path - Path to the image relative to the client's base URL.
	 * @param params - An object of Imgix URL API parameters.
	 *
	 * @returns The full absolute URL to the image with the given Imgix URL API
	 *   parameters applied.
	 */
	buildSignedURLForPath(path: string, params: ImgixURLParams = {}): string {
		return this.signURL(this.buildURLForPath(path, params));
	}

	/**
	 * Builds a URL to an Imgix image with Imgix URL API parameters for the
	 * client's base URL.
	 *
	 * Note: The returned URL is not signed. See `buildSignedURL` if a signature
	 * is required)
	 *
	 * @example
	 *
	 * ```ts
	 * const client = new SecureClient({
	 * 	baseURL: "https://example.imgix.net",
	 * 	secureURLToken: "example-token",
	 * });
	 * const url = client.buildURLForPath("/image.png", { width: 400 });
	 * // => https://example.imgix.net/image.png?width=400
	 * ```
	 *
	 * @example
	 *
	 * ```ts
	 * const client = new SecureClient({
	 * 	baseURL: "https://example.imgix.net/folder",
	 * 	secureURLToken: "example-token",
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
	buildURLForPath(path: string, params: ImgixURLParams = {}): string {
		return buildURL(`${new URL(path, this.baseURL)}`, params);
	}

	/**
	 * Builds a URL to an Imgix image with Imgix URL API parameters. The URL is
	 * signed by appending a signature to the URL parameters. This locks the URL
	 * and its parameters to the signature to prevent URL tampering.
	 *
	 * The given URL must be a full absolute URL containing the protocol and domain.
	 *
	 * URL parameters already applied to the image will be retained. To remove
	 * existing parameters, set the parameter to `undefined` in the `params` argument.
	 *
	 * @example
	 *
	 * ```ts
	 * const url = client.buildSignedURL(
	 * 	"https://example.imgix.net/image.png",
	 * 	{ width: 400 },
	 * );
	 * // => https://example.imgix.net/image.png?width=400&s=def3e221c3f4c4debda091b8e49420ea
	 * ```
	 *
	 * @example
	 *
	 * ```ts
	 * const url = client.buildSignedURL(
	 * 	"https://example.imgix.net/image.png?width=400",
	 * 	{ height: 300 },
	 * );
	 * // => https://example.imgix.net/image.png?width=400&height=300&s=f12c7c39333410c10c2930b57116a943
	 * ```
	 *
	 * @param url - Full absolute URL to the Imgix image.
	 * @param params - An object of Imgix URL API parameters.
	 *
	 * @returns `url` with the given Imgix URL API parameters applied.
	 *
	 * @see Imgix URL API reference: https://docs.imgix.com/apis/rendering
	 * @see Details on securing Imgix images: https://docs.imgix.com/setup/securing-images
	 */
	buildSignedURL(url: string, params: ImgixURLParams = {}): string {
		return buildSignedURL(url, this.secureURLToken, params);
	}

	/**
	 * Signs an Imgix image URL by appending a signature to the URL parameters.
	 * This locks the URL and its parameters to the signature to prevent URL tampering.
	 *
	 * @example
	 *
	 * ```ts
	 * const url = client.signURL(
	 * 	"https://example.imgix.net/image.png?width=400",
	 * );
	 * // => https://example.imgix.net/image.png?width=400&s=def3e221c3f4c4debda091b8e49420ea
	 * ```
	 *
	 * @param url - Full absolute URL to the Imgix image to sign.
	 *
	 * @returns `url` with a signature appended via an `s` URL parameter.
	 *
	 * @see Details on securing Imgix images: https://docs.imgix.com/setup/securing-images
	 */
	signURL(url: string): string {
		return signURL(url, this.secureURLToken);
	}
}
