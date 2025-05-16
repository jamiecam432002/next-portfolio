import { Lato } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header/Header';

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

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={lato.className}>
				<div className='container'>
					<Header />
					<main>{children}</main>
				</div>
			</body>
		</html>
	);
}
