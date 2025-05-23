import { Roboto } from 'next/font/google';
import SkillList from '@/src/ui/components/SkillList/SkillList/SkillList';

export const dynamic = 'force-dynamic';

const roboto = Roboto({
	display: 'swap',
	subsets: ['latin'],
	weight: ['400'],
});

export default async function Home() {
	return (
		<>
			<h1>
				Welcome to the Web Portfolio of <br />
				React/NextJS/Angular developer
				<br /> Jamie A Cameron
			</h1>
			<h2 className={roboto.className}>
				I am a fullstack javascript developer in the Guelph/KW area who
				specializes in developing responsive, lightweight websites & apps using
				Next.js and React. I build apps using a combination of server and client
				side rendering to maximize performance in the browser, regardless of
				device or environment.
			</h2>
			<h3>
				If you are looking for a brief summary of the skills I hang my hat on,
				look no further:
			</h3>
			<SkillList type='primary' />
		</>
	);
}
