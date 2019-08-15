
/**
 * WordPress dependencies
 */
import { Path, SVG } from '@wordpress/components';

/**
 * Internal dependencies
 */
import { getIconClassName } from '../icon-class';

export default function ShareAlt( { size = 20, className, ariaPressed, ...props } ) {
	const iconClass = getIconClassName( 'share-alt', className, ariaPressed );
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
			<Path d="M16.22 5.8c.47.69.29 1.62-.4 2.08-.69.47-1.62.29-2.08-.4-.16-.24-.35-.46-.55-.67-.21-.2-.43-.39-.67-.55s-.5-.3-.77-.41c-.27-.12-.55-.21-.84-.26-.59-.13-1.23-.13-1.82-.01-.29.06-.57.15-.84.27-.27.11-.53.25-.77.41s-.46.35-.66.55c-.21.21-.4.43-.56.67s-.3.5-.41.76c-.01.02-.01.03-.01.04-.1.24-.17.48-.23.72H1V6h2.66c.04-.07.07-.13.12-.2.27-.4.57-.77.91-1.11s.72-.65 1.11-.91c.4-.27.83-.51 1.28-.7s.93-.34 1.41-.43c.99-.21 2.03-.21 3.02 0 .48.09.96.24 1.41.43s.88.43 1.28.7c.39.26.77.57 1.11.91s.64.71.91 1.11zM12.5 10c0-1.38-1.12-2.5-2.5-2.5S7.5 8.62 7.5 10s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5zm-8.72 4.2c-.47-.69-.29-1.62.4-2.09.69-.46 1.62-.28 2.08.41.16.24.35.46.55.67.21.2.43.39.67.55s.5.3.77.41c.27.12.55.2.84.26.59.13 1.23.12 1.82 0 .29-.06.57-.14.84-.26.27-.11.53-.25.77-.41s.46-.35.66-.55c.21-.21.4-.44.56-.67.16-.25.3-.5.41-.76.01-.02.01-.03.01-.04.1-.24.17-.48.23-.72H19v3h-2.66c-.04.06-.07.13-.12.2-.27.4-.57.77-.91 1.11s-.72.65-1.11.91c-.4.27-.83.51-1.28.7s-.93.33-1.41.43c-.99.21-2.03.21-3.02 0-.48-.1-.96-.24-1.41-.43s-.88-.43-1.28-.7c-.39-.26-.77-.57-1.11-.91s-.64-.71-.91-1.11z" />
		</SVG>
	);
}
