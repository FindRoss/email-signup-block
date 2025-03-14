import { useBlockProps } from '@wordpress/block-editor';
import { mailIcon, successIcon } from './icons';


export default function save({ attributes }) {
	const { heading, subtitle } = attributes;

	return (
		<aside {...useBlockProps.save()}>
			<div className="email-signup email-signup--form-screen" style={{ display: 'block' }}>

				<div className="email-signup__heading">
					<span className="icon" dangerouslySetInnerHTML={{ __html: mailIcon }} />
					<span className="title">{heading}</span>
				</div>

				<p className="email-signup__subtitle">{subtitle}</p>

				<form className="email-signup__form">
					<label for="email" className="visually-hidden">Email address</label>
					<input type="email" id="email" name="email" placeholder="tothe@moon.com" required />
					<button type="submit" className="button button__primary">Sign up</button>
				</form>

			</div>

			<div className="email-signup email-signup--success-screen" style={{ display: 'none' }}>
				<h4 className="email-signup__heading">
					<div className="icon" dangerouslySetInnerHTML={{ __html: successIcon }} />
					<div className="title">Thanks for signing up!</div>
				</h4>
				<p className="email-signup__subtitle">Welcome to our community! Keep an eye out for our mailer twice a week, packed with the latest promotions, top bonuses, and special offers!</p>
			</div>
		</aside>
	);
}