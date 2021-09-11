import * as technologyShields from '../src/index';

describe('TechnologyShields', () =>{
	it('should generate URL', () => {
		expect(technologyShields.get('typescript'))
			.toBe('https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white');
	});

	it('should generate HTML', () => {
		expect(technologyShields.get('typescript', 'HTML'))
			.toBe('<a href="https://www.typescriptlang.org/"><img alt="TypeScript" src="https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white"/></a>');
	});

	it('should generate MARKDOWN', () => {
		expect(technologyShields.get('typescript', 'MARKDOWN'))
			.toBe('[![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)');
	});
});
