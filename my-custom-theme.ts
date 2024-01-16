import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
	name: 'my-custom-theme',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `system-ui`,
		'--theme-font-family-heading': `system-ui`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '9999px',
		'--theme-rounded-container': '8px',
		'--theme-border-base': '1px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '0 0 0',
		'--on-secondary': '0 0 0',
		'--on-tertiary': '255 255 255',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '0 0 0',
		'--on-surface': '255 255 255',
		// =~= Theme Colors  =~=
		// primary | #d7dadc
		'--color-primary-50': '249 249 250', // #f9f9fa
		'--color-primary-100': '247 248 248', // #f7f8f8
		'--color-primary-200': '245 246 246', // #f5f6f6
		'--color-primary-300': '239 240 241', // #eff0f1
		'--color-primary-400': '227 229 231', // #e3e5e7
		'--color-primary-500': '215 218 220', // #d7dadc
		'--color-primary-600': '194 196 198', // #c2c4c6
		'--color-primary-700': '161 164 165', // #a1a4a5
		'--color-primary-800': '129 131 132', // #818384
		'--color-primary-900': '105 107 108', // #696b6c
		// secondary | #CAEBF2
		'--color-secondary-50': '247 252 253', // #f7fcfd
		'--color-secondary-100': '244 251 252', // #f4fbfc
		'--color-secondary-200': '242 250 252', // #f2fafc
		'--color-secondary-300': '234 247 250', // #eaf7fa
		'--color-secondary-400': '218 241 246', // #daf1f6
		'--color-secondary-500': '202 235 242', // #CAEBF2
		'--color-secondary-600': '182 212 218', // #b6d4da
		'--color-secondary-700': '152 176 182', // #98b0b6
		'--color-secondary-800': '121 141 145', // #798d91
		'--color-secondary-900': '99 115 119', // #637377
		// tertiary | #A9A9A9
		'--color-tertiary-50': '242 242 242', // #f2f2f2
		'--color-tertiary-100': '238 238 238', // #eeeeee
		'--color-tertiary-200': '234 234 234', // #eaeaea
		'--color-tertiary-300': '221 221 221', // #dddddd
		'--color-tertiary-400': '195 195 195', // #c3c3c3
		'--color-tertiary-500': '169 169 169', // #A9A9A9
		'--color-tertiary-600': '152 152 152', // #989898
		'--color-tertiary-700': '127 127 127', // #7f7f7f
		'--color-tertiary-800': '101 101 101', // #656565
		'--color-tertiary-900': '83 83 83', // #535353
		// success | #FF3B3F
		'--color-success-50': '255 226 226', // #ffe2e2
		'--color-success-100': '255 216 217', // #ffd8d9
		'--color-success-200': '255 206 207', // #ffcecf
		'--color-success-300': '255 177 178', // #ffb1b2
		'--color-success-400': '255 118 121', // #ff7679
		'--color-success-500': '255 59 63', // #FF3B3F
		'--color-success-600': '230 53 57', // #e63539
		'--color-success-700': '191 44 47', // #bf2c2f
		'--color-success-800': '153 35 38', // #992326
		'--color-success-900': '125 29 31', // #7d1d1f
		// warning | #EFEFEF
		'--color-warning-50': '253 253 253', // #fdfdfd
		'--color-warning-100': '252 252 252', // #fcfcfc
		'--color-warning-200': '251 251 251', // #fbfbfb
		'--color-warning-300': '249 249 249', // #f9f9f9
		'--color-warning-400': '244 244 244', // #f4f4f4
		'--color-warning-500': '239 239 239', // #EFEFEF
		'--color-warning-600': '215 215 215', // #d7d7d7
		'--color-warning-700': '179 179 179', // #b3b3b3
		'--color-warning-800': '143 143 143', // #8f8f8f
		'--color-warning-900': '117 117 117', // #757575
		// error | #FF3B3F
		'--color-error-50': '255 226 226', // #ffe2e2
		'--color-error-100': '255 216 217', // #ffd8d9
		'--color-error-200': '255 206 207', // #ffcecf
		'--color-error-300': '255 177 178', // #ffb1b2
		'--color-error-400': '255 118 121', // #ff7679
		'--color-error-500': '255 59 63', // #FF3B3F
		'--color-error-600': '230 53 57', // #e63539
		'--color-error-700': '191 44 47', // #bf2c2f
		'--color-error-800': '153 35 38', // #992326
		'--color-error-900': '125 29 31', // #7d1d1f
		// surface | #EFEFEF
		'--color-surface-50': '253 253 253', // #fdfdfd
		'--color-surface-100': '252 252 252', // #fcfcfc
		'--color-surface-200': '251 251 251', // #fbfbfb
		'--color-surface-300': '249 249 249', // #f9f9f9
		'--color-surface-400': '244 244 244', // #f4f4f4
		'--color-surface-500': '239 239 239', // #EFEFEF
		'--color-surface-600': '215 215 215', // #d7d7d7
		'--color-surface-700': '179 179 179', // #b3b3b3
		'--color-surface-800': '143 143 143', // #8f8f8f
		'--color-surface-900': '117 117 117' // #757575
	}
};
