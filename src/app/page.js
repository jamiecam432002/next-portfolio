import SkillList from '@/src/ui/skills/skill-list';

export const dynamic = 'force-dynamic';

export default async function Home() {
	return (
		<main>
			<h1>
				Welcome to the Web Portfolio <br />
				of Fullstack Developer
				<br /> Jamie A Cameron
			</h1>
			<h2>
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
		</main>
	);
}
