'use strict';
globalThis.ngJest = {
	skipNgcc: true
};
module.exports = {
 displayName: {
    name: 'obliqueTest',
    color: 'cyan'
  },

  preset: 'jest-preset-angular',
	setupFilesAfterEnv: ['<rootDir>/setupJest.ts'],
	collectCoverage: true,
	reporters: [
		'default',
		[
			'jest-html-reporters',
			{
				publicPath: './jest-report'
			}
		]
	]
};
