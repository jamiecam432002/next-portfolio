import './globals.css';
import Header from '@/src/ui/header/header';
import { getAuthenticatedAppForUser } from '../lib/firebase/serverApp';
import { lato } from '@/src/ui/fonts';
import { GoogleAnalytics } from '@next/third-parties/google';
export const dynamic = 'force-dynamic';

export const metadata = {
	title: {
		template: '%s | Jamie A Cameron',
		default: 'The web portfolio of fullstack developer Jamie A Cameron',
	},
	description:
		'The online web portfolio of full-stack, React/Next.js developer Jamie A Cameron',
};

export default async function RootLayout({ children }) {
	const { currentUser } = await getAuthenticatedAppForUser();

	return (
		<html lang='en'>
			<body className={lato.className}>
				<div className='container'>
					<Header initialUser={currentUser?.toJSON()} />
					{children}
				</div>

				<GoogleAnalytics gaId='G-0Y8154W05N' />
			</body>
		</html>
	);
}
