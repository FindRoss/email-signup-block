import { registerBlockType } from '@wordpress/blocks';

import './style.scss';

import Edit from './edit';
import save from './save';
import metadata from './block.json';

registerBlockType(metadata.name, {
	title: 'Email Signup',
	category: 'widgets',
	attributes: {
		heading: {
			type: 'string',
			default: 'Sign up for our newsletter',
		},
		subtitle: {
			type: 'string',
			default: 'Get the latest promotions, top bonuses, and special offers - delivered straight to your inbox twice a week.',
		},
	},
	edit: Edit,
	save,
});
