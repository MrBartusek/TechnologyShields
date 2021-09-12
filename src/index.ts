import * as simpleIcons from 'simple-icons';
import * as urls from './urls.json';

export const enum ExportType {
	URL = 'URL',
	HTML = 'HTML',
	MARKDOWN = 'MARKDOWN'
}

export function Get(name: string | Array<string>, type?: ExportType | 'URL' | 'HTML' | 'MARKDOWN', includeURL?: boolean): string | undefined {
	return get(name, type, includeURL);
}

export function get(name: string | Array<string>, type?: ExportType | 'URL' | 'HTML' | 'MARKDOWN', includeURL?: boolean): string | undefined {
	if(type == undefined) type = ExportType.MARKDOWN;
	if(includeURL == undefined) includeURL = true;
	if(typeof name === 'string') name = [name];

	const result = name.map((iconName) => {
		const icon = simpleIcons.get(iconName);
		if(icon === undefined) {
			if(name.length == 1) {
				return undefined;
			}
			else {
				throw new Error(`Invalid icon name "${iconName}"`);
			}
		}
		const brandName = icon.title.replace(/[ -]/g, '_');
		const iconColor = getIconColor(icon.hex);
		const shieldURL = `https://img.shields.io/badge/-${brandName}-${icon.hex}?style=flat-square&logo=${icon.slug}&logoColor=${iconColor}`;
		const url = serviceURL(icon);

		if(type == ExportType.URL) {
			return shieldURL;
		}
		else if(type == ExportType.HTML) {
			const htmlImage = `<img alt="${icon.title}" src="${shieldURL}"/>`;
			return includeURL ? `<a href="${url}">${htmlImage}</a>` : htmlImage;
		}
		else if(type == ExportType.MARKDOWN) {
			const markdownImage = `![${icon.title}](${shieldURL})`;
			return includeURL ? `[${markdownImage}](${url})` : markdownImage;
		}
		else {
			throw new Error('Invalid argument for type');
		}
	});
	if(result[0] === undefined) return undefined;
	return result.join(' ');
}

function serviceURL(icon: simpleIcons.SimpleIcon): string {
	if(Object.prototype.hasOwnProperty.call(urls.urls, icon.title)) {
		return (urls.urls as any)[icon.title];
	}
	else {
		return baseURL(icon.source);
	}
}

function baseURL(url: string): string {
	const path = url.split( '/' );
	return path[0] + '//' + path[2] + '/';
}

function getIconColor(background: string): string {
	const rgb = hexToRgb(background);
	const brightness = +((rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 255000).toFixed(2);
	return brightness <= 0.69 ? 'fff' : '333';
}

function hexToRgb(hex: string): Array<number> {
	const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	// istanbul ignore next (now way to test it really)
	if(result == null) throw new TypeError('Invalid HEX');
	return [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)];
}
