import Image from 'next/image';
import ForkifyLogo from '@/public/images/forkify-logo.png';

export default function HeaderLogo() {
	return (
		<div>
			<Image src={ForkifyLogo} alt='Forkify' width={165} height={54} />
		</div>
	);
}
