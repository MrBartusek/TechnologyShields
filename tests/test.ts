import * as technologyShields from '../src/index';

describe('TechnologyShields', () =>{
	it('should generate URL', () => {
		expect(technologyShields.get('typescript'))
			.toBe('https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=fff');
	});

	describe('with url', () =>{
		it('should generate HTML', () => {
			expect(technologyShields.get('typescript', 'HTML'))
				.toBe('<a href="https://www.typescriptlang.org/"><img alt="TypeScript" src="https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=fff"/></a>');
		});

		it('should generate MARKDOWN', () => {
			expect(technologyShields.get('typescript', 'MARKDOWN'))
				.toBe('[![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=fff)](https://www.typescriptlang.org/)');
		});
	});

	describe('without url', () =>{
		it('should generate HTML', () => {
			expect(technologyShields.get('typescript', 'HTML', false))
				.toBe('<img alt="TypeScript" src="https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=fff"/>');
		});

		it('should generate MARKDOWN', () => {
			expect(technologyShields.get('typescript', 'MARKDOWN', false))
				.toBe('![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=fff)');
		});
	});

	it('should generate multiple icons', () => {
		expect(technologyShields.get(['typescript', 'typescript']))
			.toBe('https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=fff https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=fff');
	});

	it('should work with white background', () => {
		expect(technologyShields.get('zulip')).toContain('logoColor=333');
	});

	it('should throw on invalid type', () => {
		//eslint-disable-next-line
		//@ts-ignore
		expect(() => technologyShields.get('typescript', 'INVALID')).toThrow();
	});

	it('should use URL ovveride', () => {
		expect(technologyShields.get('dotnet', 'MARKDOWN')).toContain('https://dotnet.microsoft.com');
	});

	it('should return undefined on invalid icons', () => {
		expect(technologyShields.get('INVALID')).toBeUndefined();
	});

	it('should throw if invalid icon in list', () => {
		expect(() => technologyShields.get(['INVALID', 'INVALID'])).toThrow();
	});
});
