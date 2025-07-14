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
			default: 'Crypto Casino Deals in Your Inbox',
		},
		subtitle: {
			type: 'string',
			default: 'Sign up for our twice-weekly email promos and bonuses.',
		},
	},
	edit: Edit,
	save,
});
