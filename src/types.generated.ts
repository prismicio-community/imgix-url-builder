// Types generated using `imgix-url-params` as a source.

type Ratio = `${number}:${number}`;
type HexColor = `#${string}`;
type ColorKeyword =
	| "aliceblue"
	| "antiquewhite"
	| "aqua"
	| "aquamarine"
	| "azure"
	| "beige"
	| "bisque"
	| "black"
	| "blanchedalmond"
	| "blue"
	| "blueviolet"
	| "brown"
	| "burlywood"
	| "cadetblue"
	| "chartreuse"
	| "chocolate"
	| "coral"
	| "cornflowerblue"
	| "cornsilk"
	| "crimson"
	| "cyan"
	| "darkblue"
	| "darkcyan"
	| "darkgoldenrod"
	| "darkgray"
	| "darkgreen"
	| "darkgrey"
	| "darkkhaki"
	| "darkmagenta"
	| "darkolivegreen"
	| "darkorange"
	| "darkorchid"
	| "darkred"
	| "darksalmon"
	| "darkseagreen"
	| "darkslateblue"
	| "darkslategray"
	| "darkslategrey"
	| "darkturquoise"
	| "darkviolet"
	| "deeppink"
	| "deepskyblue"
	| "dimgray"
	| "dimgrey"
	| "dodgerblue"
	| "firebrick"
	| "floralwhite"
	| "forestgreen"
	| "fuchsia"
	| "gainsboro"
	| "ghostwhite"
	| "gold"
	| "goldenrod"
	| "gray"
	| "green"
	| "greenyellow"
	| "grey"
	| "honeydew"
	| "hotpink"
	| "imgixorange"
	| "imgixblue"
	| "indianred"
	| "indigo"
	| "ivory"
	| "khaki"
	| "lavender"
	| "lavenderblush"
	| "lawngreen"
	| "lemonchiffon"
	| "lightblue"
	| "lightcoral"
	| "lightcyan"
	| "lightgoldenrodyellow"
	| "lightgray"
	| "lightgreen"
	| "lightgrey"
	| "lightpink"
	| "lightsalmon"
	| "lightseagreen"
	| "lightskyblue"
	| "lightslategray"
	| "lightslategrey"
	| "lightsteelblue"
	| "lightyellow"
	| "lime"
	| "limegreen"
	| "linen"
	| "magenta"
	| "maroon"
	| "mediumaquamarine"
	| "mediumblue"
	| "mediumorchid"
	| "mediumpurple"
	| "mediumseagreen"
	| "mediumslateblue"
	| "mediumspringgreen"
	| "mediumturquoise"
	| "mediumvioletred"
	| "midnightblue"
	| "mintcream"
	| "mistyrose"
	| "moccasin"
	| "navajowhite"
	| "navy"
	| "oldlace"
	| "olive"
	| "olivedrab"
	| "orange"
	| "orangered"
	| "orchid"
	| "palegoldenrod"
	| "palegreen"
	| "paleturquoise"
	| "palevioletred"
	| "papayawhip"
	| "peachpuff"
	| "peru"
	| "pink"
	| "plum"
	| "powderblue"
	| "purple"
	| "rebeccapurple"
	| "red"
	| "rosybrown"
	| "royalblue"
	| "saddlebrown"
	| "salmon"
	| "sandybrown"
	| "seagreen"
	| "seashell"
	| "sienna"
	| "silver"
	| "skyblue"
	| "slateblue"
	| "slategray"
	| "slategrey"
	| "snow"
	| "springgreen"
	| "steelblue"
	| "tan"
	| "teal"
	| "thistle"
	| "tomato"
	| "turquoise"
	| "violet"
	| "wheat"
	| "white"
	| "whitesmoke"
	| "yellow"
	| "yellowgreen";
type Font =
	| "serif"
	| "sans-serif"
	| "monospace"
	| "cursive"
	| "fantasy"
	| "serif,bold"
	| "sans-serif,bold"
	| "monospace,bold"
	| "fantasy,bold"
	| "serif,italic"
	| "sans-serif,italic"
	| "monospace,italic"
	| "serif,bold,italic"
	| "sans-serif,bold,italic"
	| "monospace,bold,italic"
	| "American Typewriter"
	| "American Typewriter Condensed"
	| "American Typewriter Condensed Light"
	| "American Typewriter Condensed,Bold"
	| "American Typewriter Light"
	| "American Typewriter,Bold"
	| "AndaleMono"
	| "Arial Narrow"
	| "Arial Narrow,Bold"
	| "Arial Narrow,BoldItalic"
	| "Arial Narrow,Italic"
	| "Arial Rounded MT,Bold"
	| "Arial UnicodeMS"
	| "Arial,BoldItalicMT"
	| "Arial,BoldMT"
	| "Arial,ItalicMT"
	| "Arial-Black"
	| "ArialMT"
	| "Athelas,Bold"
	| "Athelas,BoldItalic"
	| "Athelas,Italic"
	| "Athelas-Regular"
	| "Avenir Next Condensed Demi,Bold"
	| "Avenir Next Condensed Demi,BoldItalic"
	| "Avenir Next Condensed Heavy"
	| "Avenir Next Condensed Heavy,Italic"
	| "Avenir Next Condensed Medium"
	| "Avenir Next Condensed Medium,Italic"
	| "Avenir Next Condensed Regular"
	| "Avenir Next Condensed Ultra Light"
	| "Avenir Next Condensed Ultra Light,Italic"
	| "Avenir Next Condensed,Bold"
	| "Avenir Next Condensed,BoldItalic"
	| "Avenir Next Condensed,Italic"
	| "Avenir Next Demi,Bold"
	| "Avenir Next Demi,BoldItalic"
	| "Avenir Next Heavy"
	| "Avenir Next Heavy,Italic"
	| "Avenir Next Medium"
	| "Avenir Next Medium,Italic"
	| "Avenir Next Regular"
	| "Avenir Next Ultra Light"
	| "Avenir Next Ultra Light,Italic"
	| "Avenir Next,Bold"
	| "Avenir Next,BoldItalic"
	| "Avenir Next,Italic"
	| "Avenir-Black"
	| "Avenir-BlackOblique"
	| "Avenir-Book"
	| "Avenir-BookOblique"
	| "Avenir-Heavy"
	| "Avenir-HeavyOblique"
	| "Avenir-Light"
	| "Avenir-LightOblique"
	| "Avenir-Medium"
	| "Avenir-MediumOblique"
	| "Avenir-Oblique"
	| "Avenir-Roman"
	| "Baskerville"
	| "Baskerville,Bold"
	| "Baskerville,BoldItalic"
	| "Baskerville,Italic"
	| "BigCaslon-Medium"
	| "BrushScriptMT"
	| "Chalkboard"
	| "Chalkboard SE Light"
	| "Chalkboard SE Regular"
	| "Chalkboard SE,Bold"
	| "Chalkboard,Bold"
	| "Chalkduster"
	| "CharcoalCY"
	| "Charter Black,Italic"
	| "Charter,Bold"
	| "Charter,BoldItalic"
	| "Charter,Italic"
	| "Charter-Black"
	| "Charter-Roman"
	| "Cochin"
	| "Cochin,Bold"
	| "Cochin,BoldItalic"
	| "Cochin,Italic"
	| "Comic Sans MS,Bold"
	| "ComicSansMS"
	| "Copperplate"
	| "Copperplate,Bold"
	| "Copperplate-Light"
	| "Courier"
	| "Courier New,Bold"
	| "Courier New,BoldItalic"
	| "Courier New,Italic"
	| "Courier,Bold"
	| "Courier-Oblique"
	| "CourierNewPSMT"
	| "DIN Alternate,Bold"
	| "DIN Condensed,Bold"
	| "Didot"
	| "Didot,Bold"
	| "Didot,Italic"
	| "Futura Medium,Italic"
	| "Futura-CondensedMedium"
	| "Futura-Medium"
	| "Geneva"
	| "GenevaCyr"
	| "Georgia"
	| "Georgia,Bold"
	| "Georgia,BoldItalic"
	| "Georgia,Italic"
	| "Gill Sans"
	| "Gill Sans Light,Italic"
	| "Gill Sans,Bold"
	| "Gill Sans,BoldItalic"
	| "Gill Sans,UltraBold"
	| "GillSans,Italic"
	| "GillSans-Light"
	| "Helvetica"
	| "Helvetica CY,Bold"
	| "Helvetica Neue"
	| "Helvetica Neue Condensed Black"
	| "Helvetica Neue Condensed,Bold"
	| "Helvetica Neue Light"
	| "Helvetica Neue Light,Italic"
	| "Helvetica Neue Medium"
	| "Helvetica Neue Medium,Italic"
	| "Helvetica Neue Thin"
	| "Helvetica Neue Thin,Italic"
	| "Helvetica Neue UltraLight"
	| "Helvetica Neue UltraLight,Italic"
	| "Helvetica Neue,Bold"
	| "Helvetica Neue,BoldItalic"
	| "Helvetica Neue,Italic"
	| "Helvetica,Bold"
	| "Helvetica-Light"
	| "Helvetica-LightOblique"
	| "Helvetica-Oblique"
	| "HelveticaCY-Oblique"
	| "HelveticaCY-Plain"
	| "Herculanum"
	| "Hoefler Text Black,Italic"
	| "Hoefler Text,Italic"
	| "HoeflerText-Black"
	| "HoeflerText-Ornaments"
	| "HoeflerText-Regular"
	| "Impact"
	| "Iowan Old Style Black,Italic"
	| "Iowan Old Style,Bold"
	| "Iowan Old Style,BoldItalic"
	| "Iowan Old Style,Italic"
	| "IowanOldStyle-Black"
	| "IowanOldStyle-Roman"
	| "IowanOldStyle-Titling"
	| "Lucida Grande"
	| "Lucida Grande,Bold"
	| "Marion,Bold"
	| "Marion,Italic"
	| "Marion-Regular"
	| "Marker Felt Thin"
	| "Marker Felt Wide"
	| "Menlo,Bold"
	| "Menlo,BoldItalic"
	| "Menlo,Italic"
	| "Menlo-Regular"
	| "Monaco"
	| "Noteworthy,Bold"
	| "Noteworthy-Light"
	| "Optima,Bold"
	| "Optima,BoldItalic"
	| "Optima,Italic"
	| "Optima-ExtraBlack"
	| "Optima-Regular"
	| "PT Mono,Bold"
	| "PT Sans Caption,Bold"
	| "PT Sans Narrow,Bold"
	| "PT Sans,Bold"
	| "PT Sans,BoldItalic"
	| "PT Sans,Italic"
	| "PT Serif Caption,Italic"
	| "PT Serif,Bold"
	| "PT Serif,BoldItalic"
	| "PT Serif,Italic"
	| "PTMono-Regular"
	| "PTSans-Caption"
	| "PTSans-Narrow"
	| "PTSans-Regular"
	| "PTSerif-Caption"
	| "PTSerif-Regular"
	| "Palatino,Bold"
	| "Palatino,BoldItalic"
	| "Palatino,Italic"
	| "Palatino-Roman"
	| "Papyrus"
	| "Papyrus-Condensed"
	| "PlantagenetCherokee"
	| "STBaoli-SC-Regular"
	| "STYuanti-SC-Light"
	| "STYuanti-SC-Regular"
	| "SavoyeLetPlain"
	| "Seravek"
	| "Seravek ExtraLight, Italic"
	| "Seravek Light,Italic"
	| "Seravek Medium,Italic"
	| "Seravek,Bold"
	| "Seravek,BoldItalic"
	| "Seravek,Italic"
	| "Seravek-ExtraLight"
	| "Seravek-Light"
	| "Seravek-Medium"
	| "Skia-Regular"
	| "Skia-Regular_Black"
	| "Skia-Regular_Black-Condensed"
	| "Skia-Regular_Black-Extended"
	| "Skia-Regular_Condensed"
	| "Skia-Regular_Extended"
	| "Skia-Regular_Light"
	| "Skia-Regular_Light-Condensed"
	| "Skia-Regular_Light-Extended"
	| "Snell Roundhand,Bold"
	| "SnellRoundhand"
	| "SnellRoundhand-Black"
	| "Superclarendon Black,Italic"
	| "Superclarendon Light,Italic"
	| "Superclarendon,Bold"
	| "Superclarendon,BoldItalic"
	| "Superclarendon,Italic"
	| "Superclarendon-Black"
	| "Superclarendon-Light"
	| "Superclarendon-Regular"
	| "Tahoma"
	| "Tahoma,Bold"
	| "Times New Roman,Bold"
	| "Times New Roman,BoldItalic"
	| "Times New Roman,Italic"
	| "Times,Bold"
	| "Times,BoldItalic"
	| "Times,Italic"
	| "Times-Roman"
	| "TimesNewRomanPSMT"
	| "Trebuchet MS,Bold"
	| "Trebuchet MS,BoldItalic"
	| "Trebuchet MS,Italic"
	| "TrebuchetMS"
	| "Verdana"
	| "Verdana,Bold"
	| "Verdana,BoldItalic"
	| "Verdana,Italic"
	| "Waseem"
	| "WaseemLight"
	| "Webdings"
	| "Wingdings-Regular"
	| "Wingdings2"
	| "Wingdings3"
	| "Yuanti SC,Bold"
	| "YuppySC-Regular"
	| "Zapf Dingbats"
	| "Zapfino";

interface ImgixURLParams {
	/**
	 * Aspect ratio
	 *
	 * Specifies an aspect ratio to maintain when resizing and cropping the image
	 *
	 * @see https://docs.imgix.com/apis/url/size/ar
	 */
	ar?: Ratio;
	/**
	 * Automatic
	 *
	 * Applies automatic enhancements to images.
	 *
	 * @see https://docs.imgix.com/apis/url/auto
	 */
	auto?: ("enhance" | "format" | "redeye" | "compress" | "true")[];
	/**
	 * Background color
	 *
	 * Colors the background of padded and partially-transparent images.
	 *
	 * @default `"fff"`
	 *
	 * @see https://docs.imgix.com/apis/url/bg
	 */
	bg?: HexColor | ColorKeyword;
	/**
	 * Blend align
	 *
	 * Changes the blend alignment relative to the parent image.
	 *
	 * @see https://docs.imgix.com/apis/url/blending/blend-align
	 */
	blendAlign?: ("top" | "bottom" | "middle" | "left" | "right" | "center")[];
	/**
	 * Blend alpha
	 *
	 * Changes the alpha of the blend image.
	 *
	 * @default `100`
	 *
	 * @see https://docs.imgix.com/apis/url/blending/blend-alpha
	 */
	blendAlpha?: number;
	/**
	 * Blend color
	 *
	 * Specifies a color to use when applying the blend.
	 *
	 * @see https://docs.imgix.com/apis/url/blending/blend-color
	 */
	blendColor?: HexColor | ColorKeyword;
	/**
	 * Blend crop
	 *
	 * Specifies the type of crop for blend images.
	 *
	 * @see https://docs.imgix.com/apis/url/blending/blend-crop
	 */
	blendCrop?: ("top" | "bottom" | "left" | "right" | "faces")[];
	/**
	 * Blend fit
	 *
	 * Specifies the fit mode for blend images.
	 *
	 * @default `"clip"`
	 *
	 * @see https://docs.imgix.com/apis/url/blending/blend-fit
	 */
	blendFit?: "clamp" | "clip" | "crop" | "scale" | "max";
	/**
	 * Blend height
	 *
	 * Adjusts the height of the blend image.
	 *
	 * @see https://docs.imgix.com/apis/url/blending/blend-h
	 */
	blendH?: number | number;
	/**
	 * Blend mode
	 *
	 * Sets the blend mode for a blend image.
	 *
	 * @default `"overlay"`
	 *
	 * @see https://docs.imgix.com/apis/url/blending/blend-mode
	 */
	blendMode?:
		| "color"
		| "burn"
		| "dodge"
		| "darken"
		| "difference"
		| "exclusion"
		| "hardlight"
		| "hue"
		| "lighten"
		| "luminosity"
		| "multiply"
		| "overlay"
		| "saturation"
		| "screen"
		| "softlight"
		| "normal";
	/**
	 * Blend padding
	 *
	 * Applies padding to the blend image.
	 *
	 * @default `0`
	 *
	 * @see https://docs.imgix.com/apis/url/blending/blend-pad
	 */
	blendPad?: number;
	/**
	 * Blend size
	 *
	 * Adjusts the size of the blend image.
	 *
	 * @see https://docs.imgix.com/apis/url/blending/blend-size
	 */
	blendSize?: "inherit";
	/**
	 * Blend width
	 *
	 * Adjusts the width of the blend image.
	 *
	 * @see https://docs.imgix.com/apis/url/blending/blend-w
	 */
	blendW?: number | number;
	/**
	 * Blend x position
	 *
	 * Adjusts the x-offset of the blend image relative to its parent.
	 *
	 * @default `0`
	 *
	 * @see https://docs.imgix.com/apis/url/blending/blend-x
	 */
	blendX?: number;
	/**
	 * Blend y position
	 *
	 * Adjusts the y-offset of the blend image relative to its parent.
	 *
	 * @default `0`
	 *
	 * @see https://docs.imgix.com/apis/url/blending/blend-y
	 */
	blendY?: number;
	/**
	 * Blend
	 *
	 * Specifies the location of the blend image.
	 *
	 * @see https://docs.imgix.com/apis/url/blending/blend
	 */
	blend?: HexColor | ColorKeyword | string | string;
	/**
	 * Gaussian blur
	 *
	 * Applies a gaussian blur to an image.
	 *
	 * @default `0`
	 *
	 * @see https://docs.imgix.com/apis/url/stylize/blur
	 */
	blur?: number;
	/**
	 * Border bottom
	 *
	 * Sets bottom border of an image.
	 *
	 * @see https://docs.imgix.com/apis/url/border-and-padding/border-bottom
	 */
	borderBottom?: number;
	/**
	 * Border left
	 *
	 * Sets left border of an image.
	 *
	 * @see https://docs.imgix.com/apis/url/border-and-padding/border-left
	 */
	borderLeft?: number;
	/**
	 * Inner border radius
	 *
	 * Sets the inner radius of the image's border in pixels.
	 *
	 * @see https://docs.imgix.com/apis/url/border-and-padding/border-radius-inner
	 */
	borderRadiusInner?: number | [number, number, number, number];
	/**
	 * Outer border radius
	 *
	 * Sets the outer radius of the image's border in pixels.
	 *
	 * @see https://docs.imgix.com/apis/url/border-and-padding/border-radius
	 */
	borderRadius?: number | [number, number, number, number];
	/**
	 * Border right
	 *
	 * Sets right border of an image.
	 *
	 * @see https://docs.imgix.com/apis/url/border-and-padding/border-right
	 */
	borderRight?: number;
	/**
	 * Border top
	 *
	 * Sets top border of an image.
	 *
	 * @see https://docs.imgix.com/apis/url/border-and-padding/border-top
	 */
	borderTop?: number;
	/**
	 * Border size & color
	 *
	 * Applies a border to an image.
	 *
	 * @see https://docs.imgix.com/apis/url/border-and-padding/border
	 */
	border?: [number, HexColor | ColorKeyword];
	/**
	 * Brightness
	 *
	 * Adjusts the brightness of the source image.
	 *
	 * @default `0`
	 *
	 * @see https://docs.imgix.com/apis/url/adjustment/bri
	 */
	bri?: number;
	/**
	 * Client hints
	 *
	 * Sets one or more Client-Hints headers
	 *
	 * @see https://docs.imgix.com/apis/url/format/ch
	 */
	ch?: ("width" | "dpr" | "save-data")[];
	/**
	 * Chroma subsampling
	 *
	 * Specifies the output chroma subsampling rate.
	 *
	 * @default `420`
	 *
	 * @see https://docs.imgix.com/apis/url/format/chromasub
	 */
	chromasub?: 444 | 422 | 420;
	/**
	 * Color quantization
	 *
	 * Limits the number of unique colors in an image.
	 *
	 * @see https://docs.imgix.com/apis/url/format/colorquant
	 */
	colorquant?: number;
	/**
	 * Palette color count
	 *
	 * Specifies how many colors to include in a palette-extraction response.
	 *
	 * @default `6`
	 *
	 * @see https://docs.imgix.com/apis/url/color-palette/colors
	 */
	colors?: number;
	/**
	 * Contrast
	 *
	 * Adjusts the contrast of the source image.
	 *
	 * @default `0`
	 *
	 * @see https://docs.imgix.com/apis/url/adjustment/con
	 */
	con?: number;
	/**
	 * Mask corner radius
	 *
	 * Specifies the radius value for a rounded corner mask.
	 *
	 * @see https://docs.imgix.com/apis/url/mask/corner-radius
	 */
	cornerRadius?: number | [number, number, number, number];
	/**
	 * Crop mode
	 *
	 * Specifies how to crop an image.
	 *
	 * @see https://docs.imgix.com/apis/url/size/crop
	 */
	crop?: (
		| "top"
		| "bottom"
		| "left"
		| "right"
		| "faces"
		| "entropy"
		| "edges"
		| "focalpoint"
	)[];
	/**
	 * Color space
	 *
	 * Specifies the color space of the output image.
	 *
	 * @see https://docs.imgix.com/apis/url/format/cs
	 */
	cs?: "srgb" | "adobergb1998" | "tinysrgb" | "strip";
	/**
	 * Download
	 *
	 * Forces a URL to use send-file in its response.
	 *
	 * @see https://docs.imgix.com/apis/url/format/dl
	 */
	dl?: string;
	/**
	 * Dots per inch
	 *
	 * Sets the DPI value in the EXIF header.
	 *
	 * @see https://docs.imgix.com/apis/url/format/dpi
	 */
	dpi?: number;
	/**
	 * Device pixel ratio
	 *
	 * Adjusts the device-pixel ratio of the output image.
	 *
	 * @default `1`
	 *
	 * @see https://docs.imgix.com/apis/url/dpr
	 */
	dpr?: number;
	/**
	 * Duotone alpha
	 *
	 * Changes the alpha of the duotone effect atop the source image.
	 *
	 * @default `100`
	 *
	 * @see https://docs.imgix.com/apis/url/stylize/duotone-alpha
	 */
	duotoneAlpha?: number;
	/**
	 * Duotone
	 *
	 * Applies a duotone effect to the source image.
	 *
	 * @see https://docs.imgix.com/apis/url/stylize/duotone
	 */
	duotone?: [HexColor | ColorKeyword, HexColor | ColorKeyword];
	/**
	 * Exposure
	 *
	 * Adjusts the exposure of the output image.
	 *
	 * @default `0`
	 *
	 * @see https://docs.imgix.com/apis/url/adjustment/exp
	 */
	exp?: number;
	/**
	 * URL expiration timestamp
	 *
	 * A Unix timestamp specifying a UTC time. Requests made to this URL
	 * after that time will output a 404 status code.
	 *
	 * @see https://docs.imgix.com/apis/url/expires
	 */
	expires?: number;
	/**
	 * Face index
	 *
	 * Selects a face to crop to.
	 *
	 * @see https://docs.imgix.com/apis/url/face-detection/faceindex
	 */
	faceindex?: number;
	/**
	 * Face padding
	 *
	 * Adjusts padding around a selected face.
	 *
	 * @default `1`
	 *
	 * @see https://docs.imgix.com/apis/url/face-detection/facepad
	 */
	facepad?: number;
	/**
	 * Json face data
	 *
	 * Specifies that face data should be included in output when combined
	 * with `fm=json`.
	 *
	 * @see https://docs.imgix.com/apis/url/face-detection/faces
	 */
	faces?: 1;
	/**
	 * Fill color
	 *
	 * Sets the fill color for images with additional space created by the fit setting
	 *
	 * @default `"fff"`
	 *
	 * @see https://docs.imgix.com/apis/url/fill/fill-color
	 */
	fillColor?: HexColor | ColorKeyword;
	/**
	 * Fill mode
	 *
	 * Determines how to fill in additional space created by the fit setting
	 *
	 * @see https://docs.imgix.com/apis/url/fill/fill
	 */
	fill?: "solid" | "blur";
	/**
	 * Resize fit mode
	 *
	 * Specifies how to map the source image to the output image dimensions.
	 *
	 * @default `"clip"`
	 *
	 * @see https://docs.imgix.com/apis/url/size/fit
	 */
	fit?:
		| "clamp"
		| "clip"
		| "crop"
		| "facearea"
		| "fill"
		| "fillmax"
		| "max"
		| "min"
		| "scale";
	/**
	 * Flip axis
	 *
	 * Flips an image on a specified axis.
	 *
	 * @see https://docs.imgix.com/apis/url/rotation/flip
	 */
	flip?: "h" | "v" | "hv";
	/**
	 * Output format
	 *
	 * Changes the format of the output image.
	 *
	 * @see https://docs.imgix.com/apis/url/format/fm
	 */
	fm?:
		| "gif"
		| "jpg"
		| "jp2"
		| "json"
		| "jxr"
		| "pjpg"
		| "mp4"
		| "png"
		| "png8"
		| "png32"
		| "webp"
		| "webm"
		| "blurhash"
		| "avif";
	/**
	 * Focal point debug
	 *
	 * Displays crosshairs identifying the location of the set focal point
	 *
	 * @default `false`
	 *
	 * @see https://docs.imgix.com/apis/url/focalpoint-crop/fp-debug
	 */
	fpDebug?: boolean;
	/**
	 * Focal point x position
	 *
	 * Sets the relative horizontal value for the focal point of an image
	 *
	 * @see https://docs.imgix.com/apis/url/focalpoint-crop/fp-x
	 */
	fpX?: number;
	/**
	 * Focal point y position
	 *
	 * Sets the relative vertical value for the focal point of an image
	 *
	 * @see https://docs.imgix.com/apis/url/focalpoint-crop/fp-y
	 */
	fpY?: number;
	/**
	 * Focal point zoom
	 *
	 * Sets the relative zoom value for the focal point of an image
	 *
	 * @see https://docs.imgix.com/apis/url/focalpoint-crop/fp-z
	 */
	fpZ?: number;
	/**
	 * Gamma
	 *
	 * Adjusts the gamma of the source image.
	 *
	 * @default `0`
	 *
	 * @see https://docs.imgix.com/apis/url/adjustment/gam
	 */
	gam?: number;
	/**
	 * Grid colors
	 *
	 * Sets grid colors for the transparency checkerboard grid.
	 */
	gridColors?: [HexColor | ColorKeyword, HexColor | ColorKeyword];
	/**
	 * Grid size
	 *
	 * Sets grid size for the transparency checkerboard grid.
	 */
	gridSize?: number;
	/**
	 * Image height
	 *
	 * Adjusts the height of the output image.
	 *
	 * @see https://docs.imgix.com/apis/url/size/h
	 */
	h?: number | number;
	/**
	 * Highlight
	 *
	 * Adjusts the highlights of the source image.
	 *
	 * @default `0`
	 *
	 * @see https://docs.imgix.com/apis/url/adjustment/high
	 */
	high?: number;
	/**
	 * Halftone
	 *
	 * Applies a half-tone effect to the source image.
	 *
	 * @default `0`
	 *
	 * @see https://docs.imgix.com/apis/url/stylize/htn
	 */
	htn?: number;
	/**
	 * Hue shift
	 *
	 * Adjusts the hue of the source image.
	 *
	 * @default `0`
	 *
	 * @see https://docs.imgix.com/apis/url/adjustment/hue
	 */
	hue?: number;
	/**
	 * Invert
	 *
	 * Inverts the colors on the source image.
	 *
	 * @default `false`
	 *
	 * @see https://docs.imgix.com/apis/url/adjustment/invert
	 */
	invert?: boolean;
	/**
	 * IPTC Passthrough
	 *
	 * Determine if IPTC data should be passed for JPEG images.
	 */
	iptc?: "allow" | "block";
	/**
	 * Lossless compression
	 *
	 * Specifies that the output image should be a lossless variant.
	 *
	 * @default `false`
	 *
	 * @see https://docs.imgix.com/apis/url/format/lossless
	 */
	lossless?: boolean;
	/**
	 * Watermark alignment mode
	 *
	 * Changes the watermark alignment relative to the parent image.
	 *
	 * @see https://docs.imgix.com/apis/url/watermark/mark-align
	 */
	markAlign?: ("top" | "middle" | "bottom" | "left" | "center" | "right")[];
	/**
	 * Watermark alpha
	 *
	 * Changes the alpha of the watermark image.
	 *
	 * @default `100`
	 *
	 * @see https://docs.imgix.com/apis/url/watermark/mark-alpha
	 */
	markAlpha?: number;
	/**
	 * Watermark base url
	 *
	 * Changes base URL of the watermark image.
	 *
	 * @see https://docs.imgix.com/apis/url/watermark/mark-base
	 */
	markBase?: string | string;
	/**
	 * Watermark fit mode
	 *
	 * Specifies the fit mode for watermark images.
	 *
	 * @default `"clip"`
	 *
	 * @see https://docs.imgix.com/apis/url/watermark/mark-fit
	 */
	markFit?: "clip" | "crop" | "fill" | "max" | "scale";
	/**
	 * Watermark height
	 *
	 * Adjusts the height of the watermark image.
	 *
	 * @see https://docs.imgix.com/apis/url/watermark/mark-h
	 */
	markH?: number | number;
	/**
	 * Watermark padding
	 *
	 * Applies padding to the watermark image.
	 *
	 * @default `5`
	 *
	 * @see https://docs.imgix.com/apis/url/watermark/mark-pad
	 */
	markPad?: number;
	/**
	 * Watermark rotation
	 *
	 * Rotates a watermark or tiled watermarks by a specified number of degrees.
	 *
	 * @default `0`
	 *
	 * @see https://docs.imgix.com/apis/url/watermark/mark-rot
	 */
	markRot?: number;
	/**
	 * Watermark scale
	 *
	 * Adjusts the scale of the watermark image.
	 *
	 * @see https://docs.imgix.com/apis/url/watermark/mark-scale
	 */
	markScale?: number;
	/**
	 * Watermark tile
	 *
	 * Adds tiled watermark.
	 *
	 * @see https://docs.imgix.com/apis/url/watermark/mark-tile
	 */
	markTile?: "grid";
	/**
	 * Watermark width
	 *
	 * Adjusts the width of the watermark image.
	 *
	 * @see https://docs.imgix.com/apis/url/watermark/mark-w
	 */
	markW?: number | number;
	/**
	 * Watermark x position
	 *
	 * Adjusts the x-offset of the watermark image relative to its parent.
	 *
	 * @see https://docs.imgix.com/apis/url/watermark/mark-x
	 */
	markX?: number;
	/**
	 * Watermark y position
	 *
	 * Adjusts the y-offset of the watermark image relative to its parent.
	 *
	 * @see https://docs.imgix.com/apis/url/watermark/mark-y
	 */
	markY?: number;
	/**
	 * Watermark image url
	 *
	 * Specifies the location of the watermark image.
	 *
	 * @see https://docs.imgix.com/apis/url/watermark/mark
	 */
	mark?: string | string;
	/**
	 * Mask background color
	 *
	 * Colors the background of the transparent mask area of images
	 *
	 * @default `"fff"`
	 *
	 * @see https://docs.imgix.com/apis/url/mask/mask-bg
	 */
	maskBg?: HexColor | ColorKeyword;
	/**
	 * Mask type
	 *
	 * Defines the type of mask and specifies the URL if that type is selected.
	 *
	 * @see https://docs.imgix.com/apis/url/mask
	 */
	mask?: "ellipse" | "corners" | string | string;
	/**
	 * Maximum height
	 *
	 * Specifies the maximum height of the output image in pixels.
	 *
	 * @see https://docs.imgix.com/apis/url/size/max-height
	 */
	maxH?: number;
	/**
	 * Maximum width
	 *
	 * Specifies the maximum width of the output image in pixels.
	 *
	 * @see https://docs.imgix.com/apis/url/size/max-width
	 */
	maxW?: number;
	/**
	 * Minimum height
	 *
	 * Specifies the minimum height of the output image in pixels.
	 *
	 * @see https://docs.imgix.com/apis/url/size/min-height
	 */
	minH?: number;
	/**
	 * Minimum width
	 *
	 * Specifies the minimum width of the output image in pixels.
	 *
	 * @see https://docs.imgix.com/apis/url/size/min-width
	 */
	minW?: number;
	/**
	 * Monochrome
	 *
	 * Applies a monochrome effect to the source image.
	 *
	 * @see https://docs.imgix.com/apis/url/stylize/monochrome
	 */
	monochrome?: HexColor | ColorKeyword;
	/**
	 * Noise reduction bound
	 *
	 * Reduces the noise in an image.
	 *
	 * @default `20`
	 *
	 * @see https://docs.imgix.com/apis/url/noise-reduction/nr
	 */
	nr?: number;
	/**
	 * Noise reduction sharpen
	 *
	 * Provides a threshold by which to sharpen an image.
	 *
	 * @default `20`
	 *
	 * @see https://docs.imgix.com/apis/url/noise-reduction/nrs
	 */
	nrs?: number;
	/**
	 * Orientation
	 *
	 * Changes the image orientation.
	 *
	 * @see https://docs.imgix.com/apis/url/rotation/orient
	 */
	orient?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 90 | 180 | 270;
	/**
	 * Padding bottom
	 *
	 * Sets bottom padding of an image.
	 *
	 * @see https://docs.imgix.com/apis/url/border-and-padding/pad-bottom
	 */
	padBottom?: number;
	/**
	 * Padding left
	 *
	 * Sets left padding of an image.
	 *
	 * @see https://docs.imgix.com/apis/url/border-and-padding/pad-left
	 */
	padLeft?: number;
	/**
	 * Padding right
	 *
	 * Sets right padding of an image.
	 *
	 * @see https://docs.imgix.com/apis/url/border-and-padding/pad-right
	 */
	padRight?: number;
	/**
	 * Padding top
	 *
	 * Sets top padding of an image.
	 *
	 * @see https://docs.imgix.com/apis/url/border-and-padding/pad-top
	 */
	padTop?: number;
	/**
	 * Padding
	 *
	 * Pads an image.
	 *
	 * @default `0`
	 *
	 * @see https://docs.imgix.com/apis/url/border-and-padding/pad
	 */
	pad?: number;
	/**
	 * Pdf page number
	 *
	 * Selects a page from a PDF for display.
	 *
	 * @default `1`
	 *
	 * @see https://docs.imgix.com/apis/url/pdf/page
	 */
	page?: number;
	/**
	 * Color palette extraction
	 *
	 * Specifies an output format for palette-extraction.
	 *
	 * @see https://docs.imgix.com/apis/url/color-palette/palette
	 */
	palette?: "css" | "json";
	/**
	 * Pdf annotation
	 *
	 * Enables or disables PDF annotation.
	 *
	 * @default `true`
	 *
	 * @see https://docs.imgix.com/apis/url/pdf/pdf-annotation
	 */
	pdfAnnotation?: boolean;
	/**
	 * Css prefix
	 *
	 * Specifies a CSS prefix for all classes in palette-extraction.
	 *
	 * @default `"image"`
	 *
	 * @see https://docs.imgix.com/apis/url/color-palette/prefix
	 */
	prefix?: string;
	/**
	 * Pixellate
	 *
	 * Applies a pixelation effect to an image.
	 *
	 * @default `0`
	 *
	 * @see https://docs.imgix.com/apis/url/stylize/px
	 */
	px?: number;
	/**
	 * Output quality
	 *
	 * Adjusts the quality of an output image.
	 *
	 * @default `75`
	 *
	 * @see https://docs.imgix.com/apis/url/format/q
	 */
	q?: number;
	/**
	 * Source rectangle region
	 *
	 * Crops an image to a specified rectangle.
	 *
	 * @see https://docs.imgix.com/apis/url/size/rect
	 */
	rect?: [
		number | "left" | "center" | "right" | number,
		number | "top" | "middle" | "bottom" | number,
		number,
		number,
	];
	/**
	 * Rotation
	 *
	 * Rotates an image by a specified number of degrees.
	 *
	 * @default `0`
	 *
	 * @see https://docs.imgix.com/apis/url/rotation/rot
	 */
	rot?: number;
	/**
	 * Saturation
	 *
	 * Adjusts the saturation of an image.
	 *
	 * @default `0`
	 *
	 * @see https://docs.imgix.com/apis/url/adjustment/sat
	 */
	sat?: number;
	/**
	 * Sepia tone
	 *
	 * Applies a sepia effect to an image.
	 *
	 * @default `0`
	 *
	 * @see https://docs.imgix.com/apis/url/stylize/sepia
	 */
	sepia?: number;
	/**
	 * Shadow
	 *
	 * Adjusts the highlights of the source image.
	 *
	 * @default `0`
	 *
	 * @see https://docs.imgix.com/apis/url/adjustment/shad
	 */
	shad?: number;
	/**
	 * Sharpen
	 *
	 * Adjusts the sharpness of the source image.
	 *
	 * @default `0`
	 *
	 * @see https://docs.imgix.com/apis/url/adjustment/sharp
	 */
	sharp?: number;
	/**
	 * Transparency
	 *
	 * Adds checkerboard behind images which support transparency.
	 *
	 * @see https://docs.imgix.com/apis/url/fill/transparency
	 */
	transparency?: "grid";
	/**
	 * Trim color
	 *
	 * Specifies a trim color on a trim operation.
	 *
	 * @see https://docs.imgix.com/apis/url/trim/trim-color
	 */
	trimColor?: HexColor | ColorKeyword;
	/**
	 * Trim mean difference
	 *
	 * Specifies the mean difference on a trim operation.
	 *
	 * @default `11`
	 *
	 * @see https://docs.imgix.com/apis/url/trim/trim-md
	 */
	trimMd?: number;
	/**
	 * Trim padding
	 *
	 * Pads the area of the source image before trimming.
	 *
	 * @default `0`
	 *
	 * @see https://docs.imgix.com/apis/url/trim/trim-pad
	 */
	trimPad?: number;
	/**
	 * Trim standard deviation
	 *
	 * Specifies the standard deviation on a trim operation.
	 *
	 * @default `10`
	 *
	 * @see https://docs.imgix.com/apis/url/trim/trim-sd
	 */
	trimSd?: number;
	/**
	 * Trim tolerance
	 *
	 * Specifies the tolerance on a trim operation.
	 *
	 * @default `0`
	 *
	 * @see https://docs.imgix.com/apis/url/trim/trim-tol
	 */
	trimTol?: number;
	/**
	 * Trim image
	 *
	 * Trims the source image.
	 *
	 * @see https://docs.imgix.com/apis/url/trim/trim
	 */
	trim?: "auto" | "color";
	/**
	 * Text align
	 *
	 * Sets the vertical and horizontal alignment of rendered text relative
	 * to the base image.
	 *
	 * @see https://docs.imgix.com/apis/url/text/txt-align
	 */
	txtAlign?: ("top" | "middle" | "bottom" | "left" | "center" | "right")[];
	/**
	 * Text clipping mode
	 *
	 * Sets the clipping properties of rendered text.
	 *
	 * @default `"end"`
	 *
	 * @see https://docs.imgix.com/apis/url/text/txt-clip
	 */
	txtClip?: ("start" | "middle" | "end" | "ellipsis")[];
	/**
	 * Text color
	 *
	 * Specifies the color of rendered text.
	 *
	 * @see https://docs.imgix.com/apis/url/text/txt-color
	 */
	txtColor?: HexColor | ColorKeyword;
	/**
	 * Text fit mode
	 *
	 * Specifies the fit approach for rendered text.
	 *
	 * @see https://docs.imgix.com/apis/url/text/txt-fit
	 */
	txtFit?: "max";
	/**
	 * Text font
	 *
	 * Selects a font for rendered text.
	 *
	 * @see https://docs.imgix.com/apis/url/text/txt-font
	 */
	txtFont?: Font;
	/**
	 * Text leading
	 *
	 * Sets the leading (line spacing) for rendered text. Only works on the
	 * multi-line text endpoint.
	 *
	 * @default `0`
	 *
	 * @see https://docs.imgix.com/apis/url/typesetting/txt-lead
	 */
	txtLead?: number;
	/**
	 * Text ligatures
	 *
	 * Controls the level of ligature substitution
	 *
	 * @see https://docs.imgix.com/apis/url/text/txt-lig
	 */
	txtLig?: 0 | 1 | 2;
	/**
	 * Text outline color
	 *
	 * Specifies a text outline color.
	 *
	 * @default `"fff"`
	 *
	 * @see https://docs.imgix.com/apis/url/text/txt-line-color
	 */
	txtLineColor?: HexColor | ColorKeyword;
	/**
	 * Text outline
	 *
	 * Outlines the rendered text with a specified color.
	 *
	 * @default `0`
	 *
	 * @see https://docs.imgix.com/apis/url/text/txt-line
	 */
	txtLine?: number;
	/**
	 * Text padding
	 *
	 * Specifies the padding (in device-independent pixels) between a
	 * textbox and the edges of the base image.
	 *
	 * @see https://docs.imgix.com/apis/url/text/txt-pad
	 */
	txtPad?: number;
	/**
	 * Text shadow
	 *
	 * Applies a shadow to rendered text.
	 *
	 * @default `0`
	 *
	 * @see https://docs.imgix.com/apis/url/text/txt-shad
	 */
	txtShad?: number;
	/**
	 * Text font size
	 *
	 * Sets the font size of rendered text.
	 *
	 * @default `12`
	 *
	 * @see https://docs.imgix.com/apis/url/text/txt-size
	 */
	txtSize?: number;
	/**
	 * Text tracking
	 *
	 * Sets the tracking (letter spacing) for rendered text. Only works on
	 * the multi-line text endpoint.
	 *
	 * @default `0`
	 *
	 * @see https://docs.imgix.com/apis/url/typesetting/txt-track
	 */
	txtTrack?: number;
	/**
	 * Text width
	 *
	 * Sets the width of rendered text.
	 *
	 * @see https://docs.imgix.com/apis/url/text/txt-width
	 */
	txtWidth?: number;
	/**
	 * Text string
	 *
	 * Sets the text string to render.
	 *
	 * @see https://docs.imgix.com/apis/url/text/txt
	 */
	txt?: string;
	/**
	 * Unsharp mask
	 *
	 * Sharpens the source image using an unsharp mask.
	 *
	 * @default `0`
	 *
	 * @see https://docs.imgix.com/apis/url/adjustment/usm
	 */
	usm?: number;
	/**
	 * Unsharp mask radius
	 *
	 * Specifies the radius for an unsharp mask operation.
	 *
	 * @default `2.5`
	 *
	 * @see https://docs.imgix.com/apis/url/adjustment/usmrad
	 */
	usmrad?: number;
	/**
	 * Vibrance
	 *
	 * Adjusts the vibrance of an image.
	 *
	 * @default `0`
	 *
	 * @see https://docs.imgix.com/apis/url/adjustment/vib
	 */
	vib?: number;
	/**
	 * Image width
	 *
	 * Adjusts the width of the output image.
	 *
	 * @see https://docs.imgix.com/apis/url/size/w
	 */
	w?: number | number;
}
