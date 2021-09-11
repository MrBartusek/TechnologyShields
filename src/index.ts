import * as simpleIcons from 'simple-icons';
import * as urls from './urls.json';

export const enum ExportType {
	URL = 'URL',
	HTML = 'HTML',
	MARKDOWN = 'MARKDOWN'
}

export function get(name: string | Array<string>, type?: ExportType | 'URL' | 'HTML' | 'MARKDOWN', includeURL?: boolean): string | undefined {
	if(type == undefined) type = ExportType.URL;
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
		const shieldURL = `https://img.shields.io/badge/-${icon.title.replace(/ /g, '_')}-${icon.hex}?style=flat-square&logo=${icon.slug}&logoColor=white`;
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
