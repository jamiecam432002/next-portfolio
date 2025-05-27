import './globals.css';
import Header from '@/src/ui/header/header';
import { getAuthenticatedAppForUser } from '../lib/firebase/serverApp';
import { lato } from '@/src/ui/fonts';
export const dynamic = 'force-dynamic';

export const metadata = {
	title: {
		template: '%s | Jamie A Cameron',
		default: 'The web portfolio of Jamie A Cameron',
	},
	description:
		'The online web portfolio of full-stack, React/Next developer Jamie A Cameron',
};

export default async function RootLayout({ children }) {
	const { currentUser } = await getAuthenticatedAppForUser();

	return (
		<html lang='en'>
			<body className={lato.className}>
				<div className='container'>
					<Header initialUser={currentUser?.toJSON()} />
					<main>{children}</main>
				</div>
			</body>
		</html>
	);
}
