
/**
 * WordPress dependencies
 */
import { Path, SVG } from '@wordpress/components';

/**
 * Internal dependencies
 */
import { getIconClassName } from '../icon-class';

export default function AlignPullRight( { size = 20, className, ariaPressed, ...props } ) {
	const iconClass = getIconClassName( 'align-pull-right', className, ariaPressed );
	return (
		<SVG
			aria-hidden
			role="img"
			focusable="false"
			className={ iconClass }
			xmlns="http://www.w3.org/2000/svg"
			width={ size }
			height={ size }
			viewBox="0 0 20 20"
			{ ...props }
		>
			<Path d="M17 16V4h-6v12h6zM9 7H3v2h6V7zm0 4H3v2h6v-2z" />
		</SVG>
	);
}
