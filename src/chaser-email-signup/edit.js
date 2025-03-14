import { useBlockProps } from '@wordpress/block-editor';
import './editor.scss';
import { mailIcon } from './icons';

export default function Edit({ attributes }) {
	const { heading, subtitle } = attributes;

	return (
		<div {...useBlockProps()}>
			<div className="email-signup email-signup--form-screen" style={{ display: 'block' }}>
				<div className="email-signup__heading">
					<span class="icon" dangerouslySetInnerHTML={{ __html: mailIcon }} />
					<span class="title">{heading}</span>
				</div>
				<p className="email-signup__subtitle">{subtitle}</p>
				<form className="email-signup__form">
					<input type="email" id="email" name="email" placeholder="tothe@moon.com" disabled />
				</form>
			</div>
		</div>
	);
}
