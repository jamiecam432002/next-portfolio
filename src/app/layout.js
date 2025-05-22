import { Lato } from 'next/font/google';
import './globals.css';
import Header from '@/src/ui/components/Header/Header';
import { getAuthenticatedAppForUser } from '../lib/firebase/serverApp';
export const dynamic = 'force-dynamic';

const lato = Lato({
	display: 'swap',
	subsets: ['latin'],
	weight: ['400', '700'],
});

export const metadata = {
	title: {
		template: '%s | James A Cameron',
		default: 'The web portfolio of James A Cameron',
	},
	description:
		'The online web portfolio of full-stack, React/Next developer James A Cameron',
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
